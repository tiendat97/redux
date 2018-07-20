

import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List';
var {Provider} = require('react-redux');
var store = require('./reducers.js')

ReactDOM.render(
    <Provider store={ store } >
         <List />
    </Provider>,
    document.getElementById('root'));

