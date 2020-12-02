import db from "../firebase"
import {useSelector} from 'react-redux'

const initialState = []

const date = useSelector(state => state.date)

const imagesReducer = (state = initialState, action) => {

    switch(action.type){
        case 'INIT_IMAGES':
            console.log(action.data)
            return action.data
        case 'UPDATE_IMAGES':
            return action.data
        default:
            return state
    }
}


export const initializeImages = () => {

    return  dispatch => {

        db.collection('data').doc('25-11-2020').collection('images').onSnapshot((snapshot) => {

            dispatch({
                type: 'INIT_IMAGES',
                data: snapshot.docs.map(doc => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
            })
        })
    }    
}

export default imagesReducer