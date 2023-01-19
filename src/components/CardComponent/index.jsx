import React from "react";
import { Tag } from "antd";
import { useDispatch } from "react-redux";
import moment from "moment/moment";
import { addInfoCardPayment } from "../../features/CardPayment/cardPaymentSlice";
import {
  ContainerCard,
  ContainerCardAvatar,
  ContainerCardInfoData,
  ContainerCardParagraphInfo,
  ParagraphInfoName,
  ParagraphInfoLastName,
  ContainerCardParagraphInfoLastName,
  ParagraphInfoEmail,
  ContainerCardInfoStatusPayment,
  ContainerCardInfoPayment,
  ParagraphPayment,
  ParagraphPaymentDate,
  ParagraphPartailPayment
} from "./styled-components";

const CardComponent = ({
  ID,
  firstName,
  lastName,
  secondLastName,
  email,
  partialPayment,
  estatusPayment,
  mount,
  lastPayment,
  dateLastPayment
}) => {
  const actualDate = moment(new Date())
  const dayAgo = moment(new Date(dateLastPayment))
  const difDate = actualDate.diff(dayAgo, 'days')
  const dispatch = useDispatch()

  const addInfoToCardPayment = () => {
    dispatch(addInfoCardPayment({
      ID,
      firstName,
      lastName,
      secondLastName,
      email,
      partialPayment,
      estatusPayment,
      mount,
      lastPayment,
      dateLastPayment
    }))
  }

  return (
    <ContainerCard key={ID} onClick={addInfoToCardPayment} >
      <ContainerCardInfoData>
        <ContainerCardAvatar>
          <img
            src='https://xsgames.co/randomusers/avatar.php?g=male'
            alt='avatar-fake'
          />
        </ContainerCardAvatar>
        <ContainerCardParagraphInfo>
          <ParagraphInfoName>{firstName}</ParagraphInfoName>
          <ContainerCardParagraphInfoLastName>
            <ParagraphInfoLastName>
              {lastName} {secondLastName}
            </ParagraphInfoLastName>
          </ContainerCardParagraphInfoLastName>
          <ParagraphInfoEmail>{email}</ParagraphInfoEmail>
        </ContainerCardParagraphInfo>
        <ContainerCardInfoStatusPayment>
          {estatusPayment ? (
            <Tag color='#00a5c4'>Pago Completo</Tag>
          ) : (
            <Tag color='#e6a600'>Pago incompleto</Tag>
          )}
        </ContainerCardInfoStatusPayment>
      </ContainerCardInfoData>
      <ContainerCardInfoPayment>
        <ParagraphPayment>
          {mount} MXN
        </ParagraphPayment>
        <ParagraphPaymentDate>
          último pago hace {difDate} días 
        </ParagraphPaymentDate>
        <ParagraphPartailPayment>
          {partialPayment} de 4 parcialidades
        </ParagraphPartailPayment>
      </ContainerCardInfoPayment>
    </ContainerCard>
  );
};

export default CardComponent;
