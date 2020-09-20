import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './App.css'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import counter from './reducers/counter'
import {myLogger} from './middlewares/myLogger'


const myStore = createStore(counter,applyMiddleware(myLogger))
ReactDOM.render(
    <Provider store={myStore}>
        <App />
    </Provider>
    , document.getElementById('root'));