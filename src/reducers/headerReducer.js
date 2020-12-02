const initialState = {
    batteryPercentage: "50",
    flightTime: "0",
    statusColor: '#f40e01'
}

const headerReducer = (state = initialState, action ) => {
    switch(action.type){
        case 'INIT_HEADER':
            return action.data
        case 'UPDATE_HEADER':
            return action.data
        default:
            return state
    }
}

export const updateHeader = (headerData) => {
    return{ 
        type: 'INIT_HEADER',
        data: headerData
    }
}


export default headerReducer