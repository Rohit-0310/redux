const incCountAction = { type: "INC_COUNT", payload: 1}; //Flux Fixed

// const decCountAction = { type: "DEC_COUNT", payload: 1}; //Flux Fixed
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

//Pure Function
//Fixed
const reducer = (state, action) => {
    // if (action.type === "INC_COUNT") {state.count = state.count + action.payload}
    if (action.type === "INC_COUNT") {
        return { ...state, count: state.count + action.payload }
    }
    return state;
};

const init = { count: 0 };

const store = new Store(reducer, init); // Fixed

console.log(store.getState());

store.dispatch({type: "INC_COUNT", payload: 1})

console.log(store.getState());
