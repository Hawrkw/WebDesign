import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('../mobileView/login/login')
    },
    {
      path: '/register',
      name: 'Rigister',
      component: () => import('../mobileView/login/register')
    },
    {
      path: '/PCView',
      name: 'PCView',
      component: () => import('../PCView/menu'),
      children: [
        {
          path: '/PCView/storage',
          name: 'admin',
          component: () => import('../PCView/admin/storage')
        },
        {
          path: '/PCView/sending',
          component: () => import('../PCView/admin/sending')
        },
        {
          path: '/PCView/packageHistory',
          component: () => import('../PCView/admin/packageHistory')
        },
        {
          path: '/PCView/userFeedback',
          component: () => import('../PCView/admin/userFeedback')
        },
        {
          path: '/PCView/adminInfo',
          component: () => import('../PCView/admin/adminInfo')
        },
      ]
    },
    {
      path: '/mobileView/business/chooseBusiness',
      name: 'chooseBusiness',
      component: () => import('../mobileView/business/chooseBusiness')
    },
    {
      path: '/mobileView/order/storageOrder',
      name: 'storageOrder',
      component: () => import('../mobileView/order/storageOrder')
    },
    {
      path: '/mobileView/order/sendingOrder',
      name: 'sendingOrder',
      component: () => import('../mobileView/order/sendingOrder')
    },
    {
      path: '/PCView/superAdmin/areaManage',
      component: () => import('../PCView/superAdmin/areaManage')
    },
    {
      path: '/PCView/superAdmin/packageManage',
      component: () => import('../PCView/superAdmin/packageManage')
    },
    {
      path: '/PCView/superAdmin/superAdminInfo',
      component: () => import('../PCView/superAdmin/superAdminInfo')
    }
  ]
})
