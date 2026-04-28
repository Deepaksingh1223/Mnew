 
import Sectionnew from "./components/Sectionnew";
import Section3 from "./components/Section3";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section7 from "./components/Section7";
import Section8 from "./components/Section8"; 
import Section9 from "./components/Section9";
import Section10 from "./components/Section10";
import Section12 from "./components/Section12";
import Section13 from "./components/Section13";
import Section14 from "./components/Section14";
import InvestorsSection from "./components/InvestorsSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
     
      <main id="mxd-page-content" className="mxd-page-content">
        <Sectionnew />
        <Section3 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 /> 
        <Section9 /> 
        <Section10 />
        <Section12 /> 
        <InvestorsSection/>
        <Section13 />

    
        <Section14 /> 
      </main> 
    </div>
  );
}
