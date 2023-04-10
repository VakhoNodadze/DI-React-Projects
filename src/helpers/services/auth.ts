import ajax from './ajax'

export const login = (username: string, password: string) =>
  ajax.post('auth/login', { username: 'kminchelle', password: '0lelplR' })
