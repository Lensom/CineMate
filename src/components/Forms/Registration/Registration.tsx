import Link from "next/link";
import { Button, Checkbox, Form, Input, Typography } from "antd";
import { useDispatch } from "react-redux";
import { registrationRequest } from "../../../app/Redux/Features/auth/authSlise";

import styles from './registration.module.scss';

const { Title } = Typography;

const Registration: React.FC = () => {

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
      <Title style={{ textAlign: 'center', margin: '0 0 30px' }}>Реєстрація</Title>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600, margin: '0 auto' }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
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
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Запам&apos;ятати</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }} style={{ textAlign: 'center' }}>
          <Button type="primary" htmlType="submit">
            Зареєструватись
          </Button>
          <Title level={5} style={{ textAlign: 'center', margin: '20px 0 0' }}>Є аккаунт? <Link href="/login" style={{ marginLeft: 5 }}>Увійти</Link></Title>
        </Form.Item>
      </Form>
    </>

  );
};

export default Registration;
