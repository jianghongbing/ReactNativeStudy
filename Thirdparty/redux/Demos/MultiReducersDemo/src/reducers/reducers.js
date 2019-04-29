import counter from './counter'
import city from './city'
import { combineReducers } from 'redux'
export const reducers = combineReducers({counter, city})