import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

import { roles } from './constants/userRoles';

import {getUserInfo} from "./actions/UserActions";
import ContentPagesContainer from "./containers/ContentPagesContainer";
import StartPageComponent from "./components/StartPageComponent/StartPageComponent";
import LoginComponent from "./components/LoginComponent/LoginComponent";
import Page404 from './components/FallBack/Page404';
import {
    MAIN_PAGE,
    CHARACTERS_PAGE,
    LOCATIONS_PAGE,
    EPISODES_PAGE,
    START_PAGE,
    LOGIN_PAGE,
    REGISTER_PAGE
} from './constants/Paths';

import './App.css';

const App = ({authenticated, getUserInfo, userData}) => {

    // надо после user/me чекнуть роль, но изначально выполняется setstate, и ток потом getuserinfo & update redux
    const [userRole] = useState(authenticated && userData && userData.userRole === roles.USER ? true : false);
    console.log(userData && userData.userRole === roles.USER);
    //1. null
    //2. true
    useEffect(() => {
        if (authenticated) {
            getUserInfo();
        }
    }, [authenticated]);

  return (
      <div className="main-page">
        <Router>
            <Switch>
                {authenticated && <Route exact path={MAIN_PAGE} component={ContentPagesContainer}/>}
                <Route exact path={LOGIN_PAGE} component={LoginComponent}/>
                <Route exact path={REGISTER_PAGE} component={LoginComponent}/>
                <Route exact path={START_PAGE} component={StartPageComponent} />
                {userRole && <Route exact path={CHARACTERS_PAGE} component={ContentPagesContainer}/>}
                <Route exact path={LOCATIONS_PAGE} component={ContentPagesContainer}/>
                <Route exact path={EPISODES_PAGE} component={ContentPagesContainer}/>
                <Route component={Page404}/>
            </Switch>
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