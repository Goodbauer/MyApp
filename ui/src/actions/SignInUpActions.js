import React from 'react';
import axios from "axios";
import tokenSaver from '../util/tokenSaver';
import {getUserInfo} from './UserActions';

const SignIn = async (login, password) => {
    await axios({
        method: 'post',
        url: 'http://localhost:8080/api/auth/signin',
        data: {
            username: `${login}`,
            password: `${password}`
        }
    })
        .then((answer) => tokenSaver(answer.data.accessToken))
        .then(() => getUserInfo())
      ;
};

const SignUp = async (login, password) => {
    await axios({
        method: 'post',
        url: 'http://localhost:8080/api/auth/signup',
        data: {
            username: `${login}`,
            password: `${password}`
        }
    })
        .then((answer) => tokenSaver(answer.data.token.body.accessToken))
        .then(() => getUserInfo());
};

export {
    SignIn,
    SignUp
};
