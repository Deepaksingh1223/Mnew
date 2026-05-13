'use client';

/**
 * VisionMissionSection.jsx — Simple & Smooth Vision/Mission Section
 * 
 * A clean, modern two-column layout with smooth fade-in animations.
 */

import { useEffect, useRef, useState } from 'react';

export default function VisionMissionSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      

      <section className="vm-section" ref={sectionRef}>
        <div className="vm-container">
          <div className="vm-grid">
            {/* Vision Card */}
            <div className={`vm-card vm-fade-up ${isVisible ? 'vm-visible' : ''}`}>
            
              <h2 className="vm-title-one">Global Payouts, Powered by Stablecoins</h2>
              <p className="vm-text">
            Our proprietary payout infrastructure enables users to send and receive funds worldwide through secure, stablecoin-powered rails. Now live in Brazil, MDR Futuristics will soon expand to new global corridors. Making fast, reliable payouts accessible to more markets than ever.
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

            {/* Mission Card */}
            <div className={`vm-card vm-fade-up vm-delay-1 ${isVisible ? 'vm-visible' : ''}`}>
             
              <h2 className="vm-title-one">Spend Smarter with a Stablecoin-Based Card</h2>
              <p className="vm-text">
               We empower stablecoin holders to access USD payouts worldwide with seamless card payments through top global networks. As a leading crypto payments fintech, we provide unmatched reach and reliability. We making spending stablecoins simple, secure and truly borderless.
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

            
                {/* Mission Card */}
            <div className={`vm-card vm-fade-up vm-delay-1 ${isVisible ? 'vm-visible' : ''}`}>
              
              <h2 className="vm-title-one">Global Stablecoin Access From Your Fingertips</h2>
              <p className="vm-text">
             MDR Futuristics bridges traditional finance and digital assets, enabling anyone to access and use stablecoins. Our multi-currency accounts and P2P Marketplace enables users without traditional finances to access stablecoins directly - expanding global access for all.
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


    
                {/* Mission Card */}
            <div className={`vm-card vm-fade-up vm-delay-1 ${isVisible ? 'vm-visible' : ''}`}>
              
              <h2 className="vm-title-one">Global Stablecoin Access From Your Fingertips</h2>
              <p className="vm-text">
             MDR Futuristics bridges traditional finance and digital assets, enabling anyone to access and use stablecoins. Our multi-currency accounts and P2P Marketplace enables users without traditional finances to access stablecoins directly - expanding global access for all.
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
        </div>
      </section>
    </>
  );
}