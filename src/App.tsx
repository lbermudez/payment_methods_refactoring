import React from 'react';
import './App.css';
import { Payment } from './step_2_extract_subcomponent/components/Payment';


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
        <Payment amount={100.0}/>
      </section>
    </div>
  );
}

export default App;
