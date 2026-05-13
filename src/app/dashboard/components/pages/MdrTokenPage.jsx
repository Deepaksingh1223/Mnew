"use client";

export default function MdrTokenPage({ onGo, onToast }) {
  return (
    <div className="pad">
      <div className="bc">
        <span onClick={() => onGo("home")}>Dashboard</span>
        <span>›</span>
        <span className="cur">MDR Token</span>
      </div>

      <div className="h1">MDR Token</div>

      <div className="g2">
        <div className="card">
          <div className="ch">
            <div>
              <div className="ct">MDR / USDT</div>
              <div className="cs">24h Vol: $2.4M · MCap: $8.47M</div>
            </div>
            <span className="chip dn">-0.6% 24h</span>
          </div>

          <div style={{ fontSize: 26, fontWeight: 800, color: "var(--tx)", marginBottom: 3 }}>
            $0.0847
          </div>

          <div style={{ height: 1, marginTop: 12, borderTop: "1px dashed var(--bd)" }} />
        </div>

        <div className="card">
          <div className="ch">
            <div>
              <div className="ct">Buy MDR Tokens</div>
              <div className="cs">Choose points or USD</div>
            </div>
          </div>

          <div style={{ display: "flex", gap: 7, marginBottom: 12 }}>
            <button className="btn bo" style={{ flex: 1 }} onClick={() => onToast("Choose buy with points")}>Buy Points</button>
            <button className="btn bn" style={{ flex: 1 }} onClick={() => onToast("Choose buy with USD")}>Buy USD</button>
          </div>

          <div
            style={{
              background: "var(--gdim)",
              border: "1.5px solid var(--gbdr)",
              borderRadius: 9,
              padding: 13,
              textAlign: "center",
              marginBottom: 12,
            }}
          >
            <div style={{ fontSize: 10, color: "var(--tx3)", marginBottom: 3 }}>You will receive</div>
            <div style={{ fontSize: 22, fontWeight: 800, color: "var(--glt)" }}>11,806 MDR</div>

            <div className="fr">
              <span className="fk">Rate</span>
              <span className="fv">100 pts = 1,181 MDR</span>
            </div>
            <div className="fr" style={{ marginBottom: 12 }}>
              <span className="fk">Available Points</span>
              <span className="fv">4,820 pts</span>
            </div>

            <button className="D-btn bg bfw" onClick={() => onToast("MDR purchase confirmed — tokens added to wallet!")}>
              <i className="ti ti-coin" /> Confirm Purchase
            </button>
          </div>

          <div className="dv" />

          <div className="ch">
            <div className="ct">Trade MDR</div>
            <span className="cl" onClick={() => onToast("Trade opened")}>Trade ›</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: 7 }}>
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
              <div className="mv" style={{ color: "var(--rd)" }}>-7.1%</div>
              <div className="ml">P&amp;L</div>
            </div>
          </div>

          <div style={{ display: "flex", gap: 6, marginTop: 10 }}>
            <button className="D-btn bg" style={{ flex: 1 }} onClick={() => onToast("Buy Points opened")}>Buy Points</button>
            <button className="btn bn" style={{ flex: 1 }} onClick={() => onToast("Buy USD opened")}>Buy USD</button>
          </div>
        </div>
      </div>
    </div>
  );
}

