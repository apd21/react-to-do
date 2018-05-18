import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
       todos: [
         { description: 'Walk the cat', isCompleted: true },
         { description: 'Throw the dishes away', isCompleted: false },
         { description: 'Buy new dishes', isCompleted: false }
       ],
        newTodoDescription: ''
     };
     this.removeToDo = this.removeToDo.bind(this)
   }

   removeTodo(index) {
       const todo = this.state.ToDo.filter((ToDo, ToDoIndex) => {
         return ToDoIndex !== index
       })
       this.setState({ ToDo })
     }

   handleChange(e) {
     this.setState({ newTodoDescription: e.target.value })
   }

   handleSubmit(e) {
     e.preventDefault();
     if (!this.state.newTodoDescription) { return }
     const newTodo = { description: this.state.newTodoDescription, isCompleted: false };
     this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: '' });
   }

  toggleComplete(index) {
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isCompleted = todo.isCompleted ? false : true;
    this.setState({ todo: todo });
  }

  render() {
    return (
      <div className="App">
      <ul>
           { this.state.todos.map( (todo, index) =>
             <ToDo key={index} description={todo.description} isCompleted={todo.isCompleted} toggleComplete={ () => this.toggleComplete(index) } />
           )}
         </ul>
        <form onSubmit={ (e) => this.handleSubmit(e) }>
        <input type="text" value={ this.state.newTodoDescription } onChange={ (e) => this.handleChange(e) } />
          <input type="submit" />
        </form>
         <ToDo={this.state.ToDo} removeTodo={this.removeToDo} />

      </div>
    );
  }
}


export default App;
