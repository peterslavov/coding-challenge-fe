import { createStore, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'
import logger from 'redux-logger'

import rootReducer from './Reducer'

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

export default store
