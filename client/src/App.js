import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Contact from './pages/Contact';
import News from './pages/News';
import Products from './pages/Products';

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
      <Router>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/news" component={News} />
        <Route path="/contact" component={Contact} />
      </Router>
    </div>
  );
}

export default App;
