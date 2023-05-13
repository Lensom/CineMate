import { useState } from 'react'
import Link from "next/link";
import { Button, Checkbox, Form, Input, Typography } from "antd";
import { useDispatch } from "react-redux";
import { registrationRequest } from "features/auth/authSlise";

type LayoutType = Parameters<typeof Form>[0]['layout'];

import styles from './registration.module.scss';

const { Title } = Typography;

const Registration: React.FC = () => {
  const [formLayout, setFormLayout] = useState<LayoutType>('horizontal');
  const dispatch = useDispatch();

  const onFinish = (values: any) => {
    const { confirm, remember, ...userData } = values;
    dispatch(registrationRequest(userData));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Title className='form-title'>Реєстрація</Title>
      <Form
        name="basic"
        className='form-wrapper'
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item
          label="Ім'я користувача"
          name="username"
          tooltip="Як ви хочете, щоб інші Вас називали?"
          rules={[{ required: true, message: "Введіть ім'я користувача" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="E-mail"
          name="email"
          rules={[{ required: true, message: "Введіть Ваш e-mail" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Пароль"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Повторіть пароль"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
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
            Зареєструватись
          </Button>
          <Title level={5} className="form-subtitle">Є аккаунт? <Link href="/login" style={{ marginLeft: 5 }}>Увійти</Link></Title>
        </Form.Item>
      </Form>
    </>

  );
};

export default Registration;
