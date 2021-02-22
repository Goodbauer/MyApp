import React from 'react';
import {Form, Input, Button, Checkbox, Card} from 'antd';
import axios from "axios";

import './LoginComponent.css';

const layout = {
    labelCol: {
        span: 7,
    },
    wrapperCol: {
        span: 14,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const cardStyles = {
    background: 'rgba(0, 0, 0, .4)',
    marginLeft: 'auto',
    marginRight: 'auto',
    top: '15%',
    width: '400px',
};

const LoginComponent = ({match}) => {

    const buttonText = match.path !== "/login" ? "Зарегистрироваться" : "Войти";
    const titleText = match.path !== "/login" ? "Регистрация" : "Добро пожаловать!";

    const onClick = async () => {
        const response = await axios({
            method: 'post',
            url: 'http://localhost:8080/api/auth/signup',
            data: {
                username: "123111",
                password: "123111"
            }
        })
            .then((answer) => console.log(answer));
    };

    return (
        <div className="login-form">
            <Card className="sign-login-card" bordered={false} style={cardStyles}>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                >
                    <Form.Item>
                        <h1>{titleText}</h1>
                    </Form.Item>
                    <Form.Item
                        label="Логин"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Введите имя пользователя!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Пароль"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Введите пароль!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit" onClick={onClick}>
                            {buttonText}
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};

export default LoginComponent;