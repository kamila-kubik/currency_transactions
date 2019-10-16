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
      disptach(actions.error());
    } else {
      valuOfpln = value.current.value;
      disptach(actions.remove_error());
    }
    disptach(actions.getPlnValue(valuOfpln));
    if (transactions.length > 0) {
      disptach(actions.updateTrans(valuOfpln));
    }
  };

  const error = useSelector(state => state.transReducer.error);

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
          step="0.0001"
          min={0}
          ref={value}
        />
        <span>PLN</span>
      </label>
      {error && <span className="error">To pole nie może być mniejsze od 0</span>}
    </div>
  );
};

export default CurrencyConverter;
