import Link from "next/link";
import { Button, Checkbox, Form, Input } from "antd";

import { useDispatch } from "react-redux";
import { loginRequest } from "../../../app/Redux/Features/auth/authSlise";

const Login: React.FC = () => {
  const dispatch = useDispatch();

  const onFinish = (values: any) => {
    console.log("Success:", values);
    dispatch(loginRequest(values));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
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
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Запам&apos;ятати</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Увійти
        </Button>
        Немає аккаунту? <Link href="/registration">Зареєструватись</Link>
      </Form.Item>
    </Form>
  );
};

export default Login;
