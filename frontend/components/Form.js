import React from 'react'

export default class Form extends React.Component {
  
  render() {
    return (
      <form id='todoForm' onSubmit={this.props.handleSubmit}>
        <input type='text' onChange={this.props.handleChange} value={this.props.inputValue} placeholder='Type todo'></input>
        <button>Submit</button>
      </form>
    )
  }
}
