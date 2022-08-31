<template>
  <div class="container">
    <div class="row justify-content-center padding-bottom">
        <div>
          <judulKelas/>
          <cardKelas/>
        </div>
    </div>
  </div>
</template>

<script>
import cardKelas from '~/components/kelas/cardDetailKelas'
import judulKelas from '~/components/kelas/detailKelas'

export default{
  data(){
    return{
      page_name: "kelas"
    }
  },
  components: {
      judulKelas ,
      cardKelas
  }
}
</script>



