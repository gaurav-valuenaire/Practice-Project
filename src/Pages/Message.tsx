import React from 'react'
import { Button } from 'antd';
import useMessage from 'antd/es/message/useMessage';
import { useNavigate } from 'react-router-dom';
import { CloseOutlined, PhoneOutlined } from '@ant-design/icons';
import { IError } from '../types';

const Message: React.FC = () => {

  const error: IError = {
    type: "ERROR",
    code: "GENERAL_E_0006",
    isNotify: false,
    message: "Route not found",
    result: null
  }

  const [messageApi, contextHolder] = useMessage();
  const navigate = useNavigate();

  const removeErrorToast = () => {
    messageApi.destroy("error");
  }

  const handleShow = () => {

    messageApi.error({
      type: "error",
      content: (
        <>
          <span className='absolute left-8 text-red-600' style={{ fontSize: "16px" }}>{error.message}</span>
          <div className='text-gray-600 flex gap-3 mt-3'>{error.code} <PhoneOutlined className='text-black cursor-pointer p-1 transition-all duration-75 rounded-md hover:bg-[#ffffffcb]' onClick={handleNavigation} /> </div>
          <span className='absolute top-1 text-black right-2' onClick={removeErrorToast}><CloseOutlined className='text-red-500 cursor-pointer' /></span>
        </>
      ),
      key: "error",
      duration: 1.5,
    })
  }

  async function handleNavigation() {
    removeErrorToast();

    await messageApi.loading({
      content: (
        <>
          <span className='text-black'>Redirecting to customer support</span>
        </>
      ),
      duration: .5,
    })

    navigate("/customer-care")

  }

  return (
    <>
      {contextHolder}
      <div className='grid place-items-center h-screen'>
        <Button onClick={handleShow}>Show Error (Message)</Button>
      </div>
    </>
  )
}

export default Message