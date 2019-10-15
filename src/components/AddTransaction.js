import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import actions from '../app/actions';
import '../style/addTrans.css';

const validate = values => {
  const errors = {};
  if (!values.transName) {
    errors.transName = 'To pole nie może być puste';
  }
  if (!values.transValue) {
    errors.transValue = 'To pole nie może być puste';
  } else if (Number(values.transValue) <= 0) {
    errors.transValue = 'Wartość transakcji nie może być mniejsza lub równa 0';
  }
  return errors;
};

const renderField = ({ input, type, placeholder, step, min, id, meta: { touched, error } }) => (
  <>
    <input {...input} type={type} placeholder={placeholder} step={step} min={min} id={id} />
    {touched && (error && <span className="error">{error}</span>)}
  </>
);

const AddTransaction = ({ handleSubmit }) => {
  const idNumber = useSelector(state => state.transReducer.idNumber);
  const currency = useSelector(state => state.transReducer.plnValue);
  const dispatch = useDispatch();

  const submitNewTrans = formData => {
    let transName = formData.transName;
    let euro = formData.transValue;

    const euroValue = parseFloat(euro).toFixed(2);
    const pln = (euro * currency).toFixed(2);

    dispatch(actions.addId());
    dispatch(
      actions.add({
        id: idNumber,
        name: transName,
        euro: euroValue,
        pln: pln,
      }),
    );
    euro = '0,00';
    transName = '';
  };

  return (
    <div className="add_trans">
      <form onSubmit={handleSubmit(submitNewTrans)} className="trans_form">
        <p>Dodaj transakcję</p>
        <label htmlFor="trans_name">
          Nazwa transakcji:
          <Field name="transName" component={renderField} type="text" id="trans_name" />
        </label>
        <label htmlFor="trans_value">
          Kwota w EURO:
          <Field
            name="transValue"
            component={renderField}
            type="number"
            placeholder="0,00"
            step="0.01"
            id="trans_value"
            min={0}
          />
        </label>
        <button type="submit" id="submit">
          Dodaj
        </button>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'add_transaction',
  destroyOnUnmount: false,
  validate,
})(AddTransaction);
