"use client";
import Terms from '../components/Terms';
import TeamBanner from '../components/TeamBanner';
export default function Condition() {
  return (
    <div className="flex flex-col min-h-screen">
      <div id="mxd-page-content" className="mxd-page-content">
        <TeamBanner />
        <Terms />
      </div>
    </div>
  );
}
