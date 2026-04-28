"use client";

import AboutSection1 from "../components/aboutSection1"; 
import AboutSection2 from "../components/aboutSection2";
import AboutSection3 from "../components/aboutSection3";
import AboutSection4 from "../components/aboutSection4";
import AboutSection5 from "../components/aboutSection5";
import InvestorsSection from "../components/InvestorsSection";
export default function About() {
  return (
  
    <div className="flex flex-col min-h-screen"> 
      <div id="mxd-page-content" className="mxd-page-content">
        <AboutSection1/> 
        <AboutSection2/>
            <AboutSection3/>
              <AboutSection4/>
                <AboutSection5/>
                <InvestorsSection/>
      </div> 
    </div>
  );
}
