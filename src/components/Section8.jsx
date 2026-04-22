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
                src="img/new-img-section.webp" 
                alt="Hero image"
                loading="lazy"
              />
              <div className="hero-05-worksblock__descr">
                <p className="t-large t-caption t-bright">Blending creativity with practical design</p>
                <a className="btn btn-anim btn-default btn-outline slide-right-up" href="works-simple.html">
                  <span className="btn-caption">
                    <div className="btn-anim__block">
                      <span className="btn-anim__letter">E</span>
                      <span className="btn-anim__letter">x</span>
                      <span className="btn-anim__letter">p</span>
                      <span className="btn-anim__letter">l</span>
                      <span className="btn-anim__letter">o</span>
                      <span className="btn-anim__letter">r</span>
                      <span className="btn-anim__letter">e</span>
                    </div>
                    <div className="btn-anim__block">
                      <span className="btn-anim__letter">E</span>
                      <span className="btn-anim__letter">x</span>
                      <span className="btn-anim__letter">p</span>
                      <span className="btn-anim__letter">l</span>
                      <span className="btn-anim__letter">o</span>
                      <span className="btn-anim__letter">r</span>
                      <span className="btn-anim__letter">e</span>
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
              src="/img/new-videos-section.webm"
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
                <p className="t-large t-caption t-bright">We are a creative digital agency specializing in 
                  innovative design and cutting-edge development.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}