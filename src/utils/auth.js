import Cookie from "js-cookie";

const key = 'user-token';

export function setToken(value) {
  return Cookie.set(key, value)
}

export function getToken() {
  return Cookie.get(key)
}

export function removeToken() {
  return Cookie.remove(key)
}

