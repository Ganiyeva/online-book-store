import React, { Suspense } from "react";
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
import { NotFound } from "./pages/NotFound";
import { Library } from "./pages/Library";
import { ReadBook } from "./pages/ReadBook";
import Registration from "./pages/Registration";
import { Categories } from "./components/Categories/Categories";
import Passcode from "./components/Passcode/Passcode";
import 'swiper/swiper.min.css'; 

function App() {
  return (
    <Router>
      <Suspense fallback = "loading">
      <Header/>
        <Routes>
          <Route path="/" element ={<Home />}/>
          <Route path="/library" element ={<Library />}/>
          <Route path="/readBook" element ={<ReadBook />}/>
          <Route path="/registration" element ={<Registration />}/>
          <Route path="/categories" element ={<Categories/>}/>
          <Route path="/passcode" element ={<Passcode/>}/>
          <Route path="*" element ={<NotFound />}/>
        </Routes>
        </Suspense>
        <Footer/>
    </Router>
  );
}

export default App;