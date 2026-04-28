"use client";

import CommunitySection1 from "../components/CommunitySection1";
import CommunitySection2 from "../components/CommunitySection2";
import CommunitySection3 from "../components/CommunitySection3";
export default function About() {
  return (

    <div className="flex flex-col min-h-screen">
      <div id="mxd-page-content" className="mxd-page-content">
        <CommunitySection1 />
        <CommunitySection2 />
        <CommunitySection3 />
      </div>
    </div>
  );
}
