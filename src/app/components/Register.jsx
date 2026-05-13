"use client";

import { useState } from "react";
import { FaLock, FaShieldAlt, FaBolt } from "react-icons/fa";


export default function CryptoLogin() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState(null);


  const handleSubmit = async () => {
    if (!email || !password) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 2000));
    setLoading(false);
  };


  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Mono:wght@400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(-4deg); }
          50%       { transform: translateY(-14px) rotate(-4deg); }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes shimmer {
          0%   { transform: translateX(-180%) skewX(-20deg); }
          100% { transform: translateX(300%)  skewX(-20deg); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes tickerMove {
          0%   { transform: translateX(0);    }
          100% { transform: translateX(-50%); }
        }

        .cx-page {
          min-height: 100vh;
          background: #f5f1ea;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Syne', sans-serif;
          position: relative;
          overflow: hidden;
          padding: 32px 16px;
        }
        .cx-page::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, #c8b89a 1px, transparent 1px);
          background-size: 26px 26px;
          opacity: 0.3;
          pointer-events: none;
        }
        .cx-blob-1 {
          position: absolute; top: -130px; right: -100px;
          width: 480px; height: 480px;
          background: radial-gradient(circle, rgba(224,165,40,0.16) 0%, transparent 70%);
          border-radius: 50%; pointer-events: none;
        }
        .cx-blob-2 {
          position: absolute; bottom: -110px; left: -80px;
          width: 420px; height: 420px;
          background: radial-gradient(circle, rgba(210,110,25,0.11) 0%, transparent 70%);
          border-radius: 50%; pointer-events: none;
        }

        /* wrapper */
        .cx-wrap {
          display: flex;
          align-items: center;
          gap: 56px;
          max-width: 1320px;
          width: 100%;
          position: relative;
          z-index: 1;
          animation: fadeUp 0.55s ease both;
        }

        /* ── Left panel ──────────────────────────── */
        .cx-left {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        /* Card */
        .cx-card-wrap {
          animation: float 6s ease-in-out infinite;
          filter: drop-shadow(0 28px 44px rgba(140,95,20,0.24));
        }
        .cx-card {
          width: 320px;
          height: 200px;
          border-radius: 22px;
          background: linear-gradient(135deg, #1e1b10 0%, #2f2710 50%, #1a1608 100%);
          padding: 22px;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(232,185,50,0.22);
        }
        .cx-shine {
          position: absolute; top: 0; left: -60%;
          width: 45%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent);
          animation: shimmer 3.5s ease-in-out infinite;
          pointer-events: none;
        }
        .cx-card-brand {
          display: flex; align-items: center; gap: 7px; margin-bottom: 18px;
        }
        .cx-card-brand-name {
          color: #e8b830; font-size: 10px; font-weight: 700;
          letter-spacing: 4px; font-family: 'DM Mono', monospace;
        }
        .cx-chip {
          width: 32px; height: 24px; border-radius: 4px;
          background: linear-gradient(135deg, #c9a32a, #f0d060, #b08820);
          position: relative; overflow: hidden;
        }
        .cx-chip::after {
          content: '';
          position: absolute; inset: 0;
          background: repeating-linear-gradient(90deg, transparent, transparent 8px, rgba(0,0,0,0.1) 8px, rgba(0,0,0,0.1) 9px);
        }
        .cx-card-tag {
          position: absolute; top: 22px; right: 22px;
          color: #e8b830; font-size: 10px; font-weight: 700;
          letter-spacing: 2.5px; font-family: 'DM Mono', monospace; opacity: 0.7;
        }
        .cx-card-num {
          position: absolute; bottom: 50px; left: 22px;
          display: flex; gap: 10px;
          color: rgba(255,255,255,0.85); font-size: 13px;
          font-family: 'DM Mono', monospace; letter-spacing: 2px;
        }
        .cx-card-meta {
          position: absolute; bottom: 18px; left: 22px; right: 22px;
          display: flex; justify-content: space-between;
        }
        .cx-ml { color: rgba(255,255,255,0.35); font-size: 8px; letter-spacing: 1.5px; text-transform: uppercase; font-family: 'DM Mono', monospace; margin-bottom: 2px; }
        .cx-mv { color: rgba(255,255,255,0.85); font-size: 11px; font-weight: 500; letter-spacing: 0.5px; }
        .cx-nfc { position: absolute; bottom: 22px; right: 22px; opacity: 0.38; }

        /* Ticker */
        .cx-ticker {
          width: 320px; overflow: hidden;
          background: #fff; border: 1px solid #e4d8c0;
          border-radius: 12px; padding: 11px 0; position: relative;
        }
        .cx-ticker::before, .cx-ticker::after {
          content: ''; position: absolute; top: 0; bottom: 0; width: 30px; z-index: 2; pointer-events: none;
        }
        .cx-ticker::before { left: 0;  background: linear-gradient(90deg, #fff, transparent); }
        .cx-ticker::after  { right: 0; background: linear-gradient(-90deg, #fff, transparent); }
        .cx-ticker-track {
          display: flex; animation: tickerMove 20s linear infinite; width: max-content;
        }
        .cx-tick-item {
          display: flex; align-items: center; gap: 6px;
          padding: 0 18px; border-right: 1px solid #f0e6d0; flex-shrink: 0;
        }
        .cx-tick-sym { color: #8b6a30; font-size: 10px; font-family: 'DM Mono', monospace; font-weight: 500; letter-spacing: 1px; }
        .cx-tick-val { color: #1c1a10; font-size: 11px; font-family: 'DM Mono', monospace; font-weight: 500; }
        .cx-up   { color: #2a8a50; font-size: 10px; font-family: 'DM Mono', monospace; }
        .cx-down { color: #bb2e2e; font-size: 10px; font-family: 'DM Mono', monospace; }

        /* Badges */
        .cx-badges { display: flex; gap: 10px; width: 320px; }
        .cx-badge {
          flex: 1; background: #fff; border: 1px solid #e4d8c0;
          border-radius: 11px; padding: 10px 6px;
          display: flex; flex-direction: column; align-items: center; gap: 4px;
        }
        .cx-badge-icon { font-size: 17px; }
        .cx-badge-text { color: #8b6a30; font-size: 9px; font-weight: 600; letter-spacing: 0.7px; text-transform: uppercase; text-align: center; }

        /* ── Right panel / form ──────────────────── */
        .cx-right { flex: 1; max-width: 520px; width: 100%; }
        .cx-form-card {
          background: #fff; border: 1px solid #e4d8c0;
          border-radius: 28px; padding: 44px 40px;
          box-shadow: 0 10px 44px rgba(150,100,20,0.1);
        }

        .cx-brand { display: flex; align-items: center; gap: 10px; margin-bottom: 30px; }
        .cx-brand-icon {
          width: 38px; height: 38px; background: #fdf6e2;
          border: 1.5px solid #d4a82a; border-radius: 11px;
          display: flex; align-items: center; justify-content: center;
        }
        .cx-brand-name { color: #a87820; font-size: 13px; font-weight: 700; letter-spacing: 4px; font-family: 'DM Mono', monospace; }

        .cx-h1 { color: #1c1a10; font-size: 30px; font-weight: 800; letter-spacing: -0.8px; margin-bottom: 6px; line-height: 1.15; }
        .cx-sub { color: #9a8460; font-size: 14px; margin-bottom: 34px; line-height: 1.5; }

        .cx-field { margin-bottom: 18px; }
        .cx-lbl { display: block; color: #5a4620; font-size: 11px; font-weight: 700; margin-bottom: 8px; letter-spacing: 0.8px; text-transform: uppercase; }
        .cx-lbl-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
        .cx-forgot { color: #a87820; font-size: 12px; text-decoration: none; font-weight: 600; }
        .cx-forgot:hover { text-decoration: underline; }

        .cx-inp-wrap {
          display: flex; align-items: center; gap: 10px;
          background: #faf7f0; border: 1.5px solid #ddd0b0;
          border-radius: 13px; padding: 0 16px; height: 52px;
          transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
        }
        .cx-inp-wrap:hover { border-color: #c9a32a; }
        .cx-inp-wrap.focused {
          border-color: #c9a32a; background: #fffdf5;
          box-shadow: 0 0 0 3px rgba(201,163,42,0.14);
        }
        .cx-inp-icon { width: 16px; height: 16px; color: #c9a32a; flex-shrink: 0; }
        .cx-input {
          flex: 1; background: transparent; border: none; outline: none;
          color: #1c1a10; font-size: 14px; font-family: 'Syne', sans-serif;
        }
        .cx-input::placeholder { color: #c4ae88; }
        .cx-eye { background: none; border: none; cursor: pointer; color: #c9a32a; padding: 0; display: flex; align-items: center; }

        .cx-submit {
          width: 100%; height: 54px;
          background: linear-gradient(135deg, #e8b830 0%, #c07810 100%);
          border: none; border-radius: 13px; color: #fff;
          font-size: 15px; font-weight: 700; font-family: 'Syne', sans-serif;
          cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px;
          margin-top: 10px; letter-spacing: 0.4px;
          transition: opacity 0.2s, transform 0.1s, box-shadow 0.2s;
          box-shadow: 0 6px 26px rgba(200,125,10,0.3);
        }
        .cx-submit:hover { opacity: 0.91; box-shadow: 0 8px 32px rgba(200,125,10,0.38); }
        .cx-submit:active { transform: scale(0.98); }
        .cx-submit:disabled { opacity: 0.62; cursor: not-allowed; }

        .cx-spinner {
          display: inline-block; width: 20px; height: 20px;
          border: 2.5px solid rgba(255,255,255,0.3);
          border-top-color: #fff; border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }

        .cx-divider { display: flex; align-items: center; gap: 12px; margin: 26px 0; }
        .cx-div-line { flex: 1; height: 1px; background: #e6dac4; }
        .cx-div-txt { color: #b0987a; font-size: 12px; white-space: nowrap; font-weight: 500; }

        .cx-social-row { display: flex; gap: 12px; }
        .cx-social {
          flex: 1; height: 48px; background: #faf7f0;
          border: 1.5px solid #ddd0b0; border-radius: 13px;
          color: #3c2e10; font-size: 13px; font-weight: 600; font-family: 'Syne', sans-serif;
          cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px;
          transition: background 0.2s, border-color 0.2s, box-shadow 0.2s;
        }
        .cx-social:hover { background: #fff; border-color: #c9a32a; box-shadow: 0 2px 14px rgba(201,163,42,0.13); }

        .cx-reg { text-align: center; color: #9a8460; font-size: 13px; margin-top: 26px; }
        .cx-reg-link { color: #a87820; text-decoration: none; font-weight: 700; }
        .cx-reg-link:hover { text-decoration: underline; }

        /* ── Responsive ──────────────────────────── */
        @media (max-width: 820px) {
          .cx-wrap { flex-direction: column; gap: 28px; align-items: stretch; }
          .cx-left { flex-direction: row; flex-wrap: wrap; justify-content: center; gap: 16px; }
          .cx-card-wrap { flex: 0 0 100%; display: flex; justify-content: center; }
          .cx-card { width: 100%; max-width: 340px; }
          .cx-ticker { width: 100%; max-width: 340px; }
          .cx-badges { width: 100%; max-width: 340px; }
          .cx-right { max-width: 100%; }
        }
        @media (max-width: 520px) {
          .cx-form-card { padding: 28px 20px; }
          .cx-h1 { font-size: 24px; }
          .cx-ticker { display: none; }
          .cx-card { height: 185px; }
          .cx-badges { gap: 8px; }
        }
      `}</style>

      <div className="cx-page">
        <div className="cx-blob-1" />
        <div className="cx-blob-2" />

        <div className="cx-wrap">
          {/* ── Left panel ── */}
          <div className="cx-left">

            {/* Floating card */}
            <div className="cx-card-wrap">
              <img src="/img/login-card-img.png" alt="Crypto Card" />
            </div>



          </div>

          {/* ── Right panel ── */}
          <div className="cx-right">
            <div className="cx-form-card">

              <div className="cx-brand">
                <div className="cx-brand-icon">
                  <img src="/img/mudra-logo.png" alt="Crypto Card" />
                </div>
                <span className="cx-brand-name">MUDRA</span>
              </div>

              <a href="/Forget" className="cx-h1">Forgot Password?</a>
              <p className="cx-sub">To recover your password, enter your user id and click Send. Then, follow the instructions in the message.</p>

              {/* Email */}
              <div className="cx-field">
                <label className="cx-lbl">Email address</label>
                <div className={`cx-inp-wrap${focused === "email" ? " focused" : ""}`}>
                  <svg className="cx-inp-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M2 7l10 7 10-7" />
                  </svg>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    className="cx-input"
                  />
                </div>
              </div>



              {/* Submit */}
              <button className="cx-submit" onClick={handleSubmit} disabled={loading}>
                {loading ? (
                  <span className="cx-spinner" />
                ) : (
                  <>
                    <span>Sign In</span>
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </>
                )}
              </button>

              {/* Divider */}
              <div className="cx-divider">
                <div className="cx-div-line" />
                <span className="cx-div-txt">or continue with</span>
                <div className="cx-div-line" />
              </div>

              {/* Social */}
              <div className="cx-social-row">
                <button className="cx-social">
                  <svg width="18" height="18" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                  <span>Google</span>
                </button>
                <button className="cx-social">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#1c1a10">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <span>Apple</span>
                </button>
              </div>

              <p className="cx-reg">
                Don&apos;t have an account?{" "}
                <a href="/Login" className="cx-reg-link">Login</a>
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}