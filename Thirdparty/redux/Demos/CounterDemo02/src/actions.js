export const ACTION_TYPE_INCREMENT = 'INCREMENT'
export const ACTION_TYPE_DECREMENT = 'DECREMENT'

export const increment = ()=>({type: ACTION_TYPE_INCREMENT})

export const decrement = ()=>({type: ACTION_TYPE_DECREMENT})

export const incrementIfOdd = ()=>{
  return (dispatch, getState) => {
    const count = getState()
    if (count % 2 !== 0) {
      dispatch(increment())
    }
  }
}

export const incrementAsync = (delay)=>{
  // const delay =
  delay = delay || 1000
  return dispatch=>{
    setTimeout(_=>{dispatch(increment())}, delay)
  }
}


