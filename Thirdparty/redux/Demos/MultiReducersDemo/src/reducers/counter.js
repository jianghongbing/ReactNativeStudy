import {
    ACTION_TYPE_INCREMENT,
    ACTION_TYPE_DECREMENT
} from '../actions/counterActions'

const counter = (state = 0, action) => {
  switch (action.type) {
    case ACTION_TYPE_INCREMENT:
      return state + 1
    case ACTION_TYPE_DECREMENT:
      return state - 1
    default:
      return state
  }
}

export default counter