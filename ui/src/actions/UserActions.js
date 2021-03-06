import React from 'react';

import {setUserData} from "./index";
import axios from "axios";


const getUserInfo = () => {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('accessToken')
  };

  return dispatch => {
    axios.get('http://localhost:8080/api/user/me',
      {
        headers: headers
      })
      .then(response => {
        dispatch(setUserData(response.data));
      })
  }
}

export {getUserInfo};