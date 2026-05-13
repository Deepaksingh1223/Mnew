"use client";

export default function PaymentsPage({ onGo, onToast }) {
  return (
    <div className="pad">
      <div className="bc">
        <span onClick={() => onGo("home")}>Dashboard</span>
        <span>›</span>
        <span className="cur">Payments</span>
      </div>

      <div className="h1">Payments</div>

      <div className="g2">
        <div className="card">
          <div className="ch">
            <div className="ct">Send Payment</div>
          </div>

          <label className="fl">Recipient</label>
          <input className="fi" placeholder="Name, email or Mudra ID" />

          <label className="fl">Amount</label>
          <input className="fi" defaultValue={100} type="number" />

          <label className="fl">Currency</label>
          <select className="fi" defaultValue="USD">
            <option>USD</option>
            <option>INR</option>
            <option>AED</option>
            <option>EUR</option>
            <option>USDT</option>
          </select>

          <label className="fl">Note (optional)</label>
          <input className="fi" placeholder="Payment note" />

          <button className="D-btn bg bfw" onClick={() => onToast("Payment sent successfully!")}>
            <i className="ti ti-send" /> Send Payment
          </button>
        </div>

        <div className="card">
          <div className="ch">
            <div className="ct">Pending Payments</div>
            <span className="nb">3</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              ["Netflix Subscription", "$15.99"],
              ["Transfer to Priya", "$200.00"],
              ["International Wire", "$326.72"],
            ].map(([title, amt]) => (
              <div key={title} style={{ background: "var(--sf3)", border: "1px solid var(--bd)", borderRadius: 9, padding: 12, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 500, color: "var(--tx)" }}>{title}</div>
                  <div style={{ fontSize: 11, color: "var(--tx3)", marginTop: 2 }}>Due · Digital Card</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "var(--tx)" }}>{amt}</div>
                  <div style={{ marginTop: 3 }}>
                    <span className="pill pw"><i className="ti ti-clock" /> Pending</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="btn bn bfw" style={{ marginTop: 10 }} onClick={() => onToast("All pending payments reviewed")}>Review All</button>
        </div>
      </div>
    </div>
  );
}

