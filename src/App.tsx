import React from "react";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Data from "./Pages/Data";
import LoginProtected from "./Protected/LoginProtected";
import DataProtected from "./Protected/DataProtected";
import Auth from "./Pages/Auth";
import RHForm from "./Components/RHForm";
import Message from "./Pages/Message";
import CustomerCare from "./Pages/CustomerCare";
import Notification from "./Pages/Notification";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/form" element={<RHForm />} />

          <Route element={<LoginProtected />}>
            <Route path="/data" element={<Data />} />
          </Route>

          <Route element={<DataProtected />}>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Auth />} />
          </Route>

          <Route path="/message" element={<Message />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/customer-care" element={<CustomerCare />} />

          <Route path="*" element={<p>Page Not Found</p>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
