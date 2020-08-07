import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import './App.css';

// Components
import SavedMaps from './Components/SavedMaps';
import Navbar from './Components/Navbar';
import MapEditor from './Components/MapEditor';


function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <br />
        <Route path= '/map-editor' exact component={MapEditor} />
        <Route path= '/' exact component={SavedMaps} />
        <Route path= '/test' exact component={Map} />
      </div>
    </Router>
    
  );
}

export default App;
