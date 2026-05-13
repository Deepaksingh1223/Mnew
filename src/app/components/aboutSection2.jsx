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
             
              <h2 className="vm-title">Our Vision</h2>
              <p className="vm-text">
                Accelerate financial access globally through the mass adoption
                of stablecoin-based payments.
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
             
              <h2 className="vm-title">Our Mission</h2>
              <p className="vm-text">
                Make digital finance accessible, secure, and efficient for everyone.
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