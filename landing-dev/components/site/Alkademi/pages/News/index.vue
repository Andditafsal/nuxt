<template>
    <div>
        <section class="wrapper bg-light">
            <div class="container py-10 py-md-14">
            <div class="row align-items-center mb-14">
                <div class="col-md-8 col-lg-9 col-xl-8 col-xxl-7 pe-xl-15">
                <h2 class="display-4 mb-0">Dokumentasi Kegiatan dan Update Informasi Mengenai Kegiatan Alkademi</h2>
                </div>
                <!--/column -->
                <!-- <div class="col-md-4 col-lg-3 ms-md-auto text-md-end mt-5 mt-md-0">
                <a href="#" class="btn btn-soft-primary rounded-pill mb-0">Lihat semua</a>
                </div> -->
                <!--/column -->
            </div>
            <!--/.row -->
            <div v-if="isLoaded && dataNews.length != 0" class="row gx-lg-8 gx-xl-11 gy-10 blog grid-view">
                <div class="col-lg-8">
                <article class="post">
                    <div class="post-slider rounded mb-6">
                    <div class="swiper-container dots-over" data-margin="5" data-dots="true">
                        <div class="swiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide"><img :src="dataNews[0].cover" alt="" /></div>
                        </div>
                        <!--/.swiper-wrapper -->
                        </div>
                        <!-- /.swiper -->
                    </div>
                    <!-- /.swiper-container -->
                    </div>
                    <!-- /.post-slider -->
                    <div class="post-header mb-5">
                    <!-- <div class="post-category text-line">
                        <a href="#" class="hover" rel="category">Ideas</a>
                    </div> -->
                    <!-- /.post-category -->
                    <h2 class="post-title mt-1 mb-4"><a class="link-dark" :href="setUrl(dataNews[0])">{{dataNews[0].title}}</a></h2>
                    <ul class="post-meta mb-0">
                        <li class="post-date"><i class="uil uil-calendar-alt"></i><span>{{dataNews[0].updated_at | date}}</span></li>
                        <li class="post-author"><i class="uil uil-user"></i><span>{{dataNews[0].authorName}}</span></li>
                    </ul>
                    <!-- /.post-meta -->
                    </div>
                    <!-- /.post-header -->
                    <div class="post-content">
                    <p>{{dataNews[0].summary}}</p>
                    </div>
                    <!-- /.post-content -->
                </article>
                <!-- /.post -->
                </div>
                <!-- /column -->
                <div v-if="dataNews.length > 1" class="col-lg-4">
                <div class="row gy-10">
                    <div class="col-md-6 col-lg-12">
                    <article class="post">
                        <figure class="overlay overlay-1 hover-scale rounded mb-5"><a :href="setUrl(dataNews[1])"> <img :src="dataNews[1].cover" alt="" /></a>
                        <figcaption>
                            <h5 class="from-top mb-0">baca selengkapnya</h5>
                        </figcaption>
                        </figure>
                        <div class="post-header">
                        <!-- <div class="post-category text-line">
                            <a href="#" class="hover" rel="category">Coding</a>
                        </div> -->
                        <!-- /.post-category -->
                        <h2 class="post-title h3 mt-1 mb-3"><a class="link-dark" :href="setUrl(dataNews[1])">{{dataNews[1].title}}</a></h2>
                        </div>
                        <!-- /.post-header -->
                        <div class="post-footer">
                        <ul class="post-meta">
                            <li class="post-date"><i class="uil uil-calendar-alt"></i><span>{{dataNews[1].updated_at | date}}</span></li>
                            <li class="post-author"><i class="uil uil-user"></i><span>{{dataNews[1].authorName}}</span></li>
                        </ul>
                        <!-- /.post-meta -->
                        </div>
                        <!-- /.post-footer -->
                    </article>
                    <!-- /.post -->
                    </div>
                    <!-- /column -->
                    <div v-if="dataNews.length > 2" class="col-md-6 col-lg-12">
                    <article class="post">
                        <figure class="overlay overlay-1 hover-scale rounded mb-5"><a :href="setUrl(dataNews[2])"> <img :src="dataNews[2].cover" alt="" /></a>
                        <figcaption>
                            <h5 class="from-top mb-0">baca selengkapnya</h5>
                        </figcaption>
                        </figure>
                        <div class="post-header">
                        <!-- <div class="post-category text-line">
                            <a href="#" class="hover" rel="category">Coding</a>
                        </div> -->
                        <!-- /.post-category -->
                        <h2 class="post-title h3 mt-1 mb-3"><a class="link-dark" :href="setUrl(dataNews[2])">{{dataNews[2].title}}</a></h2>
                        </div>
                        <!-- /.post-header -->
                        <div class="post-footer">
                        <ul class="post-meta">
                            <li class="post-date"><i class="uil uil-calendar-alt"></i><span>{{dataNews[2].updated_at | date}}</span></li>
                            <li class="post-author"><i class="uil uil-user"></i><span>{{dataNews[2].authorName}}</span></li>
                        </ul>
                        <!-- /.post-meta -->
                        </div>
                        <!-- /.post-footer -->
                    </article>
                    <!-- /.post -->
                    </div>
                    <!-- /column -->
                </div>
                <!-- /.row -->
                </div>
                <!-- /column -->
            </div>
            <!-- /.row -->
            </div>
            <!-- /.container -->
        </section>
        <!-- /section -->

        <section class="wrapper bg-light">
        <div v-if="isLoaded && dataNewsScroll.length != 0" class="container py-6 py-md-8">
            <!-- <h2 class="display-4 mb-3 text-center">Our Journal</h2>
            <p class="lead fs-lg mb-10 text-center px-md-16 px-lg-21 px-xl-0">Here are the latest company news from our blog that got the most attention.</p> -->
            <div class="swiper-container blog grid-view mb-6" data-margin="30" data-dots="true" data-items-xl="3" data-items-md="2" data-items-xs="1">
            <div class="swiper">
                <div class="swiper-wrapper">
                <div v-for="(item, index) in dataNewsScroll" :key="index" class="swiper-slide">
                    <article>
                    <figure class="overlay overlay-1 hover-scale rounded mb-5"><a :href="setUrl(item)" target="_blank"> <img :src="item.cover" alt="" /></a>
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
                        <ul class="post-meta">
                        <li class="post-date"><i class="uil uil-calendar-alt"></i><span>{{item.updated_at | date}}</span></li>
                        <li class="post-author"><i class="uil uil-user"></i><span>{{item.authorName}}</span></li>
                        </ul>
                        <!-- /.post-meta -->
                    </div>
                    <!-- /.post-footer -->
                    </article>
                    <!-- /article -->
                </div>
                <!--/.swiper-slide -->
                </div>
                <!--/.swiper-wrapper -->
            </div>
            <!-- /.swiper -->
            </div>
            <!-- /.swiper-container -->
        </div>
        <!-- /.container -->
        </section>
        <!-- /section -->

    </div>
</template>

<script>
import HeaderWrapper from '@/components/site/Alkademi/components/HeaderWrapper.vue';
import CardNews from '@/components/site/Alkademi/components/CardNews.vue';

import moment from 'moment';
import { mapState } from 'vuex';

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
    components:{
        HeaderWrapper,
        CardNews,
    },
    data(){
        return {
            
            dataHeader: {
                title: 'Yang Terbaru di Alkademi',
                description: 'Dokumentasi Kegiatan dan Update Informasi Mengenai Kegiatan Alkademi',
            },

            dataNews: [],
            dataNewsScroll: [],
            currentPage: 1,
            lastPage: null,

            isLoaded: false,
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
        }),
    },
    created() {
        
    },
    mounted () {
        setTimeout(() => {
            this.getBlogList();
            this.scroll();
        }, 2000);
    },
    methods: {
        setUrl(item) {
            var title = item.title.toLowerCase()
            return `/news/${item.id}/`+title.replace(/\s/g, '-')
        },
        setExternalJS() {
            let plugin = document.getElementById("pluginsJs");
            let theme = document.getElementById("themeJs");
            let nav = document.getElementsByClassName('navbar-clone')

            let externalPlugin = document.createElement("script");
            externalPlugin.setAttribute("id", "pluginsJs");
            externalPlugin.setAttribute("src", "/assets/js/plugins.js");
            // externalPlugin.setAttribute("defer", true);
            let externalTheme = document.createElement("script");
            externalTheme.setAttribute("id", "themeJs");
            externalTheme.setAttribute("src", "/assets/js/theme.js");
            // externalTheme.setAttribute("defer", true);

            if (plugin) plugin.remove();
            if (theme) {
                theme.remove();
                // if (nav) nav.remove();
            }
            document.body.appendChild(externalPlugin);
            document.body.appendChild(externalTheme);

            setTimeout(() => {
                for (let index = 0; index < nav.length; index++) {
                    if (index != nav.length - 1) {
                        var element = document.getElementsByClassName('navbar-clone')[index];
                        element.remove()
                    }
                }
            }, 1000);

            // console.log(plugin, theme, nav)
        },
        scroll() {
            window.onscroll = async () => {
                const url = this.$router.currentRoute.fullPath;
                const res = url.split('/');

                if (res.length == 2 && res[1] == 'news') {
                    const currentPosition = window.pageYOffset + window.innerHeight;
                    const currentListHeight = document.getElementById('list').offsetHeight;
                    const bottomOfWindow = currentPosition >= currentListHeight;

                    if (bottomOfWindow && this.lastPage > this.currentPage) {
                        this.currentPage += 1;
                        this.isLoaded = false;
                        await this.getBlogList();
                    }
                }
            }
        },
        async getBlogList () {
            try {
                await this.$store.dispatch('Blogs/fetchBlogList', {
                    page: this.currentPage
                });

                if (!this.blogState.status) {
                    console.error('failed fetch blog list', this.blogState.message);
                    this.isLoaded = true;
                } else {
                    this.blogState.blogs.map((item, index) => {
                        this.dataNews.push(item);
                        if (index > 2) {
                            this.dataNewsScroll.push(item)
                        }
                    });

                    this.lastPage = this.blogState.pagination.lastPage;
                    this.isLoaded = true;

                    setTimeout(() => {
                        this.setExternalJS()
                    }, 2000);
                }
            } catch (error) {
                console.error('failed fetch blog list', error);
                this.isLoaded = true;
            }
        }
    },
}
</script>