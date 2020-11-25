import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import cardsReducer from './reducers/cardsReducer'
import tasksReducer from './reducers/tasksReducer'
import userReducer from './reducers/userReducer'
import headerReducer  from './reducers/headerReducer'

const reducer = combineReducers({
    cards: cardsReducer,
    tasks: tasksReducer,
    curr_user: userReducer,
    header: headerReducer
})

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store