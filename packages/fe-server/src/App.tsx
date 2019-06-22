/** @jsx jsx */
import { jsx } from '@emotion/core';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import Dashboard from './components/Dashboard';
// import Homepage from './components/Homepage';
import './App.css';

function App() {
  return (
    <div className="App">
      <HashRouter>
        {/* reserve homepage url for later, at the moment just redirect */}
        <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
        <Route exact path="/dashboard" component={Dashboard} />
      </HashRouter>
    </div>
  );
}

export default App;
