<template>
  <div>
    <header-bi/>
    <content-view/>  
  </div>
</template>

<script>
import HeaderBi from '../public/headerBi.vue'
import ContentView from '../BI/contentView.vue'
export default {
  data () {
    return {
     
    }
  },
  components: {
			HeaderBi,
			ContentView
		}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">
@import '../../assets/css/same.scss';
</style>
