
import db from '../firebase'

const initialState = [
    {
        "id": "",
        "time": "",
        "task": ""
    }
]

const tasksReducer = (state = initialState, action) => {

    if(state == undefined || action.data == undefined){
        return initialState
    }
    let updatedState = Object.values(action.data)
    console.log(updatedState)

    switch (action.type) {
        case 'INIT':
            return updatedState
        case 'UPDATE':
            return updatedState
        default:
            return state
    }
}

export const initializeTasks = () => {

    return  dispatch => {
        db.collection('tasks').orderBy('time').onSnapshot((snapshot) => {

            dispatch({
                type: 'INIT',
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