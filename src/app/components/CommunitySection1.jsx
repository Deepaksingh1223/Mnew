'use client';

import { useEffect, useState } from "react";

export default function SimpleBanner() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
  
  return (
    <>


      <div className="banner-wrapper">
        <div className="banner-bg CommunitySection1" />
        <div className="banner-overlay" />
        <div className="banner-vignette" />

        <div className="banner-content">
          <h1 className="banner-heading">Community</h1>

         
        </div>
      </div>
    </>
  );
}