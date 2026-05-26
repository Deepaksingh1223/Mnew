"use client";

import Link from "next/link";

export default function SidebarNav({ page, onGo }) {
  return (
    <nav className="sb">
      <div className="logo-row"> 
          <img 
                  className="Dashboard-img"  
                  alt="MDR Futuristics Crypto Card" 
                  loading="lazy" 
                  width="150" 
                  height="150"  
                  src="/img/dashboard-logo.png" 
                /> 
      </div>
 
      <div className="nav">
        <span className="nav-sec">Overview</span>

        <Link
          className={"ni " + (page === "home" ? "on" : "")}
          href="/dashboard"
        >
          <i className="ti ti-layout-dashboard" aria-hidden="true" />Dashboard
        </Link>
 
        <Link
          className={"ni " + (page === "cards" ? "on" : "")}
          href="/dashboard/my-card" 
        >
          <i className="ti ti-credit-card" aria-hidden="true" />My Cards
        </Link> 
        <Link
          className={"ni " + (page === "payments" ? "on" : "")}
          href="/dashboard/payment"
        >
          <i className="ti ti-send" aria-hidden="true" />Payments<span className="nb">3</span>
        </Link>

        <span className="nav-sec">Finance</span>

        <Link
          className={"ni " + (page === "exchange" ? "on" : "")}
          href="/dashboard/exchange" 
        >
          <i className="ti ti-arrows-right-left" aria-hidden="true" />Crypto Exchange
        </Link>

        <Link
          className={"ni " + (page === "tasks" ? "on" : "")}
          href="/dashboard/tasks" 
        >
          <i className="ti ti-checklist" aria-hidden="true" />Loyalty Tasks<span className="nb">8</span>
        </Link>

        <Link
          className={"ni " + (page === "rewards" ? "on" : "")}
          href="/dashboard/rewards" 
        >
          <i className="ti ti-star" aria-hidden="true" />Rewards Wallet
        </Link>

        <Link
          className={"ni " + (page === "mdr" ? "on" : "")}
          href="/dashboard/mdr-token" 
        >
          <i className="ti ti-coin" aria-hidden="true" />MDR Token
        </Link>

        <span className="nav-sec">Account</span>

        <Link
          className={"ni " + (page === "membership" ? "on" : "")}
          href="/dashboard/membership-plan" 
        >
          <i className="ti ti-award" aria-hidden="true" />Membership Plans
        </Link>

        <Link
          className={"ni " + (page === "transactions" ? "on" : "")}
          href="/dashboard/transaction"
        >
          <i className="ti ti-receipt" aria-hidden="true" />Transactions
        </Link>

        <Link
          className={"ni " + (page === "support" ? "on" : "")}
          href="/dashboard/support"
        >
          <i className="ti ti-help-circle" aria-hidden="true" />Support
        </Link>

        <Link
          className={"ni " + (page === "settings" ? "on" : "")}
          href="/dashboard/settings" 
        >
          <i className="ti ti-settings" aria-hidden="true" />Settings
        </Link>
      </div>

      <div className="sb-foot">
        <div className="usr" onClick={() => onGo("settings")}>
          <div className="av">AK</div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, color: "var(--tx)" }}>Arjun Kapoor</div>
            <div style={{ fontSize: 10, color: "var(--tx3)" }}>MUD-2847 · Gold</div>
          </div>
          <i
            className="ti ti-chevron-right"
            style={{ marginLeft: "auto", fontSize: 14, color: "var(--tx3)" }}
            aria-hidden="true"
          />
        </div>
      </div>
    </nav>
  );
}

