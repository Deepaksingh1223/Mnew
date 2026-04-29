'use client';

import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';
import { PiShieldCheck, PiLockKey, PiCardholder, PiEye } from 'react-icons/pi'; 

export default function AboutSection5() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const featuresRef = useRef(null);
  const buttonRef = useRef(null);
  const cardRef = useRef(null);
  const iconsRef = useRef([]);
  
  const [visibleElements, setVisibleElements] = useState({});
  const [isCardHovered, setIsCardHovered] = useState(false);

  // Create intersection observer for reverse animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute('data-id');
          if (id) {
            if (entry.isIntersecting) {
              setVisibleElements((prev) => ({ ...prev, [id]: true }));
            } else {
              setVisibleElements((prev) => ({ ...prev, [id]: false }));
            }
          }
        });
      },
      { 
        threshold: 0.3,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    // Observe all elements
    const elementsToObserve = [
      { ref: contentRef, id: 'content' },
      { ref: titleRef, id: 'title' },
      { ref: descriptionRef, id: 'description' },
      { ref: featuresRef, id: 'features' },
      { ref: buttonRef, id: 'button' },
      { ref: cardRef, id: 'card' },
    ];

    // Add icons refs
    if (iconsRef.current) {
      iconsRef.current.forEach((icon, index) => {
        if (icon) {
          icon.setAttribute('data-id', `icon-${index}`);
          elementsToObserve.push({ ref: { current: icon }, id: `icon-${index}` });
        }
      });
    }

    elementsToObserve.forEach(({ ref, id }) => {
      if (ref.current) {
        ref.current.setAttribute('data-id', id);
        observer.observe(ref.current);
      }
    });

    return () => {
      elementsToObserve.forEach(({ ref, id }) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  // Feature items data
  const features = [
    {
      icon: PiShieldCheck,
      title: "Start spending within minutes",
      description: "Meeting rigorous global compliance standards to ensure trust at every step."
    },
    {
      icon: PiLockKey,
      title: "Instant transaction records",
      description: "Advanced encryption and multi-layer security to protect your funds."
    },
    {
      icon: PiCardholder,
      title: "Contactless payments",
      description: "Instantly issue and freeze virtual cards with complete control."
    },
    {
      icon: PiEye,
      title: "Real-time Monitoring",
      description: "24/7 transaction monitoring and fraud detection systems."
    }
  ];

  return (
    <div className="about-section-5 card-section3" ref={sectionRef}> 
      <div className="about-section-5__container">
        <div 
          className={`about-section-5__content ${visibleElements['content'] ? 'visible' : ''}`}
          ref={contentRef}
        >
          {/* Left Content */}
          <div className="about-section-5__left">
        
            <h2 
              className={`about-section-5__title ${visibleElements['title'] ? 'visible' : ''}`}
              ref={titleRef}
            >
              Virtual Card {' '}
              <span className="about-section-5__gradient-text">
                Digital-First Spending, Made Simple
              </span>
            </h2>

            {/* Description */}
            <p 
              className={`about-section-5__description ${visibleElements['description'] ? 'visible' : ''}`}
              ref={descriptionRef}
            >
              Experience effortless, secure payments for subscriptions, travel, and everyday purchases.
            </p>

            {/* Features Grid */}
            <div 
              className={`about-section-5__features ${visibleElements['features'] ? 'visible' : ''}`}
              ref={featuresRef}
            >
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="about-section-5__feature-card"
                    ref={(el) => (iconsRef.current[index] = el)}
                  >
                    
                    <h3 className="about-section-5__feature-title">
                      {feature.title}
                    </h3>
                    <p className="about-section-5__feature-description">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div> 
          </div>
 
        </div>
      </div>
    </div>
  );
}