"use client";
import Login from "../components/Login";
import LoginRegisterLayout from "../login-register-layout";

export default function Loginpage() {
  return (
    <LoginRegisterLayout>
      <div className="flex flex-col min-h-screen">
        <Login />
      </div>
    </LoginRegisterLayout>
  );
}

 