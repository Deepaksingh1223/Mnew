'use client';

 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

/* ─── Slide Data ─────────────────────────────────────────────── */
const SLIDES = [
  {
    id: 1,
    image: '/Mudra-card-videos/Affiliate.webp', // replace with your actual image path
    tag: 'Affiliate Program',
    title: 'Affiliate Program',
    description:
      "Empower others to spend smarter. RedotPay's Affiliate Program turns your influence into real rewards and global impact.",
    btnText: 'Find out more',
    btnHref: '#',
  },
  {
    id: 2,
    image: '/Mudra-card-videos/Affiliate.webp', // replace with your actual image path
    tag: 'Community',
    title: 'Join Our Community',
    description:
      'Connect with thousands of RedotPay users worldwide. Share tips, get support, and grow together in our global network.',
    btnText: 'Join now',
    btnHref: '#',
  },
  {
    id: 3,
    image: '/Mudra-card-videos/Affiliate.webp', // replace with your actual image path
    tag: 'Rewards',
    title: 'Earn Real Rewards',
    description:
      'Every referral counts. Unlock exclusive bonuses, cashback, and premium perks as you grow your RedotPay network.',
    btnText: 'Start earning',
    btnHref: '#',
  },
];

/* ─── Single Slide Card ──────────────────────────────────────── */
function SlideCard({ slide }) {
  return (
    <div className="ap-card">
      {/* Left: Image */}
      <div className="ap-img-wrap">
        <img
          src={slide.image}
          alt={slide.title}
          className="ap-img"
          onError={(e) => {
            /* fallback gradient if image missing */
            e.target.style.display = 'none';
            e.target.parentNode.style.background =
              'linear-gradient(135deg,#e0e7ef 0%,#c9d5e8 100%)';
          }}
        />
      </div>

      {/* Right: Content */}
      <div className="ap-content">
        <h3 className="ap-title">{slide.title}</h3>
        <p className="ap-desc">{slide.description}</p>
        <a href={slide.btnHref} className="ap-btn">
          {slide.btnText}
        </a>
      </div>
    </div>
  );
}

/* ─── Section ────────────────────────────────────────────────── */
export default function AffiliateProgramSection() {
  return (
    <>
     
      <section className="ap-section">
        <div className="ap-wrapper">
          <Swiper
            className="ap-swiper"
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={24}
            autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            pagination={{ clickable: true }}
            breakpoints={{
              900: { slidesPerView: 1, spaceBetween: 0 },
            }}
          >
            {SLIDES.map((slide) => (
              <SwiperSlide key={slide.id}>
                <SlideCard slide={slide} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}