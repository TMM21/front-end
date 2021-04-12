import {SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_UI} from '../type'
import axios from 'axios'

export const loginUser = (userData) => (dispatch) => {
    axios
    .get('/terminals')
    .then(res => {
        console.log(res.data)
    })
    .catch((err) =>console.log(err))
}