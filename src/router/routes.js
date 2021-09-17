export default [
  {
    path: '/',
    redirect: '/home',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      { path: 'home', component: () => import('../views/HomeView.vue') },
      {
        path: 'news',
        component: () => import('../views/NewsView.vue'),
        children: [{
          path: ':newsId',
          component: () => import('../views/NewsView.vue'),
        }]
      },
      { path: 'videos', component: () => import('../views/VideosView.vue') },
      { path: 'members', component: () => import('../views/MembersView.vue') },
      { path: 'about', component: () => import('../views/AboutView.vue') },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    redirect: '/home',
  },
]
