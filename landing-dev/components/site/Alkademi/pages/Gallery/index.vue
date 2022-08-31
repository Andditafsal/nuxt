<template>
    <div>
        <section class="wrapper bg-light">
            <div class="container pt-8 pt-md-10">
            <div class="row">
                <div class="col-md-8 col-lg-7 col-xl-6 col-xxl-5">
                <h1 class="display-1 mb-3">Galeri</h1>
                <p class="lead fs-lg pe-lg-15 pe-xxl-12">Kami menghargai semua proses </p>
                </div>
                <!-- /column -->
            </div>
            <!-- /.row -->
            </div>
            <!-- /.container -->
        </section>
        <!-- /section -->
        <section v-if="isLoaded" class="wrapper bg-light">
            <div class="container py-8 py-md-10">
            <div class="grid grid-view projects-masonry">
                <div class="row gx-md-8 gy-10 gy-md-13 isotope">
                    <template v-if="dataImage.length != 0">
                        <div v-for="(item, index) in dataImage" :key="index" class="project item col-md-6 col-xl-4 product">
                            <figure class="lift rounded mb-6"><a :href="item.image" target="_blank"> <img :src="item.image" alt="" style="width: 100%;max-width: 100%;height: 260px !important;-o-object-fit: cover;object-fit: cover;"/></a></figure>
                            <div class="project-details d-flex justify-content-center flex-column">
                            <div class="post-header">
                                <!-- <div class="post-category text-line mb-3 text-purple">Cosmetic</div> -->
                                <h2 class="post-title h3">{{item.title}}</h2>
                            </div>
                            <!-- /.post-header -->
                            </div>
                            <!-- /.project-details -->
                        </div>
                    </template>
                </div>
                <!-- /.row -->
            </div>
            <!-- /.grid -->
            </div>
            <!-- /.container -->
        </section>
        <!-- /section -->
    </div>
</template>

<script>
import HeaderWrapper from '@/components/site/Alkademi/components/HeaderWrapper.vue';
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
    },
    data(){
        return {
            dataHeader: {
                title: 'Kami Menghargai Semua Proses',
                description: '',
            },

            dataImage: [],
            selectedImage: null,
            isModalOpen: false,
            currentPage: 1,
            lastPage: null,

            isLoaded: false,
        }
    },
    computed: {
        ...mapState({
            galleriesState: (state) => state.Galleries
        }),
    },
    mounted () {
        this.getGalleryList();
        this.scroll();
    },
    methods: {
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

                if (res.length == 2 && res[1] == 'gallery') {
                    const currentPosition = window.pageYOffset + window.innerHeight;
                    const currentListHeight = document.getElementById('list').offsetHeight;
                    const bottomOfWindow = currentPosition >= currentListHeight;

                    if (bottomOfWindow && this.lastPage > this.currentPage) {
                        this.currentPage += 1;
                        this.isLoaded = false;
                        await this.getGalleryList();
                    }
                }
            }
        },
        async getGalleryList () {
            try {
                await this.$store.dispatch('Galleries/fetchGalleryList', {
                    page: this.currentPage
                });

                if (!this.galleriesState.status) {
                    console.error('failed fetch blog list', this.galleriesState.message);
                    this.isLoaded = true;
                } else {
                    this.galleriesState.galleries.map((item) => {
                        this.dataImage.push(item);
                    });
                    this.lastPage = this.galleriesState.pagination.lastPage;
                    this.isLoaded = true;
                    setTimeout(() => {
                        this.setExternalJS()
                    }, 2000);
                }
            } catch (error) {
                console.error('failed fetch gallery list', error);
                this.isLoaded = true;
            }
        },
        onClickImage (item) {
            this.selectedImage = item;
            this.isModalOpen = true;
            this.$bvModal.show('detail-gallery');
        },
        closeModal () {
            this.isModalOpen = false;
            this.$bvModal.hide('detail-gallery');
            this.selectedImage = null;
        }
    }
}
</script>