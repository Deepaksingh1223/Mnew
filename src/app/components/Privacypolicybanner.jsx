'use client';

import { useEffect, useState } from "react";

export default function PrivacypolicyBanner() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <> 
      <div className="tc-banner">
        <div className="tc-grid-bg" />
        <div className="tc-glow-left" />
        <div className="tc-glow-right" />
        <div className="tc-line-accent" />
        <div className="tc-corner-deco" />

        <div className="tc-content"> 

          <h1 className="tc-heading">
           Privacy  &amp;{" "}
            <span className="tc-heading-accent">Policy</span>
          </h1>

          <p className="tc-desc">
            Please read these Privacy Policy guidelines carefully before using our platform.
            By accessing MDR Futuristics services, you agree to be bound
            by the following guidelines that govern your use of our
            financial and crypto solutions.
          </p> 
        </div>
      </div>
    </>
  );
}