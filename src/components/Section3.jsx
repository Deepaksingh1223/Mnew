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

  const projects = [
    {
      id: 1,
      title: "AI Experiments",
      tags: ["Midjourney", "AI", "Editorial"],
      mobileImg: "/img/works/download5.webp",
      desktopImg: "/img/works/download9.webp",
      link: "/project-details"
    },
    {
      id: 2,
      title: "VR vision project",
      tags: ["Develop", "Web", "Editorial"],
      mobileImg: "/img/works/download8.webp",
      desktopImg: "/img/works/download12.webp",
      link: "/project-details"
    },
    {
      id: 3,
      title: "NFT project branding",
      tags: ["Branding", "Web", "Packaging"],
      mobileImg: "/img/works/download6.webp",
      desktopImg: "/img/works/download10.webp",
      link: "/project-details"
    },
    {
      id: 4,
      title: "Studio template",
      tags: ["UI/UX", "Development"],
      mobileImg: "/img/works/download7.webp",
      desktopImg: "/img/works/download11.webp",
      link: "/project-details"
    }
  ];

  useEffect(() => {
    const updateDimensions = () => {
      const viewportHeight = window.innerHeight;
      const totalScrollDistance = (projects.length - 1) * viewportHeight;
      setContainerHeight(totalScrollDistance);
      setDimensions({ height: viewportHeight, isClient: true });
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

  // Calculate transforms for each project (always call hooks, but with safe defaults)
  const getTransform = (index) => {
    const start = index / (projects.length - 1);
    const end = (index + 1) / (projects.length - 1);
    const height = dimensions.isClient ? dimensions.height : 1000; // fallback value
    
    return {
      y: useTransform(smoothProgress, [start, end], [0, -height]),
      scale: useTransform(smoothProgress, [start, end], [1, 0.95]),
      opacity: useTransform(smoothProgress, [start, end], [1, 0])
    };
  };

  // Create transform arrays for all projects
  const transforms = projects.map((_, index) => {
    const isLast = index === projects.length - 1;
    if (isLast) {
      return { y: 0, scale: 1, opacity: 1 };
    }
    return getTransform(index);
  });

  // Add a CSS class to hide content until client-side is ready
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
        <div
          ref={containerRef}
          style={containerStyle}
        >
          <div
            ref={sectionRef}
            style={{
              position: 'sticky',
              top: 0,
              height: '100vh',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              overflow: 'hidden',
              backgroundColor: 'var(--background)'
            }}
          >
            <div style={{
              maxWidth: '100%',
              margin: '0 auto',
              padding: '0 20px',
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center'
            }}>
              <div style={{ width: '100%', height: '85vh', minHeight: '600px', position: 'relative' }}>
                <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '30px' }}>
                  {projects.map((project, index) => {
                    const transform = transforms[index];
                    const isLast = index === projects.length - 1;

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
                          opacity: transform.opacity,
                          transformOrigin: 'center center'
                        }}
                      >
                        {/* Rest of your JSX remains the same */}
                        <Link
                          href={project.link}
                          style={{
                            display: 'block',
                            textDecoration: 'none',
                            width: '100%',
                            height: '100%'
                          }}
                        >
                          <div style={{
                            position: 'relative',
                            width: '100%',
                            height: '100%',
                            borderRadius: '30px',
                            overflow: 'hidden',
                            backgroundColor: 'var(--base-shade)'
                          }}>
                            <div style={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              width: '100%',
                              height: '100%'
                            }}>
                              <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                background: 'linear-gradient(to bottom, transparent 0%, transparent 50%, rgba(0,0,0,0.8) 100%)',
                                zIndex: 1,
                                pointerEvents: 'none'
                              }} />

                              <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                display: 'block'
                              }}>
                                <Image
                                  src={project.desktopImg}
                                  alt={project.title}
                                  fill
                                  sizes="(max-width: 768px) 100vw, 80vw"
                                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                                  priority={index === 0}
                                />
                              </div>

                              <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                display: 'none'
                              }}>
                                <Image
                                  src={project.mobileImg}
                                  alt={project.title}
                                  fill
                                  sizes="100vw"
                                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                                />
                              </div>
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
                                margin: 0,
                                fontWeight: '300',
                                letterSpacing: '-0.02em'
                              }}>{project.title}</h2>
                            </div>

                            <div style={{
                              position: 'absolute',
                              bottom: '50px',
                              left: '10px',
                              display: 'flex',
                              gap: '12px',
                              zIndex: 2,
                              flexWrap: 'wrap'
                            }}>
                              {project.tags.map((tag, tagIndex) => (
                                <span
                                  key={tagIndex}
                                  style={{
                                    padding: '8px 16px',
                                    backgroundColor: 'rgba(0,0,0,0.5)',
                                    backdropFilter: 'blur(10px)',
                                    borderRadius: '50px',
                                    fontSize: '14px',
                                    color: 'white',
                                    border: '1px solid rgba(255,255,255,0.2)',
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer'
                                  }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = 'var(--accent)';
                                    e.currentTarget.style.color = 'var(--base-opp)';
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.5)';
                                    e.currentTarget.style.color = 'white';
                                    e.currentTarget.style.transform = 'translateY(0px)';
                                  }}
                                >
                                  {tag}
                                </span>
                              ))}
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
    </div>
  );
}