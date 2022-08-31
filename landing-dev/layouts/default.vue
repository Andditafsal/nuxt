<template>
	<div v-if="isLoaded" :class="classSetting">
		<TheHeader />

		<Nuxt />

		<TheFooter />
	</div>
    <Loading v-else />
    <!-- <component v-else :is="renderComponents" v-bind="propsComponents"/> -->
</template>

<script>
import { mapState } from "vuex";
// import layouts from "~/store/layouts.js"

import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import Loading from "@/components/Loading.vue";

export default {
    components: { TheHeader, TheFooter, Loading },
    data() {
        return {
            isLoaded: false,
            propsComponents: {},
            classSetting: '',
            routeName: '',
            cdnHost: process.env.cdnHost,
            settings: {
                title: "",
                logoDark: process.env.cdnHost +
                    "themes/static/assets/img/logos/alkademi-dark.png",
                logoLight: process.env.cdnHost +
                    "themes/static/assets/img/logos/alkademi-light.png",
                favicon: "/logo-square.png",
                layout: "demo",
                css: {
                    ft_primary: "Raleway",
                    ft_secondary: "Inter",
                    clr_primary: "#2096C4",
                    clr_secondary: "#2F80ED",
                    clr_success: "#2dce89",
                    clr_info: "#11cdef",
                    clr_warning: "#fb6340",
                    clr_danger: "#f5365c",
                    clr_light: "#adb5bd",
                    clr_dark: "#212529",
                },
                meta: {
                    name: "",
                    description: "",
                    keywords: "",
                    type: "",
                    image: "",
                    card: "",
                    site_name: "",
                    url: "",
                    twitter_site: "",
                },
            },
        };
    },
    head() {
        let setting = this.$store.state.setting ?? this.settings;
        return {
            title: setting.title ?? '',
            link: [
                {
                    hid: "icon",
                    rel: "icon",
                    type: "image/x-icon",
                    href: setting.favicon,
                },
                {
                    hid: "shortcut-icon",
                    rel: "shortcut icon",
                    type: "image/x-icon",
                    href: setting.favicon,
                },
            ],
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: setting.meta ? setting.meta.description ?? '' : '',
                },
                {
                    hid: "keywords",
                    name: "keywords",
                    content: setting.meta ? setting.meta.keywords ?? '' : '',
                },
                // Google / Search Engine Tags
                { itemprop: "name", content: setting.title ?? '' },
                {
                    itemprop: "description",
                    content: setting.meta ? setting.meta.description ?? '' : '',
                },
                { itemprop: "image", content: setting.meta ? setting.meta.image ?? '' : '' },
                // Facebook Meta Tags
                { property: "og:url", content: setting.meta ? setting.meta.url ?? '' : '' },
                { property: "og:type", content: "website" },
                { property: "og:title", content: setting.title ?? '' },
                {
                    property: "og:description",
                    content: setting.meta ? setting.meta.description ?? '' : '',
                },
                { property: "og:image", content: setting.meta ? setting.meta.image ?? '' : '' },
                // Twitter Meta Tags
                { name: "twitter:card", content: "summary_large_image" },
                { name: "twitter:title", content: setting.title ?? '' },
                {
                    name: "twitter:description",
                    content: setting.meta ? setting.meta.description ?? '' : '',
                },
                { name: "twitter:image", content: setting.meta ? setting.meta.image ?? '' : '' },
            ],
        };
    },
    computed: {
        ...mapState({
            sassState: (state) => state.Sass,
        }),
        currentRouteName() {
            return this.$route.fullPath;
        },
        // renderComponents() {
        //     let settings = this.$store.state.setting
        //     let component = () => import("~/components/Loading.vue")

        //     if (settings) {
        //         const findLayout = layouts.list.find((item) => item === settings.layout)

        //         if (!findLayout) {
        //             this.propsComponents = { redirectLogin: true }
        //             return component
        //         } else return component
        //     }

        //     this.propsComponents = { page404: true }
        //     return component
        // }
    },
    created() {
        this.setCurrentRoute();
    },
    mounted() {
        this.setLmsId();
    },
    watch: {
        currentRouteName() {
            this.setCurrentRoute();
        }
    },
    methods: {
        async setCurrentRoute() {
            var route = await this.currentRouteName;
            var routeArray = route.split("/");

            this.routeName = routeArray[1];

            this.settings = this.$store.state.setting ?? this.settings
            if (this.settings.layout == 'demo' || this.settings.layout == 'jongkreatif') this.classSetting = [this.routeName, (this.routeName != '' ? 'content-page' : '')]
            else this.classSetting = 'content-wrapper'
        },
        async setLmsId() {

            await this.$store.dispatch("Sass/lmsId", { version: "v0" });
            this.loadStyleConfig();
        },
        loadStyleConfig() {
            let setting = this.$store.state.setting ?? this.settings;
            // Root Variable
            const root = document.querySelector(":root");
            const cssSettings = setting.css;
            // Font Name
            var ft_primary = cssSettings.ft_primary;
            var ft_secondary = cssSettings.ft_secondary;
            if (ft_primary.trim() != "") {
                let fontP = document.createElement("link");
                fontP.rel = "stylesheet";
                fontP.href =
                    "https://fonts.googleapis.com/css2?family=" +
                        ft_primary.replace(/\s/g, "+") +
                        ":wght@300;400;500;600;700;800;900&display=swap";
                document.head.appendChild(fontP);
            }
            if (ft_secondary.trim() != "") {
                let fontS = document.createElement("link");
                fontS.rel = "stylesheet";
                fontS.href =
                    "https://fonts.googleapis.com/css?family=" +
                        ft_secondary.replace(/\s/g, "+") +
                        ":wght@300;400;500;600;700;800;900&display=swap";
                document.head.appendChild(fontS);
            }
            // Change Font Family
            root.style.setProperty("--bs-font-heading", `${ft_primary}, sans-serif`);
            root.style.setProperty("--bs-font-paragraph", `${ft_secondary}, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`);
            // Color Style
            root.style.setProperty("--bs-primary", cssSettings.clr_primary);
            root.style.setProperty("--bs-secondary", cssSettings.clr_secondary);
            root.style.setProperty("--bs-success", cssSettings.clr_success);
            root.style.setProperty("--bs-info", cssSettings.clr_info);
            root.style.setProperty("--bs-warning", cssSettings.clr_warning);
            root.style.setProperty("--bs-danger", cssSettings.clr_danger);
            root.style.setProperty("--bs-light", cssSettings.clr_light);
            root.style.setProperty("--bs-dark", cssSettings.clr_dark);
            setTimeout(() => {
                this.isLoaded = true;
            }, 2000);
        },
    },
};
</script>
<style>
html {
    scroll-behavior: smooth;
}
</style>