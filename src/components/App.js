import React, { Component } from 'react';
import Hello from './Hello';
import Counter from './Counter';
import CreateTodo from './CreateTodo';
import Todos from './Todos';

class App extends Component {
  
  render = ()=> {
    return (
    <div className="App">
      <Counter />
      <Hello />
    </div>
    );
  }
}

export default App;
