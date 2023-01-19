import styled from 'styled-components'

export const ContainerHeader = styled.div`
  background: #f3f6fa;
  display: flex;
  width: 20%;
  height: 100vh;
  border-radius: 0 15px 15px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export const ContainerHeaderInfo = styled.div`
  margin: 48px 0 0 0;
`

export const ParagraphContainer= styled.div`
  margin: 24px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
export const ParagrahContainerName = styled.p`
  margin: 0;
  font-size: 24px;
  color: #027596;
`

export const ParagrahContainerEmail = styled.p`
  margin: 0;
  font-size: 18px;
  color: #027596;
`
export const ButtonContainer = styled.div`
  margin: 48px 0;
  .ant-btn-primary {
    background-color: #e6a600;
  }
  .ant-btn-primary:hover, .ant-btn-primary:focus {
    border-color: #ffc735;
    background-color: #ffc735;
  }
`;