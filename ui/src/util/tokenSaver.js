import React from 'react';
import {setToken} from '../actions/index';
const tokenSaver = (token) => {
    localStorage.setItem('accessToken', token);
    setToken(token);
};
export default tokenSaver;