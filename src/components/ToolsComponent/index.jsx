import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PlusOutlined } from "@ant-design/icons";
import { Input, Button, Modal, Form, Select } from "antd";
import { Player } from "@lottiefiles/react-lottie-player";
import {
  ContainerTool,
  ButtonContainer,
  ButtonContainerModal,
  ButtonTextContainerModal,
  PargraphTitleModal,
  InputContainer,
  ParagraphTextModal,
  ContainerAniamtion,
} from "./styled-components";
import { addItem } from '../../features/data/dataSlice'

const { Search } = Input;

const ToolsComponent = () => {
  const [loading, setLoading] = useState(false);
  const [addElement, setAddElement] = useState(false);
  const [open, setOpen] = useState(false);
  const playerRef = useRef(null);
  const dispatch = useDispatch()
  const userData = useSelector((state) => state.user);

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handlefinish = () => {
    setOpen(false);
    setAddElement(false);
  };

  const onFinish = (values) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setTimeout(() => {
        playerRef.current.pause();
      }, 2300);
      dispatch(addItem({
        ...values,
        createdBy: userData.id
      }))
      setAddElement(true);
    }, 4000);
  };

  const onSearch = (value) => console.log(value);

  return (
    <ContainerTool>
      <Modal open={open} centered onCancel={handleCancel} footer={null}>
        {!loading && !addElement && (
          <div>
            <PargraphTitleModal>Agregar Usuario</PargraphTitleModal>
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
                  label='Nombre'
                  name='firstName'
                  rules={[
                    {
                      required: true,
                      message: "Por favor ingresa un nombre válido",
                    },
                  ]}>
                  <Input />
                </Form.Item>
              </InputContainer>
              <InputContainer>
                <Form.Item
                  label='Apellido Materno'
                  name='lastName'
                  rules={[
                    {
                      required: true,
                      message: "Por favor ingresa un apellido válido",
                    },
                  ]}>
                  <Input />
                </Form.Item>
              </InputContainer>
              <InputContainer>
                <Form.Item
                  label='Apellido Paterno'
                  name='secondLastName'
                  rules={[
                    {
                      required: true,
                      message: "Por favor ingresa un apellido válido",
                    },
                  ]}>
                  <Input />
                </Form.Item>
              </InputContainer>
              <InputContainer>
                <Form.Item
                  label='Correo electronico'
                  name='email'
                  rules={[
                    {
                      type: "email",
                      required: true,
                      message: "Por favor ingresa un email válido",
                    },
                  ]}>
                  <Input />
                </Form.Item>
              </InputContainer>
              <InputContainer>
                <Form.Item
                  name='mount'
                  label='Primer pago'
                  rules={[
                    {
                      required: true,
                      message: "Selecciona un monto",
                    },
                  ]}>
                  <Select
                    showSearch
                    style={{ width: "100%" }}
                    placeholder='$ 0'
                    optionFilterProp='children'
                    filterOption={(input, option) =>
                      (option?.label ?? "").includes(input)
                    }
                    filterSort={(optionA, optionB) =>
                      (optionA?.label ?? "")
                        .toLowerCase()
                        .localeCompare((optionB?.label ?? "").toLowerCase())
                    }
                    options={[
                      {
                        value: 1,
                        label: "$25.00",
                      },
                      {
                        value: 2,
                        label: "$50.00",
                      },
                      {
                        value: 3,
                        label: "$75.00",
                      },
                      {
                        value: 4,
                        label: "$100.00",
                      },
                    ]}
                  />
                </Form.Item>
              </InputContainer>

              <Form.Item>
                <ButtonContainerModal>
                  <Button
                    htmlType='submit'
                    block
                    key='submit'
                    loading={loading}>
                    Agregar
                  </Button>
                </ButtonContainerModal>
                <ButtonTextContainerModal>
                  <Button
                    block
                    key='cancel'
                    type='text'
                    loading={loading}
                    onClick={handleCancel}>
                    Cancelar
                  </Button>
                </ButtonTextContainerModal>
              </Form.Item>
            </Form>
          </div>
        )}
        {loading && !addElement && (
          <ContainerAniamtion>
            <Player
              src='https://assets7.lottiefiles.com/packages/lf20_7ti3ezun.json'
              className='player'
              autoplay
              loop={true}
              ref={playerRef}
              style={{ height: "150px", width: "150px" }}
            />
            <ParagraphTextModal>
              Se esta agregando su usuario y procesando su pago
            </ParagraphTextModal>
          </ContainerAniamtion>
        )}
        {!loading && addElement && (
          <ContainerAniamtion>
            <Player
              src='https://assets5.lottiefiles.com/packages/lf20_0jomt6wm.json'
              className='player'
              autoplay
              loop={false}
              ref={playerRef}
              style={{ height: "150px", width: "150px" }}
            />
            <ParagraphTextModal>
              Se agrego el usuario de manera correcta
            </ParagraphTextModal>
            <ButtonContainerModal>
              <Button
                type='primary'
                block
                key='submit'
                loading={loading}
                onClick={handlefinish}>
                Aceptar
              </Button>
            </ButtonContainerModal>
          </ContainerAniamtion>
        )}
      </Modal>
      <ButtonContainer>
        <Button type='primary' shape='round' size='large' onClick={showModal}>
          <PlusOutlined
            style={{
              fontSize: 16,
              color: "#ffffff",
            }}
          />
          Agregar
        </Button>
      </ButtonContainer>
      <Search
        placeholder='Buscar'
        onSearch={onSearch}
        style={{
          width: 400,
        }}
      />
    </ContainerTool>
  );
};

export default ToolsComponent;
