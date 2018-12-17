import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Switch, Redirect, Route } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';

const NoMatch = (props) => {
    var goApp = () => props.history.push("/");
    return <div>Route did not match
    <button onClick={goApp}>Go Home</button></div>;
    };
  
var DemonstruotiNavigacija = (props) => {
    var goHome = () => props.history.push("/");
    return (
    <div>
    At route: {props.location.pathname}
    <button onClick={goHome}>Go Home</button>
    <pre>
    {JSON.stringify(props, null, 2)}
    </pre>
    </div>
    );
    };

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


ReactDOM.render((
    <BrowserRouter>
    <AppContainer>
    <Switch>
    <Route exact path='/' component={App}/>
    <Route path="/products/:id" component={DemonstruotiNavigacija} />
    <Route path="/products" component={DemonstruotiNavigacija} />
    <Route path="/help" component={DemonstruotiNavigacija} />
    <Route path="*" component={NoMatch}/>
    <Route component={NoMatch}/>
    </Switch>
    </AppContainer>
    </BrowserRouter>
    ), document.getElementById('root'));


serviceWorker.unregister();



