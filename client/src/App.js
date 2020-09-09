import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';

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
      <Header />
    </div>
  );
}

export default App;
