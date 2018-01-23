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
				<div class="content_right_top_header" >  
					<!--@click="slideUp"-->
					<span>规则</span>
					<i :class="[isDown ? slid_Down_Icon:'']"><Icon type="chevron-down"></Icon></i>
				</div>
				<div class="content_right_top_body" :class="[isDown ? slide_class:'']">
					<!--<div class="content_right_drop">
						<span class="content_right_condition" draggable="false">
							<i><Icon type="funnel"></Icon></i>
							<span>维度</span>
						</span>
						<droppable @drop="onDrop1" @dragenter="onDragEnter" @dragover="onDragOver" @dragleave="onDragLeave">
							<ul class="addTips_ul">
								<li v-for="(item,index) in BefdimensionFields">
									<i class="icon_set" @click="setCondition1(index,item.cname)"><Icon type="ios-gear"></Icon></i>
									<span>{{item.changename}}</span>
									<i class="icon_delete_tip" @click="deleteIcon1(index)"><Icon type="close-circled"></Icon></i>
								</li>
							</ul>
						</droppable>
					</div>-->
					<!--<div class="content_right_drop" :class="[isDown ? slide_class:'']">
						<span class="content_right_condition" draggable="false">
							<i><Icon type="funnel"></Icon></i>
							<span>数值</span>
						</span>
						<droppable @drop="onDrop2" @dragenter="onDragEnter" @dragover="onDragOver" @dragleave="onDragLeave">
							<ul class="addTips_ul">
								<li v-for="(item,index) in BefrateFields">
									<i class="icon_set" @click="setCondition2(index,item.cname)"><Icon type="ios-gear"></Icon></i>
									<span>{{item.changename}}</span>
									<i class="icon_delete_tip" @click="deleteIcon2(index)"><Icon type="close-circled"></Icon></i>
								</li>
							</ul>
						</droppable>
					</div>-->
					<div class="content_right_drop" :class="[isDown ? slide_class:'']">
						<span class="content_right_condition" draggable="false">
							<i><Icon type="funnel"></Icon></i>
							<span>规则:</span>
						</span>
						<droppable @drop="onDrop3" @dragenter="onDragEnter" @dragover="onDragOver" @dragleave="onDragLeave">
							<!--<ul class="addTips_ul">
								<li v-for="(item,index) in BefconditionFields">
									<i class="icon_set" @click="setCondition3(index,item.cname)"><Icon type="ios-gear"></Icon></i>
									<span>{{item.changename}}</span>
									<i class="icon_delete_tip" @click="deleteIcon3(index)"><Icon type="close-circled"></Icon></i>
								</li>
							</ul>-->
							<main class="addTips_ul"style="padding-left: 20px;padding-top: 20px;    -webkit-user-select:none; user-select:none;">
								<p class="" v-for="(item,index) in BefconditionFields" style="display: block;text-align: left;" @click="localIndex(index)">
									<span style="display:inline-block;width: 100px;text-align: left;">{{item.changename}}:</span>
									<span>
							    		<Select  clearable style="width:120px;font-size: 14px;">
										     <Option v-for="(item,index) in Setways3" :value="item.value" :key="item.value" @click.native="changeInput(index)"></Option>
										</Select>
										<span v-if="item.input" >
											<Input v-model="value23" placeholder="请输入..." style="width: 100px;font-size: 14px;"></Input>
											-
											<Input v-model="value24" placeholder="请输入..." style="width: 100px;font-size: 14px;"></Input>
										</span>
										<span v-else>
											<Input v-model="item.value" placeholder="请输入..." style="width: 300px;font-size: 14px;"></Input>
										</span>
										
							    	</span>
								</p>
							</main>
						</droppable>
					</div>
					<!--<p style="height: 40px;text-align: left;margin:10px 0 0 70px">
						<Button type="primary" :loading="loading" icon="ios-search-strong" @click="toLoading">
					        <span v-if="!loading">查询</span>
					        <span v-else>查询中...</span>
					    </Button>
					</p>-->
				</div>
			</div>

			<!--<div class="content_right_table">
				<Table width="" height="400" border :columns="columns0" :data="data0"></Table>
			</div>-->
		</div>
		<vodal :show="showModel1" :width='width1' :height='height1' animation="flip" @hide="showModel1 = false">
			<div class="M1_header">离散区间设置</div>
			<div class="M1_body">
				<p class="M1_body_set">
					<span>{{modelName1}}:</span>
					<span><Input v-model="value01" placeholder="请输入..." style="width: 300px;font-size: 14px;"></Input></span>
				</p>
				<p class="M1_body_way">
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
				<span>{{modelName3}}:</span>
				<span>
			    		<Select v-model="value21" clearable style="width:100px;font-size: 14px;">
						     <Option v-for="(item,index) in Setways3" :value="item.value" :key="item.value"></Option>
						</Select>
						<span v-if="value21 == '区间'">
							<Input v-model="value23" placeholder="请输入..." style="width: 100px;font-size: 14px;"></Input>
							-
							<Input v-model="value24" placeholder="请输入..." style="width: 100px;font-size: 14px;"></Input>
						</span>
						<span v-else>
							<Input v-model="value22" placeholder="请输入..." style="width: 300px;font-size: 14px;"></Input>
						</span>
						
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
				a:'',
				b:'',
				c:'',
				d:'',
				e:'',
				f:'',
				g:'',
				h:'',
				i:'',
				g:'',
				k:'',
				l:'',
				list:['a','b','c','d','e','f','g','h','i','g','k','l'],
				selectName1:'',
				selectName0:'',
				selectname:'',
				beforeName:'',
				beforCname:'',
				modelIndex:0,
				SearchHeight0: 6,
				SearchHeight1: 6,
				SearchHeight2: 6,
				SearchHeight3: 6,
				SearchHeight4: 6,
				value01: '',
				value02: '',
				value11: '',
				value21: '',
				value22: '',
				value23:'',
				value24:'',
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
				columns0: [{
						title: 'Name',
						key: 'name',
						width: 200,
						fixed: 'left'
					},
					{
						title: 'Age',
						key: 'age',

					},
					{
						title: 'Province',
						key: 'province',

					},
					{
						title: 'City',
						key: 'city',

					},
					{
						title: 'Address',
						key: 'address',

					},
					{
						title: 'Postcode',
						key: 'zip',

					},

				],
				localindex:'',
				data0: [{
						name: 'John Brown',
						age: 18,
						address: 'New York No. 1 Lake Park',
						province: 'America',
						city: 'New York',
						zip: 100000
					},
					{
						name: 'Jim Green',
						age: 24,
						address: 'Washington, D.C. No. 1 Lake Park',
						province: 'America',
						city: 'Washington, D.C.',
						zip: 100000
					},
					{
						name: 'Joe Black',
						age: 30,
						address: 'Sydney No. 1 Lake Park',
						province: 'Australian',
						city: 'Sydney',
						zip: 100000
					},
					{
						name: 'Jon Snow',
						age: 26,
						address: 'Ottawa No. 2 Lake Park',
						province: 'Canada',
						city: 'Ottawa',
						zip: 100000
					},
					{
						name: 'John Brown',
						age: 18,
						address: 'New York No. 1 Lake Park',
						province: 'America',
						city: 'New York',
						zip: 100000
					},
					{
						name: 'Jim Green',
						age: 24,
						address: 'Washington, D.C. No. 1 Lake Park',
						province: 'America',
						city: 'Washington, D.C.',
						zip: 100000
					},
					{
						name: 'Joe Black',
						age: 30,
						address: 'Sydney No. 1 Lake Park',
						province: 'Australian',
						city: 'Sydney',
						zip: 100000
					},
					{
						name: 'Jon Snow',
						age: 26,
						address: 'Ottawa No. 2 Lake Park',
						province: 'Canada',
						city: 'Ottawa',
						zip: 100000
					}
				]
			}
		},
		created() {
			//全局配置
			this.$Notice.config({
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
			localIndex(index){
				console.log(index)
				this.localindex = index
			},
			changeInput(num){
				console.log(num)
				console.log(this.localindex)
				if(num ==6){
						this.BefconditionFields[this.localindex].input = true
				}else{
					this.BefconditionFields[this.localindex].input = false
				}
			
				
				
			},
			getLeftData() {
				let vm = this;
				this.$http.post(this.$store.state.SQLUrl+'/getAdHocTablesInfo', 
					{
						domainId: 1
					})
					.then(function(response) {
						console.log(response.data)
						if(response.data.code =='000000'){
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
					
					if(num == 0){
						this.BefdimensionFields.push({
						"cname": params.data.cname,
						"name":	params.data.name,
						"changename":params.data.cname,
						"path":	params.data.path,
						"fieldType":params.data.type,
						"isAggregateFunction":'',
						"choseDate":'',
						"relationshipMark":'',
						"values":''
						});
					}else{
						for (let i = 0;i < num ;i++ ) {
							if(this.BefdimensionFields[i].name == params.data.name){
								this.$Notice.error({
					                title: '已添加'+ params.data.cname+'为纬度',
								});
								break
							}else{
								if(i == num - 1){
									this.BefdimensionFields.push({
										"cname": params.data.cname,
										"name":	params.data.name,
										"changename":params.data.cname,
										"path":	params.data.path,
										"fieldType":params.data.type,
										"isAggregateFunction":'',
										"choseDate":'',
										"relationshipMark":'',
										"values":''
									});
								}
							}
							
						}
						
						
					}
					console.log(this.BefdimensionFields)
								
			},
			onDrop2(params) {
				console.log(params.data)
				params.methods.removeDragedNode('blost')
				//未传前sql
				if(params.data.type == 'long' || params.data.type == 'double'){
					this.BefrateFields.push({
					"cname": params.data.cname,
					"name":	params.data.name,
					"changename":params.data.cname,
					"path":	params.data.path,
					"fieldType":params.data.type,
					"functionName":'SUM'
					})
				}else{
					this.$Notice.error({
					    title: '请选择数值类型字段',
					});
					
				}
				console.log(this.BefrateFields)
				
			},
			onDrop3(params) {
				console.log(params.data)
				params.methods.removeDragedNode('blost')
				//未传前sql
				let num = this.BefconditionFields.length
					
					if(num == 0){
						this.BefconditionFields.push({
						"cname": params.data.cname,
						"name":	params.data.name,
						"changename":params.data.cname,
						"path":	params.data.path,
						"fieldType":params.data.type,
						"relationshipMark":'',
						"values": '',
						"input":false
						});
					}else{
						for (let i = 0;i < num ;i++ ) {
							if(this.BefconditionFields[i].name == params.data.name){
								this.$Notice.error({
					                title: '已添加'+ params.data.cname+'为条件',
								});
								this.BefconditionFields.push({
									"cname": params.data.cname,
									"name":	params.data.name,
									"changename":params.data.cname,
									"path":	params.data.path,
									"fieldType":params.data.type,
									"relationshipMark":'',
									"values": '',
									"input":false
									});
								break
							}else{
								if(i == num - 1){
									this.BefconditionFields.push({
									"cname": params.data.cname,
									"name":	params.data.name,
									"changename":params.data.cname,
									"path":	params.data.path,
									"fieldType":params.data.type,
									"relationshipMark":'',
									"values": '',
									"input":false
									});
								}
							}
							
						}
						
						
					}
					console.log(this.BefconditionFields)

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
			setCondition1(index, name) {
				this.showModel1 = true
				this.modelName1 = name
				this.value01 = ''
				this.value02 = ''
//				console.log(index)
				this.modelIndex = index

			},
			setCondition2(index, name) {
				this.showModel2 = true
				this.modelName2 = name
				this.value11 = ''
//				console.log(index)
				this.modelIndex = index
			},
			setCondition3(index, name) {
				this.showModel3 = true
				this.modelName3 = name
				this.value21 = '' 
				this.value22 = ''
//				console.log(index)
				this.modelIndex = index
			},
//			删除
			deleteIcon1(index) {
				this.BefdimensionFields.splice(index, 1);
			},

			deleteIcon2(index) {
				this.BefrateFields.splice(index, 1);
			},

			deleteIcon3(index) {
				this.BefconditionFields.splice(index, 1);
			},
			//提交模态框数值
			conmitinfo1() {
				this.showModel1 = false
				let index = this.modelIndex
//				console.log(this.BefdimensionFields[index].isAggregateFunction+'kong')
//				console.log(this.modelIndex)
//				console.log(this.value01)
//				console.log(this.value02)
				this.BefdimensionFields[index].changename = this.BefdimensionFields[index].cname+'('+this.value02+')'
				let selectDate =''
				switch (this.value02){
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
						selectDate = ''
						break;
				}
				if(this.value01 == ''){
					this.BefdimensionFields[index].isAggregateFunction = '0'
					if(this.value02 == ''){
						this.BefdimensionFields[index].choseDate = ''	
					}else{	
						this.BefdimensionFields[index].choseDate = selectDate
					}
					
				}else{
					this.BefdimensionFields[index].isAggregateFunction = '1'
					if(this.value02 == ''){
						this.BefdimensionFields[index].choseDate = ''
						this.BefdimensionFields[index].relationshipMark = 'drange'
						this.BefdimensionFields[index].values = this.value01
					}else{
						this.BefdimensionFields[index].isAggregateFunction = selectDate
						this.BefdimensionFields[index].relationshipMark = 'drange'
						this.BefdimensionFields[index].values = this.value01
					}
					
				}
				console.log(this.BefdimensionFields)

			},
			conmitinfo2() {
				this.showModel2 = false
				console.log(this.modelIndex)
				let index = this.modelIndex
				this.BefrateFields[index].changename = this.BefrateFields[index].cname+'('+this.value11+')'
				let selectJiSuan =''
	
				switch (this.value11){
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
						selectJiSuan = 'SUM'
						break;
				}
				let num = this.BefrateFields.length

				if(num == 1){
					this.BefrateFields[index].functionName = selectJiSuan
				}else{
					for(let i = 0; i<num;i++){
						if(i !==index){
							if(this.BefrateFields[index].name == this.BefrateFields[i].name){
							if(this.BefrateFields[i].functionName == selectJiSuan){
								this.$Notice.error({
					                title: '已添加'+this.BefrateFields[index].name+selectJiSuan+'数值条件',
								});
								break
							}else{
								this.BefrateFields[index].functionName = selectJiSuan
								break
							}
						}else{
							if(i == num -1){
								this.BefrateFields[index].functionName = selectJiSuan
							}
						}
						}
						
					}
				}
				
				console.log(this.BefrateFields)

			},
			conmitinfo3() {
				this.showModel3 = false
				console.log(this.modelIndex)
				let index = this.modelIndex
				let selectMath =''
				
				switch (this.value21){
					case '等于':
					 	selectMath = 'eql'
					 	this.BefconditionFields[index].relationshipMark = selectMath
					 	this.BefconditionFields[index].values = this.value22
					 	this.BefconditionFields[index].changename = this.BefconditionFields[index].cname+'('+this.value21+this.value22+')'
						break;
					case '不等于':
					 	selectMath = 'ueql'
					 	this.BefconditionFields[index].relationshipMark = selectMath
					 	this.BefconditionFields[index].values = this.value22
					 	this.BefconditionFields[index].changename = this.BefconditionFields[index].cname+'('+this.value21+this.value22+')'
						break;
					case '大于':
						selectMath = 'glt'
						this.BefconditionFields[index].relationshipMark = selectMath
						this.BefconditionFields[index].values = this.value22
						this.BefconditionFields[index].changename = this.BefconditionFields[index].cname+'('+this.value21+this.value22+')'
						break;	
					case '小于':
						selectMath = 'less'
						this.BefconditionFields[index].relationshipMark = selectMath
						this.BefconditionFields[index].values = this.value22
						this.BefconditionFields[index].changename = this.BefconditionFields[index].cname+'('+this.value21+this.value22+')'
						break;	
					case '大于等于':
						selectMath = 'geql'
						this.BefconditionFields[index].relationshipMark = selectMath
						this.BefconditionFields[index].values = this.value22
						this.BefconditionFields[index].changename = this.BefconditionFields[index].cname+'('+this.value21+this.value22+')'
						break;
					case '小于等于':
						selectMath = 'leql'
						this.BefconditionFields[index].relationshipMark = selectMath
						this.BefconditionFields[index].values = this.value22
						this.BefconditionFields[index].changename = this.BefconditionFields[index].cname+'('+this.value21+this.value22+')'
						break;
					case '区间':
						selectMath = 'range'
						this.BefconditionFields[index].relationshipMark = selectMath
						this.BefconditionFields[index].values = this.value23 +','+this.value24
						this.BefconditionFields[index].changename = this.BefconditionFields[index].cname+'('+this.value21+'['+this.value23+','+this.value24+']'+')'
						break;
				}
				 console.log(this.BefconditionFields)

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
	@import '../../assets/css/BIChangeCss/content.scss';
</style>