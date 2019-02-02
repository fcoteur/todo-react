import React, { Component } from 'react'
import styled from 'styled-components';

const Box = styled.div`
  margin: 10px 5px;
`;


export default class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        title: ''
    } 
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
        [e.target.name]: e.target.value 
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleAddToDo(this.state)
    this.setState({title: ''})
  }

  render() {
    return (
      <Box>
        <form onSubmit={this.handleSubmit}>
            <input placeholder='enter todo...' autoComplete="off" size="40" value={this.state.title} name='title' onChange={this.handleChange} />
            <input type='submit' value='+' />
        </form>
      </Box>
    )
  }
}
