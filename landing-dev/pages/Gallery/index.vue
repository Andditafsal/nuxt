<template>
    <component :is="renderComponents" v-bind="componentsProps"/>
</template>

<script>
import layouts from "~/store/layouts.js"

export default {
    data() {
        return {
            componentsProps: {}
        }
    },
    computed: {
        renderComponents() {
            let settings = this.$store.state.setting

            if (settings) {
                
                const findLayout = layouts.list.find((item) => item === settings.layout)

                if (findLayout == "sekolahbeta") return () => import("~/components/site/SekolahBeta/pages/Gallery.vue")
                if (findLayout == "smkcoding") return () => import("~/components/site/SMKCoding/pages/Gallery.vue")
                if (findLayout == "demo") return () => import("~/components/site/Demo/pages/Gallery.vue")
                if (findLayout == "alkademi") return () => import("~/components/site/Alkademi/pages/Gallery/index.vue")
                if (findLayout == "jongkreatif") return () => import("~/components/site/JongKreatif/pages/Gallery.vue")

                this.componentsProps = { page404: true } 
                return () => import("~/components/Loading.vue")
                
            }
            
            this.componentsProps = { redirectLogin: true } 
            return () => import("~/components/Loading.vue")
        }
    }
}
</script>
