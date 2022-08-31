<template>
    <header class="wrapper bg-light" v-if="path != '/pesilat'">
        <nav class="navbar navbar-expand-lg classic transparent navbar-light">
            <div class="container flex-lg-row flex-nowrap align-items-center">
                <div class="navbar-brand">
                    <a href="/">
                        <img v-if="settings.logo_dark != null" :src="settings.logo_dark" alt="" class="image-logo" />
                        <h1 v-else>{{settings.title}}</h1>
                    </a>
                </div>
                <div class="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
                    <div class="offcanvas-header d-lg-none d-xl-none">
                        <a href="/">
                            <img v-if="settings.logo_dark != null" :src="settings.logo_dark" alt="" class="image-logo" />
                            <h1 v-else>{{settings.title}}</h1>
                        </a>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body ms-lg-auto d-flex flex-column">
                        <ul class="navbar-nav">
                            <li class="nav-item dropdown">
                                <nuxt-link class="nav-link" to="/">Beranda</nuxt-link>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link" href="/about">Tentang Kami</a>
                            </li>
                            <li class="nav-item dropdown">
                                <nuxt-link class="nav-link" to="/curriculum">Program</nuxt-link>
                            </li>
                            <!-- <li class="nav-item dropdown">
                                <a class="nav-link " href="#" >Mentor</a>
                            </li> -->
                            <li class="nav-item dropdown">
                                <nuxt-link class="nav-link" to="/news">Berita</nuxt-link>
                            </li>
                            <li class="nav-item dropdown">
                                <nuxt-link class="nav-link" to="/gallery">Galeri</nuxt-link>
                            </li>
                            <li class="nav-item d-flex align-items-center">
                                <button
                                    v-if="!isLoaded"
                                    class="btn btn-sm btn-primary rounded-pill"
                                >
                                    <b-spinner class="align-middle"></b-spinner>
                                </button>
                                <a
                                    v-else
                                    :href="urlAction"
                                    class="btn btn-sm btn-primary rounded-pill"
                                >
                                    {{ isAuthenticated ? "Dashboard" : "Masuk" }}
                                </a>
                            </li>
                        </ul>
                        <!-- /.navbar-nav -->
                        <div class="d-lg-none mt-auto pt-6 pb-6 order-4">
                            <a
                                href="mailto:hello@alkademi.id"
                                class="link-inverse"
                                >hello@alkademi.id</a
                            >
                            <br />
                            (022) 2504168 <br />
                            <nav class="nav social social-white mt-4">
                                <a href="#"><i class="uil uil-twitter"></i></a>
                                <a href="#"
                                    ><i class="uil uil-facebook-f"></i
                                ></a>
                                <a href="#"><i class="uil uil-dribbble"></i></a>
                                <a href="#"
                                    ><i class="uil uil-instagram"></i
                                ></a>
                                <a href="#"><i class="uil uil-youtube"></i></a>
                            </nav>
                            <!-- /.social -->
                        </div>
                        <!-- /offcanvas-nav-other -->
                    </div>
                    <!-- /.offcanvas-body -->
                </div>
                <!-- /.navbar-collapse -->
                <div class="navbar-other ms-lg-4">
                    <ul class="navbar-nav flex-row align-items-center ms-auto">
                        <li class="nav-item d-lg-none">
                            <button class="hamburger offcanvas-nav-btn">
                                <span></span>
                            </button>
                        </li>
                    </ul>
                    <!-- /.navbar-nav -->
                </div>
                <!-- /.navbar-other -->
            </div>
            <!-- /.container -->
        </nav>
        <!-- /.navbar -->
    </header>
</template>

<script>
export default {
    data() {
        return {
            path: this.$route.path,
            settings: this.$store.state.setting,

            isLoaded: false,
            urlAction: "",
            isAuthenticated: false,
        }
    },
    mounted() {
        this.isAuthenticated = localStorage.getItem('access_token') || false
        if (this.isAuthenticated) this.getUserDetail();
        this.setUrlActions()
    },
    methods: {
        async getUserDetail() {
            await this.$store.dispatch('Users/fetchDetailUser');

            if (!this.userState.status) {
                localStorage.clear();
                console.error(
                    "Failed to fetch user detail",
                    this.userState.message
                );
                window.open(window.location.origin, "_self");
            } else {
                this.name = this.userState.detail_auth.name[0];
                this.isLoaded = true;
            }
        },
        setUrlActions() {
            if (!this.isAuthenticated) {
                const baseUrl = process.env.alkademiAuth;
                
                const redirect = "&redirectTo=" + window.location.origin;
                const lmsId = "&lmsId=" + localStorage.getItem('lmsId');

                const url = `${baseUrl}/auth?${redirect}${lmsId}`;

                this.urlAction = url
            } else {
                this.urlAction = "/dashboard"
            }
            this.isLoaded = true;
        }
    }
}
</script>

<style scoped>
    .image-logo {
        max-width: 230px;
    }
</style>