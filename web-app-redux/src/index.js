import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from "./reducers"
import './index.css';
import Home from './home/home.js';

const store = createStore(reducers)




ReactDOM.render(<Provider store={store}><Home /></Provider>, document.getElementById('root'));

