import {GET_TERMINAL} from '../type'

const initialState ={
    terminal:[],
    loading:true
}

export  const terminal = (state=initialState, action) =>{
    switch(action.type){
        case GET_TERMINAL:
            return {
                ...state,
                terminal:action.payload
            };
            default:
                return state
    }
}

