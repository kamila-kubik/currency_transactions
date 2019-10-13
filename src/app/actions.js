import types from "./types"

const add = item => ({
    type: types.ADD_TRANS, item
});

const remove = id => ({
    type: types.REMOVE_TRANS, id
});

const getPlnValue = number => ({
    type: types.GET_PLN_VALUE, number
});

const changeTransPln = number => ({
    type: types.CHANGE_TRANS_PLN, number
});

const addId = number => ({
    type: types.ADD_ID, number
});



export default {
    add,
    remove,
    getPlnValue,
    changeTransPln,
    addId
}