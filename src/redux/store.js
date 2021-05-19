import { createStore,combineReducers,  applyMiddleware, compose, } from 'redux'
import thunk from 'redux-thunk'
import userReducer from './reducer/userReducer'
import dataReducer from './reducer/dataReducer'
import UiReducer from './reducer/UiReducer'
const middleware = [thunk]
const initialState = {}
const reducer =  combineReducers({
data:dataReducer,
UI:UiReducer,
user:userReducer
})

const store = createStore(reducer, initialState, compose(applyMiddleware(...middleware),  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__(): f=>f))


export default store