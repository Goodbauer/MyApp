import React from 'react';
import axios from "axios";

const SignIn = async () => {
    await axios({
        method: 'post',
        url: 'http://localhost:8080/api/auth/signin',
        data: {
            username: "123",
            password: "123"
        }
    }).then((answer) => console.log(answer));
};

const SignUp = async () => {
    await axios({
        method: 'post',
        url: 'http://localhost:8080/api/auth/signup',
        data: {
            username: "123",
            password: "123"
        }
    }).then((answer) => console.log(answer));
};
