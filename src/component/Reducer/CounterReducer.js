let intitial = 10;


const Reducer = (state = intitial, action) => {

    switch (action.type) {
        case "INCREAMENT": {
            return state + action.payload;
        }
        case "DECREAMENT": {
            return state - 1;
        }
        default: {
            return state;
        }
    }



}

export default Reducer