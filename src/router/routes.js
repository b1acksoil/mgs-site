export default [
  {
    path: '/',
    redirect: '/home',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      { path: 'home', component: () => import('../views/HomeView.vue') },
      { path: 'news', component: () => import('../views/NewsView.vue') },
      { path: 'members', component: () => import('../views/MembersView.vue') },
      { path: 'about', component: () => import('../views/AboutView.vue') },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    redirect: '/home',
  },
]
