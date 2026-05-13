"use client";

export default function NotificationsPage({ onGo, onToast }) {
  return (
    <div className="pad">
      <div className="ph">
        <div>
          <div className="bc">
            <span onClick={() => onGo("home")}>Dashboard</span>
            <span>›</span>
            <span className="cur">Notifications</span>
          </div>
          <div className="h1">Notifications</div>
        </div>
        <button className="btn bn bsm" onClick={() => onToast("All notifications marked as read")}>Mark all read</button>
      </div>

      <div className="card" style={{ padding: 0 }}>
        {[ 
          ["Exchange completed — BTC → USD", "$28,493.64 credited to your wallet"],
          ["180 loyalty points earned this week", "Complete 3 more tasks to reach 5,000 pts milestone"],
          ["Physical card payment declined", "$142.50 at Merchant 4403 — insufficient funds"],
        ].map(([t, d]) => (
          <div key={t} className="ni2">
            <div className="nav2">
              <i className="ti ti-circle-check" aria-hidden="true" />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12, fontWeight: 500, color: "var(--tx)" }}>{t}</div>
              <div style={{ fontSize: 11, color: "var(--tx3)", marginTop: 2 }}>{d}</div>
              <div style={{ fontSize: 10, color: "var(--tx3)", marginTop: 3 }}>2 hours ago</div>
            </div>
            <div className="ndot" />
          </div>
        ))}
      </div>
    </div>
  );
}

