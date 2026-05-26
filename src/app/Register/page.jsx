"use client"; 
import Register from "../components/Register";
import LoginRegisterLayout from "../login-register-layout";

export default function Loginpage() {
  return (
    <LoginRegisterLayout>
      <div className="flex flex-col min-h-screen">
        <Register />
      </div>
    </LoginRegisterLayout>
  );
}

 