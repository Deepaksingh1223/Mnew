"use client";

export default function TasksPage({ onGo, onToast }) {
  return (
    <div className="pad">
         
 
<div className="bc">
        <span onClick={() => onGo("home")}>Dashboard</span>
        <span>›</span>
     <span className="cur">Loyalty Tasks</span> 
          <div className="sub">Complete tasks across platforms to earn MDR points</div>
      </div>

      <div className="g3">
        <div className="st">
          <div className="st-hd">
            <div className="st-lbl">Completed</div>
            <div className="st-ico" style={{ background: "var(--grbg)" }}>
              <i className="ti ti-circle-check" style={{ color: "var(--gr)" }} aria-hidden="true" />
            </div>
          </div>
          <div className="st-val" style={{ color: "var(--gr)" }}>14</div>
          <div style={{ fontSize: 11, color: "var(--tx3)" }}>of 22 tasks</div>
        </div>
        <div className="st">
          <div className="st-hd">
            <div className="st-lbl">In Progress</div>
            <div className="st-ico" style={{ background: "var(--pubg)" }}>
              <i className="ti ti-loader" style={{ color: "var(--pu)" }} aria-hidden="true" />
            </div>
          </div>
          <div className="st-val" style={{ color: "var(--pu)" }}>3</div>
          <div style={{ fontSize: 11, color: "var(--tx3)" }}>ongoing tasks</div>
        </div>
        <div className="st">
          <div className="st-hd">
            <div className="st-lbl">Points Earned</div>
            <div className="st-ico" style={{ background: "var(--gdim)" }}>
              <i className="ti ti-star" style={{ color: "var(--glt)" }} aria-hidden="true" />
            </div>
          </div>
          <div className="st-val" style={{ color: "var(--glt)" }}>4,820</div>
          <div style={{ fontSize: 11, color: "var(--tx3)" }}>this month</div>
        </div>
      </div>

      <div className="card">
        <div className="ch">
          <div className="ct">Select Platform</div>
        </div>
        <div className="g5">
          <div className="plat hot" onClick={() => onGo("yt")}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
              <div style={{ width: 32, height: 32, borderRadius: 7, background: "#FF0000", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                  <path d="M23 7s-.3-2-1.2-2.8c-1.1-1.2-2.4-1.2-3-1.3C16.2 2.8 12 2.8 12 2.8s-4.2 0-6.8.1c-.6.1-1.9.1-3 1.3C1.3 5 1 7 1 7S.7 9.1.7 11.2v2c0 2 .3 4.2.3 4.2s.3 2 1.2 2.8c1.1 1.2 2.6 1.1 3.3 1.2C7.3 21.5 12 21.5 12 21.5s4.2 0 6.8-.2c.6-.1 1.9-.1 3-1.2.9-.8 1.2-2.8 1.2-2.8s.3-2.1.3-4.2v-2C23.3 9.1 23 7 23 7zM9.7 15.5V8.4l6.5 3.6-6.5 3.5z" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 600, color: "var(--tx)" }}>YouTube</div>
                <div style={{ fontSize: 10, color: "var(--tx3)" }}>6 tasks</div>
              </div>
            </div>
            <div className="bar">
              <div className="bf" style={{ width: "67%" }} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: "var(--tx3)", fontWeight: 600, marginTop: 4 }}>
              <span>4/6 done</span>
              <span style={{ color: "var(--glt)" }}>+79 pts</span>
            </div>
          </div>

          <div className="plat" onClick={() => onGo("fb")}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
              <div style={{ width: 32, height: 32, borderRadius: 7, background: "#1877F2", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, fontWeight: 700, color: "#fff" }}>f</div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 600, color: "var(--tx)" }}>Facebook</div>
                <div style={{ fontSize: 10, color: "var(--tx3)" }}>6 tasks</div>
              </div>
            </div>
            <div className="bar">
              <div className="bf" style={{ width: "33%" }} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: "var(--tx3)", fontWeight: 600, marginTop: 4 }}>
              <span>2/6 done</span>
              <span style={{ color: "var(--glt)" }}>+10 pts</span>
            </div>
          </div>

          <div className="plat" onClick={() => onGo("ig")}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
              <div style={{ width: 32, height: 32, borderRadius: 7, background: "linear-gradient(135deg,#f58529,#dd2a7b)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="2.2" />
                  <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2" />
                  <circle cx="17.5" cy="6.5" r="1.4" fill="white" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 600, color: "var(--tx)" }}>Instagram</div>
                <div style={{ fontSize: 10, color: "var(--tx3)" }}>5 tasks</div>
              </div>
            </div>
            <div className="bar">
              <div className="bf" style={{ width: "40%" }} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: "var(--tx3)", fontWeight: 600, marginTop: 4 }}>
              <span>2/5 done</span>
              <span style={{ color: "var(--glt)" }}>+15 pts</span>
            </div>
          </div>

          <div className="plat" onClick={() => onGo("tw")}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
              <div style={{ width: 32, height: 32, borderRadius: 7, background: "#1DA1F2", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "#fff" }}>𝑂</div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 600, color: "var(--tx)" }}>X / Twitter</div>
                <div style={{ fontSize: 10, color: "var(--tx3)" }}>5 tasks</div>
              </div>
            </div>
            <div className="bar">
              <div className="bf" style={{ width: "40%" }} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: "var(--tx3)", fontWeight: 600, marginTop: 4 }}>
              <span>2/5 done</span>
              <span style={{ color: "var(--glt)" }}>+18 pts</span>
            </div>
          </div>

          <div className="plat" onClick={() => onGo("li")}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
              <div style={{ width: 32, height: 32, borderRadius: 7, background: "#0077B5", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, color: "#fff" }}>in</div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 600, color: "var(--tx)" }}>LinkedIn</div>
                <div style={{ fontSize: 10, color: "var(--tx3)" }}>4 tasks</div>
              </div>
            </div>
            <div className="bar">
              <div className="bf" style={{ width: "25%" }} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: "var(--tx3)", fontWeight: 600, marginTop: 4 }}>
              <span>1/4 done</span>
              <span style={{ color: "var(--glt)" }}>+10 pts</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

