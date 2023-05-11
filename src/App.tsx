import React from 'react';
import './App.css';
import { Payment } from './step_4_add_feature_donate_charity/components/Payment';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <section>
        <Payment amount={99.2}/>
      </section>
    </div>
  );
}

export default App;
