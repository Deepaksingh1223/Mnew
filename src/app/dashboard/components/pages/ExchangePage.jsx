"use client";

import { useMemo, useState } from "react";

export default function ExchangePage({ onGo, onToast }) {
  const [sendAmount, setSendAmount] = useState(0.42);

  const rate = 67842;
  const platformFeePct = 0.003;

  const receive = useMemo(() => {
    const v = Number(sendAmount) || 0;
    return v * rate;
  }, [sendAmount]);

  const networkFee = useMemo(() => 2.40, []);
  const platformFee = useMemo(() => {
    const v = Number(sendAmount) || 0;
    return v * rate * platformFeePct;
  }, [sendAmount]);

  return (
    <div className="pad">
      <div className="bc">
        <span onClick={() => onGo("home")}>Dashboard</span>
        <span>›</span>
        <span className="cur">Crypto Exchange</span>
      </div>
      <div className="h1">Crypto Exchange</div>

      <div className="g2">
        <div className="card">
          <div className="ch">
            <div>
              <div className="ct">New Exchange</div>
              <div className="cs">0.3% platform fee · Live rates</div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
            <div className="ex-box">
              <div className="ex-lbl">You send</div>
              <div className="ex-row">
                <input
                  className="ex-amt"
                  value={sendAmount}
                  onChange={(e) => setSendAmount(e.target.value)}
                />
                <div className="ccy">
                  <div className="ccy-dot" style={{ background: "#F7931A", color: "#fff" }}>B</div>BTC
                  <i className="ti ti-chevron-down" style={{ fontSize: 11, color: "var(--tx3)" }} aria-hidden="true" />
                </div>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="swap-btn" onClick={() => onToast("Pair swapped")}>
                <i className="ti ti-arrows-up-down" aria-hidden="true" />
              </div>
            </div>

            <div className="ex-box">
              <div className="ex-lbl">You receive</div>
              <div className="ex-row">
                <input className="ex-amt" value={receive.toFixed(2)} readOnly style={{ color: "var(--glt)" }} />
                <div className="ccy">
                  <div className="ccy-dot" style={{ background: "#16A34A", color: "#fff" }}>$</div>USD
                  <i className="ti ti-chevron-down" style={{ fontSize: 11, color: "var(--tx3)" }} aria-hidden="true" />
                </div>
              </div>
            </div>

            <div className="rate-bar">
              <span>1 BTC = ${rate.toLocaleString(undefined, { maximumFractionDigits: 2 })} USD</span>
              <span><span className="live" />Live</span>
            </div>

            <div style={{ margin: "2px 0" }}>
              <div className="fr">
                <span className="fk">Network Fee</span>
                <span className="fv">${networkFee.toFixed(2)}</span>
              </div>
              <div className="fr">
                <span className="fk">Platform Fee (0.3%)</span>
                <span className="fv">${platformFee.toFixed(2)}</span>
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
          <div className="ch"><div className="ct">Supported Pairs</div></div>
          <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
            {[
              ["BTC → USD", "$67,842"],
              ["ETH → INR", "₹91,600"],
              ["USDT → AED", "3.67 AED"],
              ["MDR → EUR", "€0.0782"],
              ["BTC → AED", "249,220 AED"],
            ].map(([t, p]) => (
              <div key={t} style={{ background: "var(--sf3)", border: "1px solid var(--bd)", borderRadius: 8, padding: "10px 13px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }} onClick={() => onToast(t + " selected")}>
                <span style={{ fontWeight: 500, color: "var(--tx)" }}>{t}</span>
                <span style={{ color: "var(--gr)", fontWeight: 600 }}>{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

