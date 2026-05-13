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
        <div className="banner-content phone-view-show">
          <h1 className="banner-heading">Spend Crypto Like Cash</h1>

          <p className="banner-description">
            Accepted by 130M+ merchants worldwide. Stablecoin holders can
          </p>

          <p className="banner-description">
            access spending globally through leading card networks seamlessly.
          </p>


          <a class="btn btn-anim btn-default btn-outline slide-right-up mt-5" href="/Login">
            <span class="btn-caption">
              <div class="btn-anim__block">
                <span class="btn-anim__letter">G</span>
                <span class="btn-anim__letter">e</span>
                <span class="btn-anim__letter">t</span>
                <span class="btn-anim__letter"></span>
                <span class="btn-anim__letter">S</span>
                <span class="btn-anim__letter">t</span>
                <span class="btn-anim__letter">a</span>
                <span class="btn-anim__letter">r</span>
                <span class="btn-anim__letter">t</span>
                <span class="btn-anim__letter">e</span>
                <span class="btn-anim__letter">d</span>
              </div>
              <div class="btn-anim__block">
                <span class="btn-anim__letter">G</span>
                <span class="btn-anim__letter">e</span>
                <span class="btn-anim__letter">t</span>
                <span class="btn-anim__letter"> </span>
                <span class="btn-anim__letter">S</span>
                <span class="btn-anim__letter">t</span>
                <span class="btn-anim__letter">a</span>
                <span class="btn-anim__letter">r</span>
                <span class="btn-anim__letter">t</span>
                <span class="btn-anim__letter">e</span>
                <span class="btn-anim__letter">d</span>
              </div>
            </span>
            <i class="ph-bold ph-arrow-up-right"></i></a>
        </div>
      </div>
    </>
  );
}