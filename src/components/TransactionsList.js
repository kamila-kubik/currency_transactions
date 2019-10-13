import React from "react";
import SingleTransaction from "./SingleTransaction";
import {connect} from "react-redux";
import SumOfTransactions from "./SumOfTransactions";

const TransactionsList = ({transactions}) => {
    return (
        <div>
            <ol>
                {transactions.map(trans => <SingleTransaction id={trans.id} key={trans.id} trans={trans}/>)}
            </ol>
            <SumOfTransactions transactions={transactions}/>
        </div>
    )
};

const mapStateToProps = state => ({
    transactions: state.transactions
});

export default connect(mapStateToProps) (TransactionsList);