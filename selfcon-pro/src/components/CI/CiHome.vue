<template>
  <div>
    <header-ci/>
    <ci-left/>  
  </div>
</template>

<script>
import HeaderCi from '../public/headerCi.vue'
import CiLeft from '../CI/CiLeft.vue'
export default {
  data () {
    return {
     
    }
  },
  components: {
			HeaderCi,
			CiLeft
		}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">
@import '../../assets/css/same.scss';
</style>
