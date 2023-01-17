import React, { useRef } from "react";
import { Button, Checkbox, Form, Input, Row, Col } from "antd";
import PicAuthCode from "../utils/PicAuthCode";
import "./Login.css";

const setCode = () => {
  const words = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
  let code = "";
  for (let i = 0; i < 4; i++) {
    code += words[Math.floor(Math.random() * 52)];
  }
  return code;
};

const Login = () => {
  const authPicRefs = useRef(null);

  const refresh = () => {
    authPicRefs.current.refreshCapcha();
  };

  const onFinish = (values) => {
    console.log(authPicRefs.current.getCapchaCode());
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="form-container">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item label="Captcha">
          <Row gutter={8}>
            <Col span={12}>
              <Form.Item
                name="captcha"
                noStyle
                rules={[
                  {
                    required: true,
                    message: "Please input the captcha you got!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Button onClick={refresh}>Get captcha</Button>
            </Col>
          </Row>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <PicAuthCode setCode={setCode} ref={authPicRefs} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
