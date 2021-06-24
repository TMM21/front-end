import {
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  SET_ERRORS,
  LOADING_UI,
  SET_USER,
  CLEAR_ERRORS,
} from '../type'

const initialState = {
  authenticated: false,
  user: {},
  passenger: {},
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
      }
    case SET_UNAUTHENTICATED:
      return initialState
    case SET_USER:
      return {
        ...state,
        authenticated: true,
        user: action.payload,
      }
    default:
      return state
  }
}
