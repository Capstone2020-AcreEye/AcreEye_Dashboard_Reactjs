import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import cardsReducer from './reducers/cardsReducer'
import userReducer from './reducers/userReducer'

const reducer = combineReducers({
    cards: cardsReducer,
    curr_user: userReducer
})

const store = createStore(
    reducer,
    composeWithDevTools()
)

export default store