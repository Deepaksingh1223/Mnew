'use client';

import { useEffect, useRef, useState } from 'react';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:wght@400;500&display=swap');

  .vm-section {
    background: #ffffff;
    padding: 80px 24px;
    font-family: 'DM Sans', sans-serif;
  }

  .vm-container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .vm-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  .vm-card {
    background: #f4f5f7;
    border-radius: 20px;
    padding: 40px 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 320px;
    opacity: 0;
    transform: translateY(32px);
    transition: opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s ease;
  }

  .vm-card:hover {
    box-shadow: 0 12px 40px rgba(0,0,0,0.08);
    transform: translateY(-4px) !important;
  }

  .vm-card.vm-visible {
    opacity: 1;
    transform: translateY(0);
  }

  .vm-delay-1 { transition-delay: 0.15s; }
  .vm-delay-2 { transition-delay: 0.30s; }

  .vm-card-body {
    flex: 1;
  }
 
  /* 4-card layout: 2x2 grid */
  .vm-grid.four-cards {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1100px) {
    .vm-grid,
    .vm-grid.four-cards {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 640px) {
    .vm-section {
      padding: 48px 16px;
    }
    .vm-grid,
    .vm-grid.four-cards {
      grid-template-columns: 1fr;
    }
    .vm-card {
      padding: 28px 24px;
      min-height: unset;
    }
   
  }
`;

const cards = [
  {
    title: 'Global Payouts, Powered by Stablecoins',
    text: 'Our proprietary payout infrastructure enables users to send and receive funds worldwide through secure, stablecoin-powered rails. Now live in Brazil, Mudra will soon expand to new global corridors — making fast, reliable payouts accessible to more markets than ever.',
    cta: 'Get Started',
  },
  {
    title: 'Spend Smarter with a Stablecoin-Based Card',
    text: 'We empower stablecoin holders to access USD payouts worldwide with seamless card payments through top global networks. As a leading crypto payments fintech, we provide unmatched reach and reliability — making spending stablecoins simple, secure and truly borderless.',
    cta: 'Get Started',
  },
  {
    title: 'Global Stablecoin Access From Your Fingertips',
    text: 'Mudra bridges traditional finance and digital assets, enabling anyone to access and use stablecoins. Our multi-currency accounts and P2P Marketplace enable users without traditional banking to access stablecoins directly — expanding global access for all.',
    cta: 'Get Started',
  }, 
];

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
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{styles}</style>
      <section className="vm-section" ref={sectionRef}>
        <div className="vm-container">
          <div className={`vm-grid ${cards.length === 4 ? 'four-cards' : ''}`}>
            {cards.map((card, i) => (
              <div
                key={i}
                className={`vm-card vm-fade-up ${i > 0 ? `vm-delay-${i}` : ''} ${isVisible ? 'vm-visible' : ''}`}
              >
                <div className="vm-card-body">
                  <h2 className="vm-title-one">{card.title}</h2>
                  <p className="vm-text">{card.text}</p>
                </div>
                     <a class="btn btn-anim btn-default btn-outline slide-right-up mt-5" href="#">
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
            ))}
          </div>
        </div>
      </section>
    </>
  );
}