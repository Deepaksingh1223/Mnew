'use client';

import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Sectionnew() {
  const marqueeRef = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(marqueeRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  // Marquee animation
  useEffect(() => {
    const marquee = document.querySelector('.marquee-flex');
    if (marquee) {
      let position = 0;
      const speed = 0.5;
      
      const step = () => {
        position -= speed;
        if (Math.abs(position) >= marquee.scrollWidth / 2) {
          position = 0;
        }
        marquee.style.transform = `translate3d(${position}px, 0px, 0px)`;
        requestAnimationFrame(step);
      };
      
      step();
    }
  }, []);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const marqueeItems = ['design', 'motion', 'ai', 'applications', 'development', 'branding', 'websites', 'workshops'];

  return (
    <motion.div
      className="mxd-section mxd-hero-section padding-pre-stack"
      initial="hidden"
      animate={controls}
      ref={marqueeRef}
    >
      <div className="mxd-hero-04">
        <div className="mxd-hero-04__wrap overflow-hidden loading-wrap">
          <div className="container-fluid p-0">
            <div className="row g-0 flex-column flex-xl-row">
              {/* Left Column */}
              <div className="col-12 col-xl-3 order-2 order-xl-1 mxd-hero-04__left mxd-grid-item no-margin">
                <motion.div 
                  className="mxd-hero-04__imageblock loading__item"
                  variants={fadeInUpVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                >
                  <div className="hero-04-imageblock__btn">
                    <Link 
                      className="btn btn-round btn-round-medium btn-base slide-right-up anim-no-delay" 
                      href="/about-us"
                      aria-label="About Us Page Link"
                    >
                      <i className="ph-bold ph-arrow-up-right"></i>
                    </Link>
                  </div>
                  <div className="mxd-rotate-slow">
                    <Image 
                      src="/img/banner-img.webp" 
                      alt="Hero image"
                      width={400}
                      height={400}
                      priority
                    />
                  </div>
                  <p>Creative development studio</p>
                </motion.div>
                
                <motion.div 
                  className="mxd-hero-04__aboutblock loading__item"
                  variants={fadeInUpVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.3 }}
                >
                  <p>We are a creative digital agency specializing in innovative design and cutting-edge development.</p>
                </motion.div>
              </div>

              {/* Right Column */}
              <div className="col-12 col-xl-9 order-1 order-xl-2 mxd-hero-04__right mxd-grid-item no-margin">
                <div className="mxd-hero-04__headline">
                  {/* Clients Avatars */}
                  <motion.div 
                    className="hero-04-headline__avatars loading__item"
                    variants={fadeInVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.1 }}
                  >
                    <div className="mxd-avatars-group">
                      <div className="mxd-avatars">
                        <div className="mxd-avatars__item small">
                          <Image 
                            src="/img/woman.webp" 
                            alt="Avatar"
                            width={40}
                            height={40}
                          />
                        </div>
                        <div className="mxd-avatars__item small bg-base-opp">
                         <svg 
  className="mxd-avatars__icon small" 
  width="60" 
  height="60" 
  viewBox="0 0 60 60" 
  fill="currentColor" 
  xmlns="http://www.w3.org/2000/svg"
  style={{ fill: 'var(--additional)' }}
>
  <path 
    d="M58.9,28.9c0,0-9.1,0.1-12.1,0c-1.3,0-5.3-0.5-5.3-0.5c-1.7-0.2-3.4-0.7-4.8-1.7c-1.4-1-2.7-2.3-3.6-3.7c-0.8-1.3-1.3-2.7-1.5-4.2c0,0-0.4-3.3-0.5-4.4c-0.2-3.3,0-13.1,0-13.1c0-0.6-0.5-1.1-1.1-1.1s-1.1,0.5-1.1,1.1c0,0,0.2,9.8,0,13.1c0,1.1-0.5,4.4-0.5,4.4c-0.2,1.5-0.6,3-1.5,4.2c-0.9,1.5-2.2,2.7-3.6,3.7s-3,1.5-4.7,1.7c0,0-3.7,0.4-5,0.5c-3.1,0.2-12.5,0-12.5,0C0.5,28.9,0,29.4,0,30s0.5,1.1,1.1,1.1c0,0,9.4-0.2,12.5,0c1.2,0,5,0.5,5,0.5c1.7,0.2,3.3,0.7,4.7,1.7c1.3,0.9,2.4,2,3.3,3.3c1,1.4,1.5,3.1,1.7,4.8c0,0,0.4,3.9,0.5,5.2c0.1,3,0,12.2,0,12.2c0,0.6,0.5,1.1,1.1,1.1s1.1-0.5,1.1-1.1c0,0-0.1-9.2,0-12.2c0-1.3,0.5-5.2,0.5-5.2c0.2-1.7,0.7-3.4,1.7-4.8c0.9-1.3,2-2.4,3.3-3.3c1.4-1,3.1-1.5,4.8-1.7c0,0,3.9-0.4,5.3-0.5c3-0.1,12.1,0,12.1,0c0.6,0,1.1-0.5,1.1-1.1s-0.5-1.1-1.1-1.1l0,0L58.9,28.9z"
    fill="var(--additional)"
  />
</svg>  </div>
                        <div className="mxd-avatars__item small">
                          <Image 
                            src="/img/men.webp" 
                            alt="Avatar"
                            width={40}
                            height={40}
                          />
                        </div>
                      </div>
                      <div className="mxd-avatars-group__text">
                        <p>Trusted by<br />
                          <Link href="#0">10k+ customers</Link>
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Title Text */}
                  <h1 className="hero-04-title">
                    <motion.span 
                      className="hero-04-title__row loading__item"
                      variants={fadeInUpVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: 0.2 }}
                    >
                      <em className="hero-04-title__item">Design, tech and</em>
                    </motion.span>
                    <motion.span 
                      className="hero-04-title__row loading__item"
                      variants={fadeInUpVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: 0.3 }}
                    >
                      <em className="hero-04-title__item title-item-image">
                        <svg className="mxd-pulse" width="60" height="60" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19.6,9.6h-3.9c-.4,0-1.8-.2-1.8-.2-.6,0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4,0,0,0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0,.4-.2,1.5-.2,1.5,0,.5-.2,1-.5,1.4-.3.5-.7.9-1.2,1.2s-1,.5-1.6.6c0,0-1.2,0-1.7.2H.4c-.2,0-.4.2-.4.4s.2.4.4.4h4.1c.4,0,1.7.2,1.7.2.6,0,1.1.2,1.6.6.4.3.8.7,1.1,1.1.3.5.5,1,.6,1.6,0,0,0,1.3.2,1.7v4.1c0,.2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7,0-.6.2-1.1.6-1.6.3-.4.7-.8,1.1-1.1.5-.3,1-.5,1.6-.6,0,0,1.3,0,1.8-.2h3.9c.2,0,.4-.2.4-.4s-.2-.4-.4-.4h0Z"/>
                        </svg>
                      </em>
                      <em className="hero-04-title__item">some magic</em>
                    </motion.span>
                  </h1>
                </div>

                {/* Description */}
                <div className="mxd-hero-04__descr">
                  <div className="mxd-paragraph__lists">
                    <div className="container-fluid p-0">
                      <div className="row g-0">
                        <motion.div 
                          className="col-6 col-xl-5 loading__item"
                          variants={fadeInVariants}
                          initial="hidden"
                          animate="visible"
                          transition={{ delay: 0.4 }}
                        >
                          <ul>
                            <li><p className="t-small">Innovations</p></li>
                            <li><p className="t-small">Excellence</p></li>
                            <li><p className="t-small">Creativity</p></li>
                            <li><p className="t-small">Experience</p></li>
                            <li><p className="t-small">Competence</p></li>
                            <li><p className="t-small">Passion</p></li>
                          </ul>
                        </motion.div>
                        <motion.div 
                          className="col-6 col-xl-5 loading__item"
                          variants={fadeInVariants}
                          initial="hidden"
                          animate="visible"
                          transition={{ delay: 0.5 }}
                        >
                          <ul>
                            <li><p className="t-small">Web design</p></li>
                            <li><p className="t-small">IU/UX</p></li>
                            <li><p className="t-small">App design</p></li>
                            <li><p className="t-small">Development</p></li>
                            <li><p className="t-small">Branding</p></li>
                            <li><p className="t-small">Motion</p></li>
                          </ul>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Marquee Section */}
              <div className="col-12 order-3 mxd-hero-04__marquee mxd-grid-item">
                <div className="hero-04-marquee">
                  <div className="marquee marquee-right--gsap">
                    <div className="marquee__toright marquee-flex">
                      {[...marqueeItems, ...marqueeItems].map((item, index) => (
                        <div key={index} className="marquee__item item-regular text">
                          <p>{item}</p>
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.6,9.6h-3.9c-.4,0-1.8-.2-1.8-.2-.6,0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4,0,0,0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0,.4-.2,1.5-.2,1.5,0,.5-.2,1-.5,1.4-.3.5-.7.9-1.2,1.2s-1,.5-1.6.6c0,0-1.2,0-1.7.2H.4c-.2,0-.4.2-.4.4s.2.4.4.4h4.1c.4,0,1.7.2,1.7.2.6,0,1.1.2,1.6.6.4.3.8.7,1.1,1.1.3.5.5,1,.6,1.6,0,0,0,1.3.2,1.7v4.1c0,.2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7,0-.6.2-1.1.6-1.6.3-.4.7-.8,1.1-1.1.5-.3,1-.5,1.6-.6,0,0,1.3,0,1.8-.2h3.9c.2,0,.4-.2.4-.4s-.2-.4-.4-.4h0Z"/>
                          </svg>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .mxd-hero-section {
          position: relative;
          overflow: hidden;
        }
        
        .mxd-hero-04__left,
        .mxd-hero-04__right {
          padding: 2rem;
        }
        
        .mxd-hero-04__imageblock {
          position: relative;
          margin-bottom: 2rem;
        }
        
        .hero-04-imageblock__btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
          z-index: 2;
        }
        
        .btn-round {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: var(--base);
          color: var(--t-bright);
          transition: all 0.3s ease;
        }
        
        .btn-round:hover {
          transform: translateY(-5px);
          background-color: var(--accent);
        }
        
        .mxd-rotate-slow {
          animation: rotate 20s linear infinite;
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .mxd-avatars-group {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        
        .mxd-avatars {
          display: flex;
          align-items: center;
        }
        
        .mxd-avatars__item {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          overflow: hidden;
          margin-left: -10px;
          border: 2px solid var(--base);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .mxd-avatars__item:first-child {
          margin-left: 0;
        }
        
        .mxd-avatars__item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .hero-04-title {
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: bold;
          margin-bottom: 2rem;
        }
        
        .hero-04-title__row {
          display: block;
          overflow: hidden;
        }
        
        .hero-04-title__item {
          display: inline-block;
          font-style: normal;
        }
        
        .title-item-image {
          width: 60px;
          height: 60px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          vertical-align: middle;
          margin: 0 0.5rem;
        }
        
        .mxd-pulse {
          animation: pulse 2s ease-in-out infinite;
          width: 100%;
          height: auto;
          fill: var(--accent);
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        .mxd-paragraph__lists ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .mxd-paragraph__lists li {
          margin-bottom: 0.5rem;
        }
        
        .hero-04-marquee {
          position: relative;
          overflow: hidden;
          padding: 2rem 0;
          border-top: 1px solid var(--st-muted);
          border-bottom: 1px solid var(--st-muted);
        }
        
        .marquee {
          overflow: hidden;
          white-space: nowrap;
        }
        
        .marquee-flex {
          display: flex;
          gap: 2rem;
          animation: marquee 30s linear infinite;
        }
        
        .marquee__item {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 1.5rem;
          font-weight: 600;
          text-transform: uppercase;
        }
        
        .marquee__item svg {
          width: 24px;
          height: 24px;
          fill: var(--accent);
        }
        
        @keyframes marquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        
        @media (max-width: 1200px) {
          .mxd-hero-04__left,
          .mxd-hero-04__right {
            padding: 1rem;
          }
        }
        
        @media (max-width: 768px) {
          .hero-04-title {
            font-size: 2.5rem;
          }
          
          .title-item-image {
            width: 40px;
            height: 40px;
          }
          
          .marquee__item {
            font-size: 1rem;
            gap: 0.5rem;
          }
          
          .marquee__item svg {
            width: 16px;
            height: 16px;
          }
        }
      `}</style>
    </motion.div>
  );
}