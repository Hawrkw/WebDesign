export default[
  {
    path: '',
    component: () => import('../PCView/admin/storage')
  },
  {
    path: 'sending',
    component: () => import('../PCView/admin/sending')
  },
  {
    path: 'packageHistory',
    component: () => import('../PCView/admin/packageHistory')
  },
  {
    path: 'userFeedback',
    component: () => import('../PCView/admin/userFeedback')
  },
  {
    path: 'adminInfo',
    component: () => import('../PCView/admin/adminInfo')
  }
]
