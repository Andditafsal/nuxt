<template>
    <div class="col-12 blog-content">
                        <ul class="blog-classic blog-wrapper grid grid-loading grid-4col xl-grid-4col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large">
                            <li class="grid-sizer"></li>
                            <!-- start post item -->
                            <li class="grid-item last-paragraph-no-margin wow animate__fadeInUp">
                                <div class="blog-post blog-post-style1 text-left text-sm-start">
                                    <div class="blog-post-images overflow-hidden margin-25px-bottom md-margin-20px-bottom">
                                        <a href="">
                                            <img  src="~/static/assets/image/kopi1.jpg" alt="">
                                        </a>
                                    </div>
                                    <div class="post-details margin-20px-bottom xs-no-margin-bottom">
                                        <span class="post-author text-extra-small text-medium-gray text-uppercase d-block margin-10px-bottom sm-margin-5px-bottom">17 july 2017 | by <a href="blog-masonry.html" class="text-medium-gray">Sekolah Kopi</a></span>
                                        <h4>Americano</h4>
                                        <div class="separator-line-horrizontal-full bg-medium-light-gray margin-20px-tb md-margin-15px-tb"></div>   
                                        <a
                                            :href="`detailKelas/${generateProgramName(item)}`"
                                            class="more hover link-primary"
                                            >Pelajari selengkapnya</a>

                                        
                                            <a
                                             v-if="item.onRegistration == 1"
                                            :href="registerClick(item)"
                                            target="_self"
                                            class="more hover link-red"
                                            >Daftar Sekarang</a>
                                        
                                    </div>
                                </div>
                            </li>
                         <!-- exite -->
                         <!-- start post item -->
                            <li class="grid-item last-paragraph-no-margin wow animate__fadeInUp">
                                <div class="blog-post blog-post-style1 text-left text-sm-start">
                                    <div class="blog-post-images overflow-hidden margin-25px-bottom md-margin-20px-bottom">
                                        <a href="">
                                            <img src="~/static/assets/image/kopi2.jpg" alt="">
                                        </a>
                                    </div>
                                    <div class="post-details margin-20px-bottom xs-no-margin-bottom">
                                        <span class="post-author text-extra-small text-medium-gray text-uppercase d-block margin-10px-bottom sm-margin-5px-bottom">17 july 2017 | by <a href="blog-masonry.html" class="text-medium-gray">Sekolah Kopi</a></span>
                                        <h4>Americano</h4>
                                        <div class="separator-line-horrizontal-full bg-medium-light-gray margin-20px-tb md-margin-15px-tb"></div>
                                        <a href="detailkelas" class="post-title text-medium text-extra-dark-gray w-90 d-block md-w-100">Pelajari Selengkapnya</a>
                                        <a href="blog-post-layout-01.html" class="post-title text-medium text-extra-dark-gray w-90 d-block md-w-100">Daftar Kelas</a>
                                    </div>
                                </div>
                            </li>
                         <!-- exite -->
                         <!-- start post item -->
                            <li class="grid-item last-paragraph-no-margin wow animate__fadeInUp">
                                <div class="blog-post blog-post-style1 text-left text-sm-start">
                                    <div class="blog-post-images overflow-hidden margin-25px-bottom md-margin-20px-bottom">
                                        <a href="">
                                            <img src="~/static/assets/image/kopi3.jpg" alt="">
                                        </a>
                                    </div>
                                    <div class="post-details margin-20px-bottom xs-no-margin-bottom">
                                        <span class="post-author text-extra-small text-medium-gray text-uppercase d-block margin-10px-bottom sm-margin-5px-bottom">17 july 2017 | by <a href="blog-masonry.html" class="text-medium-gray">Sekolah Kopi</a></span>
                                        <h4>Americano</h4>
                                        <div class="separator-line-horrizontal-full bg-medium-light-gray margin-20px-tb md-margin-15px-tb"></div>
                                        <a href="detailkelas" class="post-title text-medium text-extra-dark-gray w-90 d-block md-w-100">Pelajari Selengkapnya</a>
                                        <a href="blog-post-layout-01.html" class="post-title text-medium text-extra-dark-gray w-90 d-block md-w-100">Daftar Kelas</a>
                                    </div>
                                </div>
                            </li>
                         <!-- exite -->
                         <!-- start post item -->
                            <li class="grid-item last-paragraph-no-margin wow animate__fadeInUp">
                                <div class="blog-post blog-post-style1 text-left text-sm-start">
                                    <div class="blog-post-images overflow-hidden margin-25px-bottom md-margin-20px-bottom">
                                        <a href="">
                                            <img src="~/static/assets/image/kopi4.jpg" alt="">
                                        </a>
                                    </div>
                                    <div class="post-details margin-20px-bottom xs-no-margin-bottom">
                                        <span class="post-author text-extra-small text-medium-gray text-uppercase d-block margin-10px-bottom sm-margin-5px-bottom">17 july 2017 | by <a href="blog-masonry.html" class="text-medium-gray">Sekolah Kopi</a></span>
                                        <h4>Americano</h4>
                                        <div class="separator-line-horrizontal-full bg-medium-light-gray margin-20px-tb md-margin-15px-tb"></div>
                                        <a href="detailkelas" class="post-title text-medium text-extra-dark-gray w-90 d-block md-w-100">Pelajari Selengkapnya</a>
                                        <a href="blog-post-layout-01.html" class="post-title text-medium text-extra-dark-gray w-90 d-block md-w-100">Daftar Kelas</a>
                                    </div>
                                </div>
                            </li>

                         <!-- exite -->      
                        </ul>
                 </div>
</template>

<style>

.blog-post.blog-post-style1 .blog-post-images img {width: 100%; height: 150px;
    object-fit: cover;}


</style>
<script>
    import { mapState } from "vuex";
    
    export default {
        computed: {
            ...mapState({
                authState: (state) => state.Auth,
            }),
        },
        data() {
            return {
                // isAuthenticated: localStorage.getItem("access_token") != null || "",
                isLoaded: false,
                dataPrograms: []
            };
        },
        mounted() {
            this.fetchPrograms()
        },
        methods: {
            registerClick(item) {
                    const baseUrl = process.env.alkademiAuth;
                    const programName = this.generateProgramName(item)
    
                    const redirect = "&redirectTo=" + window.location.origin;
                    const lmsId = "&lmsId=" + localStorage.getItem('lmsId');
    
                    const url = `${baseUrl}/register/${programName}?${redirect}${lmsId}`;
                    return url
            },
            generateProgramName(item) {
                var name = item.name.replace(/\s/g, '').toLowerCase()
                
                return name.replace('.', '-')
            },
            async fetchPrograms() {
                await this.$store.dispatch("cardProgramKelas/getPrograms").then(() => {
                    var statePrograms = this.$store.state.Programs;
    
                    if (!statePrograms.status) {
                        // console.log('Failed fetch programs', statePrograms.message)
    
                        this.isLoaded = true;
                    } else {
                        // console.log('Success fetch programs', statePrograms.programs)
    
                        this.dataPrograms = statePrograms.programs;
                        this.isLoaded = true;
                    }
                });
            },
        }
    };
    </script>
