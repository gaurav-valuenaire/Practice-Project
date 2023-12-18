import React from 'react'
import { Button } from 'antd'
import { IError } from '../types'
import useNotification from 'antd/es/notification/useNotification'
import { useNavigate } from 'react-router-dom'
import useMessage from 'antd/es/message/useMessage'
import { RiCustomerService2Line } from "react-icons/ri";

const Notification: React.FC = () => {

    const error: IError = {
        type: "ERROR",
        code: "GENERAL_E_0006",
        isNotify: true,
        message: "Route not found",
        result: null,
        statusCode: 401
    }

    const [api, contextHolder] = useNotification();
    const [messageApi, ctx] = useMessage();

    const navigate = useNavigate();

    const destroyNotification = (key: string) => {
        api.destroy(key);
    }

    const handleNavigation = async () => {

        destroyNotification("error");
        await messageApi.loading({
            type: "loading",
            content: "Redirecting to customer service",
            duration: 1
        }),

            navigate("/customer-care")
    }

    const errorMessage = "We regret to inform you that an unexpected error has occured";
    const errorCode = "Please retry your action, and if the issue persists, contact our support team"

    const showNotification = () => {
        error.isNotify && api.error({
            type: "error",
            message: error.statusCode == 500 ? errorMessage : error.message,
            description: (
                <>
                    <div className='text-gray-500 flex gap-3 mt-3' style={{ fontSize: "10px" }}>{error.statusCode == 500 ? errorCode : error.code} <RiCustomerService2Line className='text-black cursor-pointer p-1 transition-all duration-75 rounded-md hover:bg-[#4b4b4b17] text-2xl' onClick={handleNavigation} /> </div>
                </>
            ),
            duration: 1.5,
            key: "error"
        })
    }

    return (
        <>
            {contextHolder}
            {ctx}
            <div className='grid place-items-center h-screen'>
                <Button onClick={showNotification}>Show Error (Notification)</Button>
            </div>
        </>
    )
}

export default Notification