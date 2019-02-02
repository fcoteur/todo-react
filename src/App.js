import React, { Component } from 'react'
import styled from 'styled-components';
import TodoList from './TodoList'

const Box = styled.div`
  margin: 10px 5px;
  width: 400px;
  text-align: center;
  border: 1px black solid;
`;

export default class App extends Component {
  render() {
    return (
      <Box>
        <h1>To Do List</h1>
        <TodoList />
      </Box>
    )
  }
}
