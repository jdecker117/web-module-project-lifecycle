import React from 'react'
import TodoList from './TodoList'
import Form from './Form'
import axios from 'axios'

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  state = {
    todos: [],
    show: true,
    error: '',
    inputValue: ''
  }

resetForm = () => this.setState({...this.state, todoNameInput: ''})

handleChange = evt => {
  const { value } = evt.target
  this.setState({
    ...this.state, inputValue: value
  })
}

postNewItem = () => {
  axios.post(URL, { name: this.state.inputValue })
  .then(res => {
    this.setState({ ...this.state, todos: this.state.todos.concat(res.data.data)})
    this.resetForm();
  })
  .catch(err => {
    this.setState({...this.state, error: err.response.data.message})
  })
}

handleSubmit = evt => {
  evt.preventDefault()
  this.postNewItem()
}

getTodos = () => {
  axios.get(URL)
  .then((res => {
    console.log(res, "API response")
    this.setState({
      ...this.state, todos: res.data.data
    })
  }))
  .catch(err => {
    this.setState({
      ...this.state, error: err.response.data.message
    })
  })
}

toggleItem = (itemId) => {
  axios.patch(`${URL}/${itemId}`)
  .then(res => {
    this.setState({ ...this.state, todos: this.state.todos.map(td => {
      if(td.id !== itemId) return td
      return res.data.data
    })})
  })
  .catch(err => {
    this.setState({
      ...this.state, error: err.response.data.message
    })
  })
}

toggleCompleted = (evt) => {
  evt.preventDefault();
  this.setState({ ...this.state, show: !this.state.show})
}

componentDidMount() {
  this.getTodos();
}
  
  render() {
    return (
      <div>
        <div id='error'>Error: {this.state.error}</div>
        <div id='todos'>
          <h2>Todos: </h2>
          <TodoList todos={this.state.todos} toggleItem={this.toggleItem} show={this.state.show}/>
          <Form addItem={this.addItem} inputValue={this.inputValue}
           handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
          <button onClick={this.toggleCompleted}>{this.state.show === true ? 'Hide Completed' : 'Show Completed'}</button>
        </div>
      </div>
      
    )
  }
}
