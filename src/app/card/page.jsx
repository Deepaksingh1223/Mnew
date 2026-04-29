"use client";
import CardSection1 from "../components/CardSection1";
import CardSection2 from "../components/CardSection2";
import CardSection3 from "../components/CardSection3";
export default function About() {
  return (

    <div className="flex flex-col min-h-screen">
      <div id="mxd-page-content" className="mxd-page-content">
        <CardSection1 />
        <CardSection2 />    
            <CardSection3 />   
      </div>
    </div>
  );
}
