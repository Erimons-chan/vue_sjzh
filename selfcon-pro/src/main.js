// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "babel-polyfill";
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex';
import store from './vuex/store';
import axios from 'axios';
import qs from 'qs';
import echarts from 'echarts';
//iview
import {Input,Icon,Button,Select,Option,Table,Notice,Tabs,TabPane,BackTop,Message,DatePicker,InputNumber} from 'iview';
import 'iview/dist/styles/iview.css';
//model
import Vodal from 'vodal';
import "vodal/common.css";
import "vodal/flip.css";
import "vodal/door.css";
import "vodal/rotate.css";

//iview
Vue.component('Input', Input);
Vue.component('Icon', Icon);
Vue.component('Button', Button);
Vue.component('Select', Select);
Vue.component('Option', Option);
Vue.component('Table', Table);
Vue.component('Tabs', Tabs);
Vue.component('TabPane', TabPane);
Vue.component('BackTop', BackTop);
Vue.component('DatePicker', DatePicker);
Vue.component('InputNumber', InputNumber);

//model
Vue.component(Vodal.name, Vodal);

Vue.use(Vuex);
Vue.prototype.$http = axios;
Vue.prototype.$qs = qs;
Vue.prototype.$Notice = Notice;
Vue.prototype.$Message = Message;
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
