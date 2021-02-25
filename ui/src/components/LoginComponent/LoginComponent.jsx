import React, { useState } from 'react';
import {Form, Input, Button, Checkbox, Card} from 'antd';
import { connect } from 'react-redux';

import { SignIn, SignUp } from '../../actions/SignInUpActions';

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

const LoginComponent = ({ signUp, signIn, match }) => {

    const [login, setLogin] = useState();
    const [password, setPassword] = useState();

    const buttonText = match.path !== "/login" ? "Зарегистрироваться" : "Войти";
    const titleText = match.path !== "/login" ? "Регистрация" : "Добро пожаловать!";

    const onSignInClick = () => {
        signIn(login, password);
    };

    const onSignUpClick = () => {
        signUp(login, password);
    };

    const onClickFunc = match.path !== "/login" ? onSignUpClick : onSignInClick;

    const onLoginChange = (e) => {
        setLogin(e.target.value);
    };

    const onPasswordChange = (e) => {
      setPassword(e.target.value);
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
                        <Input onChange={onLoginChange} placeholder="Введите лагин" />
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
                        <Input.Password onChange={onPasswordChange} value={password} />
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit" onClick={onClickFunc}>
                            {buttonText}
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signUp: (login, password) => dispatch(SignUp(login, password)),
        signIn: (login, password) => dispatch(SignIn(login, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);