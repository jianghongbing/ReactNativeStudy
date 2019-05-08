import {
  LOAD_MOVIE,
  LOAD_MOVIE_SUCCESS,
  LOAD_MOVIE_FAILED,
  LOADED_ALL_MOVIE,
} from '../actions/movieAction'

const initialState = {
  isLoading: false,
  isReload: false,
  didLoadAllMovies: false,
  items: [],
  error: null,
}

export const movies = (state=initialState, action)=>{
  switch (action.type) {
    case LOAD_MOVIE:
      return {
        ...state,
        isLoading: true,
        isReload: action.isReload,
        didLoadAllMovies: false,
        error: null,
      }
    case LOAD_MOVIE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isReload: false,
        didLoadAllMovies: false,
        items: action.reloadMovieSuccess ? [...action.items] : [...state.items, ...action.items]
      }
    case LOAD_MOVIE_FAILED:
      return {
        ...state,
        isLoading: false,
        isReload: false,
        error: action.error,
      }
    case LOADED_ALL_MOVIE:
      return {
        ...state,
        isLoading: false,
        isReload: false,
        didLoadAllMovies: true
      }
    default:
      return state
  }
}
