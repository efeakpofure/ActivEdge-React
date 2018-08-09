import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home';
import About from './About';
import Post from './Post';
import {BrowserRouter,Link,Route} from 'react-router-dom';
// import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import store from './store';

ReactDOM.render(
<Provider store={store}>
    <BrowserRouter>
        <div>
            <Route path ="/" exact component={App}/>
            <Route path ="/home" component={Home}/>
            <Route path="/posts" component={Post}/>
            <Route path="/about/:name" component={About}/>
        </div>  
    </BrowserRouter>
</Provider>
, document.getElementById('activedge'));

