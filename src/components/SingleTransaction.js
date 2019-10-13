import React from "react";
import actions from "../app/actions";
import {connect} from "react-redux";


const SingleTransaction = ({trans, remove, id}) => {


    return (
        <li>
            {trans.name}<span>, euro: {trans.euro}, </span><span>pln: {trans.pln}</span>
            <button onClick={() => remove(id)}>Usuń</button>
        </li>
    )

};

const mapDispatchToProps = disptach => ({
    remove: id => disptach(actions.remove(id))
});

export default connect(null, mapDispatchToProps)(SingleTransaction);