"use client";

import { useEffect, useRef, useState } from "react";

export default function SectionRoadmap() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div id="roadmap" ref={ref} className="mxd-section" style={{ padding: "40px 0", overflow: "hidden" }}>
      <div className="mxd-container" style={{ padding: "0px" }}>
        <div
          style={{ 
            borderRadius: 20,
            overflow: "auto",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(50px)",
            transition: "all 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <div style={{ minWidth: "900px", width: "100%" }}>
            <svg
              width="100%"
              viewBox="0 0 900 480"
              xmlns="http://www.w3.org/2000/svg"
              style={{ display: "block" }}
            >
              <defs>
                {/* Pin drop shadows */}
                <filter id="pshadow" x="-30%" y="-30%" width="160%" height="180%">
                  <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#00000035" />
                </filter>

                {/* Step 01 — Teal */}
                <radialGradient id="g01" cx="35%" cy="30%" r="70%">
                  <stop offset="0%" stopColor="#4EECD8" />
                  <stop offset="100%" stopColor="#00B4A0" />
                </radialGradient>
                <radialGradient id="gi01" cx="40%" cy="35%" r="65%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#C8F8F2" stopOpacity="0.8" />
                </radialGradient>

                {/* Step 02 — Cyan */}
                <radialGradient id="g02" cx="35%" cy="30%" r="70%">
                  <stop offset="0%" stopColor="#38E8F5" />
                  <stop offset="100%" stopColor="#00A8C8" />
                </radialGradient>
                <radialGradient id="gi02" cx="40%" cy="35%" r="65%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#C0F2FA" stopOpacity="0.8" />
                </radialGradient>

                {/* Step 03 — Blue */}
                <radialGradient id="g03" cx="35%" cy="30%" r="70%">
                  <stop offset="0%" stopColor="#5B8EFF" />
                  <stop offset="100%" stopColor="#1A3FCC" />
                </radialGradient>
                <radialGradient id="gi03" cx="40%" cy="35%" r="65%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#C8D8FF" stopOpacity="0.8" />
                </radialGradient>

                {/* Step 04 — Purple */}
                <radialGradient id="g04" cx="35%" cy="30%" r="70%">
                  <stop offset="0%" stopColor="#DD55FF" />
                  <stop offset="100%" stopColor="#8800CC" />
                </radialGradient>
                <radialGradient id="gi04" cx="40%" cy="35%" r="65%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#EEC8FF" stopOpacity="0.8" />
                </radialGradient>

                {/* Step 05 — Orange */}
                <radialGradient id="g05" cx="35%" cy="30%" r="70%">
                  <stop offset="0%" stopColor="#FFD040" />
                  <stop offset="100%" stopColor="#FF8800" />
                </radialGradient>
                <radialGradient id="gi05" cx="40%" cy="35%" r="65%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#FFE8B0" stopOpacity="0.8" />
                </radialGradient>
              </defs>

              {/* Background */}
              <rect width="900" height="480" fill="#EBEBEB" />

              {/* ── ROAD ── */}
              {/* Shadow layer */}
              <path
                d="M 0 270 Q 80 270 120 240 Q 200 180 260 210 Q 340 250 400 230 Q 470 205 530 225 Q 610 255 660 230 Q 730 195 800 220 Q 860 240 900 240"
                fill="none" stroke="#1A1A1A" strokeWidth="70" strokeLinecap="butt"
                style={{ filter: "drop-shadow(0 6px 10px rgba(0,0,0,0.3))" }}
              />
              {/* Road surface */}
              <path
                d="M 0 270 Q 80 270 120 240 Q 200 180 260 210 Q 340 250 400 230 Q 470 205 530 225 Q 610 255 660 230 Q 730 195 800 220 Q 860 240 900 240"
                fill="none" stroke="#2E2E2E" strokeWidth="62" strokeLinecap="butt"
              />
              {/* Edge highlight */}
              <path
                d="M 0 270 Q 80 270 120 240 Q 200 180 260 210 Q 340 250 400 230 Q 470 205 530 225 Q 610 255 660 230 Q 730 195 800 220 Q 860 240 900 240"
                fill="none" stroke="#444" strokeWidth="64" strokeLinecap="butt" opacity="0.25"
              />
              {/* Center dashes */}
              <path
                d="M 0 270 Q 80 270 120 240 Q 200 180 260 210 Q 340 250 400 230 Q 470 205 530 225 Q 610 255 660 230 Q 730 195 800 220 Q 860 240 900 240"
                fill="none" stroke="#999" strokeWidth="2.5" strokeDasharray="18 14"
                strokeLinecap="round" opacity="0.6"
              />

              {/* ══════════════════════════════════════ */}
              {/* STEP 01 — TEAL — TOP — x=110 */}
              {/* ══════════════════════════════════════ */}
              <polygon points="110,195 103,168 117,168" fill="url(#g01)" filter="url(#pshadow)" />
              <circle cx="110" cy="130" r="46" fill="url(#g01)" filter="url(#pshadow)" />
              <circle cx="110" cy="130" r="36" fill="url(#gi01)" />
              <text x="110" y="122" textAnchor="middle" fontFamily="Poppins,sans-serif" fontSize="20" fontWeight="800" fill="#00897B">01</text>
              <text x="110" y="138" textAnchor="middle" fontFamily="Poppins,sans-serif" fontSize="9" fontWeight="600" fill="#00897B" letterSpacing="1">STEP</text>
              {/* Icon: bar chart */}
              <g transform="translate(28,293)">
                <rect x="0" y="10" width="7" height="14" rx="1" fill="none" stroke="#00B4A0" strokeWidth="1.5" />
                <rect x="10" y="5" width="7" height="19" rx="1" fill="none" stroke="#00B4A0" strokeWidth="1.5" />
                <rect x="20" y="0" width="7" height="24" rx="1" fill="none" stroke="#00B4A0" strokeWidth="1.5" />
              </g>
              <text x="28" y="333" fontFamily="Poppins,sans-serif" fontSize="11" fontWeight="700" fill="#00B4A0" letterSpacing="0.5">MARKET ENTRY</text>
              <text x="28" y="348" fontFamily="Poppins,sans-serif" fontSize="9" fill="#666">Launch MDR Futuristics digital</text>
              <text x="28" y="361" fontFamily="Poppins,sans-serif" fontSize="9" fill="#666">wallet with basic</text>
              <text x="28" y="374" fontFamily="Poppins,sans-serif" fontSize="9" fill="#666">payment features.</text>

              {/* ══════════════════════════════════════ */}
              {/* STEP 02 — CYAN — BOTTOM — x=270 */}
              {/* ══════════════════════════════════════ */}
              <polygon points="270,278 263,305 277,305" fill="url(#g02)" filter="url(#pshadow)" />
              <circle cx="270" cy="342" r="46" fill="url(#g02)" filter="url(#pshadow)" />
              <circle cx="270" cy="342" r="36" fill="url(#gi02)" />
              <text x="270" y="334" textAnchor="middle" fontFamily="Poppins,sans-serif" fontSize="20" fontWeight="800" fill="#0088AA">02</text>
              <text x="270" y="350" textAnchor="middle" fontFamily="Poppins,sans-serif" fontSize="9" fontWeight="600" fill="#0088AA" letterSpacing="1">STEP</text>
              {/* Icon: lightbulb */}
              <g transform="translate(199,118)">
                <path d="M 12 2 Q 22 2 22 11 Q 22 17 18 20 L 18 25 L 6 25 L 6 20 Q 2 17 2 11 Q 2 2 12 2 Z" fill="none" stroke="#00AACC" strokeWidth="1.6" />
                <line x1="7" y1="25" x2="17" y2="25" stroke="#00AACC" strokeWidth="1.6" strokeLinecap="round" />
                <line x1="8" y1="28" x2="16" y2="28" stroke="#00AACC" strokeWidth="1.6" strokeLinecap="round" />
                <line x1="12" y1="-3" x2="12" y2="-1" stroke="#00AACC" strokeWidth="1.4" />
                <line x1="24" y1="5" x2="22" y2="6" stroke="#00AACC" strokeWidth="1.4" />
                <line x1="0" y1="5" x2="2" y2="6" stroke="#00AACC" strokeWidth="1.4" />
              </g>
              <text x="180" y="162" fontFamily="Poppins,sans-serif" fontSize="11" fontWeight="700" fill="#00AACC" letterSpacing="0.5">INNOVATION</text>
              <text x="180" y="177" fontFamily="Poppins,sans-serif" fontSize="9" className="text1">Integrate AI-driven</text>
              <text x="180" y="190" fontFamily="Poppins,sans-serif" fontSize="9" className="text1">financial insights</text>
              <text x="180" y="203" fontFamily="Poppins,sans-serif" fontSize="9" className="text1">for MDR Futuristics users.</text>

              {/* ══════════════════════════════════════ */}
              {/* STEP 03 — BLUE — TOP — x=430 */}
              {/* ══════════════════════════════════════ */}
              <polygon points="430,188 423,160 437,160" fill="url(#g03)" filter="url(#pshadow)" />
              <circle cx="430" cy="122" r="46" fill="url(#g03)" filter="url(#pshadow)" />
              <circle cx="430" cy="122" r="36" fill="url(#gi03)" />
              <text x="430" y="114" textAnchor="middle" fontFamily="Poppins,sans-serif" fontSize="20" fontWeight="800" fill="#1A3FCC">03</text>
              <text x="430" y="130" textAnchor="middle" fontFamily="Poppins,sans-serif" fontSize="9" fontWeight="600" fill="#1A3FCC" letterSpacing="1">STEP</text>
              {/* Icon: gear */}
              <g transform="translate(358,298)">
                <circle cx="14" cy="14" r="6" fill="none" stroke="#2244CC" strokeWidth="1.8" />
                <circle cx="14" cy="4" r="2.5" fill="none" stroke="#2244CC" strokeWidth="1.5" />
                <circle cx="14" cy="24" r="2.5" fill="none" stroke="#2244CC" strokeWidth="1.5" />
                <circle cx="4" cy="14" r="2.5" fill="none" stroke="#2244CC" strokeWidth="1.5" />
                <circle cx="24" cy="14" r="2.5" fill="none" stroke="#2244CC" strokeWidth="1.5" />
                <circle cx="7" cy="7" r="2.5" fill="none" stroke="#2244CC" strokeWidth="1.5" />
                <circle cx="21" cy="21" r="2.5" fill="none" stroke="#2244CC" strokeWidth="1.5" />
                <circle cx="21" cy="7" r="2.5" fill="none" stroke="#2244CC" strokeWidth="1.5" />
                <circle cx="7" cy="21" r="2.5" fill="none" stroke="#2244CC" strokeWidth="1.5" />
              </g>
              <text x="358" y="342" fontFamily="Poppins,sans-serif" fontSize="11" fontWeight="700" fill="#2244CC" letterSpacing="0.5">SCALING</text>
              <text x="358" y="357" fontFamily="Poppins,sans-serif" fontSize="9" fill="#666">Expand MDR Futuristics </text>
              <text x="358" y="370" fontFamily="Poppins,sans-serif" fontSize="9" fill="#666">to international</text>
              <text x="358" y="383" fontFamily="Poppins,sans-serif" fontSize="9" fill="#666">markets & currencies.</text>

              {/* ══════════════════════════════════════ */}
              {/* STEP 04 — PURPLE — BOTTOM — x=590 */}
              {/* ══════════════════════════════════════ */}
              <polygon points="590,272 583,300 597,300" fill="url(#g04)" filter="url(#pshadow)" />
              <circle cx="590" cy="337" r="46" fill="url(#g04)" filter="url(#pshadow)" />
              <circle cx="590" cy="337" r="36" fill="url(#gi04)" />
              <text x="590" y="329" textAnchor="middle" fontFamily="Poppins,sans-serif" fontSize="20" fontWeight="800" fill="#7700BB">04</text>
              <text x="590" y="345" textAnchor="middle" fontFamily="Poppins,sans-serif" fontSize="9" fontWeight="600" fill="#7700BB" letterSpacing="1">STEP</text>
              {/* Icon: chat bubbles */}
              <g transform="translate(550,118)">
                <rect x="0" y="4" width="22" height="14" rx="4" fill="none" stroke="#CC2288" strokeWidth="1.6" />
                <polygon points="4,18 2,24 10,18" fill="none" stroke="#CC2288" strokeWidth="1.4" />
                <rect x="8" y="0" width="20" height="13" rx="4" fill="none" stroke="#CC2288" strokeWidth="1.6" />
                <polygon points="24,13 26,19 18,13" fill="none" stroke="#CC2288" strokeWidth="1.4" />
                <line x1="4" y1="9" x2="14" y2="9" stroke="#CC2288" strokeWidth="1.3" />
                <line x1="4" y1="13" x2="11" y2="13" stroke="#CC2288" strokeWidth="1.3" />
              </g>
              <text x="550" y="155" fontFamily="Poppins,sans-serif" fontSize="11" fontWeight="700" fill="#CC2288" letterSpacing="0.5">PARTNERSHIPS</text>
              <text x="550" y="170" fontFamily="Poppins,sans-serif" fontSize="9" fill="#666">Onboard merchants</text>
              <text x="550" y="183" fontFamily="Poppins,sans-serif" fontSize="9" fill="#666">& financial institutions</text>
              <text x="550" y="196" fontFamily="Poppins,sans-serif" fontSize="9" fill="#666">to MDR Futuristics network.</text>

              {/* ══════════════════════════════════════ */}
              {/* STEP 05 — ORANGE — TOP — x=760 */}
              {/* ══════════════════════════════════════ */}
              <polygon points="760,182 753,155 767,155" fill="url(#g05)" filter="url(#pshadow)" />
              <circle cx="760" cy="118" r="46" fill="url(#g05)" filter="url(#pshadow)" />
              <circle cx="760" cy="118" r="36" fill="url(#gi05)" />
              <text x="760" y="110" textAnchor="middle" fontFamily="Poppins,sans-serif" fontSize="20" fontWeight="800" fill="#CC6600">05</text>
              <text x="760" y="126" textAnchor="middle" fontFamily="Poppins,sans-serif" fontSize="9" fontWeight="600" fill="#CC6600" letterSpacing="1">STEP</text>
              {/* Icon: magnifier */}
              <g transform="translate(695,298)">
                <circle cx="11" cy="11" r="9" fill="none" stroke="#CC7700" strokeWidth="1.8" />
                <line x1="18" y1="18" x2="26" y2="26" stroke="#CC7700" strokeWidth="2" strokeLinecap="round" />
              </g>
              <text x="695" y="342" fontFamily="Poppins,sans-serif" fontSize="11" fontWeight="700" fill="#CC7700" letterSpacing="0.5">OPTIMIZATION</text>
              <text x="695" y="357" fontFamily="Poppins,sans-serif" fontSize="9" fill="#666">Advanced analytics</text>
              <text x="695" y="370" fontFamily="Poppins,sans-serif" fontSize="9" fill="#666">& personalized</text>
              <text x="695" y="383" fontFamily="Poppins,sans-serif" fontSize="9" fill="#666">financial services.</text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}