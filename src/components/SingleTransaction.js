import React from 'react';
import actions from '../app/actions';
import { useDispatch } from 'react-redux';
import '../style/single_trans.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faTrashAlt, faTimesCircle);

const SingleTransaction = ({ trans, id, index }) => {
  const disptach = useDispatch();
  return (
    <div className="single_trans">
      <div className="lp">{index}</div>
      <div className="trans_name">{trans.name}</div>
      <div className="euro">{trans.euro}</div>
      <div className="pln">{trans.pln}</div>
      <button className="delete delBtn" onClick={() => disptach(actions.remove(id))}>
        <FontAwesomeIcon icon="times-circle" />
      </button>
    </div>
  );
};

export default SingleTransaction;
