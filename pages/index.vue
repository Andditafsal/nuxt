<template>
    <section class="wow animate__fadeIn">
       <div class="container">
        <div class="row justify-content-center">
            <div>
                <cardProgram/>
                <maps/>
                <testi/>

            </div>
          </div>
        </div>
     
    </section>
     
    </template>
    
    <script>
    import CardProgram from '../components/kelas/cardProgramKelas.vue'; 
    import maps from '../components/maps/mapsCard.vue'; 
    import testi from '~/components/testimoni/testimoniCard.vue'
    
    export default{
    data(){
      return{
        page_name: "index"
      }
    },
    components: {
        CardProgram ,
        maps,
        testi
    }
  }
    </script>