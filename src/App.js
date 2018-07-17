

import React from 'react';
var redux = require('redux'); // import thu vien redux

// var defaultState = {
//     array: ['banana', 'apple', 'orange'],
//     isRight: false
// }
// // reducer : pure function
// var reducer = (state = defaultState, action)=>{ // old state & action
//     switch (action.type) {
//         case 'Toggle_Is_Right':
//             return {...state, isRight: !state.isRight}
//         case 'Add_Item':
//             return {...state, array: [...state.array, action.item]}
//         case 'Remove_Item':
//             return {...state, array: state.array.filter((e, i) => i != action.index)}
//         default:
//             state;
//     }
//     return state;
// }

var arrayReducer = (state = ['banana', 'apple', 'orange'], action) =>{
    switch (action.type) {
        case 'Add_Item':
            return [...state, action.item]
        case 'Remove_Item':
            return state.filter((e, i) => i != action.index)
        default:
            state;
    }
    return state;
}

var isRightReducer = (state = false, action) =>{
    switch (action.type) {
        case 'Toggle_Is_Right':
            return !state;
        default:
            state;
    }
    return state;
}

var reducer = redux.combineReducers({
    array: arrayReducer,
    isRight: isRightReducer
});

var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
)); // tao mot store luu tru

store.subscribe(() => {
    var str = store.getState();
    document.getElementById('p-detail').innerHTML = JSON.stringify(str);
});

store.dispatch({type: 'Toggle_Is_Right'}) // thuc thi action

store.dispatch({
    type: 'Add_Item',
    item: 'potato'
});

store.dispatch({
    type: 'Remove_Item',
    index: 1
})

export default class App extends React.Component{
    render(){
        return(
            <div></div>
        )
    }
}
