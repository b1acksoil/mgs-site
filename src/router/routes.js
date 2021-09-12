export default [
  {
    path: '/',
    redirect: '/home',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      { path: 'home', component: () => import('../views/Home.vue') },
      { path: 'about', component: () => import('../views/About.vue') },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    redirect: '/home',
  },
]
