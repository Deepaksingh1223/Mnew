'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function Section3() {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(0);
  const [dimensions, setDimensions] = useState({ height: 0, isClient: false });
  const [isMobile, setIsMobile] = useState(false);

  const projects = [
    {
      id: 1,
      title: "",
      mobileImg: "/img/works/Ndownload5.png",
      desktopImg: "/img/works/Ndownload9.png",
      link: "/project-details"
    },
    {
      id: 2,
      title: " ",
      mobileImg: "/img/works/Ndownload8.png",
      desktopImg: "/img/works/Ndownload12.png",
      link: "/project-details"
    },
    {
      id: 3,
      title: "",
      mobileImg: "/img/works/Ndownload6.png",
      desktopImg: "/img/works/Ndownload10.png",
      link: "/project-details"
    },
    {
      id: 4,
      title: "",
      mobileImg: "/img/works/Ndownload7.png",
      desktopImg: "/img/works/Ndownload11.png",
      link: "/project-details"
    }
  ];

  useEffect(() => {
    const updateDimensions = () => {
      const viewportHeight = window.innerHeight;
      const totalScrollDistance = (projects.length - 1) * viewportHeight;

      setContainerHeight(totalScrollDistance);
      setDimensions({ height: viewportHeight, isClient: true });
      setIsMobile(window.innerWidth <= 768);
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [projects.length]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const getTransform = (index) => {
    const start = index / (projects.length - 1);
    const end = (index + 1) / (projects.length - 1);
    const height = dimensions.isClient ? dimensions.height : 1000;

    return {
      y: useTransform(smoothProgress, [start, end], [0, -height]),
      scale: useTransform(smoothProgress, [start, end], [1, 0.95]),
      opacity: useTransform(smoothProgress, [start, end], [1, 0])
    };
  };

  const transforms = projects.map((_, index) => {
    const isLast = index === projects.length - 1;
    if (isLast) return { y: 0, scale: 1, opacity: 1 };
    return getTransform(index);
  });

  const containerStyle = {
    height: containerHeight ? `${containerHeight}px` : '300vh',
    position: 'relative',
    backgroundColor: 'var(--background)',
    marginBottom: 20,
    paddingBottom: 20,
    visibility: dimensions.isClient ? 'visible' : 'hidden'
  };

  return (
    <div className='mxd-hero-04__wrap loading-wrap' style={{ overflow: 'clip' }}>
      <div className='container-fluid p-0'>
        <div ref={containerRef} style={containerStyle}>
          <div
            ref={sectionRef} className='main-div-with-img' 
          >
            <div className='main-inside'>
              
              <div
                className="card-wrap"
                style={{
                  width: '100%',
                  height: isMobile ? '60%' : '85vh',
                  minHeight: isMobile ? '550px' : '600px',
                  position: 'relative'
                }}
              >
                <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '30px' }}>
                  {projects.map((project, index) => {
                    const transform = transforms[index];

                    return (
                      <motion.div
                        key={project.id}
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          zIndex: projects.length - index,
                          y: transform.y,
                          scale: transform.scale,
                          opacity: transform.opacity
                        }}
                      >
                        <Link href={project.link} style={{ display: 'block', width: '100%', height: '100%' }}>
                          <div style={{
                            position: 'relative',
                            width: '100%',
                            height: '100%',
                            borderRadius: '30px',
                            overflow: 'hidden',
                            backgroundColor: 'var(--base-shade)'
                          }}>

                            <div style={{ position: 'absolute', inset: 0 }}>
                              <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(to bottom, transparent 0%, transparent 50%, rgba(0,0,0,0.8) 100%)',
                                zIndex: 1
                              }} />

                              <Image
                                src={isMobile ? project.mobileImg : project.desktopImg}
                                alt={project.title}
                                fill
                                sizes="100vw"
                                className={isMobile ? 'img-mobile' : 'img-desktop'}
                                priority={index === 0}
                              />
                            </div>

                            <div style={{
                              position: 'absolute',
                              bottom: '120px',
                              left: '10px',
                              zIndex: 2
                            }}>
                              <h2 style={{
                                fontSize: 'clamp(2rem, 5vw, 4rem)',
                                color: 'white',
                                margin: 0
                              }}>{project.title}</h2>
                            </div>

                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ✅ ONLY CHANGE HERE */}
      <style jsx>{`
        .img-desktop {
          object-fit: cover;
          object-position: center;
        }

        .img-mobile {
          object-fit: cover;           /* 🔥 FIX */
          object-position: center top; /* 🔥 FIX */
        }

        @media (max-width: 768px) {
          .card-wrap {
            height: 60% !important;
            min-height: 550px !important;
          }
        }
      `}</style>
    </div>
  );
}