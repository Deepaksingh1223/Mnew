'use client';

import { useEffect, useState } from "react";

export default function SimpleBanner() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <div className="banner-wrapper CardSection1-wrapper">
        <div className="banner-bg CardSection1" />
        <div className="banner-overlay" />
        <div className="banner-vignette" />
        Compliance and 
      </div>
    </>
  );
}