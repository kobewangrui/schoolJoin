// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import frame from 'views/frame'
import Router from './router/index'
import Resource from 'vue-resource'
import $ from 'jquery'
import store from './store/store'
import Vuerify from 'vuerify'
// 引入自定义验证规则
import myRules from './rules'
import './filter/formatDate'


// 移动端日历
import {DateTime} from 'vue-ydui/dist/lib.rem/datetime';
Vue.component(DateTime.name, DateTime);
// 下拉菜单
import {ActionSheet} from 'vue-ydui/dist/lib.rem/actionsheet';
Vue.component(ActionSheet.name, ActionSheet);
// 按钮
import {Button, ButtonGroup} from 'vue-ydui/dist/lib.rem/button';
Vue.component(Button.name, Button);
Vue.component(ButtonGroup.name, ButtonGroup);

//省市区级联菜单
import {CitySelect} from 'vue-ydui/dist/lib.rem/cityselect';
Vue.component(CitySelect.name, CitySelect);

// 轮播图
import {Slider, SliderItem} from 'vue-ydui/dist/lib.rem/slider';

Vue.component(Slider.name, Slider);
Vue.component(SliderItem.name, SliderItem);

// 表单
import {CellGroup, CellItem} from 'vue-ydui/dist/lib.rem/cell';
Vue.component(CellGroup.name, CellGroup);
Vue.component(CellItem.name, CellItem);

// 图片预览
import {LightBox, LightBoxImg, LightBoxTxt} from 'vue-ydui/dist/lib.rem/lightbox';
Vue.component(LightBox.name, LightBox);
Vue.component(LightBoxImg.name, LightBoxImg);
Vue.component(LightBoxTxt.name, LightBoxTxt);

window.jquery = window.$ = $
Vue.use(VueRouter)
Vue.use(Resource)
Vue.use(Vuerify,myRules)

Vue.config.productionTip = false
const router = Router(VueRouter,store)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<frame/>',
  components: { frame }
})
