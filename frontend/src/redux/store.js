import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import {categoryReducer} from './reducers/categoryReducer'
import {postReducer} from './reducers/postReducer'

const reducer = combineReducers({
  categories: categoryReducer,
  posts: postReducer
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store