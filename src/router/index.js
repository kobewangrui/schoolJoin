export default function (VueRouter) {
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
			]
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
		mode: 'history',
		routes
	})
	return router
}