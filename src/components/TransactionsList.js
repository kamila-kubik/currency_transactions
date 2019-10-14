import React from "react";
import SingleTransaction from "./SingleTransaction";
import {connect} from "react-redux";
import SumOfTransactions from "./SumOfTransactions";
import "../style/transList.css"
import ShowMaxTrans from "./ShowMaxTrans";

const TransactionsList = ({transactions}) => {

    /*<ol>
        {transactions.map(trans => <SingleTransaction id={trans.id} key={trans.id} trans={trans}/>)}
    </ol>*/
    if (transactions.length > 0){
        return (
            <div className="flex">
                <div className="trans_list">
                    <p>Lista transakcji</p>
                    <div className="nav_list">
                        <div className="lp">Lp.</div>
                        <div className="trans_name">Nazwa transakcji</div>
                        <div className="euro">Kwota w Euro</div>
                        <div className="pln">Kwota w PLN</div>
                        <div className="delete">Usuń transakcję</div>
                    </div>
                    {transactions.map((trans, index) =>
                         <div key={trans.id} className={index % 2 === 0 ? 'even' : 'odd'}>
                            <SingleTransaction id={trans.id} key={trans.id} trans={trans} index={index+1}/>
                        </div>)}
                    <SumOfTransactions transactions={transactions}/>
                </div>
                <ShowMaxTrans/>
            </div>
        )
    }
    return null;
};

const mapStateToProps = state => ({
    transactions: state.transactions
});

export default connect(mapStateToProps) (TransactionsList);