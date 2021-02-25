import React from 'react';
import axios from "axios";

import {setUserData} from "./index";


const getUserInfo = () => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
    };
    return axios({
        method: 'get',
        url: 'http://localhost:8080/api/user/me',
        headers
    })
        .then((responce) => {setUserData(responce)});
}

export { getUserInfo };