import React from "react";
import {connect} from "react-redux";
import "../style/maxTrans.css"

const ShowMaxTrans = ({transactions}) => {

    const maxTrans = (trans) =>{
        const sortTrans = trans.sort((a,b) => {
            return b.pln - a.pln
        });
        const max = sortTrans[0];
        return max;
    };

    const max = maxTrans(transactions);
    return (
        <div className="max_trans">
            <p>Transakcja o najwyższej wartości</p>
            <p>
                <span>Nazwa transakcji: {max.name}</span>
                <span>Kwota w EURO: {parseFloat(max.euro).toFixed(2)}</span>
                <span>Kwota w PLN: {parseFloat(max.pln).toFixed(2)}</span>
            </p>
        </div>

        )

};

const mapStateToProps = state => ({
    transactions: state.transactions
});

export default connect(mapStateToProps)(ShowMaxTrans);