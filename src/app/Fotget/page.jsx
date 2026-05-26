"use client"; 
import Forget from "../components/Forget";
import LoginRegisterLayout from "../login-register-layout";

export default function Loginpage() {
  return (
    <LoginRegisterLayout>
      <div className="flex flex-col min-h-screen">
        <Forget />
      </div>
    </LoginRegisterLayout>
  );
}

 