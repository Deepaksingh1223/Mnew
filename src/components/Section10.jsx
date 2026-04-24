'use client';

import { useRef, useEffect, useState } from 'react';

const plans = [
  {
    id: 'essentials',
    name: 'Essentials Plan',
    price: '$140',
    period: 'Per Month',
    featured: false,
    features: [
      'Global Corporate Cards',
      'Business Account And Bill Pay',
      'Real-Time Spend Reporting',
      'Billing In 50+ Countries',
      'Dedicated Support For Admins',
    ],
  },
  {
    id: 'premium',
    name: 'Premium Plan',
    price: '$160',
    period: 'Per Month',
    featured: true,
    features: [
      'Up To 10 Team Members',
      'Unlimited Usage',
      'Unlimited Drive Storage',
      'Concierge Help Center',
      'Custom AI Brand Models',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise Plan',
    price: '$180',
    period: 'Per Month',
    featured: false,
    features: [
      'Wallet management',
      'Secure protocols',
      'Transaction editing',
      'Enhanced security',
      'Advanced reporting',
    ],
  },
];

function BankCardMini({ featured }) {
  return (
    <div style={{
      background: '#198754',
      borderRadius: '10px',
      padding: '10px 14px',
      width: '45%',
      flexShrink: 0,
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
        <span style={{ fontSize: '9px', color: '#fff', letterSpacing: '0.3px' }}>Balance</span>
        <div style={{ display: 'flex' }}>
          <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#eb001b', marginRight: '-5px', zIndex: 1 }} />
          <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#f79e1b' }} />
        </div>
      </div>
      <div style={{ fontSize: '12px', fontWeight: 800, color: '#fff', marginBottom: '4px', letterSpacing: '-0.3px' }}>$ 3,403.09</div>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
        <span style={{ fontSize: '8px', color: '#fff' }}>$10,000</span>
        <span style={{ fontSize: '8px', color: '#fff' }}>Card limit</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ fontSize: '9px', color: '#fff', fontWeight: 700 }}>Finto</span>
        <span style={{ fontSize: '9px', color: '#fff' }}>04/25</span>
      </div>
      <div style={{
        position: 'absolute', right: '-14px', bottom: '-14px',
        width: '50px', height: '50px', borderRadius: '50%',
        background: 'rgba(141,198,63,0.15)'
      }} />
    </div>
  );
}

export default function PricingSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [cardVisible, setCardVisible] = useState([false, false, false]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observers = cardRefs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          setCardVisible((prev) => {
            const next = [...prev];
            next[i] = entry.isIntersecting;
            return next;
          });
        },
        { threshold: 0.2 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o && o.disconnect());
  }, []);

  return (
    <> 
      <section className="pricing-section" ref={sectionRef}>
        {/* HEADER */}
        <div className={`pricing-header ${visible ? 'visible' : ''}`}>
          <p className="pricing-label">Pricing Plan</p>
          <h2 className="pricing-title">
            Choose The Best <span className="highlight">Plans</span><br />
            Which For You
          </h2>
        </div>

        {/* CARDS */}
        <div className="pricing-grid mxd-container">
          {plans.map((plan, i) => (
            <div
              key={plan.id}
              ref={(el) => (cardRefs.current[i] = el)}
              className={`pricing-card ${plan.featured ? 'featured' : ''} ${cardVisible[i] ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              {/* CARD HEADER */}
              <div className="pricing-card-header">
                <div>
                  <p className="plan-name">{plan.name}</p>
                  <div className="plan-price-row">
                    <span className="plan-price">{plan.price}</span>
                    <span className="plan-price-slash">/</span>
                    <span className="plan-period">{plan.period}</span>
                  </div>
                </div>
                <BankCardMini featured={plan.featured} />
              </div>

              {/* DIVIDER */}
              <div className="pricing-divider" />

              {/* FEATURES */}
              <div className="pricing-features">
                {plan.features.map((feat, fi) => (
                  <div className="pricing-feature" key={fi}>
                    <div className="feature-icon">
                      <svg viewBox="0 0 12 12">
                        <polyline points="1,6 4.5,9.5 11,2" />
                      </svg>
                    </div>
                    {feat}
                  </div>
                ))}
              </div>

              {/* BUTTON */}
              <div className="pricing-btn-wrap">
<a class="btn-anim btn btn-anim btn-default btn-outline slide-right-up w-100" aria-label="Portfolio" href="/portfolio">
<span class="btn-caption"><div class="btn-anim__block"> Get Started</div>
<div class="btn-anim__block" aria-hidden="true"> Get Started</div>
</span><i class="ph-bold ph-arrow-up-right"></i></a>

                
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}