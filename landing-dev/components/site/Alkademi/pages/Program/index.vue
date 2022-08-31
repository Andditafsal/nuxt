<template>
    <section class="wrapper bg-light">
        <div class="container py-10 py-md-10">
            <div class="row align-items-center">
                <div class="col-md-8 col-lg-7 col-xl-6 col-xxl-5">
                    <h1 class="display-1 mb-3">Program Alkademi</h1>
                    <p class="lead fs-lg pe-lg-5 pe-xxl-12">
                        Program pelatihan gratis bersertifikasi, berbasis
                        project based learning dilengkapi dengan kurikulum yang
                        relevan dan efektif
                    </p>
                </div>
                <!--/column -->
            </div>
        </div>
        <div class="container pt-10 pt-md-10 pb-10 pb-md-10">
            <!-- /.row -->
            <div class="row gx-md-8 gy-8">
                <div
                    v-for="(item, index) in dataPrograms"
                    :key="index"
                    class="col-md-6 col-lg-3"
                >
                    <img
                        variant="secondary"
                        :src="item.logo"
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
                        :href="`curriculum/${item.name
                            .replace(/\s/g, '')
                            .toLowerCase()}`"
                        class="more hover link-primary"
                        >Pelajari selengkapnya</a
                    >
                    <a
                        v-if="item.onRegistration == 1 "
                        :href="`register/${item.name
                            .replace(/\s/g, '')
                            .toLowerCase()}`"
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
// import Programs from '~/components/Programs'
// import Counters from '~/components/Counters'

export default {
    head: {
        link: [
            { rel: "stylesheet", href: '/assets/css/plugins.css' },
            { rel: "stylesheet", href: '/assets/css/style.css' },
            // { rel: "stylesheet", href: '/assets/css/colors/sky.css' },
            { rel: "stylesheet", href: '/assets/css/fonts/urbanist.css' },
        ],
        script: [
            { src: "/assets/js/plugins.js", body: true },
            { src: "/assets/js/theme.js", body: true },
        ],
    },
    components: {
        // Programs,
    },
    data() {
        return {
            // isAuthenticated: localStorage.getItem("access_token") != null || "",

            dataPrograms: [],
            isLoaded: false,
        };
    },
    mounted() {
        this.fetchPrograms();
    },
    methods: {
        setExternalJS() {
            let plugin = document.getElementById("pluginsJs");
            let theme = document.getElementById("themeJs");
            let nav = document.getElementsByClassName("navbar-clone");

            let externalPlugin = document.createElement("script");
            externalPlugin.setAttribute("id", "pluginsJs");
            externalPlugin.setAttribute("src", "/assets/js/plugins.js");
            // externalPlugin.setAttribute("defer", true);
            let externalTheme = document.createElement("script");
            externalTheme.setAttribute("id", "themeJs");
            externalTheme.setAttribute("src", "/assets/js/theme.js");
            // externalTheme.setAttribute("defer", true);

            if (plugin) plugin.remove();
            if (theme) {
                theme.remove();
                // if (nav) nav.remove();
            }
            document.body.appendChild(externalPlugin);
            document.body.appendChild(externalTheme);

            setTimeout(() => {
                for (let index = 0; index < nav.length; index++) {
                    if (index != nav.length - 1) {
                        var element =
                            document.getElementsByClassName("navbar-clone")[
                                index
                            ];
                        element.remove();
                    }
                }
            }, 1000);
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

                    setTimeout(() => {
                        this.setExternalJS();
                    }, 2000);
                }
            });
        },
    },
};
</script>

<style lang="css">
.title-program {
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 100%;
    letter-spacing: -0.03em;
    color: #5eb9f0;
}
</style>