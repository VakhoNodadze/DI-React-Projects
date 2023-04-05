import ajax from './ajax';

export const login = (username, password) => ajax.post('login', { username, password });
