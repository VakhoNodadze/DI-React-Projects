import ajax from './ajax'

export const getAllTodos = () => ajax.get('todos')
