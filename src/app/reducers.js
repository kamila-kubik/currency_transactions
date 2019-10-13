import types from "./types";



const INITIAL_STATE = {
    idNumber:0,
    plnValue: 0,
    transactions: []
};

const transReducer = (state=INITIAL_STATE, action) =>{
    switch (action.type) {
        case types.ADD_TRANS:
            return {
                ...state, transactions: [...state.transactions, action.item]
            };
        case types.GET_PLN_VALUE:
            return {
                ...state, plnValue: action.number
            };
        case types.ADD_ID:
            return {
                ...state, idNumber: state.idNumber + 1
            };
        // case types.CHANGE_TRANS_PLN:
        //     return {
        //         ...state, transactions: [...state.transactions, action.number]
        //     };
        case types.REMOVE_TRANS:
            return {
                ...state, transactions: [...state.transactions.filter(item => item.id !== action.id) ]
            };
        default:
            return state;

    }
};

export default transReducer;

