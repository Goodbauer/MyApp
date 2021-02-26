import React from 'react';
import axios from "axios";
import tokenSaver from '../util/tokenSaver';
import {signUpSuccess} from "./index";

const SignIn = (login, password) => {
  return axios({
    method: 'post',
    url: 'http://localhost:8080/api/auth/signin',
    data: {
      username: `${login}`,
      password: `${password}`
    }
  })
    .then((answer) => tokenSaver(answer.data.accessToken));
};

const SignUp = (login, password) => {

  return dispatch => {
    axios.post('http://localhost:8080/api/auth/signup',
      {
        username: `${login}`,
        password: `${password}`
      })
      .then(response => {
        let token = `${response.data.token.body.tokenType} ${response.data.token.body.accessToken}`;
        localStorage.setItem('accessToken', token);
        dispatch(signUpSuccess(response.data));
      })
  }

    // return axios({
    //   method: 'post',
    //   url: 'http://localhost:8080/api/auth/signup',
    //   data: {
    //     username: `${login}`,
    //     password: `${password}`
    //   }
    // })
    //   .then((answer) => tokenSaver(answer.data.token.body.accessToken))
};

export {
  SignIn,
  SignUp
};
