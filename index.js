const action = { type: "", payload: ""}; //Flux Fixed

class Store {
    constructor(reducer, init) {
        this.reducer = reducer;
        this.state = init
    }

    getState() {
        return this.state
    }
}

//Pure Function
//Fixed
const reducer = (store, action) => {
    return store;
};

const init = { count: 0};

const store = new Store(reducer, init); // Fixed

console.log(store.getState());