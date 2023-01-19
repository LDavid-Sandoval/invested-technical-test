import styled from "styled-components";

export const ContainerCardInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 35%;
  height: 97%;
  padding: 0 0 48px 0;
`;

export const CardInfo = styled.div`
  background-color: #027596;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  padding: 32px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin: 16px 0 0 0;
`;
export const ContainerCardInfoData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const ParagraphCardInfoContainerNoData = styled.p`
  font-size: 40px;
  color: white;
  text-align: center;
`;

export const ParagraphCardInfoPaymentInfo = styled.p`
  font-size: 24px;
  color: white;
  text-align: center;
  margin: 0;
`;

export const ParagraphCardInfoPaymentInfoName = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: white;
  text-align: center;
  margin: 16px 0 0 0;
`;

export const ParagraphCardInfoPaymentInfoLastName = styled.p`
  font-size: 18px;
  font-weight: 200;
  color: white;
  text-align: center;
  margin: 0;
`;

export const ParagraphCardInfoPaymentInfoEmail = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: white;
  text-align: center;
  margin: 0;
`;

export const ParagraphCardInfoLastPayment = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: white;
  text-align: center;
  margin: 0;
  color: #e6a600;
`;

export const ContainerInfoLastPayment = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 24px;
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 24px;
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
  .ant-btn-primary {
    background-color: #e6a600;
  }
  .ant-btn-primary:hover,
  .ant-btn-primary:focus {
    border-color: #ffc735;
    background-color: #ffc735;
  }

  .ant-btn-default:hover,
  .ant-btn-default:focus {
    border-color: #ffc735;
    color: #ffc735;
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