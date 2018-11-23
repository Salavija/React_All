import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
state = {
  persons: [
    {name: 'Max', age: 28},
    {name: 'Vytautas', age: 26},
    {name: 'Rokas', age: 27}
  ]
}

switchNameHandler = () => {
  // console.log('was clicked');
  this.setState({
    persons: [
      {name: 'Maximilian', age: 29},
      {name: 'Vytas', age: 26},
      {name: 'Rokacijus', age: 27}
    ]
  })
}

  render() {
    return (
      <div className="App">
        <h1>Hi I am react app</h1>
        <p>It is working!!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age ={this.state.persons[0].age}>My hobbies: fishing</Person>
        <Person name={this.state.persons[1].name} age ={this.state.persons[1].age}>My hobbies: loving</Person>
        <Person name={this.state.persons[2].name} age ={this.state.persons[2].age} />
      </div>
    );
    // These(up and down) codes are the same, but first one is better practice to use
    // return React.createElement(
    //   'div',
    //    {className: "App"},
    //   React.createElement(
    //     'h1',
    //     null,
    //     'Hi, I am React App!!'));
  }
}

export default App;
