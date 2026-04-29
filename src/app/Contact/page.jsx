"use client";

import Contact from "../components/Contact"; 
import ContactSection1 from "../components/ContactSection1"; 
export default function About() {
  return (

    <div className="flex flex-col min-h-screen">
      <div id="mxd-page-content" className="mxd-page-content">
        <Contact /> 
        <ContactSection1/>
      </div>
    </div>
  );
}
