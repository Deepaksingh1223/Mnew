'use client';

import { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css'; 

 
const investors = [
  { id: 1,  name: 'Accel',            logo: `/investors/img-1.jpg` },
  { id: 2,  name: 'BCAP',             logo: `/investors/img-2.webp` },
  { id: 3,  name: 'Coinbase Ventures',logo: `/investors/img-3.webp` },
  { id: 4,  name: 'Galaxy',           logo: `/investors/img-4.webp` },
  { id: 5,  name: 'Goodwater',        logo: `/investors/img-5.webp` },
  { id: 6,  name: 'HongShan',         logo: `/investors/img-6.webp` },
  { id: 7,  name: 'Lightspeed',       logo: `/investors/img-7.webp` },
  { id: 8,  name: 'Pantera',          logo: `/investors/img-8.webp` },
  { id: 9,  name: 'Vertex',           logo: `/investors/img-9.webp` },
];

const partners = [
  { id: 1,  name: 'Alibaba Cloud', logo: `/partners/img-1.webp` },
  { id: 2,  name: 'Arbitrum',      logo: `/partners/img-2.webp` },
  { id: 3,  name: 'AWS',           logo: `/partners/img-3.webp` },
  { id: 4,  name: 'Binance',       logo: `/partners/img-4.webp` },
  { id: 5,  name: 'Circle',        logo: `/partners/img-5.webp` },
  { id: 6,  name: 'Fireblocks',    logo: `/partners/img-6.webp` },
  { id: 7,  name: 'LSEG',          logo: `/partners/img-7.webp` },
  { id: 8,  name: 'Polygon',       logo: `/partners/img-8.webp` },
  { id: 9,  name: 'Ripple',        logo: `/partners/img-9.webp` },
  { id: 10, name: 'Solana',        logo: `/partners/img-10.webp` },
  { id: 11, name: 'Sumsub',        logo: `/partners/img-11.webp` },
  { id: 12, name: 'Tether',        logo: `/partners/img-12.webp` },
  { id: 13, name: 'TON',           logo: `/partners/img-13.webp` },
    { id: 14, name: 'TON',           logo: `/partners/img-14.webp` },
      { id: 15, name: 'TON',           logo: `/partners/img-15.webp` },
        { id: 16, name: 'TON',           logo: `/partners/img-16.webp` },
          { id: 17, name: 'TON',           logo: `/partners/img-17.webp` },
            { id: 18, name: 'TON',           logo: `/partners/img-18.webp` },
];

function LogoSlider({ items, visible, delay = 0 }) {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView="auto"
      spaceBetween={20}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      speed={5000}
      loop={true}
      allowTouchMove={false}
      centeredSlides={false}
      cssMode={false}
      breakpoints={{
        640: { slidesPerView: "auto", spaceBetween: 20 },
        768: { slidesPerView: "auto", spaceBetween: 24 },
        1024: { slidesPerView: "auto", spaceBetween: 24 },
        1280: { slidesPerView: "auto", spaceBetween: 30 },
      }}
      className="ip-logo-slider"
    >
      {[...items, ...items].map((item, i) => (
        <SwiperSlide key={`${item.id}-${i}`} style={{ width: 'auto' }}>
          <div
            className="ip-logo-item"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(24px)',
              transition: `opacity 0.55s ease ${delay + (i % items.length) * 0.03}s, transform 0.55s ease ${delay + (i % items.length) * 0.03}s`,
            }}
          >
            <img
              src={item.logo}
              alt={item.name}
              className="ip-logo-img"
              onError={(e) => {
                e.target.style.display = 'none';
                if (e.target.nextSibling) {
                  e.target.nextSibling.style.display = 'block';
                }
              }}
            />
            <span className="ip-logo-fallback">{item.name}</span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
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
      <section className="ip-section" style={{overflow:"hidden"}} ref={sectionRef}>
        <div className="ip-container">

          {/* Investors */}
          <div className="ip-block">
            <div className={`ip-block-heading ${visible ? 'visible' : ''}`}>
              <span className="ip-block-heading-line"></span>
              <span className="anim-uni-in-up add-fonr-faimly">Our Investors</span>
              <span className="ip-block-heading-line"></span>
            </div>
            <LogoSlider items={investors} visible={visible} delay={0.05} />
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
            <LogoSlider items={partners} visible={visible} delay={0.2} />
          </div>
 
        </div>
      </section>
    </>
  );
}