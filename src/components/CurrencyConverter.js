import React from 'react';
import { useDispatch } from 'react-redux';
import actions from '../app/actions';
import '../style/currencyConverter.css';

const CurrencyConverter = () => {
  const value = React.createRef();
  const disptach = useDispatch();

  const handleChangePlnValue = e => {
    disptach(actions.getPlnValue(parseFloat(value.current.value)));
  };

  return (
    <div id="converter">
      <p>Przelicznik walutowy</p>
      <label htmlFor="euro">
        1 EURO =
        <input
          id="euro"
          type="number"
          placeholder="0,0000"
          onChange={handleChangePlnValue}
          ref={value}
          step="0.0001"
        />
        <span>PLN</span>
      </label>
    </div>
  );
};

export default CurrencyConverter;
