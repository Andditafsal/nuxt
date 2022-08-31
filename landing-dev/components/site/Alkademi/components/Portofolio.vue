<template>
    <section class="wrapper bg-light">
        <div class="container py-14 py-md-16">
            <h2 class="fs-15 text-uppercase text-muted mb-3">Kegiatan Kami</h2>
            <div class="row gx-lg-8 mb-10 gy-5">
            <div class="col-lg-6">
                <h3 class="display-5 mb-0">Semangat Berani Memulai kami hadirkan dalam beragam kegiatan di seluruh Indonesia</h3>
            </div>
            <!-- /column -->
            <div class="col-lg-6">
                <p class="lead mb-0">Kami menghadirkan program kegiatan yang mendorong generasi muda Indonesia untuk berani memulai dan berani berubah untuk menuju Indonesia terampil digital</p>
            </div>
            <!-- /column -->
            
            </div>
            <!-- /.row -->
            <div class="row row-cols-2 row-cols-md-3 row-cols-xl-5 gx-lg-6 gy-6 justify-content-center">
            <div v-for="(item, index) in listPortofolio" :key="index" @click="goTo(item.url)" class="col">
                <div class="card shadow-lg h-100 align-items-center">
                <div class="card-body align-items-center d-flex px-3 py-6 p-md-8">
                    <figure v-if="item.logo != null" class="px-md-3 px-xl-0 px-xxl-3 mb-0"><img :src="require(`~/assets/Alkademi/images/${item.logo}`)" alt="" /></figure>
                    <h1 v-else class="text-center">{{item.name}}</h1>
                </div>
                <!--/.card-body -->
                </div>
                <!--/.card -->
            </div>
            <!--/column -->
            </div>
            <!--/.row -->
        </div>
        <!-- /.container -->
    </section>
    <!-- /section -->
</template>

<script>
export default {
    data() {
        return {
            // imgClicked:false,
            listPortofolio: [
                {
                    name: "Lailatul Coding",
                    logo: "lailatul-coding.png",
                    url: "https://lailatulcoding.id/"
                },
                {
                    name: "SMK Coding",
                    logo: "smkcoding.png",
                    url: "https://smkcoding.id/"
                },
                {
                    name: "Pesilat",
                    url: "/pesilat"
                },
            ]
        }
    },
    methods: {
        goTo(url) {
            window.open(url, '_blank')
        },
    }
}
</script>