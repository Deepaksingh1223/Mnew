'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);

  // Add this for scroll speed
  useEffect(() => {
    const handleScroll = () => {
      const scrollingElements = document.querySelectorAll('.creative-developer-text');
      scrollingElements.forEach((element) => {
        const scrollSpeed = Math.min(window.scrollY / 100, 3);
        const newDuration = Math.max(20 / (1 + scrollSpeed), 5);
        element.style.animationDuration = `${newDuration}s`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMounted(true);
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      applyDarkTheme();
    } else {
      setIsDark(false);
      applyLightTheme();
    }
  }, []);

  // Handle video playback when menu opens/closes
  useEffect(() => {
    if (isMenuOpen && videoRef.current && !videoError) {
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.load();
          videoRef.current.play().catch(e => {
            console.log('Video play error:', e);
            setVideoError(true);
          });
        }
      }, 100);
    } else if (!isMenuOpen && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isMenuOpen, videoError]);

  // Apply active_menu class to nav and menu wrapper when menu opens/closes
  useEffect(() => {
    if (!isMounted) return;

    const navWrap = document.querySelector('.mxd-nav__wrap');
    const menuWrapper = document.querySelector('.mxd-menu__wrapper');

    if (isMenuOpen) {
      if (navWrap) {
        navWrap.classList.add('active_menu');
      }
      if (menuWrapper) {
        menuWrapper.classList.add('active_menu');
        menuWrapper.style.visibility = 'visible';
        menuWrapper.style.opacity = '1';
        menuWrapper.style.pointerEvents = 'all';
      }
      document.body.style.overflow = 'hidden';
      document.body.classList.add('videoModal__bodyOpen');
    } else {
      if (navWrap) {
        navWrap.classList.remove('active_menu');
      }
      if (menuWrapper) {
        menuWrapper.classList.remove('active_menu');
        menuWrapper.style.visibility = '';
        menuWrapper.style.opacity = '';
        menuWrapper.style.pointerEvents = '';
      }
      document.body.style.overflow = '';
      document.body.classList.remove('videoModal__bodyOpen');
    }

    return () => {
      if (navWrap) {
        navWrap.classList.remove('active_menu');
      }
      if (menuWrapper) {
        menuWrapper.classList.remove('active_menu');
      }
      document.body.style.overflow = '';
      document.body.classList.remove('videoModal__bodyOpen');
    };
  }, [isMenuOpen, isMounted]);

  const applyLightTheme = () => {
    document.documentElement.style.setProperty('--background', '#faf7f6');
    document.documentElement.style.setProperty('--foreground', '#161616');
    document.documentElement.style.setProperty('--base', '#faf7f6');
    document.documentElement.style.setProperty('--base-rgb', '250, 247, 246');
    document.documentElement.style.setProperty('--base-tint', '#fff');
    document.documentElement.style.setProperty('--base-shade', '#e0dddb');
    document.documentElement.style.setProperty('--base-opp', '#161616');
    document.documentElement.style.setProperty('--base-opp-tint', '#1c1c1c');
    document.documentElement.style.setProperty('--accent', '#9f8be7');
    document.documentElement.style.setProperty('--accent-rgb', '159, 139, 231');
    document.documentElement.style.setProperty('--additional', '#ddf160');
    document.documentElement.style.setProperty('--additional-rgb', '221, 241, 96');
    document.documentElement.style.setProperty('--neutral-transparent', '#ffffff4d');
    document.documentElement.style.setProperty('--st-bright', '#161616');
    document.documentElement.style.setProperty('--st-medium', '#7c7c7c');
    document.documentElement.style.setProperty('--st-muted', '#e0dddb');
    document.documentElement.style.setProperty('--st-opp-bright', '#fff');
    document.documentElement.style.setProperty('--fw-regular', '400');
    document.documentElement.style.setProperty('--fw-medium', '600');
    document.documentElement.style.setProperty('--fw-semibold', '700');
    document.documentElement.style.setProperty('--fw-bold', '800');
    document.documentElement.style.setProperty('--fw-regular-opp', '300');
    document.documentElement.style.setProperty('--fw-medium-opp', '500');
    document.documentElement.style.setProperty('--t-bright', '#161616');
    document.documentElement.style.setProperty('--t-medium', '#303030');
    document.documentElement.style.setProperty('--t-muted', '#585858');
    document.documentElement.style.setProperty('--t-muted-extra', '#b2aead');
    document.documentElement.style.setProperty('--t-opp-bright', '#fff');
    document.documentElement.style.setProperty('--t-opp-medium', '#acacac');
    document.documentElement.style.setProperty('--t-opp-muted', '#838383');
  };

  const applyDarkTheme = () => {
    document.documentElement.style.setProperty('--background', '#161616');
    document.documentElement.style.setProperty('--foreground', '#faf7f6');
    document.documentElement.style.setProperty('--base', '#161616');
    document.documentElement.style.setProperty('--base-rgb', '22, 22, 22');
    document.documentElement.style.setProperty('--base-tint', '#1c1c1c');
    document.documentElement.style.setProperty('--base-shade', '#0a0a0a');
    document.documentElement.style.setProperty('--base-opp', '#faf7f6');
    document.documentElement.style.setProperty('--base-opp-tint', '#fff');
    document.documentElement.style.setProperty('--accent', '#ddf160');
    document.documentElement.style.setProperty('--accent-rgb', '221, 241, 96');
    document.documentElement.style.setProperty('--additional', '#9f8be7');
    document.documentElement.style.setProperty('--additional-rgb', '159, 139, 231');
    document.documentElement.style.setProperty('--neutral-transparent', '#0000004d');
    document.documentElement.style.setProperty('--st-bright', '#fff');
    document.documentElement.style.setProperty('--st-medium', '#646464');
    document.documentElement.style.setProperty('--st-muted', '#252525');
    document.documentElement.style.setProperty('--st-opp-bright', '#0f0f0f');
    document.documentElement.style.setProperty('--fw-regular', '300');
    document.documentElement.style.setProperty('--fw-medium', '500');
    document.documentElement.style.setProperty('--fw-semibold', '600');
    document.documentElement.style.setProperty('--fw-bold', '700');
    document.documentElement.style.setProperty('--fw-regular-opp', '400');
    document.documentElement.style.setProperty('--fw-medium-opp', '600');
    document.documentElement.style.setProperty('--t-bright', '#fff');
    document.documentElement.style.setProperty('--t-medium', '#acacac');
    document.documentElement.style.setProperty('--t-muted', '#838383');
    document.documentElement.style.setProperty('--t-muted-extra', '#535151');
    document.documentElement.style.setProperty('--t-opp-bright', '#161616');
    document.documentElement.style.setProperty('--t-opp-medium', '#303030');
    document.documentElement.style.setProperty('--t-opp-muted', '#969696');
  };

  const toggleTheme = () => {
    if (isDark) {
      setIsDark(false);
      applyLightTheme();
      localStorage.setItem('theme', 'light');
    } else {
      setIsDark(true);
      applyDarkTheme();
      localStorage.setItem('theme', 'dark');
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const hamburgerVariants = {
    closed: { rotate: 0 },
    open: { rotate: 90 }
  };

  const lineVariants = {
    closed: {
      rotate: 0,
      y: 0
    },
    open: (custom) => ({
      rotate: custom === 0 ? 0 : -45,
      y: custom === 0 ? 8 : -0
    })
  };

  return (
    <>
      <motion.nav
        className="mxd-nav__wrap"
        data-lenis-prevent=""
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="mxd-nav__contain ">
          <motion.a
            href="#"
            className={`mxd-nav__hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              toggleMenu();
            }}
            animate={isMenuOpen ? "open" : "closed"}
            variants={hamburgerVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="hamburger__base"
              variants={lineVariants}
              custom={0}
              animate={isMenuOpen ? "open" : "closed"}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="hamburger__line"
              variants={lineVariants}
              custom={1}
              animate={isMenuOpen ? "open" : "closed"}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="hamburger__line"
              variants={lineVariants}
              custom={2}
              animate={isMenuOpen ? "open" : "closed"}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </div>

        <AnimatePresence mode="wait">
          {isMenuOpen && (
            <motion.div
              className="mxd-menu__wrapper"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div
                className="mxd-menu__base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="mxd-menu__contain">
                <div className="mxd-menu__inner">
                  <div className="mxd-menu__left">
                    <motion.p
                      className="mxd-menu__caption fade-in-elm"
                      variants={fadeInVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: 0.4 }}
                    >
                      🦄 Innovative design
                      <br />
                      and cutting-edge development
                    </motion.p>
                    <div className="main-menu">
                      <nav className="main-menu__content">
                        <ul id="main-menu" className="main-menu__accordion">
                          <li className="main-menu__item fade-in-up-elm" style={{ transitionDelay: '0s' }}>
                            <Link href="/" onClick={closeMenu}>
                              <div className="main-menu__toggle">
                                <span className="btn-anim main-menu__link btn btn-anim" aria-label="Home">
                                  <span className="btn-caption">
                                    <div className="btn-anim__block">
                                      <span className="btn-anim__letter">H</span>
                                      <span className="btn-anim__letter">o</span>
                                      <span className="btn-anim__letter">m</span>
                                      <span className="btn-anim__letter">e</span>
                                    </div>
                                    <div className="btn-anim__block" aria-hidden="true">
                                      <span className="btn-anim__letter">H</span>
                                      <span className="btn-anim__letter">o</span>
                                      <span className="btn-anim__letter">m</span>
                                      <span className="btn-anim__letter">e</span>
                                    </div>
                                  </span>
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                  <path d="M19.6,9.6h-3.9c-.4,0-1.8-.2-1.8-.2-.6,0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4,0,0,0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0,.4-.2,1.5-.2,1.5,0,.5-.2,1-.5,1.4-.3.5-.7.9-1.2,1.2s-1,.5-1.6.6c0,0-1.2,0-1.7.2H.4c-.2,0-.4.2-.4.4s.2.4.4.4h4.1c.4,0,1.7.2,1.7.2.6,0,1.1.2,1.6.6.4.3.8.7,1.1,1.1.3.5.5,1,.6,1.6,0,0,0,1.3.2,1.7v4.1c0,.2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7,0-.6.2-1.1.6-1.6.3-.4.7-.8,1.1-1.1.5-.3,1-.5,1.6-.6,0,0,1.3,0,1.8-.2h3.9c.2,0,.4-.2.4-.4s-.2-.4-.4-.4Z" />
                                </svg>
                              </div>
                            </Link>
                          </li>
                          <li className="main-menu__item fade-in-up-elm" style={{ transitionDelay: '1s' }}>
                            <Link href="/about" onClick={closeMenu}>
                              <div className="main-menu__toggle">
                                <span className="btn-anim main-menu__link btn btn-anim" aria-label="Home">
                                  <span className="btn-caption">
                                    <div className="btn-anim__block">
                                      <span className="btn-anim__letter">A</span>
                                      <span className="btn-anim__letter">B</span>
                                      <span className="btn-anim__letter">O</span>
                                      <span className="btn-anim__letter">U</span>
                                      <span className="btn-anim__letter">T</span>
                                    </div>
                                    <div className="btn-anim__block" aria-hidden="true">
                                      <span className="btn-anim__letter">A</span>
                                      <span className="btn-anim__letter">B</span>
                                      <span className="btn-anim__letter">O</span>
                                      <span className="btn-anim__letter">U</span>
                                      <span className="btn-anim__letter">T</span>
                                    </div>
                                  </span>
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                  <path d="M19.6,9.6h-3.9c-.4,0-1.8-.2-1.8-.2-.6,0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4,0,0,0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0,.4-.2,1.5-.2,1.5,0,.5-.2,1-.5,1.4-.3.5-.7.9-1.2,1.2s-1,.5-1.6.6c0,0-1.2,0-1.7.2H.4c-.2,0-.4.2-.4.4s.2.4.4.4h4.1c.4,0,1.7.2,1.7.2.6,0,1.1.2,1.6.6.4.3.8.7,1.1,1.1.3.5.5,1,.6,1.6,0,0,0,1.3.2,1.7v4.1c0,.2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7,0-.6.2-1.1.6-1.6.3-.4.7-.8,1.1-1.1.5-.3,1-.5,1.6-.6,0,0,1.3,0,1.8-.2h3.9c.2,0,.4-.2.4-.4s-.2-.4-.4-.4Z" />
                                </svg>
                              </div>
                            </Link>
                          </li>
                          <li className="main-menu__item fade-in-up-elm" style={{ transitionDelay: '2s' }}>
                            <Link href="/community" onClick={closeMenu}>
                              <div className="main-menu__toggle">
                                <span className="btn-anim main-menu__link btn btn-anim" aria-label="Home">
                                  <span className="btn-caption">
                                    <div className="btn-anim__block">
                                      <span className="btn-anim__letter">C</span>
                                      <span className="btn-anim__letter">O</span>
                                      <span className="btn-anim__letter">M</span>
                                      <span className="btn-anim__letter">M</span>
                                      <span className="btn-anim__letter">U</span>
                                      <span className="btn-anim__letter">N</span>
                                      <span className="btn-anim__letter">I</span>
                                      <span className="btn-anim__letter">T</span>
                                      <span className="btn-anim__letter">Y</span>
                                    </div>
                                    <div className="btn-anim__block" aria-hidden="true">
                                      <span className="btn-anim__letter">C</span>
                                      <span className="btn-anim__letter">O</span>
                                      <span className="btn-anim__letter">M</span>
                                      <span className="btn-anim__letter">M</span>
                                      <span className="btn-anim__letter">U</span>
                                      <span className="btn-anim__letter">N</span>
                                      <span className="btn-anim__letter">I</span>
                                      <span className="btn-anim__letter">T</span>
                                      <span className="btn-anim__letter">Y</span>
                                    </div>
                                  </span>
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                  <path d="M19.6,9.6h-3.9c-.4,0-1.8-.2-1.8-.2-.6,0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4,0,0,0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0,.4-.2,1.5-.2,1.5,0,.5-.2,1-.5,1.4-.3.5-.7.9-1.2,1.2s-1,.5-1.6.6c0,0-1.2,0-1.7.2H.4c-.2,0-.4.2-.4.4s.2.4.4.4h4.1c.4,0,1.7.2,1.7.2.6,0,1.1.2,1.6.6.4.3.8.7,1.1,1.1.3.5.5,1,.6,1.6,0,0,0,1.3.2,1.7v4.1c0,.2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7,0-.6.2-1.1.6-1.6.3-.4.7-.8,1.1-1.1.5-.3,1-.5,1.6-.6,0,0,1.3,0,1.8-.2h3.9c.2,0,.4-.2.4-.4s-.2-.4-.4-.4Z" />
                                </svg>
                              </div>
                            </Link>
                          </li>

                          <li className="main-menu__item fade-in-up-elm" style={{ transitionDelay: '2s' }}>
                            <Link href="/card" onClick={closeMenu}>
                              <div className="main-menu__toggle">
                                <span className="btn-anim main-menu__link btn btn-anim" aria-label="Home">
                                  <span className="btn-caption">
                                    <div className="btn-anim__block">
                                      <span className="btn-anim__letter">C</span>
                                      <span className="btn-anim__letter">A</span>
                                      <span className="btn-anim__letter">R</span>
                                      <span className="btn-anim__letter">D</span>
                                    </div>
                                    <div className="btn-anim__block" aria-hidden="true">
                                      <span className="btn-anim__letter">C</span>
                                      <span className="btn-anim__letter">A</span>
                                      <span className="btn-anim__letter">R</span>
                                      <span className="btn-anim__letter">D</span>
                                    </div>
                                  </span>
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                  <path d="M19.6,9.6h-3.9c-.4,0-1.8-.2-1.8-.2-.6,0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4,0,0,0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0,.4-.2,1.5-.2,1.5,0,.5-.2,1-.5,1.4-.3.5-.7.9-1.2,1.2s-1,.5-1.6.6c0,0-1.2,0-1.7.2H.4c-.2,0-.4.2-.4.4s.2.4.4.4h4.1c.4,0,1.7.2,1.7.2.6,0,1.1.2,1.6.6.4.3.8.7,1.1,1.1.3.5.5,1,.6,1.6,0,0,0,1.3.2,1.7v4.1c0,.2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7,0-.6.2-1.1.6-1.6.3-.4.7-.8,1.1-1.1.5-.3,1-.5,1.6-.6,0,0,1.3,0,1.8-.2h3.9c.2,0,.4-.2.4-.4s-.2-.4-.4-.4Z" />
                                </svg>
                              </div>
                            </Link>
                          </li>


                          <li className="main-menu__item fade-in-up-elm" style={{ transitionDelay: '2s' }}>
                            <Link href="/Contact" onClick={closeMenu}>
                              <div className="main-menu__toggle">
                                <span className="btn-anim main-menu__link btn btn-anim" aria-label="Home">
                                  <span className="btn-caption">
                                    <div className="btn-anim__block">
                                      <span className="btn-anim__letter">C</span>
                                      <span className="btn-anim__letter">O</span>
                                      <span className="btn-anim__letter">N</span>
                                      <span className="btn-anim__letter">T</span>
                                      <span className="btn-anim__letter">A</span>
                                      <span className="btn-anim__letter">C</span>
                                      <span className="btn-anim__letter">T</span>
                                    </div>
                                    <div className="btn-anim__block" aria-hidden="true">
                                      <span className="btn-anim__letter">C</span>
                                      <span className="btn-anim__letter">O</span>
                                      <span className="btn-anim__letter">N</span>
                                      <span className="btn-anim__letter">T</span>
                                      <span className="btn-anim__letter">A</span>
                                      <span className="btn-anim__letter">C</span>
                                      <span className="btn-anim__letter">T</span>
                                    </div>
                                  </span>
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                  <path d="M19.6,9.6h-3.9c-.4,0-1.8-.2-1.8-.2-.6,0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4,0,0,0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0,.4-.2,1.5-.2,1.5,0,.5-.2,1-.5,1.4-.3.5-.7.9-1.2,1.2s-1,.5-1.6.6c0,0-1.2,0-1.7.2H.4c-.2,0-.4.2-.4.4s.2.4.4.4h4.1c.4,0,1.7.2,1.7.2.6,0,1.1.2,1.6.6.4.3.8.7,1.1,1.1.3.5.5,1,.6,1.6,0,0,0,1.3.2,1.7v4.1c0,.2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7,0-.6.2-1.1.6-1.6.3-.4.7-.8,1.1-1.1.5-.3,1-.5,1.6-.6,0,0,1.3,0,1.8-.2h3.9c.2,0,.4-.2.4-.4s-.2-.4-.4-.4Z" />
                                </svg>
                              </div>
                            </Link>
                          </li>


                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="mxd-menu__right">
                    <div className="menu-promo">
                      <div className="menu-promo__content">
                        <motion.p
                          className="menu-promo__caption"
                          variants={fadeInVariants}
                          initial="hidden"
                          animate="visible"
                          transition={{ delay: 0.4 }}
                        >
                          👋 New Rayo template is here!
                          <br />
                          Showcase your projects, services and expertise with impact.
                        </motion.p>
                        <motion.div
                          className="menu-promo__img"
                          variants={fadeInUpVariants}
                          initial="hidden"
                          animate="visible"
                          transition={{ delay: 0.3 }}
                          style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'var(--base-shade)',
                            borderRadius: '30px',
                            overflow: 'hidden'
                          }}
                        >
                          {!videoError ? (
                            <video
                              ref={videoRef}
                              className="menu-img"
                              preload="auto"
                              autoPlay
                              loop
                              muted
                              playsInline
                              poster="/img/works/MDR Futuristics Crad1.mp4"
                              style={{
                                width: '100%',
                                height: 'auto',
                                objectFit: 'cover'
                              }}
                              onError={(e) => {
                                console.error('Video failed to load:', e.target.error);
                                setVideoError(true);
                              }}
                              onCanPlay={() => {
                                console.log('Video can play');
                                setVideoError(false);
                              }}
                            >
                              <source src="/img/works/MDR Futuristics Crad1.mp4" type="video/mp4" />
                              <source src="/img/works/MDR Futuristics Crad1.mp4" type="video/mp4" />
                              <source src="/img/works/MDR Futuristics Crad1.mp4" type="video/mp4" />
                            </video>
                          ) : (
                            <div style={{
                              width: '300px',
                              height: '300px',
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'center',
                              alignItems: 'center',
                              backgroundColor: 'var(--base-shade)',
                              borderRadius: '12px',
                              textAlign: 'center',
                              padding: '20px'
                            }}>
                              <p style={{ color: 'var(--t-muted)', marginBottom: '10px' }}>
                                ⚠️ Video failed to load
                              </p>
                              <p style={{ color: 'var(--t-muted-extra)', fontSize: '12px' }}>
                                Please check if menu-video.mp4 exists in /public/img/
                              </p>
                            </div>
                          )}
                        </motion.div>
                      </div>
                    </div>
                  </div>
                  <motion.div
                    className="mxd-menu__data"
                    variants={fadeInUpVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.4 }}
                  >
                    <p className="t-xsmall">
                      Made with <i className="ph-fill ph-heart t-additional" />
                      <a className="no-effect" href="/" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                        BY MDR Futuristics 
                      </a>
                    </p>
                    <p className="t-xsmall">
                      <i className="ph ph-copyright" /> 2025
                    </p>
                  </motion.div>
                </div>
                <div className="hamburger__parking-slot"></div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <motion.header
        id="header"
        className="mxd-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="mxd-header__logo ">
          <Link className="mxd-logo" href="/" >
            <Image
              alt="Object"
              loading="lazy"
              width={300}
              height={300}
              className="btn-rotating__image"
              src="/img/mudra-logo.png"
            />

          </Link>
        </div>
        <div className="mxd-header__controls ">
          <motion.button
            className="mxd-color-switcher"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              background: 'none',
              border: 'none',
              padding: '8px',
              WebkitFontSmoothing: 'antialiased',
              fontSize: '24px',
              color: 'var(--t-bright)'
            }}
          >
            <motion.i
              className={`ph ${isDark ? 'ph-sun' : 'ph-moon'}`}
              initial={{ rotate: 0 }}
              animate={{ rotate: isDark ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              style={{ fontSize: '24px' }}
            />
          </motion.button>
          <motion.a
            className="btn-anim btn btn-anim btn-default btn-mobile-icon btn-outline slide-right next-page"
            aria-label="Say Hello"
            href="#"
            onClick={closeMenu}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="btn-caption">
              <div className="btn-anim__block">Say Hello</div>
              <div className="btn-anim__block" aria-hidden="true">Say Hello</div>
            </span>
            <i className="ph-bold ph-arrow-up-right"></i>
          </motion.a>
        </div>
      </motion.header>
    </>
  );
}