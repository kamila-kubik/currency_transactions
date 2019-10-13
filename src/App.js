import React from 'react';
// import './App.css';
import CurrencyConverter from "./components/CurrencyConverter";
import AddTransaction from "./components/AddTransaction";
import TransactionsList from "./components/TransactionsList";
import ShowMaxTrans from "./components/ShowMaxTrans";

const App = () => {
  return (
    <div>
      <CurrencyConverter/>
      <AddTransaction/>
      <TransactionsList/>
      <ShowMaxTrans/>
    </div>
  );
};

export default App;
