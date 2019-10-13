import React from "react";
import {connect} from "react-redux";
import actions from "../app/actions";
// import store from "../store";



const CurrencyConverter = ({getPlnValue}) => {

    const plnValue = React.createRef();

    const handleChangePlnValue = (e) => {
        // const state = store.getState();
        getPlnValue(parseFloat(plnValue.current.value));
        // if (state.length > 0 ){
        //     changeTransPln({
        //         pln: store.getState().euro * plnValue
        //     });
        // }


    };

    return (
        <div>
            <p>Przelicznik walutowy</p>
            <label htmlFor="">1 EURO =</label>
            <input type="number" onChange={handleChangePlnValue} ref={plnValue} step="0.0001"/><span>PLN</span>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    getPlnValue: plnValue => dispatch(actions.getPlnValue(plnValue)),
    // changeTransPln: changePln => dispatch(actions.changeTransPln(changePln))


});

export default connect(null, mapDispatchToProps)(CurrencyConverter);