import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import chat from './reducers/index';
import setupSocket from './sockets/index'

const store = createStore(chat);

const socket = setupSocket(store.dispatch);

ReactDOM.render(
    <Provider store={store}>
        <App socket={socket}/>
    </Provider>,
    document.getElementById('root')
);