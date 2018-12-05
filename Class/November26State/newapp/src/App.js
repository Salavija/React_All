import React, { Component } from 'react';
import './App.css';
import EpicMenu from './Navigation/EpicMenu';
import Fruits from './Fruits/Fruits';
import apple from './Fruits/apples.jpg';
import banana from './Fruits/banana.jpg';
import orange from './Fruits/orange.jpg';

import logo from './logo.png';

// const allFruits = [
//   {
//     image: apple,
//     title: "Obuoliai",
//     info: "Obuolys – būdingas obelų vaisius, morfologiškai irgi vadinamas obuoliu.",
//     reference: "https://lt.wikipedia.org/wiki/Obuolys"
//   },
//   {
//     image: banana,
//     title: "Bananai",
//     info: "Bananas (lot. Musa) – bananinių (Musaceae) šeimos žolinių augalų gentis, kurioje yra apie 80 rūšių.",
//     reference: "https://lt.wikipedia.org/wiki/Bananas"
//   },
//   {
//     image: orange,
//     title: "Apelsinai",
//     info: "Apelsinai – citrinvaisiai, kuriuos mezga kai kurie citrinmedžiai (Citrus).",
//     reference: "https://lt.wikipedia.org/wiki/Apelsinas"
//   }
// ]

class App extends Component {

state = {
  allFruits : [
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
}

  render() {
    let links = [
      { label: 'Home', link: '#home', active: true },
      { label: 'Products', link: '#about' },
      { label: 'About', link: '#portfolio' },
      { label: 'Contact Us', link: '#contact-us' },
    ];


    return (
      <div>
      <div className="container center">
        <EpicMenu links={links} logo={logo} />
      </div>

      <div className="container-fluid">
      <div>
      <Fruits fruits = {this.state.allFruits}/>
      </div>
      </div>
      </div>
    );
  }
}

export default App;
