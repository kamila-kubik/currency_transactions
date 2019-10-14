import React from 'react';
// import './App.css';
import AddTransaction from "./components/AddTransaction";
import TransactionsList from "./components/TransactionsList";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <AddTransaction/>
      <TransactionsList/>
    </div>
  );
};

export default App;
