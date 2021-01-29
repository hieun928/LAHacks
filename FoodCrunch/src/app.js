import ReactDom from 'react-dom';
import store from './store.js';
import {HashRouter,Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import React from 'react';
import Home from './HomePage/Home.js';
import ListPage from './SecondPage/listPage.js';



ReactDom.render(

    <HashRouter>
    <Provider store={store}>
    <div>
        <Route exact path="/" component={Home} /> 
        <Route exact path="/list" component={ListPage} />
    </div>
    </Provider>
    </HashRouter>

    ,document.getElementById('app'))
