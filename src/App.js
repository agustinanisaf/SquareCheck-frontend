import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import Login from './pages/login/Login'

function App() {
  return (
    <div>
      <Switch>
				<Route path="/" component={Login} />
			</Switch>
    </div>
  );
}

export default App;
