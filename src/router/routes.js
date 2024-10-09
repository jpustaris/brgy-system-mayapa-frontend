const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Dashboard.vue') },
      { path: 'person-with-disabilities', component: () => import('pages/PWDPage.vue') },
      { path: 'seniors', component: () => import('pages/SeniorPage.vue') },
      { path: 'health-workers', component: () => import('pages/HealthWorkers.vue') },
      { path: 'blotters', component: () => import('pages/BlotterPage.vue') },
      { path: 'certificates', component: () => import('pages/CertificatesPage.vue') },
      { path: 'profiling', component: () => import('pages/ProfilingPage.vue') },
      { path: '/settings/user-management', component: () => import('pages/settings/UserManagement.vue') },
      { path: '/settings/role-management', component: () => import('pages/settings/RoleManagement.vue') },
      { path: '/settings/change-password', component: () => import('pages/settings/ChangePassword.vue') },
    
    ],
    beforeEnter(to, from, next) {
      if (localStorage.getItem('access_token')) {
        next();
      }
      else {
        next('/login');
      }
    }
  },

  // {
  //   path: '/admin',
  //   component: () => import('layouts/AdminLayout.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/Dashboard.vue') },
  //     { path: 'search', component: () => import('pages/SearchPage.vue') },
  //   ],
  //   beforeEnter(to, from, next) {
  //     if (localStorage.getItem('access_token')) {
  //       next();
  //     }
  //     else {
  //       next('/login');
  //     }
  //   }
  // },

  {
    path: '/login',
    name: 'login',
    component: () => import('pages/Login.vue'),
    beforeEnter(to, from, next) {
      if (localStorage.getItem('access_token')) {
        next('/');
      }
      else {
        next();
      }
    }
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
