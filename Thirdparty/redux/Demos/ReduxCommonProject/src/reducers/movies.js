import {
  LOAD_MOVIE,
  LOAD_MOVIE_SUCCESS,
  LOAD_MOVIE_FAILED
} from '../actions/movieAction'

const initialState = {
  isLoading: false,
  items: [],
}

export const movies = (state=initialState, action)=>{
  switch (action.type) {
    case LOAD_MOVIE:
      return {
        ...state,
        isLoading: true
      }
    case LOAD_MOVIE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: [...state.items, ...action.items]
      }
    case LOAD_MOVIE_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }
    default:
      return state
  }
}
