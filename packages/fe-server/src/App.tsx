/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { HashRouter, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Homepage from './components/Homepage';
import './App.css';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Route path="/" exact component={Homepage} />
        <Route path="/dashboard" exact component={Dashboard} />
      </HashRouter>
    </div>
  );
}

export default App;
