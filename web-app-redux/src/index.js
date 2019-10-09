import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/es/integration/react'
import './index.css';
import Home from './home/home.js';


ReactDOM.render(
<Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <Home />
    </PersistGate>
</Provider>, document.getElementById('root'));

