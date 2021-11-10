import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import 'antd/dist/antd.css';
import './index.css';
import Home from './pages/Home';
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <Header/>
        <Routes>
          <Route path="/" element ={<Home />}/>
        </Routes>
    </Router>
  );
}

export default App;