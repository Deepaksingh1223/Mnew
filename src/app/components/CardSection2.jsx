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
    <section className="vm-section" ref={sectionRef}>
      <div className="vm-container">
        <div className="vm-grid">
          {/* Vision Card */}
          <div className={`vm-fade-up ${isVisible ? 'vm-visible' : ''}`}>
            <h1 className="vm-title">Physical Card</h1>
            <h2 className="vm-title">Tap Into Everyday Spending</h2>
            <p className="vm-text">
              Shop, withdraw, and manage your funds globally with our stablecoin-based card.
            </p>
            <div className="my-10 flex gap-6 sm:gap-12">
              <div className="grow-0 sm:w-[160px] md:w-[88px] tracking-tight">
                <div className="flex-center mb-3 size-10 rounded-[9px] bg-[#F7F8FA]">
                </div>
                <p className="text-sm sm:text-lg">No Annual Fees</p>
              </div>
              <div className="grow-0 sm:w-[160px] md:w-[113px] tracking-tight">
                <div className="flex-center mb-3 size-10 rounded-[9px] bg-[#F7F8FA]">
                  <p className="text-sm sm:text-lg">Simply tap or swipe to pay</p>
                </div>
              </div>
              <div className="grow-0 sm:w-[160px] md:w-[141px] tracking-tight">
                <div className="flex-center mb-3 size-10 rounded-[9px] bg-[#F7F8FA]">
                </div>
                <p className="text-sm sm:text-lg">Withdraw cash at ATMs globally</p>
              </div>
            </div>
            <a className="btn btn-anim btn-default btn-outline slide-right-up mt-5" href="#">
              <span className="btn-caption">
                <div className="btn-anim__block">
                  <span className="btn-anim__letter">G</span>
                  <span className="btn-anim__letter">e</span>
                  <span className="btn-anim__letter">t</span>
                  <span className="btn-anim__letter"> </span>
                  <span className="btn-anim__letter">S</span>
                  <span className="btn-anim__letter">t</span>
                  <span className="btn-anim__letter">a</span>
                  <span className="btn-anim__letter">r</span>
                  <span className="btn-anim__letter">t</span>
                  <span className="btn-anim__letter">e</span>
                  <span className="btn-anim__letter">d</span>
                </div>
                <div className="btn-anim__block">
                  <span className="btn-anim__letter">G</span>
                  <span className="btn-anim__letter">e</span>
                  <span className="btn-anim__letter">t</span>
                  <span className="btn-anim__letter"> </span>
                  <span className="btn-anim__letter">S</span>
                  <span className="btn-anim__letter">t</span>
                  <span className="btn-anim__letter">a</span>
                  <span className="btn-anim__letter">r</span>
                  <span className="btn-anim__letter">t</span>
                  <span className="btn-anim__letter">e</span>
                  <span className="btn-anim__letter">d</span>
                </div>
              </span>
              <i className="ph-bold ph-arrow-up-right"></i>
            </a>
          </div>
          
          {/* Mission Card */}
          <div className={`vm-fade-up vm-delay-1 ${isVisible ? 'vm-visible' : ''}`}>
            <img 
              className="promo-image" 
              src="/Mudra-card-videos/phone-img.png"
              alt="MUDRA Crypto Card" 
              loading="lazy" 
              width="auto" 
              height="500"  
            />
          </div>
        </div>
      </div>
    </section>
  );
}