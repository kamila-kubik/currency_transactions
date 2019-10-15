import React from 'react';
import AddTransaction from './components/AddTransaction';
import TransactionsList from './components/TransactionsList';

const App = () => {
  return (
    <div className="app">
      <AddTransaction />
      <TransactionsList />
    </div>
  );
};

export default App;
