export const LOAD_MOVIE = 'LOAD_MOVIE'
export const LOAD_MOVIE_SUCCESS = 'LOAD_MOVIE_SUCCESS'
export const LOAD_MOVIE_FAILED = 'LOAD_MOVIE_FAILED'
export const LOADED_ALL_MOVIE = 'LOADED_ALL_MOVIE'
export const loadMovie = (isReload)=>({type: LOAD_MOVIE, isReload})
export const loadMovieSuccess = (data, reloadMovieSuccess)=>({type: LOAD_MOVIE_SUCCESS, items: data.subjects, reloadMovieSuccess})
export const loadMovieFailed = (message)=>({type: LOAD_MOVIE_FAILED, error: message})
export const loadedAllMovie = (didLoadAllMovies=false)=>({type: LOADED_ALL_MOVIE, didLoadAllMovies})


export const fetchMovies = (start, isReload=false)=>(dispatch)=>{
  dispatch(loadMovie(isReload))
  return fetch(`http://api.douban.com/v2/movie/top250?start=${start}&count=20`)
      .then(response=>response.json())
      .then(json=>dispatch(loadMovieSuccess(json, isReload)))
      .catch(error=>dispatch(loadMovieFailed(error.message)))
}

export const refetchMovies = ()=>(dispatch)=>{
  return dispatch(fetchMovies(0, true))
}

export const fetchMoveMovies = ()=>(dispatch, getState)=>{
  const loadedMovieCount = getState().movies.items.length
  if (loadedMovieCount < 250) {
    return dispatch(fetchMovies(loadedMovieCount))
  } else {
    return dispatch(loadedAllMovie(true))
  }
}


