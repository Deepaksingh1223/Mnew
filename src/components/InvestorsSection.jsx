'use client';

import { useRef, useEffect, useState } from 'react';

const BASE = 'https://staticsource1.redotpay.com/web/img/brand';

const investors = [
  { id: 1,  name: 'Accel',            logo: `${BASE}/investors/accel.webp` },
  { id: 2,  name: 'BCAP',             logo: `${BASE}/investors/bcap.webp` },
  { id: 3,  name: 'Coinbase Ventures',logo: `${BASE}/investors/coinbase.webp` },
  { id: 4,  name: 'Galaxy',           logo: `${BASE}/investors/galaxy.webp` },
  { id: 5,  name: 'Goodwater',        logo: `${BASE}/investors/goodwater.webp` },
  { id: 6,  name: 'HongShan',         logo: `${BASE}/investors/hongshan.webp` },
  { id: 7,  name: 'Lightspeed',       logo: `${BASE}/investors/lightspeed.webp` },
  { id: 8,  name: 'Pantera',          logo: `${BASE}/investors/pantera.webp` },
  { id: 9,  name: 'Vertex',           logo: `${BASE}/investors/vertex.webp` },
];

const partners = [
  { id: 1,  name: 'Alibaba Cloud', logo: `${BASE}/partners/alibaba.webp` },
  { id: 2,  name: 'Arbitrum',      logo: `${BASE}/partners/arbitrum.webp` },
  { id: 3,  name: 'AWS',           logo: `${BASE}/partners/aws.webp` },
  { id: 4,  name: 'Binance',       logo: `${BASE}/partners/binance.webp` },
  { id: 5,  name: 'Circle',        logo: `${BASE}/partners/circle.webp` },
  { id: 6,  name: 'Fireblocks',    logo: `${BASE}/partners/fireblocks.webp` },
  { id: 7,  name: 'LSEG',          logo: `${BASE}/partners/lseg.webp` },
  { id: 8,  name: 'Polygon',       logo: `${BASE}/partners/polygon.webp` },
  { id: 9,  name: 'Ripple',        logo: `${BASE}/partners/ripple.webp` },
  { id: 10, name: 'Solana',        logo: `${BASE}/partners/solana.webp` },
  { id: 11, name: 'Sumsub',        logo: `${BASE}/partners/sumsub.webp` },
  { id: 12, name: 'Tether',        logo: `${BASE}/partners/tether.webp` },
  { id: 13, name: 'TON',           logo: `${BASE}/partners/ton.webp` },
];

function LogoGrid({ items, visible, delay = 0 }) {
  return (
    <div className="ip-logo-grid">
      {items.map((item, i) => (
        <div
          key={item.id}
          className="ip-logo-item"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
            transition: `opacity 0.55s ease ${delay + i * 0.06}s, transform 0.55s ease ${delay + i * 0.06}s`,
          }}
        >
          <img
            src={item.logo}
            alt={item.name}
            className="ip-logo-img"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <span className="ip-logo-fallback">{item.name}</span>
        </div>
      ))}
    </div>
  );
}

export default function InvestorsSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <> 
      <section className="ip-section" ref={sectionRef}>
        <div className="ip-container">

          {/* Investors */}
          <div className="ip-block">
            <div className={`ip-block-heading ${visible ? 'visible' : ''}`}>
              <span className="ip-block-heading-line"></span>
              <span className="anim-uni-in-up add-fonr-faimly">Our Investors</span>
              <span className="ip-block-heading-line"></span>
            </div>
            <LogoGrid items={investors} visible={visible} delay={0.05} />
          </div>

          {/* Partners */}
          <div className="ip-block">
            <div
              className={`ip-block-heading ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: '0.15s' }}
            >
              <span className="ip-block-heading-line"></span>
              <span className="anim-uni-in-up add-fonr-faimly">Our Partners</span>
              <span className="ip-block-heading-line"></span>
            </div>
            <LogoGrid items={partners} visible={visible} delay={0.2} />
          </div>
 
        </div>
      </section>
    </>
  );
}