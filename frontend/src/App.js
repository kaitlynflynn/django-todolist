import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const list = [
  {
    'id': 1,
    'title': 'Study Python',
    'description': 'Continue to strengthen those Python brain muscles!'
  },
  {
    'id': 2,
    'title': 'Study React',
    'description': 'Continue to strengthen those React brain muscles!'
  },
  {
    'id': 3,
    'title': 'Finish ToDo App',
    'description': 'Finish this awesome ToDo App!'
  }
];


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { list };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Kfly's To Do App</h1>
        </header>
        {this.state.list.map(item => (
          <div>
            <h1>{item.title}</h1>
            <span>{item.description}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
