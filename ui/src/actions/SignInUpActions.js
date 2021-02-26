import React from 'react';
import axios from "axios";
import {signUpSuccess, signInSuccess} from "./index";

const SignIn = async (login, password) => {
    return dispatch => {
        axios.post('http://localhost:8080/api/auth/signin',
            {
                username: `${login}`,
                password: `${password}`
            })
            .then(response => {
                let token = `${response.data.tokenType} ${response.data.accessToken}`;
                localStorage.setItem('accessToken', token);
                dispatch(signInSuccess());
            })
    }
};

const SignUp = async (login, password) => {
    return dispatch => {
        axios.post('http://localhost:8080/api/auth/signup',
            {
                username: `${login}`,
                password: `${password}`
            })
            .then(response => {
                let token = `${response.data.token.body.tokenType} ${response.data.token.body.accessToken}`;
                localStorage.setItem('accessToken', token);
                return dispatch(signUpSuccess());
            })
    }
};

export {
    SignIn,
    SignUp
};
