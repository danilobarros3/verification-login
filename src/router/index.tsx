import { ForgotPassword } from "@/pages/ForgotPassword/ForgotPassword";
import { Login } from "@/pages/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/esqueceu-a-senha" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
