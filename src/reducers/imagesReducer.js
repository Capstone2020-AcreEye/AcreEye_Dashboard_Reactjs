import db from "../firebase"
import { useSelector } from 'react-redux'

const initialState = []

const imagesReducer = (state = initialState, action) => {

    switch (action.type) {
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

    const currentDate = new Date()
    const dateFormated = currentDate.getDate() + '-' + (currentDate.getMonth()+1) + '-' + currentDate.getFullYear()

    return dispatch => {

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

export const updateImages = (date) => {

    const dateFormated = date.getDate() + '-' + (date.getMonth()+1) + '-' + date.getFullYear()
    console.log("Date Formated: " + dateFormated)

    return dispatch => {

        db.collection('data').doc(dateFormated).collection('images').onSnapshot((snapshot) => {

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