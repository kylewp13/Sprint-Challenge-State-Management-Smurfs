import { 
    DATA_LOAD_START,
    DATA_LOAD_SUCCESS,
    DATA_LOAD_FAILURE
} from '../actions/index' ;

const initialState = {
    isLoading: false,
    error: '',
    smurfs: [
        {
            name: "Brainey",
            age: 200,
            height: "5cm",
            id: 0
        }, {
            name: "Brainey",
            age: 200,
            height: "5cm",
            id: 1
        }
    ]
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case DATA_LOAD_START: 
            return {
                ...state,
                isLoading: true
            };
        case DATA_LOAD_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isLoading: false
            };
        case DATA_LOAD_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        default:
            return state;
    }
    // return state:
};

export default reducer;