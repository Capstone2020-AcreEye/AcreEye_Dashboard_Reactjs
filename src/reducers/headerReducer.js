const initialState = {
    batteryPercentage: "50",
    flightTime: "0",
    statusColor: '#f40e01'
}

const headerReducer = (state = initialState, action ) => {
    switch(action.type){
        case 'INITIALIZE_HEADER':
            return action.data
        case 'UPDATE_HEADER':
            return action.data
        default:
            return state
    }
}


export default headerReducer