export const LOAD_MOVIE = 'LOAD_MOVIE'
export const LOAD_MOVIE_SUCCESS = 'LOAD_MOVIE_SUCCESS'
export const LOAD_MOVIE_FAILED = 'LOAD_MOVIE_FAILED'

export const loadMovie = (start, count)=>({ type: LOAD_MOVIE, start, count })
export const loadMovieSuccess = (data)=>({type: LOAD_MOVIE_SUCCESS, items: data.subjects})
export const loadMovieFailed = (message)=>({type: LOAD_MOVIE_FAILED, error: message})

export const fetchMovies = ()=>(dispatch)=>{
  dispatch(loadMovie(0, 20))
  return fetch('http://api.douban.com/v2/movie/top250?start=0&count=20')
      .then(response=>response.json())
      .then(json=>dispatch(loadMovieSuccess(json)))
      .catch(error=>dispatch(loadMovieFailed(error.message)))
}