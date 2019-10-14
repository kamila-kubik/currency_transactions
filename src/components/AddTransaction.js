import React from "react";
import {connect} from "react-redux";
import actions from "../app/actions";
import store from "../store";
import "../style/addTrans.css"
import CurrencyConverter from "./CurrencyConverter";



const AddTransaction = ({add, addId,  idNumber}) => {

    let transactionsName = React.createRef();
    let euro = React.createRef();

    const submitNewTrans =(e) => {
        e.preventDefault();
        const euroValue = parseFloat(euro.current.value).toFixed(2);
        const pln = (euroValue * store.getState().plnValue).toFixed(2);
        const transName = transactionsName.current.value;

        addId();
        add({
            id: idNumber,
            name: transName,
            euro: euroValue,
            pln: pln,
        });

        transactionsName.current.value = "";
        euro.current.value = "";

    };

    return (
        <div className="add_trans">
            <form onSubmit={submitNewTrans} className="trans_form">
                <CurrencyConverter/>
                <p>Dodaj transakcję</p>
                <label htmlFor="trans_name">Nazwa transakcji:
                    <input id="trans_name" type="text" ref={transactionsName}/>
                </label>
                <label htmlFor="trans_value">Kwota w  EURO:
                    <input id="trans_value" type="number" placeholder="0,00"  ref={euro} step="0.01"/>
                </label>
                <button type="submit" id="submit">Dodaj</button>
            </form>
        </div>
    )
};

const mapStateToProps = state => ({
    idNumber: state.idNumber,
});
const mapDispatchToProps = dispatch => ({
    add: transaction => dispatch(actions.add(transaction)),
    addId: ()=> dispatch(actions.addId())

});


export default connect(mapStateToProps, mapDispatchToProps) (AddTransaction);