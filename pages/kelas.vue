<template>
<section class="wow animate__fadeIn">
   <div class="container">
        <cardProgram/>
    </div>
 
</section>
 
</template>

<script>
import CardProgram from '../components/kelas/cardProgramKelas.vue'; 
export default {
    name: "IndexPage",
    components: { CardProgram }
}
</script>
