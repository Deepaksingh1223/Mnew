"use client";

import { usePathname } from "next/navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RouteChrome({ children }) {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith("/dashboard");
  const isAuthPage =
    pathname?.startsWith("/Login") ||
    pathname?.startsWith("/Register") ||
    pathname?.startsWith("/Fotget");

  return (
    <>
      {!isDashboard && !isAuthPage && <Header />}
      {children}
      {!isDashboard && !isAuthPage && <Footer />}
    </>
  );
}

