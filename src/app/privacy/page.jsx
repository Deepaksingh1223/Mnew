"use client";
import PrivacyPolicy from "../components/Privacy";
import PrivacypolicyBanner from "../components/Privacypolicybanner";


export default function Condition() {
  return (
    <div className="flex flex-col min-h-screen">
      <div id="mxd-page-content" className="mxd-page-content">
        <PrivacypolicyBanner />
        <PrivacyPolicy /> 
      </div>
    </div>
  );
}
