'use client';

import { useEffect, useRef } from 'react';

export default function Section8() {
  const videoRef = useRef(null);
  const parallaxRef = useRef(null);

  useEffect(() => {
    // Optional: Add parallax effect on scroll
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.3;
        parallaxRef.current.style.transform = `translate3d(0px, ${rate}px, 0px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="mxd-section padding-grid-pre-pinned">
      <div className="mxd-container">
        <div className="mxd-divider">
          
          <div className="mxd-hero-05__bottom mxd-grid-item no-margin">
            <div 
              className="mxd-hero-05__worksblock loading__item" 
              style={{ 
                opacity: 1, 
                translate: 'none', 
                rotate: 'none', 
                scale: 'none', 
                transform: 'translate(0px, 0px)' 
              }}
            >
              <img 
                className="mxd-move" 
                src="img/section8-img1.png" 
                alt="MUDRA Crypto Card"
                loading="lazy"
              />
              <div className="hero-05-worksblock__descr">
                <p className="t-large t-caption t-bright">Spend stablecoins instantly — buy coffee, shop online, or pay bills with MUDRA</p>
                <a className="btn btn-anim btn-default btn-outline slide-right-up" href="works-simple.html">
                  <span className="btn-caption">
                    <div className="btn-anim__block">
                      <span className="btn-anim__letter">G</span>
                      <span className="btn-anim__letter">e</span>
                      <span className="btn-anim__letter">t</span>
                      <span className="btn-anim__letter"> </span>
                      <span className="btn-anim__letter">C</span>
                      <span className="btn-anim__letter">a</span>
                      <span className="btn-anim__letter">r</span>
                      <span className="btn-anim__letter">d</span>
                    </div>
                    <div className="btn-anim__block">
                      <span className="btn-anim__letter">G</span>
                      <span className="btn-anim__letter">e</span>
                      <span className="btn-anim__letter">t</span>
                      <span className="btn-anim__letter"> </span>
                      <span className="btn-anim__letter">C</span>
                      <span className="btn-anim__letter">a</span>
                      <span className="btn-anim__letter">r</span>
                      <span className="btn-anim__letter">d</span>
                    </div>
                  </span>
                  <i className="ph-bold ph-arrow-up-right"></i>
                </a>
              </div>
            </div>
            <div 
              className="mxd-hero-05__videoblock loading__item" 
              style={{ 
                opacity: 1, 
                translate: 'none', 
                rotate: 'none', 
                scale: 'none', 
                transform: 'translate(0px, 0px)' 
              }}
            >
              <div className="mxd-hero-05-videoblock__video">
                <video 
              ref={videoRef}
              src="/img/trading-video.mp4"
              className="parallax-img"
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: '100%', 
                display: 'block',
                objectFit: 'cover',
                height: '100vh'
              }}
            />
              </div>
              <div className="mxd-hero-05-videoblock__descr">
                <p className="t-large t-caption t-bright">Where crypto meets real life — empowering global payments with stablecoins</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}