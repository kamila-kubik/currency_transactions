import types from './types';

const INITIAL_STATE = {
  idNumber: 1,
  plnValue: '0,0000',
  error: false,
  transactions: [],
};

const transReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_TRANS:
      return {
        ...state,
        transactions: [...state.transactions, action.item],
      };
    case types.GET_PLN_VALUE:
      return {
        ...state,
        plnValue: action.number,
      };
    case types.ERROR:
      return {
        ...state,
        error: true,
      };

    case types.REMOVE_ERROR:
      return {
        ...state,
        error: false,
      };
    case types.ADD_ID:
      return {
        ...state,
        idNumber: state.idNumber + 1,
      };
    case types.REMOVE_TRANS:
      return {
        ...state,
        transactions: [...state.transactions.filter(item => item.id !== action.id)],
      };

    case types.UPDATE_TRANS:
      let copy = state.transactions.slice();

      copy.forEach(item => (item.pln = (item.euro * action.value).toFixed(2)));
      return {
        ...state,
        transactions: copy,
      };
    default:
      return state;
  }
};

export default transReducer;
