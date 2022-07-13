import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  render() {
    console.log(this.props.todos)
    return (
      <>
      {this.props.todos.map(todo => (
        <Todo key={todo.id} todo={todo} toggleItem={this.props.toggleItem}/>
      ))}</>
      
    )
  }
}
