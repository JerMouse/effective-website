export default {
  // 获取role相应的权限
  permission_routes: state => state.permission.routes,
  roles: state=> state.user.roles
}
