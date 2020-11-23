const initialState = {
    monthlyEarnings: '0',
    annualEarnings: '0',
    taskPercentage: '0',
    pendingRequests: '0'
}

function cardsReducer(state = initialState, action) {

    const updatedState = {...action.data}

    switch (action.type) {
        case 'UPDATE':
            return updatedState
        case 'INIT':
            return updatedState
        default:
            return state
    }
}

export const initializeCards = () => {
    return {
        type: 'INIT',
        data:{
            monthlyEarnings: '40,000',
            annualEarnings: '215,000',
            taskPercentage: '50',
            pendingRequests: '18'
        }
    }
}

export const updateCards = (updatedData) => {
    return {
        type: 'UPDATE',
        data:{
            ...updatedData
        }
    }
}

export default cardsReducer





