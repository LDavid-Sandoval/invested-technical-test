import styled from 'styled-components'

export const ContainerCard = styled.div`
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  height: 140px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin: 0 16px 32px 16px;
  padding: 14px 32px;
  border-radius: 15px;
  cursor: pointer;
  &:hover {
    border: 1px solid #00a5c4;
  }
`
export const ContainerCardInfoData = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const ContainerCardAvatar = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-right: 24px;
  img {
    width: 100%;
    height: 100%;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 5px;
  }
`

export const ContainerCardParagraphInfo = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`
export const ParagraphInfoName = styled.p`
  font-size: 28px;
  font-weight: bold;
  margin: 0;
`

export const ContainerCardParagraphInfoLastName = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`

export const ParagraphInfoLastName = styled.p`
  font-size: 18px;
  font-weight: 300;
  margin: 0;
`
export const ParagraphInfoEmail = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin: 0;
  color: #027596;
`
export const ContainerCardInfoStatusPayment = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 0 40px 0;
`

export const ContainerCardInfoPayment = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`
export const ParagraphPayment = styled.p`
  font-size: 24px;
  font-weight: 'regular';
  margin: 0;
`
export const ParagraphPaymentDate = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin: 0;
  color: #027596;
`
export const ParagraphPartailPayment = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin: 0;
  color: #e6a600;
`