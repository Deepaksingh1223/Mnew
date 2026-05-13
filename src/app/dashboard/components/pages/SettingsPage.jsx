"use client";

export default function SettingsPage({ onGo, onToast }) {
  return (
    <div className="pad">
      <div className="bc">
        <span onClick={() => onGo("home")}>Dashboard</span>
        <span>›</span>
        <span className="cur">Settings</span>
      </div>

      <div className="h1">Settings</div>

      <div className="g2" style={{ gridTemplateColumns: "1fr" }}>
        <div className="card" style={{ padding: 0, overflow: "hidden" }}>
          <div style={{ padding: "11px 15px", borderBottom: "1px solid var(--bd)", fontSize: 10, fontWeight: 700, color: "var(--tx3)", textTransform: "uppercase", letterSpacing: 1 }}>
            Profile
          </div>

          <div className="sr">
            <div className="sr-l">
              <div className="sr-ic" style={{ background: "var(--blbg)", color: "var(--bl)" }}>
                <i className="ti ti-user" />
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 500, color: "var(--tx)" }}>Profile Name</div>
                <div style={{ fontSize: 11, color: "var(--tx3)", marginTop: 1 }}>Arjun Kapoor · MUD-2847</div>
              </div>
            </div>
            <button className="btn bn bxs" onClick={() => onToast("Profile editor opened")}>Edit</button>
          </div>

          <div className="sr">
            <div className="sr-l">
              <div className="sr-ic" style={{ background: "var(--pubg)", color: "var(--pu)" }}>
                <i className="ti ti-mail" />
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 500, color: "var(--tx)" }}>Email Address</div>
                <div style={{ fontSize: 11, color: "var(--tx3)", marginTop: 1 }}>arjun.kapoor@email.com · Verified</div>
              </div>
            </div>
            <button className="btn bn bxs" onClick={() => onToast("Email change flow opened")}>Change</button>
          </div>
        </div>

        <div style={{ display: "flex", gap: 8 }}>
          <button className="btn br" onClick={() => onToast("Signed out — see you soon!")}>Sign Out</button>
          <button className="btn bn" onClick={() => onToast("Account deletion requires email confirmation")}>Delete Account</button>
        </div>
      </div>
    </div>
  );
}

