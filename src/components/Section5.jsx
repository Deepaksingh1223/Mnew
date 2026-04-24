'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

const tabs = [
  { id: 'mission', label: 'Our Mission' },
  { id: 'quality', label: 'Our Quality' },
  { id: 'vision', label: 'Our Vision' },
  { id: 'security', label: 'Top Security' },
];

const tabContent = {
  mission: {
    heading: 'Passionate For Your Financial Support Here',
    description:
      'With a robust suite of products ranging from digital banking and payment processing to wealth management and blockchain applications.',
    points: [
      'Pay Bills On Time Without Missing A Beat',
      'Create And Send Invoices In Seconds',
      'Control Your Cash Flow On Demand',
    ],
  },
  quality: {
    heading: 'Delivering Quality In Every Transaction',
    description:
      'We ensure every product and service meets the highest standards, giving you confidence and reliability in your financial journey.',
    points: [
      'Industry-Leading Security Protocols',
      'Real-Time Transaction Monitoring',
      'Certified Financial Grade Infrastructure',
    ],
  },
  vision: {
    heading: 'A Vision For A Smarter Financial Future',
    description:
      'Our vision is to democratize finance — making powerful tools accessible to everyone, regardless of background or location.',
    points: [
      'Global Reach With Local Understanding',
      'AI-Powered Financial Insights',
      'Inclusive Banking For Everyone',
    ],
  },
  security: {
    heading: 'Top-Tier Security You Can Trust',
    description:
      'Your assets are protected by bank-grade encryption, multi-factor authentication, and 24/7 fraud monitoring systems.',
    points: [
      '256-Bit Bank-Grade Encryption',
      'Multi-Factor Authentication',
      '24/7 Fraud Detection & Alerts',
    ],
  },
};

export default function Section5() {
  const [activeTab, setActiveTab] = useState('mission');
  const [animating, setAnimating] = useState(false);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
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
    <>


      <section className="s5-section" ref={sectionRef}>
        {/* TOP HEADER */}
        <div className={`s5-top s5-fade-in mxd-hero-04__wrap loading-wrap ${visible ? 'visible' : ''}`}>
          <div className="reveal-type">
            <h2>
              <span>Leveraging Technology For</span>
              <span>
                <span className="underline-green">Secure</span> &amp; Banking
              </span>
            </h2>
          </div>
          <div className="s5-top-right">
            <p>
              By integrating advanced technology with financial expertise we provide a comprehensive
              suite of services that cater to both individuals and businesses.
            </p>
          </div>
        </div>

        {/* CARD SECTION */}
        <div className="s5-card mxd-hero-04__wrap loading-wrap">
          <div className={`s5-card-inner s5-fade-in ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.15s' }}>

            {/* LEFT */}
            <div>
              {/* TABS */}
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

              {/* CONTENT */}
              <div className={`s5-left-content s5-content-anim ${animating ? 'animating' : ''}`}>
                <h3>{content.heading}</h3>
                <p>{content.description}</p>

                <div className="s5-points">
                  {content.points.map((point, i) => (
                    <div className="s5-point" key={i}>
                      <div className="s5-check">
                        <svg viewBox="0 0 16 16">
                          <polyline points="2,8 6,12 14,4" />
                        </svg>
                      </div>
                      {point}
                    </div>
                  ))}
                </div>
                <a class="btn btn-anim btn-default btn-outline slide-right-up" href="works-simple.html">
                  <span class="btn-caption">
                    <div class="btn-anim__block"><span class="btn-anim__letter">E</span><span class="btn-anim__letter">x</span>
                      <span class="btn-anim__letter">p</span><span class="btn-anim__letter">l</span><span class="btn-anim__letter">o</span>
                      <span class="btn-anim__letter">r</span><span class="btn-anim__letter">e</span></div><div class="btn-anim__block">
                      <span class="btn-anim__letter">E</span><span class="btn-anim__letter">x</span><span class="btn-anim__letter">p</span>
                      <span class="btn-anim__letter">l</span><span class="btn-anim__letter">o</span><span class="btn-anim__letter">r</span>
                      <span class="btn-anim__letter">e</span></div>
                  </span>
                  <i class="ph-bold ph-arrow-up-right"></i></a> 
              </div>
            </div>

            {/* RIGHT */}
            <div className="s5-right">
              <div className="s5-img-wrap">
                <img
                  src="https://templates.hibootstrap.com/finto/default/assets/images/service/service-image-8.jpg"
                  alt="Financial advisor holding credit card"
                />
              </div>

              <div className="s5-bank-card">
                <div className="s5-card-top">
                  <span className="s5-card-label">Balance</span>
                  <div className="s5-mastercard">
                    <div className="s5-mc-circle s5-mc-red"></div>
                    <div className="s5-mc-circle s5-mc-orange"></div>
                  </div>
                </div>

                <div className="s5-card-amount">$ 3,403.09</div>

                <div className="s5-card-meta">
                  <div className="s5-card-meta-item">
                    <span>$10,000</span> Card limit
                  </div>
                </div>

                <div className="s5-card-footer">
                  <span className="s5-card-name">Finto</span>
                  <span className="s5-card-expiry">04/25</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}