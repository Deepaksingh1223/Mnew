import React from "react";

export default function LoginRegisterLayout({ children }) {
  // Intentionally no Header/Footer. This is separate layout wrapper
  // for Login/Register/Forget pages.
  return <>{children}</>;
}

