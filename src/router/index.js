export default function (VueRouter,store) {
	const routes = [
		{
			path: '/',
			component: require('views/content/index.vue'),
			children:[
				{
					path: '/',
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
					path: '/edit',
					component: require('views/content/mine/edit.vue'),
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
				}

			]
		},

		{
			path: '/createOrder',
			component: require('views/content/index/createOrder.vue'),
		},
		{
			path: '/detail',
			component: require('views/content/index/detail.vue'),
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
	]
  const router = new VueRouter({
		// mode: 'history',
		routes
	})
	store.dispatch('SYNC_ALL')
	return router
}