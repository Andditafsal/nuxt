<template>
    <section class="wrapper bg-light">

        <!-- <div id="silabus" class="body-container">

            <div id="silabus-content" class="wrapper">
                <div class="container">
                    <HeaderWrapper v-if="isLoaded" :data="header"/>

                    <Silabustables v-if="isLoaded" :data="dataCourses" role="course" class="mb-5"/>

                    <Silabustables v-if="isLoaded" :data="dataMethod" role="meet"/>

                    <Loading v-else />
                </div>
            </div>

            
            <CallToAction v-if="isLoaded" :data="cta" :isPrimary="true"/>

        </div> -->

        <div class="container py-8 py-md-10">
            
            <div class="col-xl-10 mx-auto">
                <div class="col-md-8 col-lg-9 col-xl-8 col-xxl-7 pe-xl-15">
                  <h2 v-if="header" class="display-4 mb-10">{{header.title}}</h2>
                </div>
                <!--/column -->
              </div>
            <!-- /.row -->
            <div class="row">
                <div class="col-xl-10 mx-auto">
                    <!-- <form class="filter-form mb-10">
                        <div class="row">
                            <div class="col-md-2 mb-3">
                                <div class="form-select-wrapper">
                                    <select class="form-select "  >
                                        <option>No</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <div class="form-select-wrapper">
                                    <select class="form-select" aria-label="">
                                        <option selected>Materi</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <div class="form-select-wrapper">
                                    <select class="form-select" aria-label="">
                                        <option selected>Point</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </form> -->
                    <div class="job-list mb-10">
                        <div class="card mb-4 lift">
                            <div class="card-header d-flex justify-content-center">
                                <h3 class="w-100 text-center">Materi</h3>
                                <h3 class="w-100 text-center">Point</h3>
                            </div>
                            <div v-for="(course, index) in dataCourses" :key="index" class="card-body p-5">
                                <span class="row justify-content-between align-items-center">
                                    <div class="col-md-6 mb-2 mb-md-0 d-flex align-items-center text-body">
                                        <span class="col-md-6 avatar bg-red text-white w-9 h-9 fs-17 me-3">{{index + 1}}</span>
                                        <div>
                                            <h5 class="m-0">{{course.title}}</h5>
                                            <span>{{course.description}}</span>
                                        </div>
                                    </div>
                                    <span class="col-7 col-md-4 col-lg-6 text-body d-flex align-items-center">
                                        <ul>
                                            <li v-for="(modul, i) in course.list" :key="i" >{{modul}}</li>
                                        </ul>
                                    </span>
                                </span>
                            </div>
                            <!-- /.card-body -->
                        </div>
                        <!-- /.card -->
                        <div v-for="(item, index) in dataMethod" :key="index" class="card mb-4 lift">
                            <div class="card-body p-5">
                                <span class="row justify-content-between align-items-center">
                                    <span class="col-md-5 mb-2 mb-md-0 d-flex align-items-center text-body">
                                        <!-- <span class="avatar bg-green text-white w-9 h-9 fs-17 me-3">2</span>  -->
                                        {{item.title}}
                                    </span>
                                    <span class="col-7 col-md-4 col-lg-6 text-body d-flex align-items-center">
                                        <i class="uil me-1"></i>{{item.value}}</span>
                                </span>
                            </div>
                            <!-- /.card-body -->
                        </div>
                        <!-- /.card -->
                    </div>
                </div>
                <!-- /column -->
            </div>
            <!-- /.row -->
        </div>
        <!-- /.container -->
    </section>
</template>

<script>
// import HeaderWrapper from '@/components/template/micro/header/HeaderWrapper.vue'
// import Silabustables from "@/components/template/micro/table/SilabusTables.vue"
// import CallToAction from '@/components/CallToAction'
// import Loading from '@/components/Loading.vue'

export default {
    components:{
        // HeaderWrapper,
        // Silabustables,
        // CallToAction,
        // Loading
    },
    data(){
        return {
            program: '',
            isLoaded: false,

            header: null,

            // header: {
            //     'jongkoding': {
            //         id: 1,
            //         title: 'Materi JongKoding',
            //         description: 'Disusun oleh Praktisi dan Akademisi profesional demi Konten yang Update dalam Perkembangan Industri Digital',
            //     },
            //     'jongdesain': {
            //         id: 2,
            //         title: 'Materi JongDesain',
            //         description: 'Program pelatihan gratis bersertifikasi, berbasis project based learning dilengkapi dengan kurikulum yang relevan dan efektif yang diselenggarakan secara online',
            //     },
            //     'jongkonten': {
            //         id: 3,
            //         title: 'Materi JongKonten',
            //         description: 'Program pelatihan gratis bersertifikasi, berbasis project based learning dilengkapi dengan kurikulum yang relevan dan efektif yang diselenggarakan secara online',
            //     },
            // },

            dataCourses: [],
            dataMethod: [],

            cta: {
                title: 'Anda Berminat?',
                description: 'Jadi bagian dari perubahan pemuda-pemudi Indonesia dan mulai berkarya dalam dunia industri digital',
                btnTitle: 'Daftar Sekarang',
                btnURL: '/register/' + this.$route.params.program,
                onRegistration: null,
            }
        }
    },
    head: {
        link: [
            { rel: "stylesheet", href: '/assets/css/plugins.css' },
            // { rel: "stylesheet", href: '/assets/css/colors/sky.css' },
            { rel: "stylesheet", href: '/assets/css/fonts/urbanist.css' },
            { rel: "stylesheet", href: '/assets/css/style.css' },
        ],
        script: [
            // { src: "/assets/js/plugins.js", body: true },
            // { src: "/assets/js/theme.js", body: true },
        ],
    },
    mounted() {
        this.program = this.$route.params.program
        this.fetchPrograms()
    },
    methods: {
        async fetchPrograms(){

            await this.$store.dispatch('Programs/getPrograms')
            .then(() => {
                var statePrograms = this.$store.state.Programs

                if(!statePrograms.status) {
                    // console.log('Failed fetch programs', statePrograms.message)

                    this.isLoaded = true

                } else {
                    // console.log('Success fetch programs', statePrograms.programs)

                    var dataPrograms = statePrograms.programs

                    this.header = {}

                    dataPrograms.map((item) => {
                        if(item.name.replace(/\s/g, '').toLowerCase() == this.program) {

                            const object = {
                                id: item.id,
                                title: item.name,
                                description: item.description
                            }

                            this.header = object

                            this.cta.onRegistration = item.onRegistration;

                        }
                    })

                    this.fetchSilabusProgram()

                }
            })

        },
        async fetchSilabusProgram() {
            this.isLoaded = false

            await this.$store.dispatch('Courses/getSilabusByProgramId', this.header.id)
            .then(() => {
                const stateCourses = this.$store.state.Courses

                if(!stateCourses.status) {
                    // console.log('Failed fetch silabus', stateCourses.message)
                    this.isLoaded = true
                } else {
                    // console.log('Success fetch silabus', stateCourses.silabus)
                    const dataSilabus = stateCourses.silabus

                    dataSilabus.map((item) => {
                        var module = []
                        item.modules.map((data) => {
                            module.push(data.title)
                        })


                        const object = {
                            title: item.name,
                            description: item.description,
                            list: module,
                            method: item.method,
                            totalMeeting: item.totalMeeting
                        }

                        this.dataCourses.push(object)
                    })



                    // const method = {                            
                    //     title: 'Metode Pembelajaran',
                    //     value: 
                    // }

                    this.dataMethod.push(
                        {
                            title: 'Metode Pembelajaran',
                            value: dataSilabus[0].method
                        },
                        {
                            title: 'Jumlah Pertemuan',
                            value: dataSilabus[0].totalMeeting
                        },
                    )
                    
                    this.isLoaded = true
                }
            })
        }
    }
}
</script>
