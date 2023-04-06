import ajax from './ajax';

export const login = (username: string, password: string = '0lelplR') => ajax.post('auth/login', { username, password });
