import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../app/actions';
import '../style/currencyConverter.css';

const CurrencyConverter = () => {
  const value = React.createRef();
  const disptach = useDispatch();

  const transactions = useSelector(state => state.transReducer.transactions);

  const handleChangePlnValue = () => {
    let valuOfpln;
    if (value.current.value === '' || value.current.value < 0) {
      valuOfpln = '0.00';
    } else {
      valuOfpln = value.current.value;
    }
    disptach(actions.getPlnValue(valuOfpln));
    if (transactions.length > 0) {
      disptach(actions.updateTrans(valuOfpln));
    }
  };

  return (
    <div id="converter">
      <p>Przelicznik walutowy</p>
      <label htmlFor="pln">
        1 EURO =
        <input
          id="pln"
          type="number"
          placeholder="0,0000"
          onChange={handleChangePlnValue}
          ref={value}
          step="0.0001"
          min={0}
        />
        <span>PLN</span>
      </label>
    </div>
  );
};

export default CurrencyConverter;
