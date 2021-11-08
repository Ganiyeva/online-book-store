import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ReadBook from './pages/ReadBook';
import Filter from './pages/Filter';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/readbook" element ={<ReadBook />}/>
          
          <Route path="/filter" element = {<Filter />}/>
           
          <Route path="/" element ={<Home />}/>
            
        </Switch>
      </div>
    </Router>
  );
}

export default App;