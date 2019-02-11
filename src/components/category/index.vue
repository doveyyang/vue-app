<template>
    <div>
        <bannerHead />
        <mainContent />
    </div>
</template>

<script>
import bannerHead from '../home/search'
import mainContent from './main'
export default {
  data () {
    return {
      msg: '分类页'
    }
  },
  components:{
    bannerHead,mainContent
  }
}
</script>
<style scoped>
/* @import '../../assets/css/searchpage.css'; */
</style>
