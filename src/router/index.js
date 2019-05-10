import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('../FrontView/login/loginPage')
    },
    {
      path: '/register',
      name: 'Rigister',
      component: () => import('../FrontView/register/register')
    },
    {
      path: '/homepage',
      name: 'Homepage',
      component: () => import('../FrontView/main/homepage'),
    },
    {
      path: '/projectDetail',
      name: 'ProjectDetail',
      component: () => import('../FrontView/main/projectDetail'),
    },
    {
      path: '/myDonation',
      name: 'MyDonation',
      component: () => import('../FrontView/main/myDonation'),
    },
    {
      path: '/application',
      name: 'Application',
      component: () => import('../FrontView/main/application'),
    },
    {
      path: '/donate',
      name: 'Donate',
      component: () => import('../FrontView/main/donate'),
    },
    {
      path: '/personalCenter',
      name: 'PersonalCenter',
      component: () => import('../FrontView/main/personalCenter'),
    },
    {
      path: '/myApplication',
      name: 'MyApplication',
      component: () => import('../FrontView/main/myApplication'),
    },
    // {
    //   path: '/header',
    //   name: 'header',
    //   component: () => import('../FrontView/header/header'),
    //   children: [
    //     {
    //       path: '/PCView/storage',
    //       name: 'admin',
    //       component: () => import('../PCView/admin/storage')
    //     },
    //     {
    //       path: '/PCView/sending',
    //       component: () => import('../PCView/admin/sending')
    //     },
    //     {
    //       path: '/PCView/packageHistory',
    //       component: () => import('../PCView/admin/packageHistory')
    //     },
    //     {
    //       path: '/PCView/userFeedback',
    //       component: () => import('../PCView/admin/userFeedback')
    //     },
    //     {
    //       path: '/PCView/adminInfo',
    //       component: () => import('../PCView/admin/adminInfo')
    //     },
    //   ]
    // },
    // {
    //   path: '/mobileView/order/storageOrder',
    //   name: 'storageOrder',
    //   component: () => import('../mobileView/order/storageOrder')
    // },
    // {
    //   path: '/mobileView/order/sendingOrder',
    //   name: 'sendingOrder',
    //   component: () => import('../mobileView/order/sendingOrder')
    // },
    // {
    //   path: '/PCView/superAdmin/areaManage',
    //   component: () => import('../PCView/superAdmin/areaManage')
    // },
    // {
    //   path: '/PCView/superAdmin/packageManage',
    //   component: () => import('../PCView/superAdmin/packageManage')
    // },
    // {
    //   path: '/PCView/superAdmin/superAdminInfo',
    //   component: () => import('../PCView/superAdmin/superAdminInfo')
    // }
  ]
})
