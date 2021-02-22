import React from 'react';
import LoginComponent from "./components/LoginComponent/LoginComponent";
import MainPageComponent from "./components/MainPageComponent/MainPageComponent";
import {BrowserRouter as Router, Route} from "react-router-dom";

import background from './maxresdefault.jpg';

import './App.css';

const App = () => {

    const headerStyle ={
        backgroundImage: `url(${background})`,
        width: '100vw',
        height: '100vh',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }



  return (
      <div className="main-page site-card-border-less-wrapper" style={headerStyle}>
        <Router>
            <Route exact path="/" component={MainPageComponent}/>
            <Route exact path="/login" component={LoginComponent}/>
            <Route exact path="/register" component={LoginComponent}/>

        </Router>
      </div>
  );
};

export default App;