import React, { useRef } from "react";
import { Button, Form, Input, Row, Col } from "antd";
import { CredentialService } from "../../api";
import PicAuthCode from "../utils/PicAuthCode";
import { useNavigate } from "react-router-dom";
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
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const authPicRefs = useRef(null);

  const refresh = () => {
    authPicRefs.current.refreshCapcha();
  };

  const onFinish = async (values) => {
    const username = form.getFieldValue("username");
    const password = form.getFieldValue("password");
    const capchaCode = form.getFieldValue("capcha");
    const userInputCapchaCode = authPicRefs.current.getCapchaCode();
    if (capchaCode.toLowerCase() !== userInputCapchaCode.toLowerCase()) {
      alert("capchat wrong!");
      return;
    }
    await CredentialService.login(username, password)
      .then((res) => res.json())
      .then((res) => {
        const { status } = res;
        if (status === "success") {
          navigate("/landing-page");
        }
      });
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
        form={form}
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

        <Form.Item label="Capcha">
          <Row gutter={8}>
            <Col span={12}>
              <Form.Item
                name="capcha"
                noStyle
                rules={[
                  {
                    required: true,
                    message: "Please input the capcha you got!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Button onClick={refresh}>Get capcha</Button>
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
