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
      { path: 'profiling', component: () => import('pages/Profiling.vue') },
      { path: '/settings/user-management', component: () => import('pages/settings/UserManagement.vue') },
      { path: '/settings/role-management', component: () => import('pages/settings/RoleManagement.vue') },
      { path: '/settings/change-password', component: () => import('pages/settings/ChangePassword.vue') },
      { path: '/certificates/barangay-clearance', component: () => import('pages/certificates/Clearance.vue') },
      { path: '/certificates/business-permit', component: () => import('pages/certificates/BusinessPermit.vue') },
      { path: '/sms-blast', component: () => import('pages/SMSBlast.vue') },
      
      { path: '/certificates/certificate-of-residency', component: () => import('pages/certificates/Residency.vue') },
      { path: '/certificates/good-moral', component: () => import('pages/certificates/GoodMoral.vue') },
      { path: '/certificates/certificate-of-indigency', component: () => import('pages/certificates/Indigency.vue') },
      
      { path: '/dashboard/female-residents', component: () => import('pages/dashboard/Females.vue') },
      { path: '/dashboard/male-residents', component: () => import('pages/dashboard/Males.vue') },
      { path: '/dashboard/voter-residents', component: () => import('pages/dashboard/Voters.vue') },
      { path: '/dashboard/non-voter-residents', component: () => import('pages/dashboard/Non-voters.vue') },
    
    
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
