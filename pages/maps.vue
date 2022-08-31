<template>
  <section class="wow animate__fadeIn">
     <div class="container">
          <maps/>
      </div>
   
  </section>
   
  </template>
  
  <script>
  import maps from '../components/maps/mapsCard.vue'; 
  export default {
      name: "IndexPage",
      components: { maps }
  }
  </script>
  