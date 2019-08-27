const redux = require('redux');
const createStore = redux.createStore;

const globalState = {
    value: 0,
    age: 17
}

//Reducer
const rootReducer = (state = globalState, action) => {
    switch (action.type) {
        case 'ADD_AGE':
            return {
                ...state,
                age: state.age + 1
            }
            case 'CHANGE_VALUE':
                return {
                    ...state,
                    value: state.value + action.newValue
                }
                default:
                    return state;
    }
}

//Store
const store = createStore(rootReducer);
console.log(store.getState());

//Subscribe
store.subscribe(() => {
    console.log('subscribe store: ', store.getState());
})

//Dispatching Action
store.dispatch({
    type: 'ADD_AGE'
})
store.dispatch({
    type: 'CHANGE_VALUE',
    newValue: 1
})
console.log(store.getState());