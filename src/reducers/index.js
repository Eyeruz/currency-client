import currenyReducer from './characterReducer'
import { combineReducers } from 'redux'
import currencyReducer from './currencyReducer'

export default conbineReducers({
   currencies: currencyReducer
})