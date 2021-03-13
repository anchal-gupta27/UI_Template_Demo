import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Dashboard from './Pages/Dashboard';

function App() {
  return (
   <div className="App">
    <Router>
      <Navbar />
        <Switch>
          <Route path='/' exact component={Dashboard}/>
        </Switch>

     
    </Router>
   </div>
  );
}

export default App;
