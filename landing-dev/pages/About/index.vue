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

                if (findLayout) {

                    if (findLayout == "demo") return () => import("~/components/site/Demo/pages/About.vue")
                    if (findLayout == "alkademi") return () => import("~/components/site/Alkademi/pages/About/index.vue")
                    if (findLayout == "jongkreatif") return () => import("~/components/site/JongKreatif/pages/About.vue")

                    this.componentsProps = { page404: true } 
                    return () => import("~/components/Loading.vue")

                }

            }
            
            this.componentsProps = { redirectLogin: true } 
            return () => import("~/components/Loading.vue")
        }
    }
}
</script>