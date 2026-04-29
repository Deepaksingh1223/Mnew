'use client';

import { useEffect, useState } from "react";

const cards = [
  {
    id: 1,
    tag: "Proprietary",
    tagClass: "tag-prop",
    title: "Axis MyZone RuPay Credit Card",
    img: "https://www.rupay.co.in/uploads/axis_myzone4_08f3070f4a.webp",
    features: [
      "Complimentary SonyLIV Annual Premium Subscription worth ₹999 on first spends within 30 days of card issuance*",
      "Flat ₹120 off* on Swiggy food delivery. Applicable 2 times a month, min. txn of ₹500",
      "Buy One Get One Free* on Paytm Movies. Applicable once a month, max discount ₹200",
    ],
  },
  {
    id: 2,
    tag: null,
    title: "Kotak Cashback+ RuPay Credit Card",
     img: "https://www.rupay.co.in/uploads/axis_myzone4_08f3070f4a.webp",
    features: [
      "5% cashback on online food deliveries, groceries and entertainment",
      "3% cashback on all fuel spends + 1% fuel surcharge waiver",
      "0.5% unlimited cashback on other eligible spends",
    ],
  },
  {
    id: 3,
    tag: "Proprietary",
    tagClass: "tag-prop",
    title: "BOBCARD Premier RuPay Credit Card",
     img: "https://www.rupay.co.in/uploads/axis_myzone4_08f3070f4a.webp",
    features: [
      "Lifetime Free Offer till 31st March 2026",
      "No Joining Fee. No Annual Fees.",
      "5X Reward Points on every ₹100 Spent on Travel, Dining & International Spends",
    ],
  },
  {
    id: 4,
    tag: null,
    title: "HSBC RuPay Cashback Credit Card",
    img: "https://www.rupay.co.in/uploads/axis_myzone4_08f3070f4a.webp",
    features: [
      "1.5% cashback on all online spends with no upper limit",
      "Complimentary airport lounge access in India",
      "Zero lost card liability and zero fuel surcharge",
    ],
  },
  {
    id: 5,
    tag: "Proprietary",
    tagClass: "tag-prop",
    title: "IndusInd Platinum RuPay Credit Card",
    img: "https://www.rupay.co.in/uploads/axis_myzone4_08f3070f4a.webp",
    features: [
      "Earn 1 Reward Point per ₹150 spent on all retail purchases",
      "Zero joining fee and zero annual fee for lifetime",
      "Complimentary personal accident cover worth ₹2.5 lakh",
    ],
  },
  {
    id: 6,
    tag: "Select",
    tagClass: "tag-sel",
    title: "IRCTC RBL Bank RuPay Credit Card",
   img: "https://www.rupay.co.in/uploads/axis_myzone4_08f3070f4a.webp",
    features: [
      "Earn up to 10% value back on railway ticket bookings via IRCTC",
      "2 free railway lounge visits per quarter at select stations",
      "Zero transaction fee on IRCTC ticket bookings",
    ],
  },
];

function CreditCard({ card, index }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="card-wrapper" style={{ animationDelay: `${index * 0.07}s` }}>
      {card.tag && (
        <span className={`card-tag ${card.tagClass}`}>{card.tag}</span>
      )}

      <div className="img-area">
        {!imgError ? (
          <img
            src={card.img}
            alt={card.title}
            className="card-img"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="img-fallback">
            <span>{card.title.split(" ").slice(0, 2).join(" ")}</span>
          </div>
        )}
      </div>

      <div className="card-body">
        <h3 className="card-title">{card.title}</h3>
        <div className="divider" />
        <ul className="features-list">
          {card.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
        <div className="card-actions">
          <button className="btn-apply">Apply Now →</button>
          <button className="btn-more">Read More ›</button>
        </div>
      </div>
    </div>
  );
}

export default function CardSection1() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <style>{`
        .banner-wrapper {
          background: #fdf6f0;
          padding: 56px 20px 72px;
          font-family: 'DM Sans', 'Segoe UI', sans-serif;
        }

        /* Header */
        .section-header { text-align: center; margin-bottom: 48px; }
        .rupay-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: #fff; border: 1.5px solid #edddd0;
          border-radius: 50px; padding: 6px 18px; margin-bottom: 18px;
          font-size: 12px; font-weight: 600; color: #7a6858; letter-spacing: 0.04em;
        }
        .rupay-badge-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: #c8a96e; flex-shrink: 0;
        }
        .section-title { 
          font-size: clamp(26px, 4vw, 40px);
          color: #1a2744; font-weight: 700; line-height: 1.2; margin: 0 0 10px;
        }
        .section-subtitle {
          color: #7a6858; font-size: 14px; font-weight: 300;
          line-height: 1.65; max-width: 500px; margin: 0 auto;
        }

        /* Grid */
        .cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
          max-width: 1160px;
          margin: 0 auto;
        }
        @media (max-width: 900px) { .cards-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px) { .cards-grid { grid-template-columns: 1fr; } }

        /* Card */
        .card-wrapper {
          background: #fffaf6;
          border: 1.5px solid #edddd0;
          border-radius: 22px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          position: relative;
          opacity: 0;
          transform: translateY(24px);
          animation: fadeUp 0.5s ease forwards;
          transition: transform 0.28s cubic-bezier(.25,.8,.25,1), box-shadow 0.28s ease;
        }
        .card-wrapper:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 48px rgba(26, 39, 68, 0.13);
        }
        @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }

        .card-tag {
          position: absolute; top: 14px; right: 14px;
          font-size: 10px; font-weight: 700; letter-spacing: 0.05em;
          padding: 4px 13px; border-radius: 50px; z-index: 3;
        }
        .tag-prop { background: #c8a96e; color: #fff; }
        .tag-sel  { background: #6b9e7a; color: #fff; }

        /* Image */
        .img-area {
          padding: 28px 28px 18px;
          display: flex; justify-content: center; align-items: center;
          min-height: 172px;
          background: linear-gradient(160deg, #fff 60%, #fdf0e5 100%);
        }
        .card-img {
          width: 100%; max-width: 268px;
          aspect-ratio: 16 / 10;
          border-radius: 13px;
          object-fit: cover;
          box-shadow: 0 14px 36px rgba(0, 0, 0, 0.22);
          display: block;
          transition: transform 0.3s ease;
        }
        .card-wrapper:hover .card-img { transform: scale(1.03) rotate(-1deg); }
        .img-fallback {
          width: 100%; max-width: 268px; aspect-ratio: 16 / 10;
          border-radius: 13px;
          background: linear-gradient(135deg, #1a2744, #2a3a6a);
          box-shadow: 0 14px 36px rgba(0, 0, 0, 0.22);
          display: flex; align-items: center; justify-content: center;
          font-size: 12px; font-weight: 600; color: rgba(255,255,255,0.6);
          letter-spacing: 0.05em;
        }

        /* Body */
        .card-body { padding: 0 22px 22px; flex: 1; display: flex; flex-direction: column; }
        .card-title { 
          font-size: 16px; font-weight: 600; color: #1a2744;
          margin: 0 0 14px; line-height: 1.35;
        }
        .divider { height: 1px; background: #edddd0; margin-bottom: 14px; }
        .features-list { list-style: none; flex: 1; margin: 0 0 18px; padding: 0; }
        .features-list li {
          font-size: 12.5px; color: #7a6858; line-height: 1.55;
          padding: 4px 0 4px 16px; position: relative;
              font-family: 'Inter';
        }
        .features-list li::before {
          content: ''; position: absolute; left: 0; top: 11px;
          width: 5px; height: 5px; border-radius: 50%; background: #c8a96e;
        }

        /* Buttons */
        .card-actions { display: flex; gap: 9px; }
        .btn-apply {
          flex: 1; background: #1a2744; color: #fff;
          border: none; border-radius: 50px; padding: 11px 18px;
          font-size: 12.5px; font-weight: 600; cursor: pointer;
          display: flex; align-items: center; justify-content: center; gap: 6px;
          font-family: inherit;
          transition: background 0.2s, transform 0.15s;
        }
        .btn-apply:hover { background: #2a3a6a; transform: scale(1.02); }
        .btn-more {
          background: transparent; color: #1a2744;
          border: 1.5px solid #edddd0; border-radius: 50px;
          padding: 11px 16px; font-size: 12.5px; font-weight: 600;
          cursor: pointer; display: flex; align-items: center; gap: 4px;
          font-family: inherit; white-space: nowrap;
          transition: border-color 0.2s, background 0.2s;
        }
        .btn-more:hover { border-color: #1a2744; background: rgba(26,39,68,0.05); }
      `}</style>

      <div className="banner-wrapper CardSection1-wrapper">
        <div className="section-header">
          <div className="rupay-badge">
            <span className="rupay-badge-dot" />
            RuPay Network
          </div>
          <h2 className="section-title">RuPay Credit Cards</h2>
          <p className="section-subtitle">
            India's own payment network — choose from a curated range of premium
            credit cards tailored to your lifestyle.
          </p>
        </div>

        <div className="cards-grid">
          {cards.map((card, i) => (
            <CreditCard key={card.id} card={card} index={i} />
          ))}
        </div>
      </div>
    </>
  );
}