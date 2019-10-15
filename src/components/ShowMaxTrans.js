import React from 'react';
import { useSelector } from 'react-redux';
import '../style/maxTrans.css';

const ShowMaxTrans = () => {
  const maxTrans = trans => {
    const sortTrans = trans.sort((a, b) => {
      return b.pln - a.pln;
    });
    const max = sortTrans[0];
    return max;
  };
  const transactions = useSelector(state => state.transReducer.transactions);
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
  );
};

export default ShowMaxTrans;
