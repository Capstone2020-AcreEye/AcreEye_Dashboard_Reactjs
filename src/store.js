import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import cardsReducer from './reducers/cardsReducer'
<<<<<<< HEAD
import tasksReducer from './reducers/tasksReducer'

const reducer = combineReducers({
    cards: cardsReducer,
    tasks: tasksReducer
=======
import userReducer from './reducers/userReducer'

const reducer = combineReducers({
    cards: cardsReducer,
    curr_user: userReducer
>>>>>>> df216db3c1a61cce071375f379daa72a22c5935f
})

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store