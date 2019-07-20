import request from '../utils/request'

export function getRoles() {
  return request({
    url: '/roles',
    method: 'get'
  })
}

export function getRoutes() {
  return request({
    url: '/routes',
    method: 'get'
  })
}
