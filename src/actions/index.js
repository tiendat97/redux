import {
    ADD_TODO,
    SET_VISIBILITY_FILTER,
    TOGGLE_TODO,
    REMOVE_TODO,
    EDIT_TODO,
    SAVE_TODO,
    SAVE_DATA,
    SHOW_ALL,
    SHOW_COMPLETED,
    SHOW_ACTIVE,
    GET_NEWS
} from './constants';

const i = 0;

export const addTodo = text => ({
    type: ADD_TODO,
    id: i + 1,
    text,
});

export const setVisibilityFilter = filter => ({
    type: SET_VISIBILITY_FILTER,
    filter,
});

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id,
});

export const removeTodo = id => ({
    type: REMOVE_TODO,
    id,
});

export const editTodo = id => ({
    type: EDIT_TODO,
    id,
});

export const saveTodo = (id, text) => ({
    type: SAVE_TODO,
    id,
    text,
});

export const saveTask = (id, text, completed) => ({
    type: SAVE_DATA,
    id,
    text,
    completed,
});

export const VisibilityFilters = {
    SHOW_ALL: SHOW_ALL,
    SHOW_COMPLETED: SHOW_COMPLETED,
    SHOW_ACTIVE: SHOW_ACTIVE,
};

export const getNews = () => ({
    type: GET_NEWS,
});
