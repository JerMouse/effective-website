const getters = {
  // 获取role相应的权限
  permission_routes: state => state.permission.routes,
  role: state => state.user.role,
  userId: state => state.user.userId,
  username: state => state.user.username,
  avatar: state => state.user.avatar,
  password: state => state.user.password,
}
export default getters
