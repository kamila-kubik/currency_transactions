import React from "react";
import {connect} from "react-redux";

const ShowMaxTrans = ({transactions}) => {
    const state = transactions;

    const maxTrans = (trans) =>{
        const sortTrans = trans.sort((a,b) => {
            return b.euro - a.euro
        });
        const max = sortTrans[0];
        return max;
    };



    if (state.length > 0){
        const max = maxTrans(transactions);
        return (
            <div>
                <p>Największa transakcja</p>
                <p>
                    <span>Nazwa transakcji: {max.name}, </span>
                    <span>euro: {parseFloat(max.euro).toFixed(2)}, </span>
                    <span>pln: {parseFloat(max.pln).toFixed(2)}.</span>
                </p>

            </div>

        )
    }

    return (
        <div>
            <p>Brak transakcji</p>
        </div>
    )



};

const mapStateToProps = state => ({
    transactions: state.transactions
});

export default connect(mapStateToProps)(ShowMaxTrans);