import React from 'react';
import { useSelector } from 'react-redux';
import SingleTransaction from './SingleTransaction';
import SumOfTransactions from './SumOfTransactions';
import '../style/transList.css';
import ShowMaxTrans from './ShowMaxTrans';

const TransactionsList = () => {
  const transactions = useSelector(state => state.transReducer.transactions);

  if (transactions.length > 0) {
    return (
      <div className="flex">
        <div className="trans_list">
          <p>Lista transakcji</p>
          <div className="nav_list">
            <div className="lp" id="lp">
              Lp.
            </div>
            <div className="trans_name">Nazwa transakcji</div>
            <div className="euro">Kwota w Euro</div>
            <div className="pln">Kwota w PLN</div>
            <div className="delete" id="delete">
              Usuń transakcję
            </div>
          </div>
          {transactions.map((trans, index) => (
            <div key={trans.id} className={index % 2 === 0 ? 'odd' : 'even'}>
              <SingleTransaction id={trans.id} key={trans.id} trans={trans} index={index + 1} />
            </div>
          ))}
          <SumOfTransactions transactions={transactions} />
        </div>
        <ShowMaxTrans />
      </div>
    );
  }
  return null;
};

export default TransactionsList;
