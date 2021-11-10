import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import 'antd/dist/antd.css';
import './index.css';
import Home from './pages/Home';
import { NotFound } from "./pages/NotFound";
import { Library } from "./pages/Library";
import { ReadBook } from "./pages/ReadBook";
import { Registration } from "./pages/Registration";
import { Categories } from "./components/Categories.js/Categories";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element ={<Home />}/>
          <Route path="/library" element ={<Library />}/>
          <Route path="/readBook" element ={<ReadBook />}/>
          <Route path="/register" element ={<Registration />}/>
          <Route path="*" element ={<NotFound />}/>
        </Routes>
    </Router>
  );
}

export default App;