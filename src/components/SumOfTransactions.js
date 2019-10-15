import React from 'react';
import '../style/transSum.css';

const SumOfTransactions = ({ transactions }) => {
  const sumOfEuroTrans = trans => {
    const euroTrans = [];
    trans.forEach(item => euroTrans.push(item.euro));
    const sum = euroTrans.reduce((prev, curr) => {
      return Number(prev) + Number(curr);
    });
    return parseFloat(sum).toFixed(2);
  };

  const sumOfPlnTrans = trans => {
    const plnTrans = [];
    trans.forEach(item => plnTrans.push(item.pln));
    const sum = plnTrans.reduce((prev, curr) => {
      return Number(prev) + Number(curr);
    });
    return parseFloat(sum).toFixed(2);
  };

  return (
    <div className="trans_sum">
      <div className="sum">Suma</div>
      <div className="euro" id="sum_euro">
        {transactions.length > 0 ? sumOfEuroTrans(transactions) : '0'}
      </div>
      <div className="pln" id="sum_pln">
        {transactions.length > 0 ? sumOfPlnTrans(transactions) : '0'}
      </div>
      <div className="delete" id="sum_delete" />
    </div>
  );
};

export default SumOfTransactions;
