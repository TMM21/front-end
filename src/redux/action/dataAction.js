import {GET_ROUTES, GET_TERMINAL, GET_TRIP, SET_ERRORS, CLEAR_ERRORS, LOADING_UI, STOP_LOADING, DETAILS} from '../type'
import axios from 'axios'

export const getTerminal =  () =>  (dispatch) => {
    dispatch({type:LOADING_UI})
    axios
    .get('/terminals')
    .then(res => {      
     
        dispatch({
            type:GET_TERMINAL,
            payload:res.data.data
        });
        dispatch({type:CLEAR_ERRORS})
      
        
    })
    .catch((err) =>{      
      if(err.response ===  undefined){
          dispatch({type:SET_ERRORS, payload:"Network Error"})
         
      }else{
          dispatch({type:SET_ERRORS, payload:err.response.data})
      }
     
    }
    )
}
export const getRoutes =(terminal) =>(dispatch) =>{

    dispatch({type:LOADING_UI})
    axios.get(`/routes/search?Terminal=${terminal.name}&terminalId=${terminal.id}`, )
    .then(res =>{
        console.log(res.data.data)
        dispatch({type:GET_ROUTES, payload:res.data.data})
        dispatch({type:CLEAR_ERRORS})
    })
    .catch(err =>{
        if(err.response ===  undefined){
            dispatch({type:SET_ERRORS, payload:"Network Error"})
           
        }else{
            dispatch({type:SET_ERRORS, payload:err.response.data})
        }
        
    })
} 

export const getTrip = (route, history) =>(dispatch) =>{
    dispatch({type:LOADING_UI})
    axios.get(`/trip/search?routeId=${route.routeId}&TravelDate=${route.TravelDate}`)
    .then(res =>{
        
       
        dispatch({type:GET_TRIP, payload:res.data.data})
        dispatch({type:DETAILS, payload:route})
        history.push('/book_a_seat/one_way')
    })
    .catch(err =>{
        if(err.response ===  undefined){
            dispatch({type:SET_ERRORS, payload:"Network Error"})
           
        }else{
            dispatch({type:SET_ERRORS, payload:err.response.data})
        }
    })


}
