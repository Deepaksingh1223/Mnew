'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

// ✅ Mudra-style tabs
const tabs = [
  { id: 'mission', label: 'Our Mission' },
  { id: 'quality', label: 'Why MUDRA' },
  { id: 'vision', label: 'Our Vision' },
  { id: 'security', label: 'Security' },
];

// ✅ Crypto / stablecoin / global payments content (no loan)
const tabContent = {
  mission: {
    heading: 'Where Crypto Meets Real Life',
    description:
      'MUDRA empowers global payments with stablecoins — seamless, fast, and built for everyday use.',
    points: [
      'Fast and Secure Stablecoin Transfers',
      'Multi-Currencies, One App',
      'Convenient Stablecoin Access via P2P',
    ],
  },
  quality: {
    heading: 'Digital-First Spending, Made Simple',
    description:
      'Experience effortless, secure payments for subscriptions, travel, and everyday purchases.',
    points: [
      'Spend Stablecoins Instantly',
      'Buy coffee, shop online or pay bills',
      'No hidden fees, no delays',
    ],
  },
  vision: {
    heading: 'Bridging Crypto and Everyday Life',
    description:
      'Crypto or local currency — jump straight into action and access your funds easily.',
    points: [
      'Send crypto, receive local currency',
      'Global reach with local settlement',
      'Every transaction protected',
    ],
  },
  security: {
    heading: 'Enterprise-Grade Crypto Security',
    description:
      'Your digital assets and transactions are protected by multi-layer security and real-time monitoring.',
    points: [
      'Bank-grade encryption',
      'Non-custodial options available',
      '24/7 fraud detection',
    ],
  },
};

export default function Section5() {
  const [activeTab, setActiveTab] = useState('mission');
  const [animating, setAnimating] = useState(false);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Auto-play video when component mounts
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, []);

  const handleTabChange = (id) => {
    if (id === activeTab) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveTab(id);
      setAnimating(false);
    }, 200);
  };

  const content = tabContent[activeTab];

  return (
    <section className="s5-section relative" ref={sectionRef}>
      
      {/* 🔹 TOP HEADER — Mudra style */}
      <div className={`s5-top s5-fade-in mxd-hero-04__wrap loading-wrap ${visible ? 'visible' : ''}`}>
        <div className="reveal-type">
          <h2>
            <span>MUDRA — Where Crypto Meets</span>
            <span>
              <span className="underline-green">Real Life</span>
            </span>
          </h2>
        </div>

        <div className="s5-top-right">
          <p>
            Empowering global payments with stablecoins. Seamless, fast, and secure — 
            built for everyday people and businesses.
          </p>
        </div>
      </div>

      {/* 🔹 CARD SECTION */}
      <div className="s5-card mxd-hero-04__wrap loading-wrap">
        <div
          className={`s5-card-inner s5-fade-in ${visible ? 'visible' : ''}`}
          style={{ transitionDelay: '0.15s' }}
        >

          {/* LEFT SIDE — Tab Content */}
          <div>
            <div className="s5-tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`s5-tab ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => handleTabChange(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className={`s5-left-content s5-content-anim ${animating ? 'animating' : ''}`}>
              <h3>{content.heading}</h3>
              <p>{content.description}</p>

              <div className="s5-points">
                {content.points.map((point, i) => (
                  <div className="s5-point" key={i}>
                    {point}
                  </div>
                ))}
              </div>

              {/* 🔹 BUTTON — Crypto style */}
              <a
                className="btn btn-anim btn-default btn-outline slide-right-up"
                href="#"
              >
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
          </div>

          {/* 🔹 RIGHT SIDE — Crypto Card Preview (no loan) */}
          <div className="s5-right">
            <div className="s5-img-wrap" style={{position:'relative'}}>
              <video 
                ref={videoRef}
                src="/img/works/MudraCrad1.mp4"
                className="parallax-img"
                autoPlay
                loop
                muted
                playsInline
                style={{
                  width: '100%',
                  height: '700px',
                  display: 'block',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}