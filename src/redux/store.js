import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

const store = createStore(
    reducer,
    compose(applyMiddleware(thunk),
      typeof window === 'object' && typeof window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : f => f
    )
  )
  
  export default store
  