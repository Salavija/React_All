import React from 'react';
import Fruit from './Fruit';
// import PropTypes from 'prop-types';


const fruits = (props) => {
    const fruits=props.fruits.map(fruit => {
    return (<div className="col-sm-4" key={fruit.title}>
    <Fruit image = {fruit.image}
            title = {fruit.title}
            info = {fruit.info}
            reference ={fruit.reference} />
    </div>);
})
return (<div className="container-fluid">
            <div className="row">
                {fruits}
            </div>
        </div>);
}
export default fruits;