import React from 'react'

export default class Todo extends React.Component {
  componentDidMount() {
    console.log("Todo: component has mounted")
  }
  
  render() {
    console.log(this.props.todo)
    return (
      <div onClick={() => this.props.toggleItem(this.props.todo.id)} className='todo'>
        {this.props.todo.completed === true ? <>{this.props.todo.name}{'✔️'}</> : <>{this.props.todo.name}</>}
      </div>
    )
  }
}
