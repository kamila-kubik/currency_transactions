import React from "react";
import {connect} from "react-redux";
import actions from "../app/actions";
import "../style/currencyConverter.css"

const CurrencyConverter = ({getPlnValue, transactions, plnValue, changeTransPln}) => {

    const value = React.createRef();


    const handleChangePlnValue = (e) => {
        getPlnValue(parseFloat(value.current.value));

    };

    return (
        <div className="converter">
            <p>Przelicznik walutowy</p>
            <label htmlFor="euro">1 EURO = </label>
            <input id="euro" type="number"  placeholder="0,0000" onChange={handleChangePlnValue}  ref={value} step="0.0001"/><span> PLN</span>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    getPlnValue: plnValue => dispatch(actions.getPlnValue(plnValue)),

});

const mapStateToProps = state => ({
    transactions: state.transactions,
    plnValue: state.plnValue
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyConverter);