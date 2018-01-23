<template>
  <div>
    <header-ri/>
    <content-ri/>
  </div>
</template>

<script>
import HeaderRi from '../public/headerRi.vue'
import ContentRi from '../RI/contentRi.vue'
export default {
  data () {
    return {
     
    }
  },
  components: {
			HeaderRi,
			ContentRi
		}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">
@import '../../assets/css/same.scss';
</style>
