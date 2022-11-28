import React, { useEffect } from "react";
import loginRequest from '../../apis/loginRequest'
import { Button, Card, Tabs, Form, Input } from "antd";
import loginStyle from "./loginStyle.module.css";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate=useNavigate()
  const onFinish = (values) => {
    console.log('Success:', values);
     loginRequest(values).then(res=>{
      console.log("执行了res",res);
      localStorage.setItem("token",res.token);
    
        navigate("/")
    
    }).catch(err=>{
      console.log("执行了err",err);
    })
  };
  const onFinish2 = (values) => {
    console.log('注册呀:', values);
    //  loginRequest(values).then(res=>{
    //   console.log("执行了res",res);
    //   window.localStorage.setItem("token",res.token);

    // }).catch(err=>{
    //   console.log("执行了err",err);
    // })
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const onFinishFailed2 = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  useEffect(() => {
    // loginRequest({
    //   username: "18794997531",
    //   password: "123456"
    // }).then(res=>{
    //   console.log(res);
    // })
  });
  return (
    <div className={loginStyle.warp}>
      <Card
        bordered={false}
        headStyle={{
          background: "#f2f4f5",
          textAlign: "center",
          fontSize: "20px",
        }}
        title="好学教育系统"
        style={{
          width: 500,
        }}
      >
        <Tabs
          defaultActiveKey="1"
          items={[
            {
              label: `手机号密码登陆`,
              key: "1",
              children: (
                <Form
                  name="basic"
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  
                >
                  <Form.Item
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>

                  <Form.Item
                   
                  >
                    <Button className={loginStyle.button} type="primary" htmlType="submit">
                    立即登录
                    </Button>
                  </Form.Item>
                </Form>
              ),
            },
            {
              label: `新用户注册`,
              key: "2",
              children: <Form
              name="basic2"
              onFinish={onFinish2}
              onFinishFailed={onFinishFailed2}
              autoComplete="off"
            >
              <Form.Item
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
               
              >
                <Button className={loginStyle.button} type="primary" htmlType="submit">
                立即注册
                </Button>
              </Form.Item>
            </Form>,
            },
          ]}
        />
      </Card>
    </div>
  );
}
