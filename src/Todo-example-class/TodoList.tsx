import React from 'react'

import { getAllTodos } from '../helpers/services/todos'

import TodoItem from './TodoItem'

export type TTodo = {
  id: number
  todo: string
  completed: boolean
  userId: number
}

type TMyState = {
  todos: TTodo[]
  inputTodo: string
}

// create a todo list class component
class TodoList extends React.Component<any, TMyState> {
  // create a constructor
  constructor(props: any) {
    // call the parent constructor
    super(props)
    // set the initial state
    this.state = {
      todos: [],
      inputTodo: '',
    }
  }

  async componentDidMount() {
    const { data } = await getAllTodos()
    this.setState({ todos: data.todos })
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputTodo: e.target.value })
  }

  handleAddTodo = () => {
    const { todos, inputTodo } = this.state
    const newTodo: TTodo = {
      id: todos.length + 1,
      todo: inputTodo,
      completed: false,
      userId: Math.floor(Math.random() * 9999),
    }
    this.setState({ todos: [...todos, newTodo], inputTodo: '' })
  }

  handleDeleteTodo = (id: number) => {
    const { todos } = this.state
    const newTodos = todos.filter((todo) => todo.id !== id)
    this.setState({ todos: newTodos })
  }

  render() {
    const { todos, inputTodo } = this.state

    return (
      <div>
        <h1>Todo List</h1>
        <div style={{ display: 'flex' }}>
          <input value={inputTodo} onChange={this.handleInputChange} />
          <button onClick={() => this.handleAddTodo()}>Add Todo</button>
        </div>
        <ul>
          {todos.map((todoItem, index) => {
            return (
              <TodoItem key={index} todoItem={todoItem} handleDeleteTodo={this.handleDeleteTodo}>
                {todoItem.todo}
              </TodoItem>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default TodoList
