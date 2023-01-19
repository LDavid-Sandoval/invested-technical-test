import React, { useEffect } from "react";
import { Button, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  ContainerLogin,
  ContainerFormLogin,
  TitleForm,
  ButtonContainer,
  InputContainer,
} from "./styled-components";
import { login } from "../../features/user/userSlice";

const Login = () => {
  const userState = useSelector(state => state.user)
  const dispatch = useDispatch()
  const navigate =  useNavigate()

  useEffect(() => {
    if (userState.id) {
      navigate('/home')
    }
  }, [navigate, userState])

  const onFinish = (values) => {
    dispatch(login(values))
  };

  return (
    <ContainerLogin>
      <ContainerFormLogin>
        <TitleForm>Iniciar Sesión</TitleForm>
        <Form
          size='large'
          name='basic'
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          autoComplete='off'
          layout='vertical'>
          <InputContainer>
            <Form.Item
              label='Correo electronico'
              name='email'
              rules={[
                {
                    type: 'email',
                  required: true,
                  message: "Por favor ingresa un email válido",
                },
              ]}>
              <Input />
            </Form.Item>
          </InputContainer>

          <InputContainer>
            <Form.Item
              label='contraseña'
              name='password'
              rules={[
                {
                  required: true,
                  message: "Ingresa tu contraseña!",
                },
              ]}>
              <Input.Password />
            </Form.Item>
          </InputContainer>

          <Form.Item>
            <ButtonContainer>
              <Button htmlType='submit' block>
                Login
              </Button>
            </ButtonContainer>
          </Form.Item>
        </Form>
      </ContainerFormLogin>
    </ContainerLogin>
  );
};

export default Login;
