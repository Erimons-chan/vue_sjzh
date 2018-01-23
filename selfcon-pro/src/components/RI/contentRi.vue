<template>
	<div id="Ri_content">
		<div class="content_fenpian">
			<p class="ri_title">分片报表展示</p>
			<div class="ri_out">
				<div v-for="(item,index) in sysfenpian0"  @click="checkIndex(index,item.hostname)" :class="[checked == index ? ri_fenpian_check:ri_fenpian]">
					<div class="fenpian_header">
						<span>机器名称：</span>
						<span>{{item.hostname}}</span>
					</div>
					<div class="fenpian_light_div">

						<div v-if="item.status == 'd'">
							<div class="fenpian_light_left">
								<div class="red_light"></div>
								<span>异常</span>
							</div>
							<div class="fenpian_light_right">
								<div class="grey_light"></div>
								<span>健康</span>
							</div>
						</div>
						<div v-else-if="item.status == 'u'">
							<div class="fenpian_light_left">
								<div class="grey_light"></div>
								<span>异常</span>
							</div>
							<div class="fenpian_light_right">
								<div class="blue_light"></div>
								<span>健康</span>
							</div>
						</div>

					</div>
					<span v-if="item.status == 'd'" class="alertName">警告</span>
				</div>
				<div class="ri_more">
					<Icon type="ios-arrow-down"></Icon>
					<Icon type="ios-arrow-down"></Icon>
					<Icon type="ios-arrow-down"></Icon>
				</div>
			</div>
		</div>

		<div style="padding: 0 20px;">
			<p class="ri_title">CPU、内存使用情况</p>
			<div class="cpu_bao">
				<div class="cpu_left">
					<div style="width: 600px;height: 300px;margin: 0 auto ;" ref="cpuEcharts"></div>
				</div>
				<div class="cpu_right">
					<div style="width: 670px;height: 300px;margin: 0 auto ;" ref="ncEcharts"></div>
				</div>
			</div>

		</div>
		<div style="padding: 0 20px;">
			<p class="ri_title">IO、DISK使用情况</p>
			<div class="cpu_bao">
				<div class="cpu_left">
					<div style="width: 600px;height: 300px;margin: 0 auto ;" ref="IOEcharts"></div>
				</div>
				<div class="cpu_right">
					<div style="width: 670px;height: 300px;margin: 0 auto ;" ref="DISKEcharts"></div>
				</div>
			</div>

		</div>
		<div style="padding: 0 20px;">
			<p class="ri_title">连接</p>
			<div class="link_bao">
				<Tabs type="card">
			        <TabPane label="信息">
			        	 <Table width="" height="400" border :columns="columns" :data="datalink" :loading="loading"></Table>
			        </TabPane>
			    </Tabs>
			</div>

		</div>
		<BackTop :height="100" :bottom="200">
	        <div class="top">返回顶端</div>
	    </BackTop>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				cputimeTicket:function(){},
				nctimeTicket:function(){},
				iotimeTicket:function(){},
				nctimeTicket:{},
				iotimeTicket:{},
				hostName:'',
				checked:0,
				ri_fenpian_check:'ri_fenpian_check',
				ri_fenpian:'ri_fenpian',
				sysfenpian0: [],
				sysfenpian: [],
				lessData:0,
				ocupData:0,
				loading:true,
				columns: [
                    {
                        title: 'procpid',
                        key: 'procpid',
                        width: 150,
                        fixed: 'left'
                    },
                    {
                        title: 'datid',
                        key: 'datid',
                        width: 100,
                    },
                    {
                        title: 'datname',
                        key: 'datname',
                      width: 100,
                    },
                    {
                        title: 'sessId',
                        key: 'sessId',
                       width: 100,
                    },
                    {
                        title: 'usename',
                        key: 'usename',
                       width: 100,
                    },
                    {
                        title: 'rsgid',
                        key: 'rsgid',
                       width: 100,
                    },
                    {
                        title: 'clientAddr',
                        key: 'clientAddr',
                       width: 200,
                    },
                    {
                        title: 'clientPort',
                        key: 'clientPort',
                       width: 100,
                    },
                    {
                        title: 'currentQuery',
                        key: 'currentQuery',
                       width: 300,
                    },
                    {
                        title: 'queryStart',
                        key: 'queryStart',
                       width: 200,
                    },
                    {
                        title: 'waiting',
                        key: 'waiting',
                       width: 100,
                    },
                    {
                        title: 'waitingReason',
                        key: 'waitingReason',
                       width: 200,
                    }
                ],
                datalink: []
			}
		},
		created() {
			console.log(this.cputimeTicket)
			this.getSYSinfo()
			this.getSectionInfo()
		},
		mounted() {

			this.getCPUechart();
			this.getIOechart();
			this.getncechart();
			this.getDISKechart();

		},
		destroyed(){
			clearInterval(this.cputimeTicket);
			clearInterval(this.nctimeTicket);
			clearInterval(this.iotimeTicket);
		},
		computed: {

		},
		methods: {
			checkIndex(index,hostId){
				console.log(index)
				console.log(hostId)
				if(this.checked == index){
					this.checked =index
				}else{
					this.checked =index
					this.$echarts.dispose(this.$refs.cpuEcharts);
					this.$echarts.dispose(this.$refs.ncEcharts);
					this.$echarts.dispose(this.$refs.IOEcharts);
					this.$echarts.dispose(this.$refs.DISKEcharts);
					clearInterval(this.cputimeTicket);
					clearInterval(this.nctimeTicket);
					clearInterval(this.iotimeTicket);
					let vm = this
					
					this.$nextTick(function() {
						vm.getCPUechart(hostId);
						vm.getIOechart(hostId);
						vm.getncechart(hostId);
						vm.getDISKechart(hostId);
						
					})
				}
		
			},
			getSectionInfo(){
				let vm = this;
				this.$http.post(this.$store.state.AjaxUrl+'/queryDatabaseCurrentActivity', 
					this.$qs.stringify({
					}),
					)
					.then(function(response) {
//						console.log(response.data)
						if(response.data.code =='0'){
						  vm.datalink = response.data.items
						  vm.loading = false
						}
					})
					.catch(function(err) {
						console.log(err)
					})
				
			},
			getSYSinfo(){
				
				let vm = this;
				this.$http.post(this.$store.state.AjaxUrl+'/queryHostInfo', 
					this.$qs.stringify({
					}),
					)
					.then(function(response) {
//						console.log(response.data)
						if(response.data.code =='0'){
						  vm.sysfenpian0 = response.data.items
						}
					})
					.catch(function(err) {
						console.log(err)
					})
			},
			
			getCPUechart(host) {
				var myChart = this.$echarts.init(this.$refs.cpuEcharts);
				var cpuData0 = ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0']
				let xData = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20']
				let CPUdata = ''
				var option = {
					title: {
						text: 'CPU'
					},
					color: ['#00ffff', '#00ffa2', '#f0e750'],
					legend: {
						orient: 'horizontal',
						right: "4%",
						top: '4%',
						itemGap: 20,
						data: ['CPU使用率'],
						textStyle: {
							color: '#444',
						}
					},
					grid: {
						show: true,
						left: 50,
						top: 40,
						right: 44,
						bottom: 42,
						borderWidth: 1,
						borderColor: '#e4e4e4',
						backgroundColor: '#fff',
					},
					tooltip: {
						trigger: 'axis',
						formatter: "{a} <br/>{c}%",
						axisPointer: {
							lineStyle: {
								color: '#ddd'
							}
						},
						backgroundColor: 'rgba(255,255,255,1)',
						padding: [5, 10],
						textStyle: {
							color: '#7588E4',
						},
						extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.3)'
					},
					calculable: true,
					xAxis: [{
						type: 'category',
						boundaryGap: false,
						//在（type: 'category'）中设置data有效
						data: xData,

						splitLine: { //坐标轴在 grid 区域中的分隔线；
							show: true,
							lineStyle: { //分割线颜色，可设单个，也可以设置数组。
								color: 'rgba(170,172,178,0.33)'
							}
						},
						axisLine: { //坐标轴轴线相关设置。就是数学上的x轴
							show: true,
							lineStyle: {
								color: 'rgba(170,172,178,0.53)'
							},
						},
						axisLabel: {
							textStyle: {
								color: '#fff',
								fontSize: 15,
							},
						},
					}],
					yAxis: [{
						type: 'value',
						min: 0,
						max: 100,
						splitLine: {
							show: true,
							lineStyle: {
								color: 'rgba(170,172,178,0.33)'
							}
						},
						axisLine: { //坐标轴轴线相关设置。就是数学上的y轴
							show: true,
							lineStyle: {
								color: 'rgba(170,172,178,0.53)'
							},
						},
						axisLabel: {
							show: true,
							formatter: function(v) {
								switch(v + '') {
									case '0':
										return '0%';
									case '20':
										return '20%';
									case '40':
										return '40%';
									case '60':
										return '60%';
									case '80':
										return '80%';
									case '100':
										return '100%';
									default:
										return '';
								}
							},
							textStyle: {
								color: '#666',
								fontSize: 12,
							},
						},

					}],

					series: [{
							name: 'CPU使用率',
							type: 'line',
							smooth: true, //是否平滑曲线显示
							lineStyle: { //线条样式 
								normal: {
									width: 1
								}
							},
							areaStyle: { //区域填充样式
								normal: {
									//线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
									color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
										offset: 0,
										color: 'rgba(0, 255, 255, 0.9)'
									}, {
										offset: 0.7,
										color: 'rgba(0, 255, 255, 0.6)'
									}], false),

									shadowColor: 'rgba(0, 0, 0, 0.9)', //阴影颜色
									shadowBlur: 10 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
								}
							},
							itemStyle: { //折现拐点标志的样式
								normal: {
									color: 'rgb(0,255,255)'
								}
							},
							data: cpuData0
						},

					] //series结束

				}
				myChart.setOption(option, true);

				let vm = this;
				vm.cputimeTicket = setInterval(function() {
					vm.$http.post(vm.$store.state.AjaxUrl+'/queryClusterCpuUsageInfo', {
						hostname:host
					})
					.then(function(response) {
//						console.log(response.data)
						if(response.data.code =='0'){
						  option.title.text = 'CPU'+ response.data.item.numOfCores +'核'
						  xData.push(response.data.item.currentTime)
						  xData.shift()
						  cpuData0.push(response.data.item.used)
						  cpuData0.shift()
						}
					})
					.catch(function(err) {
						console.log(err)
					})


					
					myChart.setOption(option, true);
					
				}, 2000)

			},
			getncechart(host) {
				var myChart = this.$echarts.init(this.$refs.ncEcharts);
				var ncData = []
				let xData = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20']
				var option = {
					title: {
						text: '内存'
					},
					color: ['#00ffff', '#00ffa2', '#f0e750'],
					legend: {
						orient: 'horizontal',
						right: "4%",
						top: '4%',
						itemGap: 20,
						data: ['内存占用'],
						textStyle: {
							color: '#444',
						}
					},
					grid: {
						show: true,
						left: 50,
						top: 40,
						right: 44,
						bottom: 42,
						borderWidth: 1,
						borderColor: '#e4e4e4',
						backgroundColor: '#fff',
					},
					tooltip: {
						trigger: 'axis',
						formatter: "{a} <br/>{c}%",
						axisPointer: {
							lineStyle: {
								color: '#ddd'
							},
						
						},
						backgroundColor: 'rgba(255,255,255,1)',
						padding: [5, 10],
						textStyle: {
							color: '#7588E4',
						},
						extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.3)'
					},
					xAxis: [{
						type: 'category',
						boundaryGap: false,
						//在（type: 'category'）中设置data有效
						data: xData,

						splitLine: { //坐标轴在 grid 区域中的分隔线；
							show: true,
							lineStyle: { //分割线颜色，可设单个，也可以设置数组。
								color: 'rgba(170,172,178,0.33)'
							}
						},
						axisLine: { //坐标轴轴线相关设置。就是数学上的x轴
							show: true,
							lineStyle: {
								color: 'rgba(170,172,178,0.53)'
							},
						},
						axisLabel: {
							textStyle: {
								color: '#fff',
								fontSize: 15,
							},
						},
					}],
					yAxis: [{
						type: 'value',
						min: 0,
						max: 100,
						splitLine: {
							show: true,
							lineStyle: {
								color: 'rgba(170,172,178,0.33)'
							}
						},
						axisLine: { //坐标轴轴线相关设置。就是数学上的y轴
							show: true,
							lineStyle: {
								color: 'rgba(170,172,178,0.53)'
							},
						},
						axisLabel: {
							show: true,
							formatter: function(v) {
								return v + '%'
							},
							textStyle: {
								color: '#666',
								fontSize: 12,
							},
						},

					}],
					visualMap: {
						top: 50,
						right: 0,
						pieces: [{
							gt: 0,
							lte: 80,
							color: '#096',

						}, {
							gt: 80,
							lte: 100,
							color: 'red'
						}],
						outOfRange: {
							color: '#999'
						}
					},
					series: [{
							name: '内存占用',
							type: 'line',
							smooth: true, //是否平滑曲线显示
							lineStyle: { //线条样式 
								normal: {
									width: 3,
									shadowColor: 'rgba(0,0,0,0.4)',
									shadowBlur: 10,
									shadowOffsetY: 10
								}
							},
							areaStyle: { //区域填充样式
							},
							itemStyle: { //折现拐点标志的样式
								normal: {
									color: 'rgb(0,255,255)'
								}
							},
							data: ncData
						},

					] //series结束

				}
				myChart.setOption(option, true);
				let vm = this;
				vm.nctimeTicket = setInterval(function() {
					vm.$http.post(vm.$store.state.AjaxUrl+'/queryClusterMemoryUsageInfo', {
						hostname:host
					})
					.then(function(response) {
//						console.log(response.data)
						ncData.push(response.data.item.usage*100)
						if(ncData.length > 21) {
							ncData.shift()
							xData.push(response.data.item.currentTime)
							xData.shift()
						}
						
					})
					.catch(function(err) {
						console.log(err)
					})


					
					myChart.setOption(option, true);
				}, 2000)
				

			},
			getIOechart(host) {
				var myChart = this.$echarts.init(this.$refs.IOEcharts);
				var IOData1 = []
				var IOData2 = []
				let xData = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20']
				var option = {
					title: {
						text: 'IO'
					},
					color: ['#00ffff', '#00ffa2', '#f0e750'],
					legend: {
						orient: 'horizontal',
						right: "4%",
						top: '4%',
						itemGap: 20,
						data: ['read', 'write'],
						textStyle: {
							color: '#444',
						}
					},
					grid: {
						show: true,
						left: 80,
						top: 40,
						right: 44,
						bottom: 42,
						borderWidth: 1,
						borderColor: '#e4e4e4',
						backgroundColor: '#fff',
					},
					tooltip: {
						trigger: 'axis',
						formatter: "{b}<br/>{a0}:{c0}kb/s<br/>{a1}:{c1}kb/s",
						axisPointer: {
							lineStyle: {
								color: '#ddd'
							}
						},
						backgroundColor: 'rgba(255,255,255,1)',
						padding: [5, 10],
						textStyle: {
							color: '#7588E4',
						},
						extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.3)'
					},
					xAxis: [{
						type: 'category',
						boundaryGap: false,
						//在（type: 'category'）中设置data有效
						data: xData,

						splitLine: { //坐标轴在 grid 区域中的分隔线；
							show: true,
							lineStyle: { //分割线颜色，可设单个，也可以设置数组。
								color: 'rgba(170,172,178,0.33)'
							}
						},
						axisLine: { //坐标轴轴线相关设置。就是数学上的x轴
							show: true,
							lineStyle: {
								color: 'rgba(170,172,178,0.53)'
							},
						},
						axisLabel: {
							textStyle: {
								color: '#fff',
								fontSize: 15,
							},
						},
					}],
					yAxis: [{
						type: 'value',
						min: 0,
//						max: 100,
						splitLine: {
							show: true,
							lineStyle: {
								color: 'rgba(170,172,178,0.33)'
							}
						},
						axisLine: { //坐标轴轴线相关设置。就是数学上的y轴
							show: true,
							lineStyle: {
								color: 'rgba(170,172,178,0.53)'
							},
						},
						axisLabel: {
							show: true,
							formatter: function(v) {
								return v + 'kb/s'
							},
							textStyle: {
								color: '#666',
								fontSize: 12,
							},
						},

					}],
					series: [{
							name: 'read',
							type: 'line',
							smooth: true, //是否平滑曲线显示
							lineStyle: { //线条样式 
								normal: {
									width: 3,
									shadowColor: 'rgba(0,0,0,0.4)',
									shadowBlur: 10,
									shadowOffsetY: 10
								}
							},
							areaStyle: { //区域填充样式
							},
							itemStyle: { //折现拐点标志的样式
								normal: {
									color: 'rgb(0,255,255)'
								}
							},
							data: IOData1
						},
						{
							name: 'write',
							type: 'line',
							smooth: true, //是否平滑曲线显示
							lineStyle: { //线条样式 
								normal: {
									width: 3,
									shadowColor: 'rgba(0,0,0,0.4)',
									shadowBlur: 5,
									shadowOffsetY: 5
								}
							},
							areaStyle: { //区域填充样式
							},
							itemStyle: { //折现拐点标志的样式
								normal: {
									color: '#19be6b'
								}
							},
							data: IOData2
						},

					] //series结束

				}
				myChart.setOption(option, true);
				let vm = this
				vm.iotimeTicket = setInterval(function() {
					vm.$http.post(vm.$store.state.AjaxUrl+'/queryClusterDiskIoInfo', {
						hostname:host
					})
					.then(function(response) {
//						console.log(response.data)
						IOData1.push(response.data.items[0].readPs)
						IOData2.push(response.data.items[0].wrtnPs)
						if(IOData1.length > 21) {
							IOData1.shift()
							IOData2.shift()
							xData.push(response.data.items[0].currentTime)
							xData.shift()
					}
						
					})
					.catch(function(err) {
						console.log(err)
					})


					myChart.setOption(option, true);
				}, 2000)

			},
			getDISKechart(host) {

				var myChart = this.$echarts.init(this.$refs.DISKEcharts);
				var option = {
						title: {
						text: 'DISK'
						},
						tooltip:{
							trigger: 'item',
							formatter: "{a} <br/>{b} :{d}%"
						},
						series: [{
							name: 'DISK',
							type: 'pie',
							radius: '68%',
							center: ['50%', '50%'],
							clockwise: false,
							data: [{
								value: 0,
								name: '剩余'
							}, {
								value: 0,
								name: '已用'
							}],
							label: {
								normal: {
									textStyle: {
										color: '#999',
										fontSize: 14,
									}
								}
							},
							labelLine: {
								normal: {
									show: false
								}
							},
							itemStyle: {
								normal: {
									borderWidth: 4,
									borderColor: '#ffffff',
								},
								emphasis: {
									borderWidth: 0,
									shadowBlur: 10,
									shadowOffsetX: 0,
									shadowColor: 'rgba(0, 0, 0, 0.5)'
								}
							}
						}],
						color: [
							'#00acee',
							'#52cdd5'
						],
						backgroundColor: '#fff'
					}
				
				this.$http.post(this.$store.state.AjaxUrl+'/queryClusterDiskFreeInfo', {
						hostname:host
					})
					.then(function(response) {
//						console.log(response.data.item.usage)
						if(response.data.code =='0'){
//							console.log(option)
							let value = response.data.item.usage*100
							option.series[0].data[1].value = value
							option.series[0].data[0].value = 100 - response.data.item.usage*100
							if(value>85){
								option.color[1] = 'red'
							}
							
							
							myChart.setOption(option, true);
						}
						
						
					})
					.catch(function(err) {
						console.log(err)
					})

				
					

		}

	},
	components: {

	}
	}
</script>

<style lang="scss" scoped>
	@import '../../assets/css/Ri/riconment.scss';
</style>