import React, { Component } from 'react';
import Fruit from './Fruit';
import PropTypes from 'prop-types'
import axios from 'axios'
import apple from './Fruits/images/apples.jpg';
import banana from './Fruits/images/banana.jpg';
import orange from './Fruits/images/orange.jpg';

<<<<<<< HEAD
// import PropTypes from 'prop-types';
// const allFruits = [
//     {
//         image: apple,
//         title: "Obuoliai",
//         info: "Obuolys – būdingas obelų vaisius, morfologiškai irgi vadinamas obuoliu.",
//         reference: "https://lt.wikipedia.org/wiki/Obuolys"
//     },
//     {
//         image: banana,
//         title: "Bananai",
//         info: "Bananas (lot. Musa) – bananinių (Musaceae) šeimos žolinių augalų gentis, kurioje yra apie 80 rūšių.",
//         reference: "https://lt.wikipedia.org/wiki/Bananas"
//     },
//     {
//         image: orange,
//         title: "Apelsinai",
//         info: "Apelsinai – citrinvaisiai, kuriuos mezga kai kurie citrinmedžiai (Citrus).",
//         reference: "https://lt.wikipedia.org/wiki/Apelsinas"
//     }
// ]
class Fruits extends Component{
// const fruits = (props) => {
    contructor(props){
        super(props);
        this.state={
            vaisiai:props.vasiai
        }
    }
    render(){
        if(this.state.vaisiai.length===0){
            return <div>Dar neuzkrove duomenu, prasome palaukti</div>
        }
    let fruits=this.state.fruits.map(fruit => {
        // const imageId=allFruits.image;
        var imageObject = apple;
        if(fruit.imageId==="orange"){
            imageObject=orange;
        }
        if (fruit.imageId === "banana") {
            imageObject = banana;
        }
=======
const fruits = (props) => {
    const fruits=props.fruits.map(fruit => {
>>>>>>> 0178811467d55826494b7cc4480eace5260d69f1
    return (<div className="col-sm-4" key={fruit.title}>
    <Fruit image = {imageObject}
            title = {fruit.title}
            info = {fruit.info}
            reference ={fruit.reference}
            key={fruit.title} />
    </div>);
})
return (<div className="container-fluid">
            <div className="row">
                {fruits}
            </div>
        </div>);
    
}

componentDidMount = () =>{
    axios.get("http://localhost:8080/fruits")
    .then((atsakymas)=>{
        this.setState({fruits: atsakymas.data})
        })
    .catch((klaida)=>{
        console.log(klaida)
    })
}
}

Fruits.propTypes = {
    fruits: PropTypes.array.isRequired
}
export default Fruits;