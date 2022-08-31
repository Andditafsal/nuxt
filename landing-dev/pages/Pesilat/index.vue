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

                if (findLayout == "alkademi") return () => import("~/components/site/Pesilat/index.vue")
                if (findLayout == "pesilat") return () => import("~/components/site/Pesilat/index.vue")

                this.componentsProps = { page404: true } 
                return () => import("~/components/Loading.vue")
                
            }
            
            this.componentsProps = { redirectLogin: true } 
            return () => import("~/components/Loading.vue")
        }
    }
}
</script>