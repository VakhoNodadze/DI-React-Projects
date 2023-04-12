import jwtDecode from 'jwt-decode'

type TMyToken = {
  name: string
  exp: number
}

export const isUserAuthenticated = () => {
  const key = localStorage.getItem('token')
  if (!key) return false
  const tokenExpireDate = jwtDecode<TMyToken>(key).exp
  return Date.now() / 1000 < tokenExpireDate
}
