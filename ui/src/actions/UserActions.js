import React from 'react';
import axios from "axios";


const getUserInfo = () => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
    };
    return (dispatch) => {
        return axios({
            method: 'get',
            url: 'http://localhost:8080/api/user/me',
            headers
        })
            .then((responce) => {
                dispatch({type: "SET_USER_INFO", payload: responce.data})
            });
    }
}

export { getUserInfo };