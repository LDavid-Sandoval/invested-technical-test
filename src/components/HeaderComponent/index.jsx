import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  ContainerHeader,
  ParagraphContainer,
  ParagrahContainerName,
  ParagrahContainerEmail,
  ButtonContainer,
  ContainerHeaderInfo,
} from "./styled-components";
import { reset } from "../../features/user/userSlice";

const HeaderComponent = () => {
  const nameUser = localStorage.getItem("name");
  const lastNameUser = localStorage.getItem("lastName");
  const emailUser = localStorage.getItem("email");
  const dispatch = useDispatch()
  const navigate =  useNavigate()

  const logout = () => {
    dispatch(reset())
    navigate('/')
  }

  return (
    <ContainerHeader>
      <ContainerHeaderInfo>
        <Avatar
          size={200}
          icon={<UserOutlined />}
          style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
          src='https://xsgames.co/randomusers/avatar.php?g=male'
        />
        <ParagraphContainer>
          <ParagrahContainerName>
            {nameUser} {lastNameUser}
          </ParagrahContainerName>
          <ParagrahContainerEmail>{emailUser}</ParagrahContainerEmail>
        </ParagraphContainer>
      </ContainerHeaderInfo>
      <ButtonContainer>
        <Button type='primary' shape='round' size='large' onClick={logout}>
          Logout
        </Button>
      </ButtonContainer>
    </ContainerHeader>
  );
};

export default HeaderComponent;
