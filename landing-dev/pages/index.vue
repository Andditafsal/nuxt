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

                if (findLayout == "alkademi") return () => import("~/components/site/Alkademi/index.vue")
                if (findLayout == "sekolahbeta") return () => import("~/components/site/SekolahBeta/index.vue")
                if (findLayout == "umptn") return () => import("~/components/site/UMPTN/index.vue")
                if (findLayout == "smkcoding") return () => import("~/components/site/SMKCoding/index.vue")
                if (findLayout == "demo") return () => import("~/components/site/Demo/index.vue")
                if (findLayout == "jongkreatif") return () => import("~/components/site/JongKreatif/index.vue")
            }
            
            // this.componentsProps = { redirectLogin: true } 
            // return () => import("~/components/Loading.vue")
        }
    }
}
</script>
