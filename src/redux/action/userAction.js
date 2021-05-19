import {SET_AUTHENTICATED, SET_UNAUTHENTICATED, SET_ERRORS,LOADING_UI,SET_USER, CLEAR_ERRORS} from '../type'
import axios from 'axios'

export const  createUser = (userData, history) =>(dispatch) => {
    console.log(userData)

    dispatch({type:LOADING_UI})
    axios.post("auth/signup/customer", userData)
    .then(res =>{
        const {user, AccessToken} = res.data.data
      
             const token = `Bearer ${AccessToken}`
        localStorage.setItem("Token", token )
        axios.defaults.headers.common["Authorization"] = token
        dispatch({type:SET_USER, paylaod:user})
      
        history.push('/')
    })
    .catch(err =>{ 
         dispatch({type:SET_ERRORS, paylaod:err.response})
    })

}
export const loginUser = (userData, history) =>(dispatch) =>{
    dispatch({type:LOADING_UI})
    axios.post('/auth/login/customer', userData)
    .then(res =>{
        console.log(res.data)
        history.push('/')
    })
    .catch(err =>{
        console.log(err.response.data)
    })

}

export const setProfile = (userData) => (dispatch) =>{

    dispatch({type:LOADING_UI})
    axios.post('/profile')
    .then()
    .catch()
} 