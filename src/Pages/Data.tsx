import { Button, Table, message } from "antd";
import React, { useEffect, useState } from "react";
import fetchUserData from "../lib/Data";
import { useNavigate } from "react-router-dom";

const Data: React.FC = () => {
  const [dataSource, setDataSource] = useState();

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "First Name",
      dataIndex: "first_name",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "last_name",
      key: "lastName",
    },
  ];

  const fetchData = async () => {
    try {
      const res = await fetchUserData();
      setDataSource(
        res.map((data: any) => {
          return {
            key: data.id,
            id: data.id,
            email: data.email,
            first_name: data.first_name,
            last_name: data.last_name,
          };
        })
      );
    } catch (error) {
      console.error("Error in fetchData:", error);
    }
  };
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const [messageApi, contextHolder] = message.useMessage();

  const handleLogout = async () => {
    localStorage.removeItem("token");
    await messageApi.open({
      type : "success",
      content : "Logged out",
      duration : .5
    })
    navigate("/");
  };

  return (
    <>
    {contextHolder}
      <Table dataSource={dataSource} columns={columns} />
      <Button className="mx-4" onClick={handleLogout}>
        Logout
      </Button>
    </>
  );
};

export default Data;
