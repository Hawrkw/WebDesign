export default[
  {
    path: 'superAdmin',
    component: () => import('../PCView/superAdmin/adminManage')
  },
  {
    path: 'superAdmin/areaManage',
    component: () => import('../PCView/superAdmin/areaManage')
  },
  {
    path: 'superAdmin/packageManage',
    component: () => import('../PCView/superAdmin/packageManage')
  },
  {
    path: 'superAdmin/superAdminInfo',
    component: () => import('../PCView/superAdmin/superAdminInfo')
  }
]
