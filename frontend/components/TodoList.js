import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  render() {
    console.log(this.props.todos)
    return (
      <>
      {this.props.todos.reduce((acc, todo) => {
        if(this.props.show || !todo.completed) return acc.concat(
          <Todo key={todo.id} todo={todo} toggleItem={this.props.toggleItem}/>
        )
        return acc
      }, [])}</>
      
    )
  }
}
