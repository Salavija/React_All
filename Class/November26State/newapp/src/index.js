import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Switch, Redirect, Route } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

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
    };