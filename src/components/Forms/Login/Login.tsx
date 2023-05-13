import { FC } from 'react'
import { useDispatch } from "react-redux";

import Link from "next/link";

import { Button, Checkbox, Form, Input, Typography } from "antd";

import { loginRequest } from "features/auth/authSlise";

import styles from './login.module.scss';

const { Title } = Typography;

const Login: FC = () => {
  const dispatch = useDispatch();

  const onFinish = (values: any) => {
    console.log("Success:", values);
    dispatch(loginRequest(values));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Title className='form-title'>Увійти</Title>
      <Form
        name="login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className='form-wrapper'
        layout="vertical"
      >
        <Form.Item
          label="E-mail"
          name="email"
          rules={[{ required: true, message: "Введіть E-mail користувача" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Пароль"
          name="password"
          rules={[{ required: true, message: "Введіть пароль" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
        >
          <Checkbox>Запам&apos;ятати</Checkbox>
        </Form.Item>

        <Form.Item className='form-submit'>
          <Button type="primary" htmlType="submit">
            Увійти
          </Button>
          <Title level={5} className="form-subtitle"> Немає аккаунту?<Link href="/registration" style={{ marginLeft: 5 }}>Зареєструватись</Link></Title>
        </Form.Item>
      </Form></>
  );
};

export default Login;
