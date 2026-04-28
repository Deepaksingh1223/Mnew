'use client';
 
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

/* ─── Event Data ─────────────────────────────────────────────── */
const events = [
  {
    id: 1,
    title: 'XRP Tokyo',
    date: 'April 7',
    location: 'Tokyo',
    bg: '#111111',
    logo: (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <svg
          width="80" height="80" viewBox="0 0 80 80" fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ marginBottom: '10px', opacity: 0.22 }}
        >
          <path d="M40 0C17.9 0 0 17.9 0 40s17.9 40 40 40 40-17.9 40-40S62.1 0 40 0z" fill="#fff" />
          <path d="M54 20H62L48.5 34a12 12 0 01-17 0L18 20H26l9.8 9.8a6 6 0 008.4 0L54 20zM26 60H18l13.5-14a12 12 0 0117 0L62 60H54l-9.8-9.8a6 6 0 00-8.4 0L26 60z" fill="#111" />
        </svg>
        <div style={{ color: '#fff', fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: '22px', letterSpacing: '1px', textAlign: 'center', lineHeight: 1.1 }}>
          XRP <span style={{ color: '#aaa' }}>TOKYO</span>
          <sup style={{ fontSize: '11px', fontWeight: 400, color: '#aaa', marginLeft: '2px' }}>'26</sup>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: 'Amsterdam Stablecon EMEA',
    date: 'May 19–20',
    location: 'Amsterdam',
    bg: '#6B4FD8',
    logo: (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', height: '100%', padding: '0 8px' }}>
        <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, fontSize: '13px', color: 'rgba(255,255,255,0.85)', letterSpacing: '0.5px', marginBottom: '4px' }}>
          MAY <span style={{ color: '#FFD166', fontWeight: 600 }}>19th to 20th</span>
        </div>
        <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900, fontSize: '38px', color: '#fff', lineHeight: 1, letterSpacing: '-1px' }}>
          STABLE
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900, fontSize: '38px', color: '#fff', lineHeight: 1, letterSpacing: '-1px' }}>C</div>
          <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#6B4FD8' }} />
          </div>
          <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900, fontSize: '38px', color: '#fff', lineHeight: 1 }}>N</div>
          <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900, fontSize: '26px', color: '#FFD166', lineHeight: 1 }}>'26</div>
          <div style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', fontSize: '10px', fontWeight: 700, padding: '2px 5px', borderRadius: '3px', letterSpacing: '0.5px', alignSelf: 'flex-end', marginBottom: '6px' }}>EMEA</div>
        </div>
        <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: '11px', color: 'rgba(255,255,255,0.75)', letterSpacing: '2px', marginTop: '6px' }}>
          AMSTERDAM
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: 'Amsterdam Money 20/20 Europe',
    date: 'June 2–4',
    location: 'Amsterdam',
    bg: '#0A0A0A',
    logo: (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', height: '100%', padding: '0 8px' }}>
        <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900, fontSize: '44px', color: '#fff', lineHeight: 1, letterSpacing: '-2px' }}>.MONEY</div>
        <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900, fontSize: '44px', color: '#fff', lineHeight: 1, letterSpacing: '-2px' }}>20/20</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '4px' }}>
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '11px', color: 'rgba(255,255,255,0.5)', fontStyle: 'italic' }}>by</span>
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '12px', color: 'rgba(255,255,255,0.6)', letterSpacing: '1px' }}>informa</span>
          <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px' }}>•••</span>
        </div>
        <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900, fontSize: '26px', color: '#FF2D55', marginTop: '6px', letterSpacing: '-0.5px' }}>EUROPE</div>
        <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '11px', color: 'rgba(255,255,255,0.6)', marginTop: '2px', letterSpacing: '0.5px' }}>2-4 JUNE 2026</div>
        <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '11px', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.5px' }}>AMSTERDAM</div>
      </div>
    ),
  },
];

/* ─── Single Event Card ──────────────────────────────────────── */
function EventCard({ event, visible, delay = 0 }) {
  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      }}
    >
      {/* Image / Logo Box */}
      <div className="ue-card-img" style={{ background: event.bg }}>
        {event.logo}
      </div>

      {/* Text */}
      <div className="ue-card-body">
        <p className="ue-card-title">{event.title}</p>
        <p className="ue-card-date">{event.date}</p>
        <p className="ue-card-location">{event.location}</p>
      </div>
    </div>
  );
}

/* ─── Section ────────────────────────────────────────────────── */
export default function UpcomingEventsSection() {
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
      <section className="ue-section" ref={sectionRef}>
        <div className="ue-wrapper">

          {/* Header */}
          <div className={`ue-header ${isVisible ? 'ue-visible' : ''}`}>
            <h2 className="ue-heading">Upcoming Events</h2>
            <p className="ue-subtext">
              Meet the RedotPay team. See what&apos;s next on the events calendar.
            </p>
          </div>

          {/* ── Desktop: CSS grid ── */}
          <div className="ue-desktop-grid">
            {events.map((event, i) => (
              <EventCard
                key={event.id}
                event={event}
                visible={isVisible}
                delay={0.05 + i * 0.1}
              />
            ))}
          </div>

          {/* ── Tablet / Mobile: Swiper ── */}
          <div className="ue-swiper-wrap">
            <Swiper
              className="ue-swiper"
              modules={[Pagination, Autoplay, A11y]}
              spaceBetween={20}
              slidesPerView={1.15}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{ clickable: true }}
              a11y={{
                prevSlideMessage: 'Previous event',
                nextSlideMessage: 'Next event',
              }}
              breakpoints={{
                480: { slidesPerView: 1.4,  spaceBetween: 20 },
                600: { slidesPerView: 2.1,  spaceBetween: 24 },
                750: { slidesPerView: 2.45, spaceBetween: 24 },
              }}
            >
              {events.map((event) => (
                <SwiperSlide key={event.id}>
                  <EventCard event={event} visible={isVisible} delay={0} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </section>
    </>
  );
}