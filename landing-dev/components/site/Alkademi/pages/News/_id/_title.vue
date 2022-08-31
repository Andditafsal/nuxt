<template>
    <section class="wrapper bg-light">
        <div v-if="isLoaded && dataBlog != null" class="container pt-20 pb-14 pb-md-16">
            <div class="row">
                <div class="col-lg-10 mx-auto">
                    <div class="blog single mt-n17">
                        <div class="card">
                            <figure class="card-img-top">
                                <img :src="dataBlog.cover" alt="" />
                            </figure>
                            <div class="card-body">
                                <div class="classic-view">
                                    <article class="post">
                                        <div class="post-content mb-5">
                                            <h1>{{dataBlog.title}}</h1>
                                            <ul class="post-meta mb-5">
                                                <li class="post-date"><i class="uil uil-calendar-alt"></i><span>{{beautifyDate(dataBlog.updated_at)}}</span></li>
                                                <li class="post-author"><i class="uil uil-user"></i><span>{{dataBlog.authorName}}</span></li>
                                            </ul>

                                            <div v-html="dataBlog.article"></div>
                                        </div>
                                    </article>
                                    <!-- /.post -->
                                </div>
                                <!-- /.classic-view -->
                                <hr />
                                <!-- /.comment-form -->
                            </div>
                            <!-- /.card-body -->
                        </div>
                        <!-- /.card -->
                    </div>
                    <!-- /.blog -->
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
import { mapState } from "vuex";

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
    computed: {
        ...mapState({
            blogState: (state) => state.Blogs
        })
    },
    data() {
        return {
            isLoaded: false,
            dataBlog: null
        }
    },
    filters: {
        time: function (value) {
            if (!value) return '';
            const date = new Date(value);
            return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
        }
    },
    mounted() {
        this.fetchDataBlog()
    },
    methods: {
        beautifyDate(date) {
            return moment(date).fromNow()
        },
        async fetchDataBlog() {
            var fullPath = this.$route.fullPath;
            const blogId = fullPath.split('/')[2]

            try {
                await this.$store.dispatch('Blogs/getBlogById', {
                    id: blogId
                });
                if (!this.blogState.status) {
                    console.error(
                        "failed fetch blog detail",
                        this.blogState.message
                    );
                    this.isLoaded = true;
                } else {
                    this.dataBlog = this.blogState.blog
                    this.isLoaded = true;
                    setTimeout(() => {
                        this.setExternalJS()
                    }, 2000);
                }
            } catch (error) {
                console.error('catch: failed fetch blog detail', error);
            }
        },
        setExternalJS() {
            let plugin = document.getElementById("pluginsJs");
            let theme = document.getElementById("themeJs");
            let nav = document.getElementsByClassName("navbar-clone")

            let externalPlugin = document.createElement("script");
            externalPlugin.setAttribute("id", "pluginsJs");
            externalPlugin.setAttribute("src", "/assets/js/plugins.js");
            externalPlugin.setAttribute("defer", true);
            let externalTheme = document.createElement("script");
            externalTheme.setAttribute("id", "themeJs");
            externalTheme.setAttribute("src", "/assets/js/theme.js");
            externalTheme.setAttribute("defer", true);

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
        },
    }
};
</script>