<template>
	<div>
		<header>
			<div class="header_logo">
				<div class="logo_img"><img src="../../assets/img/con_logo.png"/></div>
				<div class="logo_name" >数聚智汇</div>
			</div>
			<ul class="site_leader">
				<li v-for="(item,index) in sitesLeaders"  :class="[check == index ? site_leader_hover:'']"  @click="choseSite(index)">
					{{item.value}}
				</li>
			</ul>
		</header>
	</div>
</template>

<script>
export default {
	props: {
		  
		},
		data() {
			return {
				check:'0',
				site_leader_hover:'site_leader_hover',
				sitesLeaders:[
					{
						value:'BI分析'
					},
					{
						value:'SQL执行'
					},
					{
						value:'规则'
					},
					{
						value:'系统信息'
					}
//					{
//						value:'地图导览'
//					}
				]
			}
		},
		created() {
			
		},
		methods:{
			choseSite(index){
				this.check = index
				switch (index){
					case 0:
						break;
					case 1:
					window.location.href='../sqlTool/sql.html'
						break;
					case 2:
					window.location.href='../Rule/rule.html'
						break;
					case 3:
					this.$router.push("/RiHome")
						break;	
				}
			}
		}
}
</script>

<style lang="scss" scoped>
 @import '../../assets/css/header.scss';
</style>