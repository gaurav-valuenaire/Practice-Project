import { Button, Form, Input, message } from "antd";
import { useForm } from "antd/es/form/Form";
// import React, { useState } from "react";
import React from "react";
import { IUserDetails } from "../types";
// import { login } from "../lib/Auth";
import { useNavigate } from "react-router-dom";
import useApiMethod from "../hooks/useApiMethod";
import { loginUser } from "../routes/auth";

const Login: React.FC = () => {
  const [form] = useForm();
  form.setFieldsValue({ email: "eve.holt@reqres.in", password: "cityslicka" });

  const [messageApi, contextHolder] = message.useMessage();

  const { callApi, loading } = useApiMethod();
  const navigate = useNavigate();

  const handleLogin = async (value: IUserDetails) => {
    try {
      const res = await callApi(() => loginUser(value));
      localStorage.setItem("token", res?.data?.token);

      await messageApi.open({
        type: "success",
        content: "Logged In",
        duration: 0.5,
      });

      navigate("/data");
    } catch (error : any) {
      messageApi.open({
        type : "error",
        content : error?.response?.data?.error
      })
    }
  };

  return (
    <>
      {contextHolder}
      <div className="flex flex-col">
        <Form
          autoComplete="off"
          form={form}
          className="w-[300px] py-4 flex flex-col gap-4"
          onFinish={handleLogin}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Email is required",
              },
              {
                type: "email",
                message: "Invalid email",
              },
            ]}
            hasFeedback
          >
            <Input placeholder="Enter email" allowClear />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Password is required",
              },
              {
                min: 8,
                message: "Password should be of min. 8 characters",
              },
            ]}
            hasFeedback
          >
            <Input.Password placeholder="Enter password" allowClear />
          </Form.Item>
          <Form.Item>
            <Button
              block
              htmlType="submit"
              name="submit"
              disabled={loading}
              loading={loading}
            >
              Login
            </Button>
          </Form.Item>
        </Form>
        <Button block onClick={() => navigate("/register")}>
          SignUp
        </Button>
      </div>
    </>
  );
};

export default Login;
