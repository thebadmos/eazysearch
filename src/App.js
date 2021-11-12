import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Allroutes from './routes/Allroutes';
import './App.css';

function App() {
  return (
    <div>
      <Router>

     <Allroutes/>
     </Router>
    </div>
  );
}

export default App;
