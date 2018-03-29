export default function (VueRouter,store) {
	const routes = [
		{
			path: '/',
			component: require('views/content/index.vue'),
			children:[
				{
					path: '/',
					name:'homepage',
					component: require('views/content/index/index.vue'),
				},
				{
					path: '/search',
					component: require('views/content/search/search.vue'),
				},
				{
					path: '/footprint',
					component: require('views/content/footprint/footprint.vue'),
				},
				{
					path: '/mine',
					name:'mine',
					component: require('views/content/mine/mine.vue'),
				},
				{
					path: '/travel',
					component: require('views/content/index/travel.vue'),
				},    
				{
					path: '/international',
					component: require('views/content/index/international.vue'),
				},   
				{
					path: '/publicWelfare',
					component: require('views/content/index/publicWelfare.vue'),
				},
				{
					path: '/customized',
					component: require('views/content/index/customized.vue'),
				},   
				{
					path: '/video',
					component: require('views/content/index/video.vue'),
				},   
				{
					path: '/photo',
					component: require('views/content/index/photos.vue'),
				},   
				{
					path: '/order',
					component: require('views/content/mine/order.vue'),
				},
				{
					path: '/searchResult',
					component: require('views/content/search/searchResult.vue'),
				},
				{
					path: '/changePhone',
					component: require('views/content/mine/changePhone.vue'),
				},
				{
					path: '/suggest',
					component: require('views/content/mine/suggest.vue'),
				},
				{
					path: '/joined',
					component: require('views/content/mine/joined.vue'),
				},
				{
					path: '/service',
					component: require('views/content/mine/service.vue'),
				},
				{
					path: '/honorList',
					component: require('views/content/footprint/honorList.vue'),
				},
				{
					path: '/honorDetail',
					component: require('views/content/footprint/honorDetail.vue'),
				},
				{
					path: '/numberRule',
					component: require('views/content/mine/numberRule.vue'),
				},
				{
					path: '/coinRule',
					component: require('views/content/mine/coinRule.vue'),
				}

			]
		},
		{
			path: '/qcode',
			component: require('views/content/mine/qcode.vue'),
		},
		{
			path: '/createOrder',
			component: require('views/content/index/createOrder.vue'),
		},
		{
			path: '/detailOne',
			component: require('views/content/index/detailOne.vue'),
		},
		{
			path: '/detailTwo',
			component: require('views/content/index/detailTwo.vue'),
		},
		{
			path: '/detailThree',
			component: require('views/content/index/detailThree.vue'),
		},
		{
			path: '/detailFour',
			component: require('views/content/index/detailFour.vue'),
		},
		{
			path: '/detailFive',
			component: require('views/content/index/detailFive.vue'),
		},
		{
			path: '/production',
			component: require('views/content/mine/production.vue'),
		},
		{
		path: '/productionDetail',
		component: require('views/content/mine/productionDetail.vue'),
		},
		{
		path: '/photoDetail',
		component: require('views/content/index/photoDetail.vue'),
		},
		{
			path: '/family',
			component: require('views/content/mine/family.vue'),
		},
		{
			path: '/addPerson',
			component: require('views/content/mine/addPerson.vue'),
		},
		{
			path: '/friend',
			component: require('views/content/mine/friend.vue'),
		},
		{
			path: '/moreIntro',
			component: require('views/content/mine/moreIntro.vue'),
		},
		{
			path: '/edit',
			component: require('views/content/mine/edit.vue'),
		},
	]
	// let u = navigator.userAgent; 
	// let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端 
	// let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 
	// let = routeMode;
	// if(isAndroid){
	// 	routeMode = 'hash';
	// }else if(isiOS){
	// 	routeMode = 'history';
	// }
  const router = new VueRouter({
		mode:'hash',
		// base: '/dist',
		routes
	})
	router.beforeEach((to, from, next)=>{
		next()
	})
	store.dispatch('SYNC_ALL')
	return router
}