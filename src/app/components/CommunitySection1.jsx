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

          <p className="banner-description phone-view-show">
            At MDR Futuristics , we believe finance should be accessible, 
          </p>
          <p className="banner-description"> empowering,
            and inclusive. We bridge the world of crypto and  </p>
      
            <p className="banner-description"> traditional money
            through real, practical, and relevant solutions .</p>
        </div>
      </div>
    </>
  );
}