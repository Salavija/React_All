import React, { Component } from 'react';
import './App.css';
import EpicMenu from './Navigation/EpicMenu';
import Fruits from './Fruits/Fruits';
<<<<<<< HEAD
import apple from './Fruits/images/apples.jpg';
import banana from './Fruits/images/banana.jpg';
import orange from './Fruits/images/orange.jpg';
import Example from './Navigation/Navbar'
=======
import apple from './Fruits/apples.jpg';
import banana from './Fruits/banana.jpg';
import orange from './Fruits/orange.jpg';
>>>>>>> 0178811467d55826494b7cc4480eace5260d69f1

import logo from './logo.png';

const fruits = [
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

state = {
}
goProducts = () => this.props.history.push("products");
// o patį mygtuką kur nors į render() metodą



  render() {
    let links = [
      { label: 'Home', link: '/home', active: true },
      { label: 'Products', link: '/products' },
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
      <Fruits fruits = {fruits}/>
      </div>
      </div>
      <div>
      <p><button onClick={this.goProducts}
        className="btn btn-primary">
        Go to Products
        </button></p>
      </div>
      </div>
    );
  }
}

export default App;
