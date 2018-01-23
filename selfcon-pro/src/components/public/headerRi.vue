<template>
	<div>
		<header>
			<div class="header_logo">
				<div class="logo_img"><img src="../../assets/img/con_logo.png"/></div>
				<div class="logo_name" >系统信息</div>
			</div>
			<ul class="site_leader">
				<li v-for="(item,index) in sitesLeaders"  :class="{site_leader_hover:check == index}"  @click="choseSite(index)">
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
				check:3,
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
					this.$router.push("/")
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