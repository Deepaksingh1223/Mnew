"use client";

export default function CardsPage({ onGo, onToast }) {
  return (
    <div className="pg on" id="pg-home">
      <div className="pad">
        <div className="g2">
          <div className="card">
            <div className="ch">
              <div>
                <div className="ct">My Cards</div>
                <div className="cs">Exchanges, withdrawals, purchases</div>
              </div>
              <span className="cl" onClick={() => onToast("Filters applied")}>Filter</span>
            </div>
          </div>
        </div>

        <div className="g2">
          <div
            className="card"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 12,
              textAlign: "center",
            }}
          >
            <div className="dc dc-ph" style={{ width: 190, height: 120 }}>
              <div className="dc-sh" />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div className="dc-brand" style={{ color: "#E8C84A", fontSize: 11 }}>MUDRA</div>
                <div className="dc-chip" style={{ width: 24, height: 17 }} />
              </div>
              <div className="dc-num" style={{ fontSize: 9, marginTop: 8 }}>4847 •••• •••• 3921</div>
              <div className="dc-bot">
                <div>
                  <div className="dc-holder" style={{ fontSize: 7 }}>Arjun Kapoor</div>
                  <div style={{ fontSize: 6, color: "rgba(255,255,255,.28)", marginTop: 1 }}>VALID 09/28</div>
                </div>
                <div className="dc-net" style={{ fontSize: 9.5 }}>VISA</div>
              </div>
            </div>
            <div>
              <div style={{ fontSize: 15, fontWeight: 700, color: "var(--tx)" }}>Physical Card</div>
              <div style={{ fontSize: 12, color: "var(--tx3)", marginTop: 2 }}>$100 / year · Gold · Active</div>
            </div>
            <div style={{ display: "flex", gap: 7, alignSelf: "stretch" }}>
              <button className="btn bn" style={{ flex: 1 }} onClick={() => onToast("Card freeze toggled")}>Freeze</button>
              <button className="btn bo" style={{ flex: 1 }} onClick={() => onToast("Card settings opened")}>Settings</button>
            </div>
          </div>

          <div
            className="card"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 12,
              textAlign: "center",
            }}
          >
            <div className="dc dc-di" style={{ width: 190, height: 120 }}>
              <div className="dc-sh" />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div className="dc-brand" style={{ color: "#7EB8F7", fontSize: 11 }}>MUDRA</div>
                <div
                  style={{
                    width: 24,
                    height: 17,
                    borderRadius: 2,
                    background: "linear-gradient(135deg,#7EB8F7,#4A8EDD)",
                  }}
                />
              </div>
              <div className="dc-num" style={{ fontSize: 9, marginTop: 8, color: "rgba(126,184,247,.45)" }}>5291 •••• •••• 7043</div>
              <div className="dc-bot">
                <div>
                  <div className="dc-holder" style={{ color: "rgba(126,184,247,.4)", fontSize: 7 }}>Arjun Kapoor</div>
                  <div style={{ fontSize: 6, color: "rgba(126,184,247,.25)", marginTop: 1 }}>VALID 03/27</div>
                </div>
                <div className="dc-net" style={{ color: "rgba(126,184,247,.35)", fontSize: 9.5 }}>MC</div>
              </div>
            </div>
            <div>
              <div style={{ fontSize: 15, fontWeight: 700, color: "var(--tx)" }}>Digital Card</div>
              <div style={{ fontSize: 12, color: "var(--tx3)", marginTop: 2 }}>$50 / year · Online only · Active</div>
            </div>
            <div style={{ display: "flex", gap: 7, alignSelf: "stretch" }}>
              <button className="btn bn" style={{ flex: 1 }} onClick={() => onToast("Card freeze toggled")}>Freeze</button>
              <button className="btn bo" style={{ flex: 1 }} onClick={() => onToast("Card settings opened")}>Settings</button>
            </div>
          </div>
        </div>

        <div className="card" style={{ marginTop: 12 }}>
          <div className="ch">
            <div>
              <div className="ct">Add a New Card</div>
              <div className="cs">Order Physical or Get Digital</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 9 }}>
            <button className="D-btn bg" onClick={() => onToast("Order form opened — ships in 5–7 days")}>Order Physical — $100/yr</button>
            <button className="btn bo" onClick={() => onToast("Digital card issued instantly!")}>Get Digital — $50/yr</button>
          </div>
        </div>
      </div>
    </div>
  );
}

