"use client";

export default function SupportPage({ onGo, onToast }) {
  return (
    <div className="pad">
      <div className="bc">
        <span onClick={() => onGo("home")}>Dashboard</span>
        <span>›</span>
        <span className="cur">Support</span>
      </div>

      <div className="h1">Support Center</div>

      <div className="g4">
        <div className="scard" onClick={() => onToast("Opening live chat — avg 2 min response")}
        >
          <div className="sico" style={{ background: "var(--grbg)", color: "var(--gr)" }}>
            <i className="ti ti-message-circle" />
          </div>
          <div style={{ fontSize: 13, fontWeight: 600, color: "var(--tx)", marginBottom: 2 }}>Live Chat</div>
          <div style={{ fontSize: 11, color: "var(--tx3)" }}>Agent available now</div>
        </div>
        <div className="scard" onClick={() => onToast("Email ticket form opened")}
        >
          <div className="sico" style={{ background: "var(--blbg)", color: "var(--bl)" }}>
            <i className="ti ti-mail" />
          </div>
          <div style={{ fontSize: 13, fontWeight: 600, color: "var(--tx)", marginBottom: 2 }}>Email Support</div>
          <div style={{ fontSize: 11, color: "var(--tx3)" }}>Reply within 24 hours</div>
        </div>
        <div className="scard" onClick={() => onToast("Calling Mudra Gold hotline")}
        >
          <div className="sico" style={{ background: "var(--pubg)", color: "var(--pu)" }}>
            <i className="ti ti-phone" />
          </div>
          <div style={{ fontSize: 13, fontWeight: 600, color: "var(--tx)", marginBottom: 2 }}>Phone Support</div>
          <div style={{ fontSize: 11, color: "var(--tx3)" }}>Gold members priority</div>
        </div>
        <div className="scard" onClick={() => onToast("Opening documentation")}
        >
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
          {[ 
            "How do I convert crypto to fiat?",
            "When do loyalty points expire?",
            "How long do USDT withdrawals take?",
            "Can I use my Mudra card internationally?",
          ].map((q) => (
            <div key={q} className="faq-i" onClick={() => onToast("FAQ opened")}
            >
              <div className="faq-q">{q}
                <i className="ti ti-plus faq-ico" aria-hidden="true" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

