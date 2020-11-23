import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import cardsReducer from './reducers/cardsReducer'
import tasksReducer from './reducers/tasksReducer'

const reducer = combineReducers({
    cards: cardsReducer,
    tasks: tasksReducer
})

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store