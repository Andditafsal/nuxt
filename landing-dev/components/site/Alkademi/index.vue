<template>
    <div id="home" class="body-container">

        <Hero />

        <Partnerships />

        <LearningProcess />

        <Blog />
        
        <Programs />

        <Portofolio />
        
        <FAQ />

    </div>
</template>

<script>
import Hero from '@/components/site/Alkademi/components/Hero.vue';
import Partnerships from '@/components/site/Alkademi/components/Partnerships.vue';
import LearningProcess from '@/components/site/Alkademi/components/LearningProcess.vue';
import Blog from '@/components/site/Alkademi/components/Blog.vue'
import Programs from '@/components/site/Alkademi/components/Programs.vue'
import Portofolio from '@/components/site/Alkademi/components/Portofolio.vue'
import FAQ from '@/components/site/Alkademi/components/FAQ.vue'

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

    components: { Hero, Partnerships, LearningProcess, Blog, Programs, Portofolio, FAQ, },
}
</script>

<style>

</style>