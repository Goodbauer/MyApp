import React from 'react';
const tokenSaver = (token) => {
    localStorage.setItem('accessToken', token);
};
export default tokenSaver;