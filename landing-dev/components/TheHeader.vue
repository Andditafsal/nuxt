<template>
    <component :is="renderComponents"/>
</template>

<script>
import layouts from "~/store/layouts.js"

export default {
    computed: {
        renderComponents() {
            let settings = this.$store.state.setting

            if (settings) {
                
                const findLayout = layouts.list.find((item) => item === settings.layout)

                if (findLayout) {

                    if (findLayout == "alkademi") return () => import("~/components/site/Alkademi/components/TheHeader.vue")
                    if (findLayout == "demo") return () => import("~/components/site/Demo/components/Header.vue")
                    if (findLayout == "jongkreatif") return () => import("~/components/site/JongKreatif/components/Header.vue")

                }

            }
            
        }
    }
}
</script>