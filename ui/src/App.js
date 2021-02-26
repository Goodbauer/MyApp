import React, {useEffect} from 'react';
import LoginComponent from "./components/LoginComponent/LoginComponent";
import MainPageComponent from "./components/MainPageComponent/MainPageComponent";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {connect} from "react-redux";
import HeaderLayout from './layout/Layout';

import background from './maxresdefault.jpg';

import './App.css';
import {getUserInfo} from "./actions/UserActions";

const App = ({authenticated, getUserInfo, userData}) => {

    const headerStyle ={
        backgroundImage: `url(${background})`,
        width: '100vw',
        height: '100vh',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
    console.log(userData);

    useEffect(() => {
        if (authenticated) {
            console.log(123);
            getUserInfo();
        }
    }, [authenticated]);

  return (
      <div className="main-page" style={headerStyle}>
        <HeaderLayout />
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
        authenticated: state.authenticated,
        userData: state.userData
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getUserInfo: () => dispatch(getUserInfo())
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(App);