import {
    ACTION_TYPE_ADD,
    ACTION_TYPE_DELETE,
    ACTION_TYPE_SORTBYTEXT,
} from '../actions/cityActions'

const defaultCityList = [
    {name: '北京', id: 0},
    {name: '上海', id: 1},
    {name: '广州', id: 2},
    {name: '深圳', id: 3},
]

const city = (state = defaultCityList, action)=> {
  switch (action.type) {
    case ACTION_TYPE_ADD:
      return [...state, {name: action.name, id: action.id}]
    case ACTION_TYPE_DELETE:
      return state.filter(({id})=>action.id !== id)
    case ACTION_TYPE_SORTBYTEXT:
      return state
    default:
      return state
  }
}

export default city