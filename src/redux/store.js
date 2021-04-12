import { createStore,  applyMiddleware, compose, } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import logger from 'redux-logger'
import reducer from './reducer'
const middleware = [thunk]
const initialState = {}

// const getMiddleware = () =>{
//     let middleware = [thunk]
//     if(process.env.NODE_ENV === "development"){
//         middleware.push(logger)
//         return composeWithDevTools(...middleware)
//     }
//     return applyMiddleware(...middleware)
// }



const store = createStore(reducer, initialState, compose(applyMiddleware(...middleware),  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__(): f=>f))


export default store