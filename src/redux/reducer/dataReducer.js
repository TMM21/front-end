import {
  GET_TERMINAL,
  GET_ROUTES,
  GET_TRIP,
  DETAILS,
  BOOKINGDETAILS,
} from '../type'

const initialState = {
  terminal: [],
  trips: [],
  routes: [],
  info: {},
  booking: {},
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TERMINAL:
      return {
        ...state,
        terminal: action.payload,
      }
    case BOOKINGDETAILS:
      return {
        ...state,
        booking: action.payload,
      }
    case GET_ROUTES:
      return {
        ...state,
        routes: action.payload,
      }
    case GET_TRIP:
      return {
        ...state,
        trips: action.payload,
      }
    case DETAILS:
      return {
        ...state,
        info: { ...action.payload },
      }
    default:
      return state
  }
}
