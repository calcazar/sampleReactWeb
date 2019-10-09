import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/es/integration/react'
import './index.css';
import ToDoAppWithRedux from './toDoAppWithRedux';


ReactDOM.render(
<Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <ToDoAppWithRedux />
    </PersistGate>
</Provider>, document.getElementById('root'));

