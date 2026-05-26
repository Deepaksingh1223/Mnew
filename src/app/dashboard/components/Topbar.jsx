"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FiSun, FiMoon } from "react-icons/fi";
import { FiBell } from "react-icons/fi";
import { FiStar } from "react-icons/fi";

export default function Topbar({ onToggleDark, onGo, points, dark }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    const newState = !isSidebarOpen;
    setIsSidebarOpen(newState);
    
    const sidebar = document.querySelector('.sb');
    if (sidebar) {
      if (newState) {
        sidebar.style.transform = 'translateX(0%)';
      } else {
        sidebar.style.transform = 'translateX(-100%)';
      }
    }
  };

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
    

        <div
          className="tbi"
          onClick={() => onGo("notifications")}
          role="button"
          aria-label="Notifications"
          style={{ position: "relative" }}
        >
          <FiBell size={18} />
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
          <FiStar size={12} />
          {points}
        </div>
        <div className="av" style={{ cursor: "pointer" }} onClick={() => onGo("settings")}>AK</div>
           <button 
          className="tbi" 
          onClick={onToggleDark} 
          aria-label="Toggle theme"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "18px",
          }}
        >
          {dark ? <FiSun /> : <FiMoon />}
        </button>
            {/* Hamburger / Close Menu Button */}
        <button 
          className="tbi hamburger" 
          onClick={handleToggleSidebar}
          aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "20px",
          }}
        >
          {isSidebarOpen ? <FiX /> : <FiMenu />}
        </button>

     
      </div>
    </div>
  );
}