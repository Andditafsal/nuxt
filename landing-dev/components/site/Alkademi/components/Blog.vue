<template>
    <section v-if="isLoaded && dataNews.length != 0" class="wrapper bg-light">
      <div class="container py-8 py-md-10">
        <div class="row gx-lg-8 gx-xl-12 gy-10 gy-lg-0">
          <div class="col-lg-4 mt-lg-2">
            <h2 class="display-4 mb-3">Yang Terbaru Di Alkademi</h2>
            <p class="lead fs-lg mb-6 pe-xxl-5">Berita-berita dan pengumuman terbaru seputar kegiatan Alkademi</p>
            <a href="/news" class="btn btn-soft-primary rounded-pill">Lihat semua</a>
          </div>
          <!-- /column -->
          <div class="col-lg-8">
            <div class="swiper-container blog grid-view mb-6" data-margin="30" data-dots="true" data-items-md="2" data-items-xs="1">
              <div class="swiper">
                <div class="swiper-wrapper">
                  <div v-for="(item, index) in dataNews" :key="index" class="swiper-slide">
                    <article>
                      <figure class="overlay overlay-1 hover-scale rounded mb-5"><a :href="setUrl(item)"> <img :src="item.cover" alt="" class="size-image" /></a>
                        <figcaption>
                          <h5 class="from-top mb-0">baca selengkapnya</h5>
                        </figcaption>
                      </figure>
                      <div class="post-header">
                        <!-- <div class="post-category text-line">
                          <a href="#" class="hover" rel="category">Coding</a>
                        </div> -->
                        <!-- /.post-category -->
                        <h2 class="post-title h3 mt-1 mb-3"><a class="link-dark" :href="setUrl(item)">{{item.title}}</a></h2>
                      </div>
                      <!-- /.post-header -->
                      <div class="post-footer">
                        <ul class="post-meta mb-0">
                          <li class="post-date"><i class="uil uil-calendar-alt"></i><span>{{item.updated_at | date}}</span></li>
                          <li class="post-author"><i class="uil uil-user"></i><span>{{item.authorName}}</span></li>
                        </ul>
                        <!-- /.post-meta -->
                      </div>
                      <!-- /.post-footer -->
                    </article>
                    <!-- /article -->
                  </div>
                </div>
                <!--/.swiper-wrapper -->
              </div>
              <!-- /.swiper -->
            </div>
            <!-- /.swiper-container -->
          </div>
          <!-- /column -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container -->
    </section>
</template>

<script>
import moment from "moment";
import { mapState } from 'vuex';

export default {
    data(){
        return {
            dataHeader: {
                title: 'Yang Terbaru di Alkademi',
                description: 'Berita-berita dan pengumuman terbaru seputar kegiatan Alkademi',
            },
            isLoaded: false,

            dataNews: []
        }
    },
    filters: {
        date: function (value) {
            if (!value) return ''
            return moment(value, 'YYYY-MM-DD HH:mm:ss').format('DD MMM YYYY')
        }
    },
    computed: {
        ...mapState({
            blogState: (state) => state.Blogs
        })
    },
    mounted() {
        this.getBlogList();
    },
    methods: {
        setUrl(item) {
            var title = item.title.toLowerCase()
            return `/news/${item.id}/`+title.replace(/\s/g, '-')
        },
        async getBlogList () {
            this.isLoaded = false
            try {
                await this.$store.dispatch('Blogs/fetchBlogList', {
                    page: 1
                });

                if (!this.blogState.status) {
                    console.error('failed fetch blog list', this.blogState.message);
                    this.isLoaded = true;
                } else {
                    this.blogState.blogs.map((item, index) => {
                        if (index < 3) {
                            this.dataNews.push(item);
                        }
                    });
                    this.isLoaded = true;
                }
            } catch (error) {
                console.error('failed fetch blog list', error);
                this.isLoaded = true;
            }
        }
    }
}
</script>

<style>

.size-image{
  min-height: 230px!important;
  max-height: 230px!important;
  height: 230px!important;
  object-fit: cover !important;
}

</style>