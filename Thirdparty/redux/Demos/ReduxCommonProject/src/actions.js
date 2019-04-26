import store from './store'
export const ACTION_TYPE_INCREMENT = 'INCREMENT'
export const ACTION_TYPE_DECREMENT = 'DECREMENT'

//以对象的形式来定义某个action
// export const incrementAction = {
//   type: ACTION_TYPE_INCREMENT
// }
//
// export const decrementAction = {
//   type: ACTION_TYPE_DECREMENT
// }

//以函数的方式来定义某个action
export const increment = ()=>({type: ACTION_TYPE_INCREMENT})

export const decrement = ()=>({type: ACTION_TYPE_DECREMENT})

export const incrementIfOdd = ()=>{
  const count = store.getState()
  if (count % 2 === 1) {
    return increment()
  }
}

// export const incrementAsync = (delay)=>(
//     (dispatch)=>{setTimeout(dispatch(increment()), delay)}
// )


