<template>
    <section class="wrapper bg-light">
        <div class="container py-10 py-md-12">
            <div class="row">
                <div class="col-lg-8 col-xl-7 col-xxl-6">
                    <h2 class="fs-15 text-uppercase text-muted mb-3">
                        Program Kami
                    </h2>
                    <h3 class="display-4 mb-9">
                        Program apa aja sih yang ada di alkademi?
                    </h3>
                </div>
                <!-- /column -->
            </div>
            <!-- /.row -->
            <div class="row gx-md-8 gy-8">
                <div v-for="(item, index) in dataPrograms" :key="index" class="col-md-6 col-lg-3">
                    <img
                        v-if="item.logo"
                        variant="secondary"
                        :src="'~/' + item.logo"
                        class=""
                        style="
                            width: auto;
                            max-width: 100%;
                            height: 100px;
                            object-fit: contain;
                            margin-bottom: 20px;
                        "
                    />
                    <h1>{{item.name}}</h1>
                    <p class="mb-3">
                        {{item.description}}
                    </p>
                    <a
                        :href="`curriculum/${generateProgramName(item)}`"
                        class="more hover link-primary"
                        >Pelajari selengkapnya</a
                    >
                    <!-- <a
                        v-if="item.onRegistration == 1 && !isAuthenticated"
                        :href="registerClick(item)"
                        target="_self"
                        class="more hover link-red"
                        >Daftar Sekarang</a
                    > -->
                    <a
                        v-if="item.onRegistration == 1"
                        :href="registerClick(item)"
                        target="_self"
                        class="more hover link-red"
                        >Daftar Sekarang</a
                    >
                </div>
            </div>
            <!--/.row -->
        </div>
        <!-- /.container -->
    </section>
</template>

<script>
import { mapState } from "vuex";

export default {
    computed: {
        ...mapState({
            authState: (state) => state.Auth,
        }),
    },
    data() {
        return {
            // isAuthenticated: localStorage.getItem("access_token") != null || "",
            isLoaded: false,
            dataPrograms: []
        };
    },
    mounted() {
        this.fetchPrograms()
    },
    methods: {
        registerClick(item) {
                const baseUrl = process.env.alkademiAuth;
                const programName = this.generateProgramName(item)

                const redirect = "&redirectTo=" + window.location.origin;
                const lmsId = "&lmsId=" + localStorage.getItem('lmsId');

                const url = `${baseUrl}/register/${programName}?${redirect}${lmsId}`;
                return url
        },
        generateProgramName(item) {
            var name = item.name.replace(/\s/g, '').toLowerCase()
            
            return name.replace('.', '-')
        },
        async fetchPrograms() {
            await this.$store.dispatch("Programs/getPrograms").then(() => {
                var statePrograms = this.$store.state.Programs;

                if (!statePrograms.status) {
                    // console.log('Failed fetch programs', statePrograms.message)

                    this.isLoaded = true;
                } else {
                    // console.log('Success fetch programs', statePrograms.programs)

                    this.dataPrograms = statePrograms.programs;
                    this.isLoaded = true;
                }
            });
        },
    }
};
</script>