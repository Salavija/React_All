Newfile.js:
import React from 'react';

const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} />
        </div>
    )
};

export default person;


App.js:

class App extends Component {
    state = {
        persons: [
            { name: 'Max', age: 28 },
            { name: 'Vytautas', age: 26 },
            { name: 'Rokas', age: 27 }
        ]
    }

    switchNameHandler = (Newname) => {
        // console.log('was clicked');
        this.setState({
            persons: [
                { name: Newname, age: 29 },
                { name: 'Vytas', age: 26 },
                { name: 'Rokacijus', age: 27 }
            ]
        })
    }

nameChangedHandler = (event) => {
    this.setState({
        persons: [
            { name: "Maxxx", age: 29 },
            { name: event.target.value, age: 26 },
            { name: 'Rokacijus', age: 27 }
        ]
    })
}
render() {
    return (
        <div className="App">
            <h1>Hi I am react app</h1>
            <p>It is working!!</p>
            <button onClick={() => this.switchNameHandler("Maxixima")}>Switch Name</button>
            <Person
                name={this.state.persons[0].name}
                age={this.state.persons[0].age}
                click={this.switchNameHandler.bind(this, "Mazutis")}>My hobbies: fishing</Person>
            <Person
                name={this.state.persons[1].name}
                age={this.state.persons[1].age}
                click={this.switchNameHandler}
                changed={this.nameChangedHandler}>My hobbies: loving</Person>
</div> 
    );
    }
}

export default App;
/**
 * onClick - kažką pakeičia paklikinus
 * event.target.value - keičia reikšmę pagal input
 */