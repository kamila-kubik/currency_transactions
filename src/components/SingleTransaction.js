import React from "react";
import actions from "../app/actions";
import {connect} from "react-redux";
import "../style/single_trans.css"


const SingleTransaction = ({trans, remove, id, index}) => {

    /*<li>
              {trans.name}<span>, euro: {trans.euro}, </span><span>pln: {trans.pln}</span>
              >
          </li>*/
    return (

        <div className="single_trans">
            <div className="lp">{index}</div>
            <div className="trans_name">{trans.name}</div>
            <div className="euro">{trans.euro}</div>
            <div className="pln">{trans.pln}</div>
            <button className="delete" onClick={() => remove(id)}>X</button>
         </div>

    )

};

const mapDispatchToProps = disptach => ({
    remove: id => disptach(actions.remove(id))
});

export default connect(null, mapDispatchToProps)(SingleTransaction);