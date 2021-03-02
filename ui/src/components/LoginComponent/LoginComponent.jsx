import React, { useState, useEffect } from 'react';
import {Form, Input, Button, Checkbox, Card} from 'antd';
import { connect } from 'react-redux';
import { LOGIN_PAGE, MAIN_PAGE } from '../../constants/Paths';

import { SignIn, SignUp } from '../../actions/SignInUpActions';

import './LoginComponent.css';
import background from "../../maxresdefault.jpg";

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

const headerStyle = {
    backgroundImage: `url(${background})`,
    width: '100vw',
    height: '100vh',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
}

const LoginComponent = ({ signUp, signIn, match, authenticated, history }) => {

    const [login, setLogin] = useState();
    const [password, setPassword] = useState();

    useEffect(() => {
        if (authenticated) {
            history.push(MAIN_PAGE);
        }
    }, [authenticated]);

    const buttonText = match.path !== LOGIN_PAGE ? "Зарегистрироваться" : "Войти";
    const titleText = match.path !== LOGIN_PAGE ? "Регистрация" : "Добро пожаловать!";

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
        <div className="login-form" style={headerStyle}>
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

const mapStateToProps = state => {
    return {
        authenticated: state.authenticated
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signUp: (login, password) => dispatch(SignUp(login, password)),
        signIn: (login, password) => dispatch(SignIn(login, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);