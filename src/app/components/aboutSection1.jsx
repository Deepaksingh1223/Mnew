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
        <div className="banner-bg" />
        <div className="banner-overlay" />
        <div className="banner-vignette" />

        <div className="banner-content">
          <h1 className="banner-heading">About Us</h1>

          <p className="banner-description">
            At Mudra, we believe finance should be accessible, empowering,
            and inclusive. We bridge the world of crypto and traditional money
            through real, practical, and relevant solutions — helping individuals
            and businesses take control of their financial lives.
          </p>
        </div>
      </div>
    </>
  );
}