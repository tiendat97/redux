

import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List';
var {Provider} = require('react-redux');
var store = require('./examples.js')

ReactDOM.render(
    <Provider store={store}>
         <List />
    </Provider>,
    document.getElementById('root'));

