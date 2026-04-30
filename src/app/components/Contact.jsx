'use client';

import { useEffect, useState } from "react";

export default function SimpleBanner() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
  
  return (
    <>


      <div className="banner-wrapper Contact-div">
        <div className="banner-bg Contact-div-bg" />
        <div className="banner-overlay" />
        <div className="banner-vignette" />

        <div className="banner-content ">
          <h1 className="banner-heading">Contact Us</h1>

           
        </div>
      </div>
    </>
  );
}