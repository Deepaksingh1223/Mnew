"use client";

import { useState } from "react";

export default function SupportPage({ onGo, onToast }) {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "How do I convert crypto to fiat?",
      answer: "You can convert crypto to fiat by going to the 'Exchange' section, selecting your crypto, choosing 'Sell', and following the prompts. Fiat funds will be deposited to your linked bank account within 1-3 business days."
    },
    {
      question: "When do loyalty points expire?",
      answer: "Loyalty points expire 12 months after they are earned. You can check your points balance and expiration dates in the 'Loyalty' section of your dashboard."
    },
    {
      question: "How long do USDT withdrawals take?",
      answer: "USDT withdrawals typically process within 5-30 minutes, depending on network congestion. Large withdrawals may require additional security verification and can take up to 2 hours."
    },
    {
      question: "Can I use my Mudra card internationally?",
      answer: "Yes, your Mudra card works internationally in over 160 countries. Foreign transaction fees are 1% for Gold members and 2% for Standard members."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="pad">
      <div className="bc">
        <span onClick={() => onGo("home")}>Dashboard</span>
        <span>›</span>
        <span className="cur">Support</span>
      </div>

      <div className="h1">Support Center</div>

      <div className="g4">
        <div className="scard" onClick={() => onToast("Opening live chat — avg 2 min response")}>
          <div className="sico" style={{ background: "var(--grbg)", color: "var(--gr)" }}>
            <i className="ti ti-message-circle" />
          </div>
          <div style={{ fontSize: 13, fontWeight: 600, color: "var(--tx)", marginBottom: 2 }}>Live Chat</div>
          <div style={{ fontSize: 11, color: "var(--tx3)" }}>Agent available now</div>
        </div>
        <div className="scard" onClick={() => onToast("Email ticket form opened")}>
          <div className="sico" style={{ background: "var(--blbg)", color: "var(--bl)" }}>
            <i className="ti ti-mail" />
          </div>
          <div style={{ fontSize: 13, fontWeight: 600, color: "var(--tx)", marginBottom: 2 }}>Email Support</div>
          <div style={{ fontSize: 11, color: "var(--tx3)" }}>Reply within 24 hours</div>
        </div>
        <div className="scard" onClick={() => onToast("Calling Mudra Gold hotline")}>
          <div className="sico" style={{ background: "var(--pubg)", color: "var(--pu)" }}>
            <i className="ti ti-phone" />
          </div>
          <div style={{ fontSize: 13, fontWeight: 600, color: "var(--tx)", marginBottom: 2 }}>Phone Support</div>
          <div style={{ fontSize: 11, color: "var(--tx3)" }}>Gold members priority</div>
        </div>
        <div className="scard" onClick={() => onToast("Opening documentation")}>
          <div className="sico" style={{ background: "var(--gdim)", color: "var(--glt)" }}>
            <i className="ti ti-book" />
          </div>
          <div style={{ fontSize: 13, fontWeight: 600, color: "var(--tx)", marginBottom: 2 }}>Docs & Guides</div>
          <div style={{ fontSize: 11, color: "var(--tx3)" }}>API, FAQs & walkthroughs</div>
        </div>
      </div>

      <div className="card" style={{ marginTop: 12 }}>
        <div className="ch">
          <div className="ct">Frequently Asked Questions</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {faqs.map((faq, idx) => (
            <div key={idx} className="faq-i">
              <div 
                className="faq-q"
                onClick={() => toggleFaq(idx)}
                style={{ 
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "12px 16px"
                }}
              >
                <span>{faq.question}</span>
                <i className={`ti ${openFaq === idx ? "ti-minus" : "ti-plus"} faq-ico`} />
              </div>
              {openFaq === idx && (
                <div style={{ 
                  padding: "12px 16px", 
                  fontSize: 13, 
                  color: "var(--tx2)",
                  borderTop: "1px solid var(--bd)",
                  backgroundColor: "var(--bg2)",
                  lineHeight: 1.5
                }}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}