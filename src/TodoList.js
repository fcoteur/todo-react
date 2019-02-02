import React, { Component } from 'react'
import styled from 'styled-components';
import uuid from 'uuid'

import Todo from './Todo'
import NewTodoForm from './NewTodoForm';

const Box = styled.div`
  text-align: left;
`;

export default class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [
        {
          id: uuid.v4(),
          title: 'do something',
          done: false
        },
        {
          id: uuid.v4(),
          title: 'do something else',
          done: false
        },
        {
          id: uuid.v4(),
          title: 'do something completly different',
          done: true
        }
      ]
    }
    this.handleAddToDo = this.handleAddToDo.bind(this)
    this.handleEditToDo = this.handleEditToDo.bind(this)
  }

  handeDelete(e) {
    const { todos } = this.state;
    this.setState({todos: todos.slice(0, e).concat(todos.slice(e+1))})
  }

  handleToggle(idx) {
    let newTodos = this.state.todos.slice()
    newTodos[idx].done = !newTodos[idx].done;
    this.setState({todos: newTodos})
  }

  handleAddToDo(data) {
    let newTodos = this.state.todos.slice()
    newTodos.push({
      id: uuid.v4(),
      title: data.title,
      done: false
    })
    this.setState({todos: newTodos})
  }

  handleEditToDo(data) {
    let newTodos = this.state.todos.slice()
    const index = this.state.todos.findIndex(x => x.id === data.id);
    newTodos[index].title = data.title;
    this.setState({todos: newTodos})
  }

  render() {
    const list = this.state.todos.map((todo, idx) => {
      return <Todo 
      key={todo.id} 
      todo={todo} 
      delete={this.handeDelete.bind(this, idx)} 
      toggle={this.handleToggle.bind(this, idx)}
      edit={this.handleEditToDo.bind(this)}
      />
    });

    return (
      <Box>
        <NewTodoForm handleAddToDo={this.handleAddToDo}/>
        {list}
      </Box>
    );
  }
}
