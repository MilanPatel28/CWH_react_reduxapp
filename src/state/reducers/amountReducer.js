// Reducer - they are used to update the state
const reducer = (state=0, action) => {
    if(action.type==='deposit') {
        return state + action.payload;
    } else if(action.type==='withdraw') {
        return state - action.payload;
    }
    return state;
}

export default reducer;