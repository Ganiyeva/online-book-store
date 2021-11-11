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
import Footer from './components/Footer/Footer';
import Registration from "./pages/Registration";
import { Suspense } from "react";

function App() {
  return (
    <Router>
      <Suspense fallback="loading">
        <Header/>
          <Routes>
            <Route path="/" element ={<Home />}/>
            <Route path="/registration" element ={<Registration />}/>
          </Routes>       
        <Footer/>
      </Suspense>
    </Router>
  );
}

export default App;