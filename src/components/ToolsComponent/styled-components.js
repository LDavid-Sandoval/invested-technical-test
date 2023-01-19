import styled from "styled-components";

export const ContainerTool = styled.div`
  background: #f3f6fa;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 10vh;
  border-radius: 10px;
  padding: 32px;
  margin: 48px 16px 0 16px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const ButtonContainer = styled.div`
  margin: 48px 0;
  .ant-btn-primary {
    background-color: #e6a600;
  }
  .ant-btn-primary:hover,
  .ant-btn-primary:focus {
    border-color: #ffc735;
    background-color: #ffc735;
  }
`;

export const ButtonContainerModal = styled.div`
  margin: 32px 0 16px 0;
  .ant-btn-primary {
    background-color: #e6a600;
  }
  .ant-btn-primary:hover,
  .ant-btn-primary:focus {
    border-color: #ffc735;
    background-color: #ffc735;
  }

  .ant-btn-default{
    border-color: #ffc735;
    color: #ffc735;
  }

  .ant-btn-default:hover,
  .ant-btn-default:focus {
    border-color: #ffc735;
    background-color: #ffc735;
    color: white;
  }
`;

export const ButtonTextContainerModal = styled.div`
  .ant-btn-text {
    background-color: #f3f6fa;
  }
  .ant-btn-text:hover,
  .ant-btn-text:focus {
    border-color: #027596;
    background-color: #027596;
    color: white;
  }
`;

export const PargraphTitleModal = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 38px;
  color: #027596;
  margin: 14px;
`;

export const InputContainer = styled.div`
    .ant-form-item-label {
        padding: 0;
    }
    .ant-form-item {
        margin: 0;
    }
`;

export const ParagraphTextModal = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: white;
  text-align: center;
  margin: 0;
  color: #027596;
`;

export const ContainerAniamtion = styled.div`
  width: 472px;
  height: 528px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`