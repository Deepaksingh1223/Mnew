'use client';

import { useRef, useEffect, useState } from 'react';

export default function Footer() {
  const footerRef = useRef(null);
  const navItemsRef = useRef([]);
  const footerCardsRef = useRef([]);
  const socialItemsRef = useRef([]);
  const formRef = useRef(null);
  const subscribeRef = useRef(null);
  
  const [visibleElements, setVisibleElements] = useState({});
  const [hoveredSocial, setHoveredSocial] = useState(null);

  useEffect(() => {
    // Create intersection observer for reverse animations
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

    // Observe nav items
    navItemsRef.current.forEach((item, index) => {
      if (item) {
        item.setAttribute('data-id', `nav-${index}`);
        observer.observe(item);
      }
    });

    // Observe footer cards
    footerCardsRef.current.forEach((card, index) => {
      if (card) {
        card.setAttribute('data-id', `card-${index}`);
        observer.observe(card);
      }
    });

    // Observe social items
    socialItemsRef.current.forEach((item, index) => {
      if (item) {
        item.setAttribute('data-id', `social-${index}`);
        observer.observe(item);
      }
    });

    // Observe form
    if (formRef.current) {
      formRef.current.setAttribute('data-id', 'form');
      observer.observe(formRef.current);
    }

    // Observe subscribe button
    if (subscribeRef.current) {
      subscribeRef.current.setAttribute('data-id', 'subscribe');
      observer.observe(subscribeRef.current);
    }

    return () => {
      navItemsRef.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
      footerCardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
      socialItemsRef.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
      if (formRef.current) observer.unobserve(formRef.current);
      if (subscribeRef.current) observer.unobserve(subscribeRef.current);
    };
  }, []);

  // Function to add items to refs
  const addToNavRef = (el) => {
    if (el && !navItemsRef.current.includes(el)) {
      navItemsRef.current.push(el);
    }
  };

  const addToCardRef = (el) => {
    if (el && !footerCardsRef.current.includes(el)) {
      footerCardsRef.current.push(el);
    }
  };

  const addToSocialRef = (el) => {
    if (el && !socialItemsRef.current.includes(el)) {
      socialItemsRef.current.push(el);
    }
  };

  return (
    <footer id="mxd-footer" className="mxd-footer" ref={footerRef}>
      <div className="mxd-footer__footer-blocks">
        <div 
          className="footer-blocks__column animate-card-3" 
          ref={addToCardRef}
          style={{
            opacity: visibleElements['card-0'] ? 1 : 0,
            transform: visibleElements['card-0'] ? 'translateY(0) scale(1)' : 'translateY(100px) scale(0.95)',
            transition: `all 1.5s cubic-bezier(0.4, 0, 0.2, 1) 0s`,
          }}
        >
          <div className="footer-blocks__card fullheight-card">
            <div className="footer-blocks__nav">
              <ul className="footer-nav">
                {['Home', 'About us', 'Community', 'Card', 'Contact'].map((item, idx) => (
                  <li 
                    key={idx}
                    className="footer-nav__item anim-uni-in-up" 
                    ref={addToNavRef}
                    style={{
                      opacity: visibleElements[`nav-${idx}`] ? 1 : 0,
                      transform: visibleElements[`nav-${idx}`] ? 'translateY(0)' : 'translateY(80px)',
                      transition: `all 1.2s cubic-bezier(0.4, 0, 0.2, 1) ${idx * 0.12}s`,
                    }}
                  >
                    <a className="btn-anim footer-nav__link btn-anim" aria-label={item} href={idx === 0 ? "/" : idx === 1 ? 
                      "/about" : idx === 2 ? "/community" : idx === 3 ? "/card" : idx === 4 ? "/Contact" : "/"}>
                      <span className="btn-caption">
                        <div className="btn-anim__block">{item}</div>
                        <div className="btn-anim__block" aria-hidden="true">{item}</div>
                      </span>
                    </a>
                    {idx === 2 && (
                      <p className="footer-nav__counter">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 20 20" fill="currentColor">
                          <path fill="currentColor" d="M19.6,9.6c0,0-3,0-4,0c-0.4,0-1.8-0.2-1.8-0.2c-0.6-0.1-1.1-0.2-1.6-0.6c-0.5-0.3-0.9-0.8-1.2-1.2 c-0.3-0.4-0.4-0.9-0.5-1.4c0,0-0.1-1.1-0.2-1.5c-0.1-1.1,0-4.4,0-4.4C10.4,0.2,10.2,0,10,0S9.6,0.2,9.6,0.4c0,0,0.1,3.3,0,4.4 c0,0.4-0.2,1.5-0.2,1.5C9.4,6.7,9.2,7.2,9,7.6C8.7,8.1,8.2,8.5,7.8,8.9c-0.5,0.3-1,0.5-1.6,0.6c0,0-1.2,0.1-1.7,0.2 c-1,0.1-4.2,0-4.2,0C0.2,9.6,0,9.8,0,10c0,0.2,0.2,0.4,0.4,0.4c0,0,3.1-0.1,4.2,0c0.4,0,1.7,0.2,1.7,0.2c0.6,0.1,1.1,0.2,1.6,0.6 c0.4,0.3,0.8,0.7,1.1,1.1c0.3,0.5,0.5,1,0.6,1.6c0,0,0.1,1.3,0.2,1.7c0,1,0,4.1,0,4.1c0,0.2,0.2,0.4,0.4,0.4s0.4-0.2,0.4-0.4 c0,0,0-3.1,0-4.1c0-0.4,0.2-1.7,0.2-1.7c0.1-0.6,0.2-1.1,0.6-1.6c0.3-0.4,0.7-0.8,1.1-1.1c0.5-0.3,1-0.5,1.6-0.6 c0,0,1.3-0.1,1.8-0.2c1,0,4,0,4,0c0.2,0,0.4-0.2,0.4-0.4C20,9.8,19.8,9.6,19.6,9.6L19.6,9.6z"></path>
                        </svg>
                        <span>10</span>
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div 
              className="footer-blocks__links anim-uni-in-up"
              style={{
                opacity: visibleElements['nav-0'] ? 1 : 0,
                transform: visibleElements['nav-0'] ? 'translateY(0)' : 'translateY(80px)',
                transition: `all 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.72s`,
              }}
            >
              <a className="btn-anim btn btn-line-xsmall btn-muted slide-right anim-no-delay" aria-label="Privacy Policy" href="#">
                <span className="btn-caption">
                  <div className="btn-anim__block">Login</div>  
                  <div className="btn-anim__block" aria-hidden="true">Login</div>
                </span>
                <i className="ph ph-arrow-right"></i>
              </a>
              <a className="btn-anim btn btn-line-xsmall btn-muted slide-right anim-no-delay" aria-label="Terms &amp; conditions" href="#">
                <span className="btn-caption">
                  <div className="btn-anim__block">Register</div>
                  <div className="btn-anim__block" aria-hidden="true">Register</div>
                </span>
                <i className="ph ph-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div 
          className="footer-blocks__column animate-card-3" 
          ref={addToCardRef}
          style={{
            opacity: visibleElements['card-1'] ? 1 : 0,
            transform: visibleElements['card-1'] ? 'translateY(0) scale(1)' : 'translateY(100px) scale(0.95)',
            transition: `all 1.5s cubic-bezier(0.4, 0, 0.2, 1) 0.15s`,
          }}
        >
          <div className="footer-blocks__card">
            <p 
              className="mxd-point-subtitle anim-uni-in-up"
              style={{
                opacity: visibleElements['card-1'] ? 1 : 0,
                transform: visibleElements['card-1'] ? 'translateY(0)' : 'translateY(80px)',
                transition: `all 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.3s`,
              }}
            >
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 20 20" fill="currentColor">
                <path fill="currentColor" d="M19.6,9.6c0,0-3,0-4,0c-0.4,0-1.8-0.2-1.8-0.2c-0.6-0.1-1.1-0.2-1.6-0.6c-0.5-0.3-0.9-0.8-1.2-1.2 c-0.3-0.4-0.4-0.9-0.5-1.4c0,0-0.1-1.1-0.2-1.5c-0.1-1.1,0-4.4,0-4.4C10.4,0.2,10.2,0,10,0S9.6,0.2,9.6,0.4c0,0,0.1,3.3,0,4.4 c0,0.4-0.2,1.5-0.2,1.5C9.4,6.7,9.2,7.2,9,7.6C8.7,8.1,8.2,8.5,7.8,8.9c-0.5,0.3-1,0.5-1.6,0.6c0,0-1.2,0.1-1.7,0.2 c-1,0.1-4.2,0-4.2,0C0.2,9.6,0,9.8,0,10c0,0.2,0.2,0.4,0.4,0.4c0,0,3.1-0.1,4.2,0c0.4,0,1.7,0.2,1.7,0.2c0.6,0.1,1.1,0.2,1.6,0.6 c0.4,0.3,0.8,0.7,1.1,1.1c0.3,0.5,0.5,1,0.6,1.6c0,0,0.1,1.3,0.2,1.7c0,1,0,4.1,0,4.1c0,0.2,0.2,0.4,0.4,0.4s0.4-0.2,0.4-0.4 c0,0,0-3.1,0-4.1c0-0.4,0.2-1.7,0.2-1.7c0.1-0.6,0.2-1.1,0.6-1.6c0.3-0.4,0.7-0.8,1.1-1.1c0.5-0.3,1-0.5,1.6-0.6 c0,0,1.3-0.1,1.8-0.2c1,0,4,0,4,0c0.2,0,0.4-0.2,0.4-0.4C20,9.8,19.8,9.6,19.6,9.6L19.6,9.6z"></path>
              </svg>
              <a href="mailto:hello@mudrapro.com?subject=Message%20from%20your%20site">hello@mudrapro.com</a>
            </p>
          </div>
         
          <div className="footer-blocks__card fill-card notify">
            <div 
              className="footer-blocks__title anim-uni-in-up"
              style={{
                opacity: visibleElements['card-1'] ? 1 : 0,
                transform: visibleElements['card-1'] ? 'translateY(0)' : 'translateY(80px)',
                transition: `all 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.6s`,
              }}
            >
              <p className="footer-blocks__title-m">Subscribe to MUDRA insights:</p>
            </div>
            <div 
              className="form-container anim-uni-in-up" 
              ref={formRef}
              style={{
                opacity: visibleElements['form'] ? 1 : 0,
                transform: visibleElements['form'] ? 'translateY(0)' : 'translateY(70px)',
                transition: `all 1.5s cubic-bezier(0.4, 0, 0.2, 1)`,
              }}
            >
              <div className="form__reply subscription-ok">
                <span className="reply__text">Done! Thanks for subscribing.</span>
              </div>
              <div className="form__reply subscription-error">
                <span className="reply__text">Ooops! Something went wrong. Please try again later.</span>
              </div>
              <form className="form notify-form form-light">
                <input type="email" placeholder="Your Email" required />
                <button 
                  className="btn btn-form btn-absolute-right btn-muted slide-right-up anim-no-delay" 
                  type="submit" 
                  ref={subscribeRef}
                  style={{
                    transform: visibleElements['subscribe'] ? 'scale(1) rotate(0deg)' : 'scale(0) rotate(-180deg)',
                    transition: `all 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)`,
                  }}
                >
                  <i className="ph ph-arrow-up-right"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div 
          className="footer-blocks__column animate-card-3" 
          ref={addToCardRef}
          style={{
            opacity: visibleElements['card-2'] ? 1 : 0,
            transform: visibleElements['card-2'] ? 'translateY(0) scale(1)' : 'translateY(100px) scale(0.95)',
            transition: `all 1.5s cubic-bezier(0.4, 0, 0.2, 1) 0.3s`,
          }}
        >
          <div className="footer-blocks__card fullheight-card">
            <div className="footer-blocks__block">
              <div 
                className="footer-blocks__title anim-uni-in-up"
                style={{
                  opacity: visibleElements['card-2'] ? 1 : 0,
                  transform: visibleElements['card-2'] ? 'translateY(0)' : 'translateY(80px)',
                  transition: `all 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.45s`,
                }}
              >
                <p className="footer-blocks__title-l">Ecosystem</p>
              </div>
              <div className="footer-blocks__socials">
                <ul className="footer-socials">
                  {['Dribbble', 'Behance', 'Instagram', 'Github', 'Codepen', 'Figma Community'].map((social, idx) => (
                    <li 
                      key={idx}
                      className="footer-socials__item anim-uni-in-up" 
                      ref={addToSocialRef}
                      style={{
                        opacity: visibleElements[`social-${idx}`] ? 1 : 0,
                        transform: visibleElements[`social-${idx}`] ? 'translateX(0)' : 'translateX(-60px)',
                        transition: `all 1s cubic-bezier(0.4, 0, 0.2, 1) ${idx * 0.08}s`,
                      }}
                      onMouseEnter={() => setHoveredSocial(idx)}
                      onMouseLeave={() => setHoveredSocial(null)}
                    >
                      <a 
                        href={social === 'Dribbble' ? "/" : social === 'Behance' ? "/" : social === 'Instagram' ? "/" : social === 'Github' ? "/" : social === 'Codepen' ? "#" : "/"} 
                        className="footer-socials__link" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{
                          transform: hoveredSocial === idx ? 'translateX(8px)' : 'translateX(0)',
                          color: hoveredSocial === idx ? '#000' : '#666',
                          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                          display: 'inline-block'
                        }}
                      >
                        {social}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div 
              className="footer-blocks__links anim-uni-in-up"
              style={{
                opacity: visibleElements['card-2'] ? 1 : 0,
                transform: visibleElements['card-2'] ? 'translateY(0)' : 'translateY(80px)',
                transition: `all 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.9s`,
              }}
            >
              <p className="t-xsmall t-muted">
                <i className="ph-bold ph-copyright"></i>
                MUDRA 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}