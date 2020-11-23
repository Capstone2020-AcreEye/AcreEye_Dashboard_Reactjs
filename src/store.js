import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import cardsReducer from './reducers/cardsReducer'

const reducer = combineReducers({
    cards: cardsReducer
})

const store = createStore(
    reducer,
    composeWithDevTools()
)

export default store