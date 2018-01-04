export default function (VueRouter) {
  const routes = [
    {
      path: '/',
      component: require('views/content/index.vue'),
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
    }
  ]
  const router = new VueRouter({
    mode: 'history',
    routes
  })
  return router
}