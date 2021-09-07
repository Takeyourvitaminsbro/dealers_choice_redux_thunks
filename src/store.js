import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import axios from 'axios';
const CREATE = 'CREATE';
const UPDATE= 'UPDATE';
const LOAD = 'LOAD';
const SET_VIEW = 'SET_VIEW';



// const initialState = {

// }
const todosReducer = (state = [], action) => {
    if(action.type === LOAD) {
        return action.todos
    }
    if(action.type === UPDATE) {
        return state.map(todo => todo.id === action.todo.id ? action.todo : todo );
    }
    if(action.type === CREATE) {
        return [...state, action.todo];
    }
    return state;
}
const viewReducer = (state = '', action) => {
    if(action.type === SET_VIEW) {
        return action.view;
    }
    return state;
}

export const load = (todos) => {
    return {
        type: LOAD,
        todos
    }
}

export const update = (todo) => {
    return {
        type: UPDATE,
        todo
    }
}

export const create = (todo) => {
    return {
        type: CREATE,
        todo
    }
}

export const setView = (view) => {
    return {
        type: SET_VIEW,
        view
    }
}

const reducer = combineReducers({ view: viewReducer, todos: todosReducer });

const store = createStore(reducer);

export default store;