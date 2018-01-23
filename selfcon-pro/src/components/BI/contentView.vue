<template>
	<div id="Content">
		<div class="content_left">
			<div class="content_left_input">
				<Input v-model="searchValue" icon="ios-search-strong" placeholder="搜索..." style="width: 200px"></Input>
			</div>
			<ul class="content_left_title">
				<div v-for="(item,index) in dataTitle">
					<li @click="chooseLI(index)">
						<div class="title_content">
							<span class="title_icon">
	    						<i v-if="index == '0'">
	    							<Icon type="person"></Icon>  							
	    						</i>
	    						<i v-else-if="index =='1'">
	    							<Icon type="person-stalker"></Icon>
	    						</i>
	    						<i v-else-if="index == '2'">
	    							<Icon type="ios-paper"></Icon>
	    						</i>
	    						<i v-else-if="index == '3'">
	    							<Icon type="social-dropbox"></Icon>
	    						</i>
	    						<i v-else-if="index == '4'">
	    							<Icon type="social-hackernews"></Icon>
	    						</i>
	    						<span class="title_content_detail">{{item.table_cn_name}}</span>
							</span>
							<span class="drop_icon" :class="{rol_icon:checked == index}">
	    						<i :class="{rol_icon:checked == index}">
	    							<Icon type="arrow-right-b"></Icon>
	    						</i>
	    					</span>
						</div>

					</li>

					<transition name="toggle_left_in">
						<ul v-if="checked == '0'" :class="[checked == index ? blockChild:blockDefalt,Childrens_li]" :style="{height:SearchHeight0*40 +'px !important'}">
							<draggable :data="{'name':item.fieldName,'cname':item.fieldCnName,'type':item.fieldType,'path':item.path}" v-for="(item,index) in SearchsonType0" :key="index+'0'" @dragstart="onSourceDragStart" @dragend="onSourceDragEnd">
								<li class="drop_li">
									<i v-if="item.fieldType =='string'"><Icon type="social-skype"></Icon></Icon></i>
									<i v-else-if="item.fieldType =='date'"><Icon type="ios-clock"></Icon></i>
									<i v-else><img class="icon_number" src="../../assets/img/number.png"/></i>
									<span>{{item.fieldCnName}}</span>
								</li>
							</draggable>
						</ul>

						<ul v-else-if="checked =='1'" :class="[checked == index ? blockChild:blockDefalt,Childrens_li]" :style="{height:SearchHeight1*40 +'px !important'}">
							<draggable :data="{'name':item.fieldName,'cname':item.fieldCnName,'type':item.fieldType,'path':item.path}" v-for="(item,index) in SearchsonType1" :key="index+'1'" @dragstart="onSourceDragStart" @dragend="onSourceDragEnd">
								<li class="drop_li">
									<i v-if="item.fieldType =='string'"><Icon type="social-skype"></Icon></Icon></i>
									<i v-else-if="item.fieldType =='date'"><Icon type="ios-clock"></Icon></i>
									<i v-else><img class="icon_number" src="../../assets/img/number.png"/></i>
									<span>{{item.fieldCnName}}</span>
								</li>
							</draggable>
						</ul>

						<ul v-else-if="checked == '2'" :class="[checked == index ? blockChild:blockDefalt,Childrens_li]" :style="{height:SearchHeight2*40 +'px !important'}">
							<draggable :data="{'name':item.fieldName,'cname':item.fieldCnName,'type':item.fieldType,'path':item.path}" v-for="(item,index) in SearchsonType2" :key="index+'2'" @dragstart="onSourceDragStart" @dragend="onSourceDragEnd">
								<li class="drop_li">
									<i v-if="item.fieldType =='string'"><Icon type="social-skype"></Icon></Icon></i>
									<i v-else-if="item.fieldType =='date'"><Icon type="ios-clock"></Icon></i>
									<i v-else><img class="icon_number" src="../../assets/img/number.png"/></i>
									<span>{{item.fieldCnName}}</span>
								</li>
							</draggable>
						</ul>

						<ul v-else-if="checked == '3'" :class="[checked == index ? blockChild:blockDefalt,Childrens_li]" :style="{height:SearchHeight3*40 +'px !important'}">
							<draggable :data="{'name':item.fieldName,'cname':item.fieldCnName,'type':item.fieldType,'path':item.path}" v-for="(item,index) in SearchsonType3" :key="index +'3'" @dragstart="onSourceDragStart" @dragend="onSourceDragEnd">
								<li class="drop_li">
									<i v-if="item.fieldType =='string'"><Icon type="social-skype"></Icon></Icon></i>
									<i v-else-if="item.fieldType =='date'"><Icon type="ios-clock"></Icon></i>
									<i v-else><img class="icon_number" src="../../assets/img/number.png"/></i>
									<span>{{item.fieldCnName}}</span>
								</li>
							</draggable>
						</ul>

						<ul v-else-if="checked == '4'" :class="[checked == index ? blockChild:blockDefalt,Childrens_li]" :style="{height:SearchHeight4*40 +'px !important'}">
							<draggable :data="{'name':item.fieldName,'cname':item.fieldCnName,'type':item.fieldType,'path':item.path}" v-for="(item,index) in SearchsonType4" :key="index+'4'" @dragstart="onSourceDragStart" @dragend="onSourceDragEnd">
								<li class="drop_li">
									<i v-if="item.fieldType =='string'"><Icon type="social-skype"></Icon></Icon></i>
									<i v-else-if="item.fieldType =='date'"><Icon type="ios-clock"></Icon></i>
									<i v-else><img class="icon_number" src="../../assets/img/number.png"/></i>
									<span>{{item.fieldCnName}}</span>
								</li>
							</draggable>
						</ul>
					</transition>
				</div>
			</ul>
		</div>
		<div class="content_right">
			<div class="content_right_top">
				<div class="content_right_top_header" @click="slideUp">
					<span>条件查询</span>
					<i :class="[isDown ? slid_Down_Icon:'']"><Icon type="chevron-down"></Icon></i>
				</div>
				<div class="content_right_top_body" :class="[isDown ? slide_class:'']">
					<div class="content_right_drop">
						<span class="content_right_condition" draggable="false">
							<i><Icon type="funnel"></Icon></i>
							<span>维度</span>
						</span>
						<droppable @drop="onDrop1" @dragenter="onDragEnter" @dragover="onDragOver" @dragleave="onDragLeave">
							<ul class="addTips_ul">
								<li v-for="(item,index) in BefdimensionFields">
									<i v-if="item.fieldType == 'string'" class="icon_set" ><Icon type=""></Icon></i>
									<i v-else class="icon_set" @click="setCondition1(index,item.cname,item.fieldType)"><Icon type="ios-gear"></Icon></i>
									<span>{{item.changename}}</span>
									<i class="icon_delete_tip" @click="deleteIcon1(index)"><Icon type="close-circled"></Icon></i>
								</li>
							</ul>
						</droppable>
					</div>
					<div class="content_right_drop" :class="[isDown ? slide_class:'']">
						<span class="content_right_condition" draggable="false">
							<i><Icon type="funnel"></Icon></i>
							<span>度量</span>
						</span>
						<droppable @drop="onDrop2" @dragenter="onDragEnter" @dragover="onDragOver" @dragleave="onDragLeave">
							<ul class="addTips_ul">
								<li v-for="(item,index) in BefrateFields">
									<i class="icon_set" @click="setCondition2(index,item.cname,item.fieldType)"><Icon type="ios-gear"></Icon></i>
									<span>{{item.changename}}</span>
									<i class="icon_delete_tip" @click="deleteIcon2(index)"><Icon type="close-circled"></Icon></i>
								</li>
							</ul>
						</droppable>
					</div>
					<div class="content_right_drop" :class="[isDown ? slide_class:'']">
						<span class="content_right_condition" draggable="false">
							<i><Icon type="funnel"></Icon></i>
							<span>条件</span>
						</span>
						<droppable @drop="onDrop3" @dragenter="onDragEnter" @dragover="onDragOver" @dragleave="onDragLeave">
							<ul class="addTips_ul">
								<li v-for="(item,index) in BefconditionFields">
									<i class="icon_set" @click="setCondition3(index,item.cname,item.fieldType)"><Icon type="ios-gear"></Icon></i>
									<span>{{item.changename}}</span>
									<i class="icon_delete_tip" @click="deleteIcon3(index)"><Icon type="close-circled"></Icon></i>
								</li>
							</ul>
						</droppable>
					</div>
					<p style="height: 40px;text-align: left;margin:10px 0 0 70px">
						<Button type="primary" :loading="loading" icon="ios-search-strong" @click="toLoading" :disabled="isSubmit">
					        <span v-if="!loading">查询</span>
					        <span v-else>查询中...</span>
					    </Button>
					</p>
				</div>
			</div>

			<div class="content_right_table">
					<Table width="tableWidth" :height="tableHeight" :loading="tableLoading" border :columns="columns0" :data="data0"></Table>
			</div>
		</div>
		<vodal :show="showModel1" :width='width1' :height='height1' animation="flip" @hide="showModel1 = false">
			<div class="M1_header">离散区间设置</div>
			<div class="M1_body">
				<p class="M1_body_set">
					<span>{{modelName1}}:</span>
					<span><Input v-model="value01" placeholder="请输入..." style="width: 300px;font-size: 14px;"></Input></span>
					
				</p>
				<p class="M1_body_way" v-show="isDate">
					<span>方式:</span>
					<span>
		    			<Select v-model="value02" clearable style="width:300px;font-size: 14px;">
					        <Option v-for="item in Setways1" :value="item.value" :key="item.value"></Option>
					    </Select>
		    		</span>
				</p>
				<p class="M1_body_end">
					<Button @click="closeMO1">关闭</Button>
					<Button type="primary" @click="conmitinfo1">提交</Button>
				</p>
			</div>
		</vodal>
		<vodal :show="showModel2" :width='width1' :height='height2' animation="rotate" @hide="showModel2 = false">
			<div class="M1_header">数值方式</div>
			<p class="M2_body_way">
				<span>方式:</span>
				<span>
			    	<Select v-model="value11" clearable style="width:300px;font-size: 14px;">
						<Option v-for="item in Setways2" :value="item.value" :key="item.value"></Option>
					</Select>
			    </span>
			</p>
			<!--<table class="M2_body_table">
				<tr>
					<td>指标来源</td>
					<td>Data</td>
				</tr>
				<tr>
					<td>指标属性</td>
					<td>Data</td>
				</tr>
				<tr>
					<td>定义</td>
					<td>汇率</td>
				</tr>
			</table>-->
			<p class="M2_body_end">
				<Button @click="closeMO2">关闭</Button>
				<Button type="primary" @click="conmitinfo2">提交</Button>
			</p>

		</vodal>
		<vodal :show="showModel3" :width='width1' :height='height3' animation="door" @hide="showModel3 = false">
			<div class="M1_header">条件设置</div>
			<p class="M3_body_way">
				<span class="M3_span1">{{modelName3}}:</span>
				<span class="M3_span2">
					<!--	
					<span v-else><InputNumber v-model="value22" :min='1' style="width: 300px;font-size: 14px;"></InputNumber></span>
					<DatePicker type="date" :value="value22" placeholder="Select date" style="width: 200px"></DatePicker>
					-->
			    		<Select v-model="value21" clearable style="width:100px;font-size: 14px;">
						     <Option v-for="(item,index) in Setways3" :value="item.value" :key="item.value"></Option>
						</Select>
						<p v-if="inpuType == 'date'">
							<span v-if="value21 == '区间'">
								<DatePicker type="date" v-model="value23" format="yyyy/MM/dd" placeholder="Select date" style="width: 120px;font-size: 14px;"></DatePicker>
								-
								<DatePicker type="date" v-model="value24" format="yyyy/MM/dd" placeholder="Select date" style="width: 120px;font-size: 14px;"></DatePicker>
							</span>
							<span v-else>
								<DatePicker type="date" v-model="value22" format="yyyy/MM/dd" placeholder="Select date" style="width: 300px;font-size: 14px;"></DatePicker>
							</span>
						</p>
						<p v-else-if="inpuType == 'string'">
							<span v-if="value21 == '区间'">
								<Input v-model="value23" placeholder="请输入..." style="width: 100px;font-size: 14px;"></Input>
								-
								<Input v-model="value24" placeholder="请输入..." style="width: 100px;font-size: 14px;"></Input>
							</span>
							<span v-else>
								<Input v-model="value22" placeholder="请输入..." style="width: 300px;font-size: 14px;"></Input>
							</span>
						</p>
						<p v-else>
							<span v-if="value21 == '区间'">
								<InputNumber v-model="value230" :min='1' style="width: 100px;font-size: 14px;"></InputNumber>
								-
								<InputNumber v-model="value240" :min='1' style="width: 100px;font-size: 14px;"></InputNumber>
							</span>
							<span v-else>
								<InputNumber v-model="value220" :min='1' style="width: 300px;font-size: 14px;"></InputNumber>
							</span>
						</p>
						

				</span>
			</p>
			<p class="M3_body_end">
				<Button @click="closeMO3">关闭</Button>
				<Button type="primary" @click="conmitinfo3">提交</Button>
			</p>

		</vodal>
	</div>
</template>

<script>
	import Draggable from '../dropAngdrag/draggable'
	import Droppable from '../dropAngdrag/droppable'
	export default {

		props: {

		},
		data() {
			return {
				isSubmit:false,
				inpuType:'',
				tableWidth:'',
				tableHeight: 0,
				tableLoading: false,
				isDate: false,
				beforeName: '',
				beforCname: '',
				modelIndex: 0,
				SearchHeight0: 6,
				SearchHeight1: 6,
				SearchHeight2: 6,
				SearchHeight3: 6,
				SearchHeight4: 6,
				value01: '',
				value02: '',
				value11: '',
				value21: '',
				value22:'',
				value23:'',
				value24:'',
				value220:0,
				value230:0,
				value240:0,
				Setways1: [{
						value: '按日',
					},
					{
						value: '按周',
					},
					{
						value: '按月',
					},
					{
						value: '按年',
					},
				],
				Setways2: [{
						value: '求和',
					},
					{
						value: '平均值',
					},
					{
						value: '计数',
					},
					{
						value: '最大值',
					},
					{
						value: '最小值',
					},
				],
				Setways3: [{
						value: '等于',
					},
					{
						value: '不等于',
					},
					{
						value: '大于',
					},
					{
						value: '小于',
					},
					{
						value: '大于等于',
					},
					{
						value: '小于等于',
					},
					{
						value: '区间',
					},
				],
				modelName1: '',
				modelName2: '',
				modelName3: '',
				width1: 600,
				height1: 280,
				height2: 180,
				height3: 180,
				showModel1: false,
				showModel2: false,
				showModel3: false,
				BefdimensionFields: [],
				BefrateFields: [],
				BefconditionFields: [],
				dimensionFields: [],
				rateFields: [],
				conditionFields: [],
				slide_class: 'slide_class',
				loading: false,
				slid_Down_Icon: 'slid_Down_Icon',
				isDown: false,
				blockChild: 'blockChild',
				blockDefalt: 'blockDefalt',
				Childrens_li: 'Childrens_li',
				searchValue: '',
				checked: 5,
				lastIndex: 5,
				dataTitle: [{
						value: '代理人'
					},
					{
						value: '客户'
					},
					{
						value: '保单'
					},
					{
						value: '险种'
					},
					{
						value: '险种费用'
					},
				],
				sonType0: [],
				sonType1: [],
				sonType2: [],
				sonType3: [],
				sonType4: [],
				columns0: [],
				data0: []
			}
		},
		created() {
			//全局配置
			this.$Notice.config({
				top: 90,
				duration: 3
			});
			this.$Message.config({
				top: 90,
				duration: 3
			});
			this.getLeftData();
			
		},
		computed: {
			SearchsonType0: function() {
				var vm = this
				return this.sonType0.filter(function(item) {
					return item.fieldCnName.indexOf(vm.searchValue) !== -1
				})
			},
			SearchsonType1: function() {
				var vm = this
				return this.sonType1.filter(function(item) {
					return item.fieldCnName.indexOf(vm.searchValue) !== -1
				})
			},

			SearchsonType2: function() {
				var vm = this
				return this.sonType2.filter(function(item) {
					return item.fieldCnName.indexOf(vm.searchValue) !== -1
				})
			},
			SearchsonType3: function() {
				var vm = this
				return this.sonType3.filter(function(item) {
					return item.fieldCnName.indexOf(vm.searchValue) !== -1
				})
			},
			SearchsonType4: function() {
				var vm = this
				return this.sonType4.filter(function(item) {
					return item.fieldCnName.indexOf(vm.searchValue) !== -1
				})
			}

		},
		watch: {
			SearchsonType0: function(value, oldvalue) {
				if(value.length >= 7) {
					this.SearchHeight0 = 6
				} else {
					this.SearchHeight0 = value.length
				}

			},
			SearchsonType1: function(value, oldvalue) {
				if(value.length >= 7) {
					this.SearchHeight1 = 6
				} else {
					this.SearchHeight1 = value.length
				}
			},
			SearchsonType2: function(value, oldvalue) {
				if(value.length >= 7) {
					this.SearchHeight2 = 6
				} else {
					this.SearchHeight2 = value.length
				}
			},
			SearchsonType3: function(value, oldvalue) {
				if(value.length >= 7) {
					this.SearchHeight3 = 6
				} else {
					this.SearchHeight3 = value.length
				}
			},
			SearchsonType4: function(value, oldvalue) {
				if(value.length >= 7) {
					this.SearchHeight4 = 6
				} else {
					this.SearchHeight4 = value.length
				}
			}
		},
		methods: {
			getLeftData() {
				let vm = this;
				this.$http.post(this.$store.state.SQLUrl + '/getAdHocTablesInfo', {
						domainId: 1
					})
					.then(function(response) {
						//						console.log(response.data)
						if(response.data.code == '000000') {
							vm.dataTitle = response.data.tableCnNameList
							//							console.log(response.data.tablesFields)
							vm.sonType0 = response.data.tablesFields.t_agent
							vm.sonType1 = response.data.tablesFields.t_customer
							vm.sonType2 = response.data.tablesFields.t_policy
							vm.sonType3 = response.data.tablesFields.t_policy_product
							vm.sonType4 = response.data.tablesFields.t_product_fee
						}
					})
					.catch(function(err) {
						console.log(err)
					})
			},

			toLoading() {
				this.loading = true
				this.tableLoading = true
				this.dimensionFields = this.BefdimensionFields
				this.rateFields = JSON.parse(JSON.stringify(this.BefrateFields))
				this.conditionFields = this.BefconditionFields
				let num = this.rateFields.length
				for(let i = 0; i < num; i++) {
					this.rateFields[i].name = this.rateFields[i].functionName + this.rateFields[i].name
				}
				//				console.log(this.rateFields)
				//				console.log(this.BefrateFields)
				this.$nextTick(function() {
					let vm = this;
					this.$http.post(this.$store.state.SQLUrl + '/getAdHocQueries', {
							dimensionFields: vm.BefdimensionFields,
							rateFields: vm.rateFields,
							conditionFields: vm.BefconditionFields,
							pageSize: '200',
							pageCount: '1'
						})
						.then(function(response) {
							console.log(response.data)
							if(response.data.code == '000000') {
								vm.$Message.success({
									content: response.data.message
								});
								let len = response.data.sqlResult.data.length
//								console.log(len)
								let Twidth = response.data.sqlResult.headers.length
								if(len > 8) {
									vm.tableHeight = 400
								} else {
									vm.tableHeight = 50 * len + 40
								}
								vm.loading = false
								vm.tableLoading = false
								let arr = []
								if(Twidth > 8) {
									let Isfirst = true
									for(let value of response.data.sqlResult.headers) {
										if(Isfirst == true) {
											arr.push({
												title: value,
												key: value,
												"fixed": "left",
												width: 200
											})
											Isfirst = false
										} else {
											arr.push({
												title: value,
												key: value,
												width: 200
											})
										}

									}
//									console.log(vm.columns0)
									vm.columns0 = arr
								} else {
									
									for(let value of response.data.sqlResult.headers) {
										arr.push({
											"title": value,
											"key": value
										})
									}
//									console.log(vm.columns0)
									vm.tableWidth = ''
									vm.columns0 = arr
									
								}
								vm.data0 = response.data.sqlResult.data
							} else {
								vm.$Message.warning({
									content: response.data.message
								});
								vm.isSubmit = false
								vm.loading = false
								vm.tableLoading = false
							}
							
						})
						.catch(function(err) {
							console.log(err)
						})

				})
				//发请求

			},
			chooseLI(index) {
				//折叠
				if(this.lastIndex == index) {
					this.checked = 5
					this.lastIndex = 5
				} else {
					//	console.log(this.lastIndex)
					//	console.log(index)
					this.lastIndex = index
					this.checked = index
				}

			},
			slideUp() {
				this.isDown = !this.isDown
			},
			onSourceDragStart(param) {
				//								console.log(param)
			},
			onSourceDragEnd(param) {
				//				console.log(param)
				!param.target && param.methods.removeDragedNode('back', 1000)
			},
			onDrop1(params) {
				//				console.log(params.data)
				params.methods.removeDragedNode('blost')
				//未传前sql  BefdimensionFields
				let num = this.BefdimensionFields.length

				if(num == 0) {
					this.BefdimensionFields.push({
						"cname": params.data.cname,
						"name": params.data.name,
						"changename": params.data.cname,
						"path": params.data.path,
						"fieldType": params.data.type,
						"isAggregateFunction": '1',
						"values": '',
						"style":'',
						"isRange": ''
					});
				} else {
					for(let i = 0; i < num; i++) {
						if(this.BefdimensionFields[i].name == params.data.name) {
							this.$Notice.error({
								title: '已添加' + params.data.cname + '为纬度',
							});
							break
						} else {
							if(i == num - 1) {
								this.BefdimensionFields.push({
									"cname": params.data.cname,
									"name": params.data.name,
									"changename": params.data.cname,
									"path": params.data.path,
									"fieldType": params.data.type,
									"isAggregateFunction": '1',
									"values": '',
									"style":'',
									"isRange": ''
								});
							}
						}

					}

				}
				//					console.log(this.BefdimensionFields)

			},
			onDrop2(params) {
//				console.log(params.data)
				params.methods.removeDragedNode('blost')
				//未传前sql
					if(params.data.path == '' || params.data.path == null) {
						this.BefrateFields.push({
							"cname": params.data.cname,
							"name": '(' + params.data.name + ')',
							"changename": params.data.cname + '(计数)',
							"path": params.data.path,
							"fieldType": params.data.type,
							"functionName": 'COUNT',
							"style":'',
							"values": ''
						})
					} else {
						this.BefrateFields.push({
							"cname": params.data.cname,
							"name": '(Nested(' + params.data.path + '.' + params.data.name + '))',
							"changename": params.data.cname + '(计数)',
							"path": params.data.path,
							"fieldType": params.data.type,
							"functionName": 'COUNT',
							"style":'',
							"values": ''
						})
					}
				//				console.log(this.BefrateFields)

			},
			onDrop3(params) {
//				console.log(params.data)
				params.methods.removeDragedNode('blost')
				//未传前sql
				let num = this.BefconditionFields.length

				if(num == 0) {
					this.BefconditionFields.push({
						"cname": params.data.cname,
						"name": params.data.name,
						"changename": params.data.cname,
						"path": params.data.path,
						"fieldType": params.data.type,
						"relationshipMark": '',
						"style":'',
						"values": ''
					});
				} else {
					for(let i = 0; i < num; i++) {
						if(this.BefconditionFields[i].name == params.data.name) {
							this.$Notice.error({
								title: '已添加' + params.data.cname + '为条件',
							});
							break
						} else {
							if(i == num - 1) {
								this.BefconditionFields.push({
									"cname": params.data.cname,
									"name": params.data.name,
									"changename": params.data.cname,
									"path": params.data.path,
									"fieldType": params.data.type,
									"relationshipMark": '',
									"style":'',
									"values": ''
								});
							}
						}

					}

				}
				//					console.log(this.BefconditionFields)

			},
			onDragEnter(params) {

				params.methods.showStateIcon('add')

			},
			onDragOver(params) {
				params.el.style.boxShadow = '2px 2px 10px rgba(0, 0, 0, 0.2)'
			},
			onDragLeave(params) {
				params.methods.hideStateIcon()
				params.el.style.boxShadow = 'none'
			},
			//选择第几个
			setCondition1(index, name, type) {
				//console.log(type)
				this.showModel1 = true
				this.value01 = ''
				this.value02 = ''
				this.value01 = this.BefdimensionFields[index].values
				this.value02 = this.BefdimensionFields[index].style
				console.log(this.value01)
				if(type == 'date') {
					this.isDate = true
				} else {
					this.isDate = false
				}
				this.modelName1 = name
				
				//				console.log(index)
				this.modelIndex = index

			},
			setCondition2(index, name,type) {
				this.showModel2 = true
				this.modelName2 = name
				this.value11 = ''
				this.value11 = this.BefrateFields[index].style
				
				//				console.log(index)
				this.modelIndex = index
			},
			setCondition3(index, name,type) {
				this.showModel3 = true
				this.modelName3 = name
				this.value21 = this.BefconditionFields[index].style
				if(type == 'date'){
					if(this.BefconditionFields[index].style == '区间'){
						this.value23 = this.BefconditionFields[index].values.split(',')[0]
						console.log(this.value23)
						this.value24 = this.BefconditionFields[index].values.split(',')[1]
					}else{
						this.value22 = this.BefconditionFields[index].values
					}
				}else if(type == 'string'){
					if(this.BefconditionFields[index].style == '区间'){
						this.value23 = this.BefconditionFields[index].values.split(',')[0]
						this.value24 = this.BefconditionFields[index].values.split(',')[1]
					}else{
						this.value22 = this.BefconditionFields[index].values
					}
				}else{
					if(this.BefconditionFields[index].style == '区间'){
						this.value230 =Number(this.BefconditionFields[index].values.split(',')[0])
						this.value240= Number(this.BefconditionFields[index].values.split(',')[1])
					}else{
						this.value220 = Number(this.BefconditionFields[index].values)
					}
					
				}
				
				
				//				console.log(index)
				this.modelIndex = index
				this.inpuType = type
			},
			//			删除
			deleteIcon1(index) {
				this.BefdimensionFields.splice(index, 1);
				this.isSubmit = false
				this.loading = false
				this.tableLoading = false
			},

			deleteIcon2(index) {
				this.BefrateFields.splice(index, 1);
				this.isSubmit = false
				this.loading = false
				this.tableLoading = false
			},

			deleteIcon3(index) {
				this.BefconditionFields.splice(index, 1);
				this.isSubmit = false
				this.loading = false
				this.tableLoading = false
			},
			//提交模态框数值
			conmitinfo1() {
				this.isSubmit = false
				this.loading = false
				this.showModel1 = false
				let index = this.modelIndex
				//				console.log(this.BefdimensionFields[index].isAggregateFunction+'kong')
				//				console.log(this.modelIndex)
				//				console.log(this.value01)
				//				console.log(this.value02)
				this.BefdimensionFields[index].style = this.value02
				if(this.value02 == '') {
					this.BefdimensionFields[index].changename = this.BefdimensionFields[index].cname
				} else {
					this.BefdimensionFields[index].changename = this.BefdimensionFields[index].cname + '(' + this.value02 + ')'
				}

				let selectDate = ''
				switch(this.value02) {
					case '按日':
						selectDate = 'd'
						break;
					case '按周':
						selectDate = 'w'
						break;
					case '按月':
						selectDate = 'm'
						break;
					case '按年':
						selectDate = 'y'
						break;
					default:
						selectDate = '1'
						break;
				}
				if(this.value01 == '') {
					this.BefdimensionFields[index].isRange = ''
					if(this.value02 == '') {
						this.BefdimensionFields[index].isAggregateFunction = '1'
					} else {
						this.BefdimensionFields[index].isAggregateFunction = selectDate
					}

				} else {
					this.BefdimensionFields[index].isRange = 'y'
					this.BefdimensionFields[index].values = this.value01
					if(this.value02 == '') {
						this.BefdimensionFields[index].isAggregateFunction = '1'
					} else {
						this.BefdimensionFields[index].isAggregateFunction = selectDate
					}

				}
//				console.log(this.BefdimensionFields)

			},
			conmitinfo2() {
				this.isSubmit = false
				this.showModel2 = false
				this.loading = false
				//				console.log(this.modelIndex)
				let index = this.modelIndex
				//改变名字
				this.BefrateFields[index].style = this.value11
				if(this.value11 == '') {
					this.BefrateFields[index].changename = this.BefrateFields[index].cname + '(计数)'
				} else {
					this.BefrateFields[index].changename = this.BefrateFields[index].cname + '(' + this.value11 + ')'
				}
				//赋值functionName 不能重复判断
				let selectJiSuan = ''
				switch(this.value11) {
					case '求和':
						selectJiSuan = 'SUM'
						break;
					case '平均值':
						selectJiSuan = 'AVG'
						break;
					case '计数':
						selectJiSuan = 'COUNT'
						break;
					case '最大值':
						selectJiSuan = 'MAX'
						break;
					case '最小值':
						selectJiSuan = 'MIN'
						break;
					case '':
						selectJiSuan = 'COUNT'
						break;
				}
				let num = this.BefrateFields.length
				if(num == 1) {
					this.BefrateFields[index].functionName = selectJiSuan

				} else {
					for(let i = 0; i < num; i++) {
						if(i != index) {
							if(this.BefrateFields[index].name == this.BefrateFields[i].name) {
								if(this.BefrateFields[i].functionName == selectJiSuan) {
									this.$Notice.error({
										title: '已添加' + this.BefrateFields[index].name + selectJiSuan + '数值条件',
									});
									this.BefrateFields[index].functionName = selectJiSuan
									break
								} else {
									this.BefrateFields[index].functionName = selectJiSuan
									break
								}
							} else {
								if(i == num - 1) {
									this.BefrateFields[index].functionName = selectJiSuan
								} else {
									this.BefrateFields[index].functionName = selectJiSuan
								}
							}
						}

					}
				}
				
				//做出不能提交判断
				let typeC = this.BefrateFields[index].fieldType
				if(typeC == 'date'||typeC == 'string'){
					if(this.value11 == '计数'){
						return
					}else{
						this.$Notice.error({
							title: '此字段类型不能'+this.value11,
						});
						this.isSubmit = true
					}
				}
				
				//				console.log(this.BefrateFields)

			},
			conmitinfo3() {
				this.isSubmit = false
				this.showModel3 = false
				this.loading = false
//				console.log(this.modelIndex)
				let index = this.modelIndex
				let typeStyle = this.BefconditionFields[index].fieldType
				this.BefconditionFields[index].style = this.value21
				let selectMath = ''
				if(typeStyle == 'date'){
						var V22 = ''
						var V23 = ''
						var V24 = ''
					 if(this.value21 == '区间'){
					 	if(this.value23 =='' ||this.value24 ==''){
					 		 V23 = ''
							 V24 = ''
					 	}else{
					 		let y0 = new Date(this.value23).getFullYear()+'/'
						 	let m0 = (new Date(this.value23).getMonth() + 1)
						 	let d0 = '/'+new Date(this.value23).getDate()
						 	let y1 = new Date(this.value24).getFullYear()+'/'
						 	let m1 = (new Date(this.value24).getMonth() + 1)
						 	let d1 = '/'+new Date(this.value24).getDate()
						 	V23 = y0 + m0 + d0
							V24 = y1 + m1 + d1
							console.log(V23)
							console.log(V24)
					 	}
					 	
					 }else{
					 	if(this.value22 ==''){
					 		 V22 = ''
					 	}else{
					 		let y3 = new Date(this.value22).getFullYear()+'/'
						 	let m3 = new Date(this.value22).getMonth() + 1
						 	let d3 = '/'+new Date(this.value22).getDate()
						 	V22 = y3 + m3 + d3
					 	}
					 	
					 }
					  switch(this.value21) {
						case '等于': 
							selectMath = 'eql'
							this.BefconditionFields[index].relationshipMark = selectMath
							this.BefconditionFields[index].values = V22
							this.BefconditionFields[index].changename = this.BefconditionFields[index].cname + '(' + this.value21 + V22 + ')'
							break;
						case '不等于':
							selectMath = 'ueql'
							this.BefconditionFields[index].relationshipMark = selectMath
							this.BefconditionFields[index].values = V22
							this.BefconditionFields[index].changename = this.BefconditionFields[index].cname + '(' + this.value21 + V22 + ')'
							break;
						case '大于':
							selectMath = 'glt'
							this.BefconditionFields[index].relationshipMark = selectMath
							this.BefconditionFields[index].values = V22
							this.BefconditionFields[index].changename = this.BefconditionFields[index].cname + '(' + this.value21 + V22 + ')'
							break;
						case '小于':
							selectMath = 'less'
							this.BefconditionFields[index].relationshipMark = selectMath
							this.BefconditionFields[index].values = V22
							this.BefconditionFields[index].changename = this.BefconditionFields[index].cname + '(' + this.value21 + V22 + ')'
							break;
						case '大于等于':
							selectMath = 'geql'
							this.BefconditionFields[index].relationshipMark = selectMath
							this.BefconditionFields[index].values = V22
							this.BefconditionFields[index].changename = this.BefconditionFields[index].cname + '(' + this.value21 + V22 + ')'
							break;
						case '小于等于':
							selectMath = 'leql'
							this.BefconditionFields[index].relationshipMark = selectMath
							this.BefconditionFields[index].values = V22
							this.BefconditionFields[index].changename = this.BefconditionFields[index].cname + '(' + this.value21 + V22 + ')'
							break;
						case '区间':
							selectMath = 'range'
							this.BefconditionFields[index].relationshipMark = selectMath
							this.BefconditionFields[index].values = V23 + ',' + V24
							this.BefconditionFields[index].changename = this.BefconditionFields[index].cname + '(' + this.value21 + '[' + V23 + ',' + V24 + ']' + ')'
							break;
					}
					
				}else if(typeStyle == 'string'){
					switch(this.value21) {
						case '等于':
							selectMath = 'eql'
							this.BefconditionFields[index].relationshipMark = selectMath
							this.BefconditionFields[index].values = this.value22
							this.BefconditionFields[index].changename = this.BefconditionFields[index].cname + '(' + this.value21 + this.value22 + ')'
							break;
						case '不等于':
							selectMath = 'ueql'
							this.BefconditionFields[index].relationshipMark = selectMath
							this.BefconditionFields[index].values = this.value22
							this.BefconditionFields[index].changename = this.BefconditionFields[index].cname + '(' + this.value21 + this.value22 + ')'
							break;
						case '大于':
							selectMath = 'glt'
							this.BefconditionFields[index].relationshipMark = selectMath
							this.BefconditionFields[index].values = this.value22
							this.BefconditionFields[index].changename = this.BefconditionFields[index].cname + '(' + this.value21 + this.value22 + ')'
							break;
						case '小于':
							selectMath = 'less'
							this.BefconditionFields[index].relationshipMark = selectMath
							this.BefconditionFields[index].values = this.value22
							this.BefconditionFields[index].changename = this.BefconditionFields[index].cname + '(' + this.value21 + this.value22 + ')'
							break;
						case '大于等于':
							selectMath = 'geql'
							this.BefconditionFields[index].relationshipMark = selectMath
							this.BefconditionFields[index].values = this.value22
							this.BefconditionFields[index].changename = this.BefconditionFields[index].cname + '(' + this.value21 + this.value22 + ')'
							break;
						case '小于等于':
							selectMath = 'leql'
							this.BefconditionFields[index].relationshipMark = selectMath
							this.BefconditionFields[index].values = this.value22
							this.BefconditionFields[index].changename = this.BefconditionFields[index].cname + '(' + this.value21 + this.value22 + ')'
							break;
						case '区间':
							selectMath = 'range'
							this.BefconditionFields[index].relationshipMark = selectMath
							this.BefconditionFields[index].values = this.value23 + ',' + this.value24
							this.BefconditionFields[index].changename = this.BefconditionFields[index].cname + '(' + this.value21 + '[' + this.value23 + ',' + this.value24 + ']' + ')'
							break;
					}
				}else{
					switch(this.value21) {
						case '等于':
							selectMath = 'eql'
							this.BefconditionFields[index].relationshipMark = selectMath
							this.BefconditionFields[index].values = this.value220
							this.BefconditionFields[index].changename = this.BefconditionFields[index].cname + '(' + this.value21 + this.value220 + ')'
							break;
						case '不等于':
							selectMath = 'ueql'
							this.BefconditionFields[index].relationshipMark = selectMath
							this.BefconditionFields[index].values = this.value220
							this.BefconditionFields[index].changename = this.BefconditionFields[index].cname + '(' + this.value21 + this.value220 + ')'
							break;
						case '大于':
							selectMath = 'glt'
							this.BefconditionFields[index].relationshipMark = selectMath
							this.BefconditionFields[index].values = this.value220
							this.BefconditionFields[index].changename = this.BefconditionFields[index].cname + '(' + this.value21 + this.value220 + ')'
							break;
						case '小于':
							selectMath = 'less'
							this.BefconditionFields[index].relationshipMark = selectMath
							this.BefconditionFields[index].values = this.value220
							this.BefconditionFields[index].changename = this.BefconditionFields[index].cname + '(' + this.value21 + this.value220 + ')'
							break;
						case '大于等于':
							selectMath = 'geql'
							this.BefconditionFields[index].relationshipMark = selectMath
							this.BefconditionFields[index].values = this.value220
							this.BefconditionFields[index].changename = this.BefconditionFields[index].cname + '(' + this.value21 + this.value220 + ')'
							break;
						case '小于等于':
							selectMath = 'leql'
							this.BefconditionFields[index].relationshipMark = selectMath
							this.BefconditionFields[index].values = this.value220
							this.BefconditionFields[index].changename = this.BefconditionFields[index].cname + '(' + this.value21 + this.value220 + ')'
							break;
						case '区间':
							selectMath = 'range'
							this.BefconditionFields[index].relationshipMark = selectMath
							this.BefconditionFields[index].values = this.value230 + ',' + this.value240
							this.BefconditionFields[index].changename = this.BefconditionFields[index].cname + '(' + this.value21 + '[' + this.value230 + ',' + this.value240 + ']' + ')'
							break;
					}		
					
				}
				
				//				 console.log(this.BefconditionFields)

			},
			//关闭模态框
			closeMO1() {
				this.showModel1 = false
			},
			closeMO2() {
				this.showModel2 = false
			},

			closeMO3() {
				this.showModel3 = false
			},

		},
		components: {
			Draggable,
			Droppable
		},

	}
</script>

<style lang="scss" scoped>
	@import '../../assets/css/content.scss';
</style>