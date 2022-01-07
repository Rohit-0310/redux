const addTodoAction = { 
    type: "ADD_TODO", 
    payload: {id: 1, title: "Learn Redux", status: false},
}; //Fixed, Payload Optional

class Store {
    constructor(reducer, init) {
        this.reducer = reducer;
        this.state = init;
    }

    getState() {
        return this.state;
    }

    dispatch(action){
        this.state = this.reducer(this.state, action)
    }
}
/*
//Pure Function
//Fixed
// const reducer = (state, action) => {
    // if (action.type === "INC_COUNT") {state.count = state.count + action.payload}

// };


*/

/*
const reducer = (state, {type, payload}) => {

    switch(type){
        case "INC_COUNT":
            return { ...state, count: state.count + payload }
        case "DEC_COUNT":
            return { ...state, count: state.count - payload }
        case "ADD_TODO":
            return{ ...state, todo: [...state.todo, payload]};
        default:
            return state;
            }
    }
    */

const init = { count: 0 , todo: [] };

const store = new Store(reducer, init); // Fixed

console.log(store.getState());

store.dispatch({type: "INC_COUNT", payload: 1})
store.dispatch({type: "INC_COUNT", payload: 10})

console.log(store.getState());

store.dispatch({type: "DEC_COUNT", payload: 1})

console.log(store.getState());

store.dispatch({
    type: "ADD_TODO", 
    payload: {title: "Learn React", status: false}})
store.dispatch({
    type: "ADD_TODO", 
    payload: {title: "Learn Redux", status: false}})

console.log(store.getState());
