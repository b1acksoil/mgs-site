export default [
  {
    path: '/',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('../views/Home.vue') },
      { path: 'about', component: () => import('../views/About.vue') },
    ],
  },
]
