import React from 'react';
import Header from './Components/Header';
import Chart from './Components/Chart';
import Summary from './Components/Summary';
import Duration from './Components/Duration';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Summary />
      <Duration />
      <Chart />
      
    </div>
  );
};

export default App;
