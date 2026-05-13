"use client";

export default function MembershipPlansPage({ onGo, onToast }) {
  return (
    <div className="pad">
      <div className="bc">
        <span onClick={() => onGo("home")}>Dashboard</span>
        <span>›</span>
        <span className="cur">Membership Plans</span>
      </div>

      <div className="h1">Membership Plans</div>

      <div className="g3">
        <div className="pc-card">
          <div style={{ fontSize: 14, fontWeight: 700, color: "var(--tx2)" }}>Silver</div>
          <div>
            <div style={{ fontSize: 28, fontWeight: 800, color: "var(--tx2)" }}>$50</div>
            <div style={{ fontSize: 10, color: "var(--tx3)", marginTop: 1 }}>per year</div>

            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: 7,
                flex: 1,
                padding: 0,
                margin: 0,
              }}
            >
              {["1 Digital Card", "Basic Crypto Exchange", "Loyalty Tasks Access", "1% MDR Cashback"].map((x) => (
                <li key={x} className="chk-i">
                  <div className="chk-c">
                    <i className="ti ti-check" />
                  </div>
                  {x}
                </li>
              ))}
            </ul>

            <button
              className="btn bn bfw"
              onClick={() => onToast("Silver plan selected — redirecting to checkout")}
            >
              Select Silver
            </button>
          </div>
        </div>

        <div className="pc-card feat">
          <div className="pc-badge">CURRENT PLAN</div>
          <div style={{ fontSize: 14, fontWeight: 700, color: "var(--tx)" }}>Gold</div>
          <div>
            <div style={{ fontSize: 28, fontWeight: 800, color: "var(--glt)" }}>$100</div>
            <div style={{ fontSize: 10, color: "var(--tx3)", marginTop: 1 }}>per year · Renews Dec 14</div>

            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: 7,
                flex: 1,
                padding: 0,
                margin: 0,
              }}
            >
              {["1 Physical + 1 Digital Card", "Unlimited Crypto Exchange", "All Loyalty Tasks", "2% MDR Cashback", "Priority Support"].map(
                (x) => (
                  <li key={x} className="chk-i">
                    <div className="chk-c">
                      <i className="ti ti-check" />
                    </div>
                    {x}
                  </li>
                )
              )}
            </ul>

            <button className="D-btn bg bfw" onClick={() => onToast("You're already on Gold — renewing Dec 14!")}
            >
              Active Plan
            </button>
          </div>
        </div>

        <div className="pc-card">
          <div style={{ fontSize: 14, fontWeight: 700, color: "var(--gold)" }}>Platinum</div>
          <div>
            <div style={{ fontSize: 28, fontWeight: 800, color: "var(--gold)" }}>$200</div>
            <div style={{ fontSize: 10, color: "var(--tx3)", marginTop: 1 }}>per year · Best value</div>

            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: 7,
                flex: 1,
                padding: 0,
                margin: 0,
              }}
            >
              {[
                "3 Cards (any type)",
                "Zero Exchange Fees",
                "Double Loyalty Points",
                "4% MDR Cashback",
                "Dedicated Account Manager",
              ].map((x) => (
                <li key={x} className="chk-i">
                  <div className="chk-c">
                    <i className="ti ti-check" />
                  </div>
                  {x}
                </li>
              ))}
            </ul>

            <button className="btn bo bfw" onClick={() => onToast("Upgrading to Platinum — checkout opened")}>
              Upgrade to Platinum
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

