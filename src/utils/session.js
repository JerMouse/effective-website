export function setSession(key, value) {
  sessionStorage.setItem(key, value)
}

export function getSession(key) {
  return sessionStorage.getItem(key)
}
