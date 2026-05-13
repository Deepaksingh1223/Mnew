"use client";

export default function HomePage({ onGo, onToast }) {
  return (
    <div className="pg on" id="pg-home">
      <div className="pad">
        <div className="hero">
          <div>
            <div className="hero-tag">
              <i className="ti ti-sparkles" aria-hidden="true" />Premium Card Ecosystem
            </div>
            <div className="hero-h">
              Your Mudra Cards,<br />Built for Web3
            </div>
            <div className="hero-p">
              Spend crypto, earn points, convert fiat — all from a single debit card connected to your Mudra wallet.
            </div>
            <div className="hero-btns">
              <button className="D-btn bg" onClick={() => onGo("cards")}>
                <i className="ti ti-credit-card" />Order Physical Card
              </button>
              <button className="btn bo" onClick={() => onGo("cards")}>
                Get Digital Card
              </button>
              <button className="btn bn" onClick={() => onGo("membership")}>
                Upgrade Plan
              </button>
            </div>
          </div>

          <div className="cards-row">
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
              <div className="dc dc-ph">
                <div className="dc-sh" />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div className="dc-brand" style={{ color: "#E8C84A" }}>
                    MUDRA
                  </div>
                  <div className="dc-chip" />
                </div>
                <div className="dc-num">4847  ••••  ••••  3921</div>
                <div className="dc-bot">
                  <div>
                    <div className="dc-holder">Arjun Kapoor</div>
                    <div style={{ fontSize: 6, color: "rgba(255,255,255,.28)", marginTop: 1 }}>VALID 09/28</div>
                  </div>
                  <div className="dc-net">VISA</div>
                </div>
              </div>
              <div className="dc-lbl">
                <div className="dc-lt">Physical</div>
                <div className="dc-lp">$100/yr</div>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
              <div className="dc dc-di">
                <div className="dc-sh" />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div className="dc-brand" style={{ color: "#7EB8F7" }}>
                    MUDRA
                  </div>
                  <div
                    style={{
                      width: 19,
                      height: 13,
                      borderRadius: 2,
                      background: "linear-gradient(135deg,#7EB8F7,#4A8EDD)",
                    }}
                  />
                </div>
                <div className="dc-num" style={{ color: "rgba(126,184,247,.45)" }}>
                  5291  ••••  ••••  7043
                </div>
                <div className="dc-bot">
                  <div>
                    <div className="dc-holder" style={{ color: "rgba(126,184,247,.4)" }}>
                      Arjun Kapoor
                    </div>
                    <div style={{ fontSize: 6, color: "rgba(126,184,247,.25)", marginTop: 1 }}>
                      VALID 03/27
                    </div>
                  </div>
                  <div className="dc-net" style={{ color: "rgba(126,184,247,.35)" }}>
                    MC
                  </div>
                </div>
              </div>
              <div className="dc-lbl">
                <div className="dc-lt">Digital</div>
                <div className="dc-lp">$50/yr</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mbanner">
          <div className="mbi">
            <i className="ti ti-award" aria-hidden="true" />
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: "var(--glt)" }}>Gold Membership — Active</div>
            <div style={{ fontSize: 11, color: "var(--tx3)", marginTop: 2 }}>
              Renews Dec 14, 2025 · 2 active cards · Unlimited conversions
            </div>
          </div>
          <button className="btn bo bsm" style={{ marginLeft: "auto" }} onClick={() => onGo("membership")}>
            Manage Plan
          </button>
          <div className="mact">Active</div>
        </div>

        <div className="g6">
          <div className="st">
            <div className="st-hd">
              <div className="st-lbl">Wallet</div>
              <div className="st-ico" style={{ background: "var(--gdim)" }}>
                <i className="ti ti-wallet" style={{ color: "var(--glt)" }} aria-hidden="true" />
              </div>
            </div>
            <div className="st-val">$12,481</div>
            <div className="up-chg">+$340 this month</div>
            <svg className="spark" viewBox="0 0 60 24">
              <polyline points="0,18 10,12 20,15 30,8 40,12 50,5 60,8" fill="none" stroke="var(--gold)" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="st">
            <div className="st-hd">
              <div className="st-lbl">Points</div>
              <div className="st-ico" style={{ background: "var(--pubg)" }}>
                <i className="ti ti-star" style={{ color: "var(--pu)" }} aria-hidden="true" />
              </div>
            </div>
            <div className="st-val">4,820</div>
            <div className="up-chg">+180 this week</div>
            <svg className="spark" viewBox="0 0 60 24">
              <polyline points="0,20 10,15 20,17 30,10 40,13 50,7 60,4" fill="none" stroke="var(--pu)" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="st">
            <div className="st-hd">
              <div className="st-lbl">MDR</div>
              <div className="st-ico" style={{ background: "var(--blbg)" }}>
                <i className="ti ti-coin" style={{ color: "var(--bl)" }} aria-hidden="true" />
              </div>
            </div>
            <div className="st-val">8,250</div>
            <div className="dn-chg">-0.6% today</div>
            <svg className="spark" viewBox="0 0 60 24">
              <polyline points="0,8 10,11 20,9 30,14 40,11 50,17 60,15" fill="none" stroke="var(--bl)" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="st">
            <div className="st-hd">
              <div className="st-lbl">Earnings</div>
              <div className="st-ico" style={{ background: "var(--grbg)" }}>
                <i className="ti ti-trending-up" style={{ color: "var(--gr)" }} aria-hidden="true" />
              </div>
            </div>
            <div className="st-val">$340</div>
            <div className="up-chg">+12% vs last mo</div>
            <svg className="spark" viewBox="0 0 60 24">
              <polyline points="0,20 10,17 20,19 30,12 40,14 50,7 60,5" fill="none" stroke="var(--gold)" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="st">
            <div className="st-hd">
              <div className="st-lbl">Pending</div>
              <div className="st-ico" style={{ background: "var(--ambg)" }}>
                <i className="ti ti-clock" style={{ color: "var(--am)" }} aria-hidden="true" />
              </div>
            </div>
            <div className="st-val">$182</div>
            <div style={{ fontSize: 11, color: "var(--tx3)" }}>2 withdrawals</div>
            <svg className="spark" viewBox="0 0 60 24">
              <polyline points="0,13 10,15 20,11 30,16 40,13 50,15 60,13" fill="none" stroke="var(--am)" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="st">
            <div className="st-hd">
              <div className="st-lbl">USDT</div>
              <div className="st-ico" style={{ background: "var(--grbg)" }}>
                <i className="ti ti-currency-dollar" style={{ color: "var(--gr)" }} aria-hidden="true" />
              </div>
            </div>
            <div className="st-val">$96.40</div>
            <div className="up-chg">Ready to withdraw</div>
            <svg className="spark" viewBox="0 0 60 24">
              <polyline points="0,17 10,14 20,16 30,10 40,12 50,6 60,8" fill="none" stroke="var(--gr)" strokeWidth="1.5" />
            </svg>
          </div>
        </div>

        <div className="g2">
          <div className="card">
            <div className="ch">
              <div>
                <div className="ct">Crypto → Fiat Exchange</div>
                <div className="cs">Live rates · Instant settlement</div>
              </div>
              <span className="cl" onClick={() => onGo("exchange")}>
                Full Exchange ›
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              <div className="ex-box">
                <div className="ex-lbl">You send</div>
                <div className="ex-row">
                  <input className="ex-amt" value="0.42" readOnly />
                  <div className="ccy">
                    <div className="ccy-dot" style={{ background: "#F7931A", color: "#fff" }}>B</div>BTC
                    <i className="ti ti-chevron-down" style={{ fontSize: 11, color: "var(--tx3)" }} aria-hidden="true" />
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div className="swap-btn" onClick={() => onToast("Currency pair swapped")}>
                  <i className="ti ti-arrows-up-down" aria-hidden="true" />
                </div>
              </div>
              <div className="ex-box">
                <div className="ex-lbl">You receive</div>
                <div className="ex-row">
                  <input className="ex-amt" readOnly style={{ color: "var(--glt)" }} />
                  <div className="ccy">
                    <div className="ccy-dot" style={{ background: "#16A34A", color: "#fff" }}>$</div>USD
                    <i className="ti ti-chevron-down" style={{ fontSize: 11, color: "var(--tx3)" }} aria-hidden="true" />
                  </div>
                </div>
              </div>
              <div className="rate-bar">
                <span>1 BTC = $67,842.00 USD</span>
                <span>
                  <span className="live" />Live
                </span>
              </div>
              <div style={{ margin: "2px 0" }}>
                <div className="fr">
                  <span className="fk">Network Fee</span>
                  <span className="fv">$2.40</span>
                </div>
                <div className="fr">
                  <span className="fk">Platform Fee (0.3%)</span>
                  <span className="fv">$85.48</span>
                </div>
                <div className="fr">
                  <span className="fk">Est. Arrival</span>
                  <span className="fv" style={{ color: "var(--gr)" }}>~2 min</span>
                </div>
              </div>
              <button className="D-btn bg bfw" onClick={() => onToast("Exchange placed — funds arrive in ~2 min")}>
                <i className="ti ti-arrows-right-left" />Confirm Exchange
              </button>
            </div>
          </div>

          <div className="card">
            <div className="ch">
              <div>
                <div className="ct">Loyalty Tasks</div>
                <div className="cs">Complete tasks · Earn points</div>
              </div>
              <span className="cl" onClick={() => onGo("tasks")}>
                View All ›
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              <div className="tr dn2">
                <div className="tico" style={{ background: "#FF0000" }}>
                  <i className="ti ti-player-play" aria-hidden="true" />
                </div>
                <div className="tb">
                  <div className="tt">Watch: Mudra Platform Overview</div>
                  <div className="td">YouTube · 4 min · Completed</div>
                  <div className="tpg">
                    <div className="bar" style={{ flex: 1 }}>
                      <div className="bf" style={{ width: "100%" }} />
                    </div>
                    <span className="tpct">100%</span>
                  </div>
                </div>
                <div className="tr-r">
                  <div className="pts">+12 pts</div>
                  <span className="pill pd">
                    <i className="ti ti-check" />Done
                  </span>
                </div>
              </div>

              <div className="tr act" style={{ cursor: "pointer" }} onClick={() => onGo("yt")}>
                <div className="tico" style={{ background: "#FF0000" }}>
                  <i className="ti ti-player-play" aria-hidden="true" />
                </div>
                <div className="tb">
                  <div className="tt">Watch: Crypto to Fiat Tutorial</div>
                  <div className="td">YouTube · 6 min · 60% done</div>
                  <div className="tpg">
                    <div className="bar" style={{ flex: 1 }}>
                      <div className="bf" style={{ width: "60%" }} />
                    </div>
                    <span className="tpct">60%</span>
                  </div>
                </div>
                <div className="tr-r">
                  <div className="pts">+15 pts</div>
                  <span className="pill pp">
                    <i className="ti ti-clock" />Progress
                  </span>
                  <button
                    className="btn bo bxs"
                    onClick={(e) => (e.stopPropagation(), onGo("yt"))}
                    style={{ marginTop: 3 }}
                  >
                    Continue
                  </button>
                </div>
              </div>

              <div className="tr act" style={{ cursor: "pointer" }} onClick={() => onGo("fb")}>
                <div
                  className="tico"
                  style={{ background: "#1877F2", fontSize: 13, fontWeight: 700, color: "#fff", fontFamily: "'Outfit',sans-serif" }}
                >
                  f
                </div>
                <div className="tb">
                  <div className="tt">Comment on Community Post</div>
                  <div className="td">Facebook · Step 2 of 4</div>
                  <div className="tpg">
                    <div className="bar" style={{ flex: 1 }}>
                      <div className="bf" style={{ width: "50%" }} />
                    </div>
                    <span className="tpct">50%</span>
                  </div>
                </div>
                <div className="tr-r">
                  <div className="pts">+8 pts</div>
                  <span className="pill pp">
                    <i className="ti ti-clock" />Progress
                  </span>
                  <button
                    className="btn bo bxs"
                    onClick={(e) => (e.stopPropagation(), onGo("fb"))}
                    style={{ marginTop: 3 }}
                  >
                    Continue
                  </button>
                </div>
              </div>

              <button className="btn bn bfw" onClick={() => onGo("tasks")} style={{ marginTop: 2 }}>
                <i className="ti ti-checklist" />View All Tasks
              </button>
            </div>
          </div>
        </div>

        <div className="g3">
          <div className="card">
            <div className="ch">
              <div className="ct">Rewards Wallet</div>
              <span className="cl" onClick={() => onGo("rewards")}>
                Details ›
              </span>
            </div>
            <div className="pc">
              <svg width="110" height="110" viewBox="0 0 110 110">
                <circle cx="55" cy="55" r="46" fill="none" stroke="var(--sf3)" strokeWidth="9" />
                <circle
                  cx="55"
                  cy="55"
                  r="46"
                  fill="none"
                  stroke="url(#rg0)"
                  strokeWidth="9"
                  strokeDasharray="202 289"
                  strokeLinecap="round"
                  transform="rotate(-90 55 55)"
                />
                <defs>
                  <linearGradient id="rg0">
                    <stop offset="0%" stopColor="#9A7020" />
                    <stop offset="100%" stopColor="#C9A03A" />
                  </linearGradient>
                </defs>
                <text x="55" y="51" textAnchor="middle" fill="var(--tx)" fontSize="17" fontWeight="700" fontFamily="Outfit,sans-serif">
                  4,820
                </text>
                <text x="55" y="64" textAnchor="middle" fill="var(--tx3)" fontSize="8.5" fontFamily="Outfit,sans-serif" letterSpacing="1">
                  POINTS
                </text>
              </svg>
            </div>
            <div className="g2" style={{ gap: 6, marginBottom: 10 }}>
              <div className="mst">
                <div className="mv">$96.40</div>
                <div className="ml">USDT Value</div>
              </div>
              <div className="mst">
                <div className="mv">2,400</div>
                <div className="ml">For MDR</div>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <button className="D-btn bg bfw" onClick={() => onToast("Redeem flow opened — choose your reward!")}>
                <i className="ti ti-star" />Redeem Now
              </button>
              <button className="btn bo bfw" onClick={() => onGo("mdr")}>
                Buy MDR Tokens
              </button>
              <button className="btn bn bfw" onClick={() => onToast("Withdrawal form opened")}>
                Withdraw as USDT
              </button>
            </div>
          </div>

          <div className="card">
            <div className="ch">
              <div className="ct">Withdraw Rewards</div>
            </div>
            <label className="fl">Amount (USDT)</label>
            <input className="fi" value="50.00" type="text" readOnly />
            <label className="fl">Network</label>
            <div className="np" style={{ marginBottom: 10 }}>
              <div className="netp on" onClick={() => onToast("TRC20 selected")}>
                TRC20
              </div>
              <div className="netp" onClick={() => onToast("BEP20 selected")}>
                BEP20
              </div>
              <div className="netp" onClick={() => onToast("ERC20 selected")}>
                ERC20
              </div>
            </div>
            <label className="fl">Wallet Address</label>
            <input
              className="fi"
              value="TXjk3...9mQp"
              readOnly
              style={{ fontFamily: "monospace", fontSize: 12 }}
            />
            <div className="dv" />
            <div className="fr">
              <span className="fk">Processing Fee</span>
              <span className="fv">1 USDT</span>
            </div>
            <div className="fr">
              <span className="fk">You Receive</span>
              <span className="fv" style={{ color: "var(--gr)" }}>
                49 USDT
              </span>
            </div>
            <div className="fr" style={{ marginBottom: 12 }}>
              <span className="fk">Est. Arrival</span>
              <span className="fv">~5 min</span>
            </div>
            <button className="D-btn bg bfw" onClick={() => onToast("Withdrawal submitted — processing in ~5 min")}>
              <i className="ti ti-download" />Submit Withdrawal
            </button>
          </div>

          <div className="card">
            <div className="ch">
              <div className="ct">MDR Token</div>
              <span className="cl" onClick={() => onGo("mdr")}>
                Trade ›
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 3 }}>
              <div style={{ fontSize: 24, fontWeight: 800, color: "var(--tx)" }}>$0.0847</div>
              <span className="chip dn">-0.6%</span>
            </div>
            <div style={{ fontSize: 11, color: "var(--tx3)", marginBottom: 9 }}>MDR/USDT · 24h Vol: $2.4M</div>
            <svg viewBox="0 0 170 44" style={{ width: "100%", height: 44, marginBottom: 9 }}>
              <defs>
                <linearGradient id="mg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#B8942A" stopOpacity=".17" />
                  <stop offset="100%" stopColor="#B8942A" stopOpacity="0" />
                </linearGradient>
              </defs>
              <polyline points="0,37 28,29 56,33 85,21 113,25 141,13 170,17" fill="none" stroke="var(--gold)" strokeWidth="1.7" />
              <polygon points="0,37 28,29 56,33 85,21 113,25 141,13 170,17 170,44 0,44" fill="url(#mg)" />
            </svg>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginBottom: 10 }}>
              <div className="mst">
                <div className="mv">8,250</div>
                <div className="ml">Holdings</div>
              </div>
              <div className="mst">
                <div className="mv">$698</div>
                <div className="ml">USD Value</div>
              </div>
              <div className="mst">
                <div className="mv">$0.091</div>
                <div className="ml">Avg. Buy</div>
              </div>
              <div className="mst">
                <div className="mv" style={{ color: "var(--rd)" }}>
                  -7.1%
                </div>
                <div className="ml">P&amp;L</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 6 }}>
              <button className="D-btn bg" style={{ flex: 1 }} onClick={() => onGo("mdr")}>
                Buy Points
              </button>
              <button className="btn bn" style={{ flex: 1 }} onClick={() => onGo("mdr")}>
                Buy USD
              </button>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="ch">
            <div className="ct">Recent Transactions</div>
            <span className="cl" onClick={() => onGo("transactions")}>
              View All ›
            </span>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table className="tbl">
              <thead>
                <tr>
                  <th style={{ width: 75 }}>Date</th>
                  <th style={{ width: 130 }}>Type</th>
                  <th style={{ width: 90 }}>Amount</th>
                  <th style={{ width: 65 }}>Currency</th>
                  <th>Status</th>
                  <th style={{ width: 85 }}>Txn ID</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Apr 28</td>
                  <td>
                    <span className="td-dot" style={{ background: "var(--gr)" }} />BTC → USD
                  </td>
                  <td className="bo2">$28,493</td>
                  <td>USD</td>
                  <td>
                    <span className="pill pd">
                      <i className="ti ti-check" />Success
                    </span>
                  </td>
                  <td style={{ fontFamily: "monospace", fontSize: 10, color: "var(--tx3)" }}>MUD-8842A</td>
                </tr>
                <tr>
                  <td>Apr 27</td>
                  <td>
                    <span className="td-dot" style={{ background: "var(--pu)" }} />Reward Redeem
                  </td>
                  <td className="bo2">500 pts</td>
                  <td>POINTS</td>
                  <td>
                    <span className="pill pd">
                      <i className="ti ti-check" />Success
                    </span>
                  </td>
                  <td style={{ fontFamily: "monospace", fontSize: 10, color: "var(--tx3)" }}>MUD-7731B</td>
                </tr>
                <tr>
                  <td>Apr 26</td>
                  <td>
                    <span className="td-dot" style={{ background: "var(--am)" }} />USDT Withdraw
                  </td>
                  <td className="bo2">$49.00</td>
                  <td>USDT</td>
                  <td>
                    <span className="pill pw">
                      <i className="ti ti-clock" />Pending
                    </span>
                  </td>
                  <td style={{ fontFamily: "monospace", fontSize: 10, color: "var(--tx3)" }}>MUD-6620C</td>
                </tr>
                <tr>
                  <td>Apr 25</td>
                  <td>
                    <span className="td-dot" style={{ background: "var(--bl)" }} />MDR Purchase
                  </td>
                  <td className="bo2">1,000 MDR</td>
                  <td>MDR</td>
                  <td>
                    <span className="pill pd">
                      <i className="ti ti-check" />Success
                    </span>
                  </td>
                  <td style={{ fontFamily: "monospace", fontSize: 10, color: "var(--tx3)" }}>MUD-5512D</td>
                </tr>
                <tr>
                  <td>Apr 24</td>
                  <td>
                    <span className="td-dot" style={{ background: "var(--rd)" }} />Card Charge
                  </td>
                  <td className="bo2">$142.50</td>
                  <td>USD</td>
                  <td>
                    <span className="pill pf">
                      <i className="ti ti-x" />Failed
                    </span>
                  </td>
                  <td style={{ fontFamily: "monospace", fontSize: 10, color: "var(--tx3)" }}>MUD-4403E</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

