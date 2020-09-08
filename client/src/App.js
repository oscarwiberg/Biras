import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [tests, setTests] = useState([]);

  useEffect(() => {
    fetch('/test')
      .then((res) => res.json())
      .then((test) => setTests(test));
  }, []);

  console.log(tests);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World!</h1>
        <h3>Updated again</h3>
        <ul>
          {tests.map((test) => (
            <li key={test.id}>{test.text}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
