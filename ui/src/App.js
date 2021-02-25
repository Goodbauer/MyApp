import React, {useEffect} from 'react';
import LoginComponent from "./components/LoginComponent/LoginComponent";
import MainPageComponent from "./components/MainPageComponent/MainPageComponent";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {connect} from "react-redux";

import background from './maxresdefault.jpg';

import './App.css';
import {getUserInfo} from "./actions/UserActions";

const App = ({hasToken, getUser}) => {

    console.log(hasToken);
    const headerStyle ={
        backgroundImage: `url(${background})`,
        width: '100vw',
        height: '100vh',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }

    useEffect(() => {
        hasToken && getUser();
    }, [hasToken]);



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

const mapStateToProps = state => {
    return {
        hasToken: state
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getUser: () => dispatch(getUserInfo())
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(App);