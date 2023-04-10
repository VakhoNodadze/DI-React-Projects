import React from 'react'

import { TTodo } from './TodoList'

type TTodoState = {
  isCompleted: boolean
}

type TTodoItemProps = {
  todoItem: TTodo
  children: React.ReactNode
  handleDeleteTodo: (id: number) => void
}

// create a class component of todo item
class TodoItem extends React.Component<TTodoItemProps, TTodoState> {
  // create a constructor
  constructor(props: any) {
    // call the parent constructor
    super(props)
    // set the initial state
    this.state = {
      isCompleted: false,
    }
  }

  // create a method to handle the click event
  onButtonClick = () => {
    this.setState((prevState: TTodoState) => {
      return { isCompleted: !prevState.isCompleted }
    })
  }

  render() {
    const { todoItem, children, handleDeleteTodo } = this.props
    const { isCompleted } = this.state

    return (
      <li style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>
        <span onClick={this.onButtonClick}>{children}</span>
        <span
          onClick={() => handleDeleteTodo(todoItem.id)}
          style={{ marginLeft: '10px', color: 'red', fontWeight: 'bold' }}
        >
          X
        </span>
      </li>
    )
  }
}

export default TodoItem
