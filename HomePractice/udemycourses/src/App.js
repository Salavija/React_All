import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
state = {
  persons: [
    {name: 'Max', age: 28},
    {name: 'Vytautas', age: 26},
    {name: 'Rokas', age: 27}
  ],
  otherState: 'some other value',
  showPersons: false
}

switchNameHandler = (Newname) => {
  // console.log('was clicked');
  this.setState({
    persons: [
      {name: Newname, age: 29},
      {name: 'Vytas', age: 26},
      {name: 'Rokacijus', age: 27}
    ]
  })
}

nameChangedHandler = (event) =>{
  this.setState({
    persons: [
      { name: "Maxxx", age: 29 },
      { name: event.target.value, age: 26 },
      { name: 'Rokacijus', age: 27 }
    ]
  })
}

togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
}

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid green',
      padding: '8px',
      cursor:'pointer'
    };

    let persons = null;

    if (this.state.showPersons){
      persons = (
            <div>
              {this.state.persons.map(person => {
                return 
              })}
              <Person
                name={this.state.persons[0].name}
                age={this.state.persons[0].age}
                click={this.switchNameHandler.bind(this, "Mazutis")}>My hobbies: fishing</Person>
              <Person
                name={this.state.persons[1].name}
                age={this.state.persons[1].age}
                click={this.switchNameHandler}
                changed={this.nameChangedHandler}>My hobbies: loving</Person>
              <Person
                name={this.state.persons[2].name}
                age={this.state.persons[2].age} />
            </div> 
      );
    }

    return (
      <div className="App">
        <h1>Hi I am react app</h1>
        <p>It is working!!</p>
        <button 
        style={style}
        onClick={this.togglePersonHandler}>Toggle Persons</button>
        {persons}
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
