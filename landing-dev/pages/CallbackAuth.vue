<template>
	<div
		id="callback-auth"
		class="d-flex justify-content-center align-items-center vh-100"
	>
		<div
			v-if="!isAuthFailed"
			class="d-flex justify-content-center align-items-center vh-100"
		>
			<img
				:src="cdnHost + 'themes/static/loading.svg'"
				alt="Loading..."
				style="max-width: 100px"
			/>
		</div>
		<div v-else>
			<h2 class="mb-3">Login Gagal</h2>
			<p>
				Tunggu sebentar dan mohon melakukan login ulang.<br />Tekan
				tombol di bawah ini jika halaman tidak otomatis kembali ke
				beranda.
			</p>
			<b-button @click="goHome" variant="primary"
				>Kembali ke beranda</b-button
			>
		</div>
	</div>
</template>

<script>
import { mapState } from "vuex";

export default {
	layout: "blank",

	computed: {
		...mapState({
			userState: (state) => state.Users,
		}),
	},

	data() {
		return {
			oldToken: null,
			newToken: this.$route.query.authToken || "",

			isAuthFailed: false,
			cdnHost: process.env.cdnHost
		};
	},

	mounted() {
		this.oldToken = localStorage.getItem("access_token")

		if (this.oldToken != null && this.oldToken != "undefined") {
			if (this.oldToken != this.newToken) {
				return this.saveToken();
			}

			window.open(window.location.origin, "_self");
		}

		return this.saveToken();
	},

	methods: {
		goHome() {
			const alkademiAuth = process.env.alkademiAuth + "/logout";
			const redirectTo = "?redirectTo=" + window.location.origin;
			const lmsId = "&lmsId=" + localStorage.getItem("lmsId");

			const url = alkademiAuth + redirectTo + lmsId;

			window.open(url, "_self");
		},
		async saveToken() {

			localStorage.clear();
			localStorage.setItem("access_token", this.newToken);

			await this.$store.dispatch("Sass/lmsId", { version: "v0" });

			setTimeout(() => {
				this.getUserDetail();
			}, 1000);
		},
		async getUserDetail() {
			await this.$store.dispatch("Users/fetchDetailUser");

			if (!this.userState.status) {
				this.isAuthFailed = true;
				localStorage.clear();
				await this.$store.dispatch("Sass/lmsId", { version: "v0" });
				setTimeout(() => {
					this.goHome();
				}, 5000);
			} else {
				const user = {
					id: this.userState.detail_auth.id,
					email: this.userState.detail_auth.email,
					name: this.userState.detail_auth.name,
					kind: this.userState.detail_auth.kind,
				};

				const params = {
					kind: user.kind,
				};

				localStorage.setItem("user", JSON.stringify(user));

				await this.$store.dispatch("Sidebar/setSidebarRole", params);

				window.open(window.location.origin + "/dashboard", "_self");
			}
		},
	},
};
</script>