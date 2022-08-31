<template>
    <section class="wrapper bg-light wrapper-border">
      <div class="container py-8 py-md-10">
        <h2 class="fs-15 text-uppercase text-muted text-center mb-8">Telah dipercaya oleh</h2>
        <div class="swiper-container clients mb-0" data-margin="30" data-dots="false" data-autoplay-timeout="3000" data-items-xxl="7" data-items-xl="6" data-items-lg="5" data-items-md="4" data-items-xs="2">
          <div class="swiper">
            <div class="swiper-wrapper align-logo">
              <div class="swiper-slide px-5"><img src="/assets/Alkademi/image/radya-logo.png" alt="" /></div>
              <div class="swiper-slide px-5"><img src="/assets/Alkademi/image/logo-e-fishery.png" alt="" /></div>
              <div class="swiper-slide px-5"><img src="/assets/Alkademi/image/logo-geekhunter.png" alt="" /></div>
              <div class="swiper-slide px-5"><img src="/assets/Alkademi/image/feedloop.svg" alt="" /></div>
              <div class="swiper-slide px-5"><img src="/assets/Alkademi/image/logo-paragon-corppng.png" alt="" /></div>
              <div class="swiper-slide px-5"><img src="/assets/Alkademi/image/stc_logo.svg" alt="" /></div>
              <div class="swiper-slide px-5"><img src="/assets/Alkademi/image/logo-kominfo.png" alt="" /></div>
              <div class="swiper-slide px-5"><img src="/assets/Alkademi/image/logo-bakti.png" alt="" /></div>
            </div>
            <!--/.swiper-wrapper -->
          </div>
          <!-- /.swiper -->
        </div>
        <!-- /.swiper-container -->
      </div>
      <!-- /.container -->
    </section>
</template>

<script>

export default {
    // components:{
    //     HeaderWrapper,
    //     CardIndustries
    // },
    // props: {
    //     header: Object,
    //     data: Array
    // },
    // data(){
    //     return {
    //         isLoaded: false,
    //     }
    // },
    // mounted() {
    //     this.generateIndustries();
    // },
    // methods: {
    //     generateIndustries() {
    //         this.isLoaded = true;
    //     }
    // }
}
</script>
<style scoped>
.align-logo{
  align-items: inherit;
}

.swiper img {
    max-height: 60px;
    object-fit: contain;
}
</style>