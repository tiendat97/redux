

import React from 'react';
var redux = require('redux');

var defaultState = {
    array: ['banana', 'apple', 'orange'],
    isRight: false
}

var reducer = (state = defaultState, action)=>{
    switch (action.type) {
        case 'INCREMENT':
            return {...state, isRight: !state.isRight}
        default:
            state;
    }
    return state;
}

var store = redux.createStore(reducer);
store.dispatch({type: 'DECREMENT'})
console.log(store.getState())
store.dispatch({type: 'INCREMENT'})
console.log(store.getState())

export default class App extends React.Component{
    render(){
        return(
            <div></div>
        )
    }
}