"use client";

export default function RewardsPage({ onGo, onToast }) {
  return (
    <div className="pad">
      <div className="bc">
        <span onClick={() => onGo("home")}>Dashboard</span>
        <span>›</span>
        <span className="cur">Rewards Wallet</span>
      </div>
      <div className="h1">Rewards Wallet</div>

      <div className="g2">
        <div className="card">
          <div className="ch">
            <div className="ct">Points Balance</div>
          </div>
          <div className="pc">
            <svg width="130" height="130" viewBox="0 0 130 130">
              <circle cx="65" cy="65" r="54" fill="none" stroke="var(--sf3)" strokeWidth="10" />
              <circle
                cx="65"
                cy="65"
                r="54"
                fill="none"
                stroke="url(#rg1)"
                strokeWidth="10"
                strokeDasharray="238 339"
                strokeLinecap="round"
                transform="rotate(-90 65 65)"
              />
              <defs>
                <linearGradient id="rg1">
                  <stop offset="0%" stopColor="#9A7020" />
                  <stop offset="100%" stopColor="#C9A03A" />
                </linearGradient>
              </defs>
              <text x="65" y="59" textAnchor="middle" fill="var(--tx)" fontSize="21" fontWeight="700" fontFamily="Outfit,sans-serif">
                4,820
              </text>
              <text x="65" y="73" textAnchor="middle" fill="var(--tx3)" fontSize="9" fontFamily="Outfit,sans-serif" letterSpacing="1">
                POINTS
              </text>
              <text x="65" y="86" textAnchor="middle" fill="var(--glt)" fontSize="9" fontFamily="Outfit,sans-serif">
                ≈ $96.40 USDT
              </text>
            </svg>
          </div>
          <div className="g3" style={{ gap: 7, marginBottom: 12 }}>
            <div className="mst">
              <div className="mv">$96.40</div>
              <div className="ml">USDT Value</div>
            </div>
            <div className="mst">
              <div className="mv">2,400</div>
              <div className="ml">For MDR</div>
            </div>
            <div className="mst">
              <div className="mv">1,200</div>
              <div className="ml">For Plan</div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <button className="D-btn bg bfw" onClick={() => onToast("Redeem flow opened!")}
            >
              <i className="ti ti-star" />Redeem Now
            </button>
            <button className="btn bo bfw" onClick={() => onGo("mdr")}>
              <i className="ti ti-coin" />Convert to MDR Tokens
            </button>
            <button className="btn bn bfw" onClick={() => onToast("Withdrawal form opened")}>
              <i className="ti ti-download" />Withdraw as USDT
            </button>
          </div>
        </div>

        <div className="card">
          <div className="ch">
            <div className="ct">Earnings History</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {[
              ["Nov", "+1,240", "var(--tx2)"],
              ["Dec", "+1,820", "var(--tx)"],
              ["Feb", "+2,140", "var(--tx)"],
              ["Mar", "+2,450", "var(--tx)"],
              ["Apr", "+1,670", "var(--glt)"],
            ].map(([m, pts, color], idx) => {
              const w = [42, 61, 72, 82, 56][idx];
              return (
                <div key={m} style={{ display: "flex", alignItems: "center", gap: 9, padding: "7px 0", borderBottom: idx < 4 ? "1px solid var(--bd)" : undefined }}>
                  <span style={{ fontSize: 12, color: "var(--tx2)", width: 32 }}>{m}</span>
                  <div style={{ flex: 1 }}>
                    <div className="bar">
                      <div className="bf" style={{ width: w + "%" }} />
                    </div>
                  </div>
                  <span style={{ fontSize: 12, color, fontWeight: 500, minWidth: 46, textAlign: "right" }}>{pts}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

