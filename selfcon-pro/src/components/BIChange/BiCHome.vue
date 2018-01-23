<template>
  <div>
    <header-bi/>
    <contentC-view/>  
  </div>
</template>

<script>
import HeaderBi from '../public/headerBi.vue'
import ContentCView from '../BIChange/contentCView.vue'
export default {
  data () {
    return {
     
    }
  },
  components: {
			HeaderBi,
			ContentCView
		}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">
@import '../../assets/css/same.scss';
</style>
