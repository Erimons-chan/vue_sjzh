import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 定义状态,变量名尽量按照驼峰写法
state: {
		AjaxUrl:'http://139.224.146.209:8080/sd/clientQuery',
		SQLUrl:'http://139.224.146.209:8080/sd/adHocQueries',
//		AjaxUrl:'/sd/clientQuery',
//		SQLUrl:'/sd/adHocQueries',
// CiLeft
		IsFirstRefrish:true,
},
mutations:{
	IsFirstRefrish(state,msg){
  		state.IsFirstRefrish = msg;
  	},
}
})

export default store