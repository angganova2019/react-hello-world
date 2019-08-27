import ActionType from './globalActionType';

const globalState = {
    totalOrder: 0
}

//Reducer
const rootReducer = (state = globalState, action) => {
    if (action.type === ActionType.PLUS_ORDER) {
        return {
            ...state,
            totalOrder: state.totalOrder + 1
        }
    }
    if (action.type === ActionType.MINUS_ORDER) {
        let order = 0;
        if (state.totalOrder > 0) {
            order = state.totalOrder - 1
        }
        return {
            ...state,
            totalOrder: order
        }
    }
    return state;
}

export default rootReducer;