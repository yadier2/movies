/* import { applyMiddleware, createStore } from "redux"
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'
import rootReducer from './reducers'

const middleware = [thunk]
const initialState = {}

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store; */

import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import {search} from './reducers/searchReducers'
import {allMovies} from './reducers/allMoviesReducers'
import { authReducer } from "./reducers/AuthReducer";
import { registro } from "./reducers/uiReducer";
import { MoviesCrud } from "./reducers/crudMoviesReducer";

import thunk from 'redux-thunk'
//para agregar diferentes reducer
const reducers = combineReducers({
    movies: search,
    allMovies:allMovies,
    auth: authReducer,
    ui: registro,
    moviesCrud: MoviesCrud
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
    reducers,
    //sincronico
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    
    composeEnhancers(
        applyMiddleware(thunk)
    )
   
    )

