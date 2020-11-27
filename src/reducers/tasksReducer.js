
import db from '../firebase'

const initialState = [
    {
        "id": "",
        "time": "",
        "task": ""
    }
]

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INIT_TASKS':
            return action.data
        case 'UPDATE_TASKS':
            return action.data
        default:
            return state
    }
}

export const initializeTasks = () => {

    return  dispatch => {

        db.collection('tasks').orderBy('time').onSnapshot((snapshot) => {

            dispatch({
                type: 'INIT_TASKS',
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

export default tasksReducer