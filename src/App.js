import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ReadBook from './pages/ReadBook';
import Filter from './pages/Filter';
import Home from './pages/Home';
// import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      {/* <Header/> */}
        <Routes>
          <Route path="/readbook" element ={<ReadBook />}/>
          
          <Route path="/filter" element = {<Filter />}/>
           
          <Route path="/" element ={<Home />}/>
            
        </Routes>
    </Router>
  );
}

export default App;