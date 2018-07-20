

var redux = require('redux');

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

var store = redux.createStore(reducer); // tao mot store luu tru

export default store ;


