import React from 'react';

const fruits = (props) => {
var AppContainer = (props) => {
    return (<div>
    <div>
    <Link to='/'>Home</Link> |&nbsp;
    <Link to='/products'>Products</Link> |&nbsp;
    <Link to={`/products/${127}`}>Product by no</Link> |&nb
    <Link to='/help'>help</Link> |&nbsp;
    <Link to='/non-existant'>Non Existant</Link>
    </div>
    {props.children}
    </div>);
    }
}