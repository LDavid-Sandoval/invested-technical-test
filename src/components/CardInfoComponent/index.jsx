import React, { useState, useRef } from "react";
import { Button, Modal } from "antd";
import {
  CheckCircleTwoTone,
  SmileTwoTone,
  PlusOutlined,
} from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment/moment";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Player } from "@lottiefiles/react-lottie-player";
import {
  ContainerCardInfo,
  CardInfo,
  ContainerCardInfoData,
  ParagraphCardInfoContainerNoData,
  ParagraphCardInfoPaymentInfo,
  ParagraphCardInfoPaymentInfoName,
  ParagraphCardInfoPaymentInfoLastName,
  ContainerInfoLastPayment,
  ParagraphCardInfoLastPayment,
  ButtonContainer,
  ButtonContainerModal,
  ParagraphTextModal,
} from "./styled-components";
import { addInfoCardPayment } from "../../features/CardPayment/cardPaymentSlice";
import { addPayment } from "../../features/data/dataSlice";

const CardInfoComponent = () => {
  const cardInfoPayment = useSelector((state) => state.cardPayment);
  const userInfo = useSelector((state) => state.user);
  const dispatch = useDispatch()
  const playerRef = useRef(null);
  const actualDate = moment(new Date());
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [titleModalText, setTitleModalText] = useState(
    "¿Desea agregar un pago de parcialidad?"
  );
  const [modalText, setModalText] = useState(
    "El pago será procesado con los datos de pago con el que contrato el servicio"
  );
  const [processPayment, setProcessPayment] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    if (!processPayment) {
      setTitleModalText("");
      setModalText("Procesando pago...");
      setConfirmLoading(true);
      const partialPaymentStatusUpdate = cardInfoPayment.partialPayment + 1 === 4 ? true : false
      const updateItem = {
        ID: cardInfoPayment.ID,
        firstName: cardInfoPayment.firstName,
        lastName: cardInfoPayment.lastName,
        secondLastName: cardInfoPayment.secondLastName,
        email: cardInfoPayment.email,
        partialPayment: cardInfoPayment.partialPayment + 1,
        estatusPayment: partialPaymentStatusUpdate,
        mount: `$${((cardInfoPayment.partialPayment + 1) * 25).toFixed(2)}`,
        lastPayment: "$25.00",
        dateLastPayment: `${new Date().toISOString()}`,
      }
      setTimeout(() => {
        setConfirmLoading(false);
        setProcessPayment(true);
        setModalText("Su pago fue procesado");
        setTimeout(() => {
          playerRef.current.pause();
        }, 2300);
        dispatch(addInfoCardPayment(updateItem))
        dispatch(addPayment({
          ...updateItem,
          updatedBy: userInfo.id,
        }))
      }, 2000);
    } else {
      setOpen(false);
      setConfirmLoading(false);
      setTitleModalText("¿Desea agregar un pago de parcialidad?");
      setModalText(
        "El pago será procesado con los datos de pago con el que contrato el servicio"
      );
      setProcessPayment(false);
    }
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <ContainerCardInfo>
      <Modal
        title={titleModalText}
        centered
        open={open}
        confirmLoading={confirmLoading}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <ButtonContainerModal>
            <Button type='default' onClick={handleCancel}>
              Cancelar
            </Button>
            <Button type='primary' onClick={handleOk} loading={confirmLoading}>
              Aceptar
            </Button>
          </ButtonContainerModal>,
        ]}>
        {processPayment && (
          <div>
            <Player
              src='https://assets5.lottiefiles.com/packages/lf20_0jomt6wm.json'
              className='player'
              autoplay
              loop={false}
              ref={playerRef}
              style={{ height: "150px", width: "150px" }}
            />
            <ParagraphTextModal>{modalText}</ParagraphTextModal>
          </div>
        )}
        {confirmLoading && (
          <div>
            <Player
              src='https://assets7.lottiefiles.com/packages/lf20_7ti3ezun.json'
              className='player'
              autoplay
              loop={true}
              ref={playerRef}
              style={{ height: "150px", width: "150px" }}
            />
            <ParagraphTextModal>{modalText}</ParagraphTextModal>
          </div>
        )}
        {
          !confirmLoading && !processPayment &&
          <p>{modalText}</p>
        }
      </Modal>
      {cardInfoPayment.ID ? (
        <CardInfo>
          {cardInfoPayment.partialPayment === 4 ? (
            <ContainerCardInfoData>
              <CheckCircleTwoTone
                twoToneColor='#e6a600'
                style={{ fontSize: "180px" }}
              />
              <ParagraphCardInfoPaymentInfo>
                Pago completo
              </ParagraphCardInfoPaymentInfo>
              <ParagraphCardInfoPaymentInfoName>
                {cardInfoPayment.firstName}
              </ParagraphCardInfoPaymentInfoName>
              <ParagraphCardInfoPaymentInfoLastName>
                {cardInfoPayment.lastName} {cardInfoPayment.secondLastName}
              </ParagraphCardInfoPaymentInfoLastName>
              <ContainerInfoLastPayment>
                <ParagraphCardInfoPaymentInfoLastName>
                  Último pago hace
                </ParagraphCardInfoPaymentInfoLastName>
                <ParagraphCardInfoLastPayment>
                  {`\u00A0${actualDate.diff(
                    new Date(cardInfoPayment.dateLastPayment),
                    "days"
                  )}\u00A0`}
                </ParagraphCardInfoLastPayment>
                <ParagraphCardInfoPaymentInfoLastName>
                  días
                </ParagraphCardInfoPaymentInfoLastName>
              </ContainerInfoLastPayment>
            </ContainerCardInfoData>
          ) : (
            <ContainerCardInfoData>
              <div style={{ width: 180, height: 180 }}>
                <CircularProgressbar
                  value={cardInfoPayment.partialPayment * 25}
                  text={`${cardInfoPayment.partialPayment}/4`}
                  styles={buildStyles({
                    textColor: "#f3f6fa",
                    pathColor: "#f3f6fa",
                    trailColor: "#e6a600",
                  })}
                />
              </div>
              <ParagraphCardInfoPaymentInfo>
                Parcialidades
              </ParagraphCardInfoPaymentInfo>
              <ParagraphCardInfoPaymentInfoName>
                {cardInfoPayment.firstName}
              </ParagraphCardInfoPaymentInfoName>
              <ParagraphCardInfoPaymentInfoLastName>
                {cardInfoPayment.lastName} {cardInfoPayment.secondLastName}
              </ParagraphCardInfoPaymentInfoLastName>
              <ContainerInfoLastPayment>
                <ParagraphCardInfoPaymentInfoLastName>
                  Último pago hace
                </ParagraphCardInfoPaymentInfoLastName>
                <ParagraphCardInfoLastPayment>
                  {`\u00A0${actualDate.diff(
                    new Date(cardInfoPayment.dateLastPayment),
                    "days"
                  )}\u00A0`}
                </ParagraphCardInfoLastPayment>
                <ParagraphCardInfoPaymentInfoLastName>
                  días
                </ParagraphCardInfoPaymentInfoLastName>
              </ContainerInfoLastPayment>
              <ButtonContainer>
                <Button type='primary' size='large' onClick={showModal} block>
                  <PlusOutlined
                    style={{
                      fontSize: 16,
                      color: "#ffffff",
                    }}
                  />
                  Agregar pago de parcialidad
                </Button>
              </ButtonContainer>
            </ContainerCardInfoData>
          )}
        </CardInfo>
      ) : (
        <CardInfo>
          <ContainerCardInfoData>
            <SmileTwoTone
              twoToneColor='#e6a600'
              style={{ fontSize: "180px" }}
            />
            <ParagraphCardInfoContainerNoData>
              Selecciona un usuario para agregar un pago
            </ParagraphCardInfoContainerNoData>
          </ContainerCardInfoData>
        </CardInfo>
      )}
    </ContainerCardInfo>
  );
};

export default CardInfoComponent;
