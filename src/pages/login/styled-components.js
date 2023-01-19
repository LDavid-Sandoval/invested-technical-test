import styled from 'styled-components'

export const ContainerLogin = styled.div`
    background: #f8f9fa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`

export const ContainerFormLogin = styled.div`
background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  padding: 16px;
`

export const TitleForm = styled.h1`
    font-family: lato;
    font-size: 36px;
    color: #027596;
    margin: 34px;
`

export const ButtonContainer = styled.div`
  margin: 48px 0;
  .ant-btn-default {
    color: #D3D3D3;
  }
  .ant-btn-default:hover, .ant-btn-default:focus {
    border-color: #027596;
    color: #027596;
  }
`;

export const InputContainer = styled.div`
    .ant-form-item-label {
        padding: 0;
    }
    .ant-form-item {
        margin: 0;
    }
`;