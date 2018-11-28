import React, { Component } from 'react';
import './App.css';
import Fruits from './Fruits/Fruits';
import apple from './Fruits/apples.jpg';
import banana from './Fruits/banana.jpg';
import orange from './Fruits/orange.jpg';
import Example from './Navigation/Navbar'

const allFruits = [
  {
    image: apple,
    title: "Obuoliai",
    info: "Obuolys – būdingas obelų vaisius, morfologiškai irgi vadinamas obuoliu.",
    reference: "https://lt.wikipedia.org/wiki/Obuolys"
  },
  {
    image: banana,
    title: "Bananai",
    info: "Bananas (lot. Musa) – bananinių (Musaceae) šeimos žolinių augalų gentis, kurioje yra apie 80 rūšių.",
    reference: "https://lt.wikipedia.org/wiki/Bananas"
  },
  {
    image: orange,
    title: "Apelsinai",
    info: "Apelsinai – citrinvaisiai, kuriuos mezga kai kurie citrinmedžiai (Citrus).",
    reference: "https://lt.wikipedia.org/wiki/Apelsinas"
  }
]

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
      <div>
        <Example navbar />
      <Fruits fruits = {allFruits}/>
      </div>

      </div>
    );
  }
}

export default App;
