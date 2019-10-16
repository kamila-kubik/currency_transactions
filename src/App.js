import React from 'react';
import AddTransaction from './components/AddTransaction';
import TransactionsList from './components/TransactionsList';
import CurrencyConverter from './components/CurrencyConverter';

const App = () => {
  return (
    <div>
      <div className="flex">
        <CurrencyConverter />
        <AddTransaction />
      </div>
      <TransactionsList />
    </div>
  );
};

export default App;
