import React from "react";
import {connect} from "react-redux";
import actions from "../app/actions";
import store from "../store";



const AddTransaction = ({add, addId,  idNumber}) => {

    let transactionsName = React.createRef();
    let euro = React.createRef();

    const submitNewTrans =(e) => {
        e.preventDefault();
        const euroValue = parseFloat(euro.current.value).toFixed(2);
        const plnValue = (euroValue * store.getState().plnValue).toFixed(2);
        const transName = transactionsName.current.value;

        addId();
        add({
            id: idNumber,
            name: transName,
            euro: euroValue,
            pln: plnValue,
        });

    };


    return (
        <div>
            <form onSubmit={submitNewTrans}>
                <label>Nazwa transakcji
                    <input type="text" placeholder="Wpisz nazwę transakcji" ref={transactionsName}/>
                </label>
                <label>Podaj kwotę transakcji
                    <input type="number" placeholder="kwota" ref={euro} step="0.01"/> EURO
                </label>
                <button type="submit">Dodaj</button>
            </form>
        </div>
    )
};

const mapStateToProps = state => ({
    idNumber: state.idNumber
});
const mapDispatchToProps = dispatch => ({
    add: transaction => dispatch(actions.add(transaction)),
    addId: ()=> dispatch(actions.addId())

});


export default connect(mapStateToProps, mapDispatchToProps) (AddTransaction);