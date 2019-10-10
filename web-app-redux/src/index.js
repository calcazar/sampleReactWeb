import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/es/integration/react'
import './index.css';
import Routes from './routes';
import Navigation from './navigation'

ReactDOM.render(
<Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <Navigation />
        <Routes />
    </PersistGate>
</Provider>, document.getElementById('root'));

