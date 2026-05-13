"use client";

export default function Topbar({ onToggleDark, onGo, points, dark }) {
  return (
    <div className="topbar">
      <div className="ticker">
        <div className="tk">
          <span className="tk-s">BTC</span>
          <span className="tk-p">$67,842</span>
          <span className="chip up">+2.4%</span>
        </div>
        <div className="tk">
          <span className="tk-s">ETH</span>
          <span className="tk-p">$3,491</span>
          <span className="chip up">+1.8%</span>
        </div>
        <div className="tk">
          <span className="tk-s">MDR</span>
          <span className="tk-p">$0.0847</span>
          <span className="chip dn">-0.6%</span>
        </div>
        <div className="tk">
          <span className="tk-s">USDT</span>
          <span className="tk-p">$1.00</span>
          <span className="chip up">+0.01%</span>
        </div>
      </div>

      <div className="tb-r">
        <button className="tbi" onClick={onToggleDark} aria-label="Toggle theme">
          <i className={dark ? "ti ti-sun" : "ti ti-moon"} />
        </button>

        <div
          className="tbi"
          onClick={() => onGo("notifications")}
          role="button"
          aria-label="Notifications"
          style={{ position: "relative" }}
        >
          <i className="ti ti-bell" aria-hidden="true" />
          <span
            style={{
              position: "absolute",
              top: 5,
              right: 5,
              width: 7,
              height: 7,
              background: "#DC2626",
              borderRadius: "50%",
              border: "2px solid var(--sf)",
            }}
          />
        </div>

        <div className="tb-bal">
          <i className="ti ti-star" style={{ fontSize: 12 }} aria-hidden="true" />
          {points}
        </div>
        <div className="av" style={{ cursor: "pointer" }} onClick={() => onGo("settings")}>AK</div>
      </div>
    </div>
  );
}

