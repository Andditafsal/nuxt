<template>
    <footer class="bg-dark text-inverse" v-if="path != '/pesilat'">
      <div class="container py-13 py-md-15">
        <div class="row gy-6 gy-lg-0">
          <div class="col-md-4 col-lg-3">
            <div class="widget">
              <img v-if="settings.logo_light != null" :src="settings.logo_light" alt="" class="logo" />
              <h1 v-else>{{settings.title}}</h1>
              <p class="mb-4">© 2022 Alkademi. <br class="d-none d-lg-block" />All rights reserved.</p>
              <nav class="nav social social-white">
                <!-- <a href="#"><i class="uil uil-twitter"></i></a>
                <a href="#"><i class="uil uil-facebook-f"></i></a>
                <a href="#"><i class="uil uil-dribbble"></i></a> -->
                <a href="https://www.instagram.com/alkademi.idn/"><i class="uil uil-instagram"></i></a>
                <a href="https://www.youtube.com/channel/UClrtoaPaIHDY2liEh_RJcOg"><i class="uil uil-youtube"></i></a>
              </nav>
              <!-- /.social -->
            </div>
            <!-- /.widget -->
          </div>
          <!-- /column -->
          <div class="col-md-4 col-lg-3">
            <div class="widget">
              <h4 class="widget-title text-white mb-3">Hubungi Kami</h4>
              <address class="pe-xl-15 pe-xxl-17">Jl. Cisitu Indah VI. No. 6, Kota Bandung</address>
              <a href="mailto:hello@alkademi.id">hello@alkademi.id</a><br /> (022) 2504168
            </div>
            <!-- /.widget -->
          </div>
          <!-- /column -->
          <div class="col-md-4 col-lg-3">
            <div class="widget">
              <h4 class="widget-title text-white mb-3">Informasi Lainnya</h4>
              <ul class="list-unstyled  mb-0">
                <li><a href="/about">Tentang Kami</a></li>
                <li><a href="/curriculum">Program</a></li>
                <li><a href="/news">Berita</a></li>
                <li><a href="/gallery">Galeri</a></li>
              </ul>
            </div>
            <!-- /.widget -->
          </div>
          <!-- /column -->
          <div class="col-md-12 col-lg-3">
            <div class="widget">
              <h4 class="widget-title text-white mb-3">Tunggu Apalagi?</h4>
              <p class="mb-5">Gabung bersama kami!</p>
              <div class="newsletter-wrapper">
                <!-- Begin Mailchimp Signup Form -->
                <div id="mc_embed_signup2">
                  <form action="https://elemisfreebies.us20.list-manage.com/subscribe/post?u=aa4947f70a475ce162057838d&amp;id=b49ef47a9a" method="post" id="mc-embedded-subscribe-form2" name="mc-embedded-subscribe-form" class="validate dark-fields" target="_blank" novalidate>
                    <div id="mc_embed_signup_scroll2">
                      <div class="mc-field-group input-group form-floating">
                        <a href="/curriculum" class="btn btn-primary mb-0">Gabung Sekarang</a>
                      </div>
                      <div id="mce-responses2" class="clear">
                        <div class="response" id="mce-error-response2" style="display:none"></div>
                        <div class="response" id="mce-success-response2" style="display:none"></div>
                      </div> <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                      <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_ddc180777a163e0f9f66ee014_4b1bcfa0bc" tabindex="-1" value=""></div>
                      <div class="clear"></div>
                    </div>
                  </form>
                </div>
                <!--End mc_embed_signup-->
              </div>
              <!-- /.newsletter-wrapper -->
            </div>
            <!-- /.widget -->
          </div>
          <!-- /column -->
        </div>
        <!--/.row -->
      </div>
      <!-- /.container -->
    </footer>
</template>

<script>

export default {
  data() {
      return {
          path: this.$route.path,
          settings: this.$store.state.setting
      }
  },
}
</script>

<style scoped>
.logo {
    max-width: 130px;
}
</style>