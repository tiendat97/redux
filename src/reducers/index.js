import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import getnews from './getnews';

export default combineReducers({ todos, visibilityFilter, getnews });