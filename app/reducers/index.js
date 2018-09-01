import { combineReducers } from 'redux'

import travellers from './travellers'
import mainTraveller from './mainTraveller'

export default combineReducers({
  travellers,
  mainTraveller,
})
