<template>
     <section class="wow animate__fadeIn bg-light-gray">
    <div class="container">
        <div class="row justify-content-center">
          <div>
            
            <testi/>
           
          </div>
        </div>  
      </div>
  
</section>
  </template>
  
  <script>
  import testi from '~/components/testimoni/testimoniCard.vue'
  
  
  export default{
    data(){
      return{
        page_name: "testi"
      }
    },
    components: {
        testi 
        
    }
  }
  </script>
  
  
  
  