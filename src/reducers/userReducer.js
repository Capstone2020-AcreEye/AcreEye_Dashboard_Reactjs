const reducer = (state=null, action) => {

    switch(action.type) {
        case 'SET_CURRENT_USER':
            return action.data.user 
        case 'CLEAR_CURRENT_USER':
            return {}
        default:
            return state
    }

}

export const setCurrentUser = (curr_user) => {
    return {
        type: 'SET_CURRENT_USER',
        data:{
            user: curr_user
        }
    }

}

export const clearCurrentUser = () => {
    return {
        type: 'CLEAR_CURRENT_USER'
    }

}

export default reducer