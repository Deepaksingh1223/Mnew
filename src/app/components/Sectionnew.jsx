'use client';

import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Link from 'next/link';

// NOTE: For next/image with external URLs, add to next.config.js:
// images: { domains: ['templates.hibootstrap.com'] }
// Using <img> tags here for external images to avoid config requirement.

const BASE = 'https://templates.hibootstrap.com/finto/default/assets/images';

export default function HeroBanner() {
  const sectionRef = useRef(null);
  const marqueeRef = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(sectionRef, { once: true, amount: 0.05 });

  useEffect(() => {
    if (isInView) controls.start('visible');
  }, [controls, isInView]);

  // Continuous marquee
  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;
    let pos = 0;
    let id;
    const run = () => {
      pos -= 0.55;
      if (Math.abs(pos) >= el.scrollWidth / 2) pos = 0;
      el.style.transform = `translate3d(${pos}px,0,0)`;
      id = requestAnimationFrame(run);
    };
    run();
    return () => cancelAnimationFrame(id);
  }, []);

  const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay } },
  });

  const fadeIn = (delay = 0) => ({
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.55, delay } },
  });

  const tags = ['Revenue', 'Investment', 'Deposit', 'Earnings', 'Transaction'];

  return (
    <>
    
      <section className="ft-hero" ref={sectionRef}>

        {/* ══════════ TOP ROW ══════════ */}
        <div className="ft-top">

          {/* ── Left: Heading ── */}
          <div>
            <motion.p
              className="ft-badge"
              variants={fadeUp(0)}
              initial="hidden"
              animate={controls}
            >
              Welcome to MDR Futuristics
            </motion.p>

            <h1 className="ft-h1">
              <motion.span
                style={{ display: 'block' }}
                variants={fadeUp(0.1)}
                initial="hidden"
                animate={controls}
              >
                Modern & 
                <span className="ft-pill">
                  {/* sparkle star SVG */}
                  <svg className="ft-pill-star" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.6,9.6h-3.9c-.4,0-1.8-.2-1.8-.2-.6,0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4,0,0,0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0,.4-.2,1.5-.2,1.5,0,.5-.2,1-.5,1.4-.3.5-.7.9-1.2,1.2s-1,.5-1.6.6c0,0-1.2,0-1.7.2H.4c-.2,0-.4.2-.4.4s.2.4.4.4h4.1c.4,0,1.7.2,1.7.2.6,0,1.1.2,1.6.6.4.3.8.7,1.1,1.1.3.5.5,1,.6,1.6,0,0,0,1.3.2,1.7v4.1c0,.2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7,0-.6.2-1.1.6-1.6.3-.4.7-.8,1.1-1.1.5-.3,1-.5,1.6-.6,0,0,1.3,0,1.8-.2h3.9c.2,0,.4-.2.4-.4s-.2-.4-.4-.4h0Z"/>
                  </svg>
                  <span>Tech Driven</span>
                </span>
              </motion.span>
              <motion.span
                style={{ display: 'block' }}
                variants={fadeUp(0.18)}
                initial="hidden"
                animate={controls}
              >
               Ideal For Debit Card
              </motion.span>
              <motion.span
                style={{ display: 'block' }}
                variants={fadeUp(0.26)}
                initial="hidden"
                animate={controls}
              >
               Online Payment Solutions
              </motion.span>
            </h1>
          </div>

          {/* ── Right: Desc + Social Proof ── */}
          <div className="ft-right">
            <motion.p
              className="ft-desc"
              variants={fadeUp(0.2)}
              initial="hidden"
              animate={controls}
            >
              We are at the forefront of revolutionizing the financial landscape through cutting
              edge fintech solutions. Our mission is to bridge the gap between traditional banking
              and modern technology offering innovative and seamless financial services that cater
              to the evolving.
            </motion.p>

            <motion.div
              className="ft-proof"
              variants={fadeIn(0.35)}
              initial="hidden"
              animate={controls}
            >
              {/* Avatars */}
              <div className="ft-avatars-box">
                <div className="ft-avatars">
                  <img
                    src={`${BASE}/user/user-image-2.jpg`}
                    alt="user"
                    className="ft-av"
                  />
                  <img
                    src={`${BASE}/user/user-image-3.jpg`}
                    alt="user"
                    className="ft-av"
                  />
                  <img
                    src={`${BASE}/user/user-image-1.jpg`}
                    alt="user"
                    className="ft-av"
                  />
                  <div className="ft-av-count">8k+</div>
                </div>
                <span className="ft-av-label">Active users</span>
              </div>

              <div className="ft-vline" />

              {/* Rating */}
              <div className="ft-rating">
                <div className="ft-stars">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="18" height="18" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="ft-score">4.9/5 <span>Rating</span></p>
                <p className="ft-score-sub">From over 1000+ reviews</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ══════════ CARDS ══════════ */}
        <div className="ft-cards">

          {/* Card 1 — Custom Card */}
          <motion.div
            className="ft-card ft-card-white"
            variants={fadeUp(0.3)}
            initial="hidden"
            animate={controls}
          >
            <div className="ft-icon-wrap">
              <img src={`${BASE}/svg/grow.svg`} alt="card icon" />
            </div>
            <h3 className="ft-h1">Create A Card That Is Unique And Customized</h3>
            
            <div className="ft-card1-img">
              <img
                src="/img/new-theme-img/service-image-1.png"
                alt="Credit Card"
              />
            </div>

            
          </motion.div>

          {/* Card 2 — Transfers (green, featured) */}
          <motion.div
            className="ft-card ft-card-green pb-0"
            variants={fadeUp(0.38)}
            initial="hidden"
            animate={controls}
          >
            <div className="ft-icon-wrap">
              <img src={`${BASE}/svg/corporation.svg`} alt="globe icon" />
            </div>
            <h3 className="ft-card-title">Transfers Across The Globe Are Free</h3>
            <p className="ft-card-body">
              Our digital solutions transform money management investing and transaction.
            </p>
            <div className="ft-card2-visual">
              <img
              src="/img/new-theme-img/service-image-2.png"
                alt="Transfer illustration"  className="banner-men-img w-auto-add"
              /> 
            </div>
          </motion.div>

          {/* Card 3 — Insights */}
          <motion.div
            className="ft-card ft-card-white"
            variants={fadeUp(0.46)}
            initial="hidden"
            animate={controls}
          >
            <div className="ft-icon-wrap">
              <img src={`${BASE}/svg/euro.svg`} alt="insights icon" />
            </div>
            <h3 className="ft-card-title">Personalized Insights And Financial Goals</h3>
            <div className="ft-card3-phones">
              <img
                src={`${BASE}/service/service-image-4.png`}
                alt="App screenshot back"
                className="ft-phone-back phone-img2"
              />
              <img
                src={`${BASE}/service/service-image-3.png`}
                alt="App screenshot front"
                className="ft-phone-front phone-img1"
              />
            </div>
          </motion.div>

        </div>

        {/* ══════════ MARQUEE ══════════ */}
        <div className="ft-marquee-outer">
          <div style={{ overflow: 'hidden' }}>
            <div className="ft-marquee-track" ref={marqueeRef}>
              {[...tags, ...tags, ...tags, ...tags].map((tag, i) => (
                <span key={i} className="ft-tag">
                  <svg width="14" height="14" viewBox="0 0 20 20">
                    <path d="M19.6,9.6h-3.9c-.4,0-1.8-.2-1.8-.2-.6,0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4,0,0,0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0,.4-.2,1.5-.2,1.5,0,.5-.2,1-.5,1.4-.3.5-.7.9-1.2,1.2s-1,.5-1.6.6c0,0-1.2,0-1.7.2H.4c-.2,0-.4.2-.4.4s.2.4.4.4h4.1c.4,0,1.7.2,1.7.2.6,0,1.1.2,1.6.6.4.3.8.7,1.1,1.1.3.5.5,1,.6,1.6,0,0,0,1.3.2,1.7v4.1c0,.2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7,0-.6.2-1.1.6-1.6.3-.4.7-.8,1.1-1.1.5-.3,1-.5,1.6-.6,0,0,1.3,0,1.8-.2h3.9c.2,0,.4-.2.4-.4s-.2-.4-.4-.4h0Z"/>
                  </svg>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

      </section>
    </>
  );
}