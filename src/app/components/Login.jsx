"use client";

import { useState } from "react";

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
    <div style={styles.root}>
      <div style={styles.bgGlow1} />
      <div style={styles.bgGlow2} />
      <div style={styles.bgGrid} />

      <div style={styles.wrapper}> 

        {/* Right Panel - Login Form */}
        <div style={styles.rightPanel}>
          <div style={styles.formCard}>
            <div style={styles.brand}>
              <div style={styles.brandIcon}>
                <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
                  <polygon points="16,2 30,10 30,22 16,30 2,22 2,10" fill="rgba(250,180,50,0.2)" stroke="#fabc32" strokeWidth="2" />
                  <text x="16" y="22" textAnchor="middle" fill="#fabc32" fontSize="13" fontWeight="700" fontFamily="monospace">₿</text>
                </svg>
              </div>
              <span style={styles.brandName}>CRYPTEX</span>
            </div>

            <h1 style={styles.heading}>Welcome back</h1>
            <p style={styles.subheading}>Sign in to manage your crypto debit card</p>

            <div style={styles.fieldGroup}>
              <label style={styles.label}>Email address</label>
              <div style={{ ...styles.inputWrapper, ...(focused === "email" ? styles.inputWrapperFocused : {}) }}>
                <svg style={styles.inputIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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
                  style={styles.input}
                />
              </div>
            </div>

            <div style={styles.fieldGroup}>
              <div style={styles.labelRow}>
                <label style={styles.label}>Password</label>
                <a href="#" style={styles.forgotLink}>Forgot password?</a>
              </div>
              <div style={{ ...styles.inputWrapper, ...(focused === "password" ? styles.inputWrapperFocused : {}) }}>
                <svg style={styles.inputIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="5" y="11" width="14" height="10" rx="2" />
                  <path d="M8 11V7a4 4 0 018 0v4" />
                </svg>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setFocused("password")}
                  onBlur={() => setFocused(null)}
                  style={styles.input}
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  style={styles.eyeBtn}
                  type="button"
                >
                  {showPassword ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" />
                      <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              disabled={loading}
              style={{
                ...styles.submitBtn,
                ...(loading ? styles.submitBtnLoading : {}),
              }}
            >
              {loading ? (
                <span style={styles.spinner} />
              ) : (
                <>
                  <span>Sign In</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </>
              )}
            </button>

            <div style={styles.divider}>
              <div style={styles.dividerLine} />
              <span style={styles.dividerText}>or continue with</span>
              <div style={styles.dividerLine} />
            </div>

            <div style={styles.socialRow}>
              <button style={styles.socialBtn}>
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                <span>Google</span>
              </button>
              <button style={styles.socialBtn}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <span>Apple</span>
              </button>
            </div>

            <p style={styles.registerText}>
              Don&apos;t have an account?{" "}
              <a href="#" style={styles.registerLink}>Create one free</a>
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;600&display=swap');
        
        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

const styles = {
  root: {
    minHeight: "100vh",
    background: "#0a0b0f",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Space Grotesk', sans-serif",
    position: "relative",
    overflow: "hidden",
    padding: "24px",
  },
  bgGlow1: {
    position: "absolute",
    top: "-20%",
    left: "-10%",
    width: "600px",
    height: "600px",
    background: "radial-gradient(circle, rgba(250,188,50,0.08) 0%, transparent 70%)",
    borderRadius: "50%",
    pointerEvents: "none",
  },
  bgGlow2: {
    position: "absolute",
    bottom: "-20%",
    right: "-10%",
    width: "700px",
    height: "700px",
    background: "radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)",
    borderRadius: "50%",
    pointerEvents: "none",
  },
  bgGrid: {
    position: "absolute",
    inset: 0,
    backgroundImage: `
      linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
    `,
    backgroundSize: "60px 60px",
    pointerEvents: "none",
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
    gap: "60px",
    maxWidth: "1000px",
    width: "100%",
    position: "relative",
    zIndex: 1,
  },
  leftPanel: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "28px",
  },
  cardScene: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "24px",
    width: "100%",
  },
  cardImage: {
    width: "340px",
    height: "210px",
    objectFit: "cover",
    borderRadius: "20px",
    border: "1px solid rgba(250,188,50,0.2)",
    boxShadow: "0 0 60px rgba(250,188,50,0.08), 0 40px 80px rgba(0,0,0,0.6)",
  },
  statsRow: {
    display: "flex",
    gap: "10px",
    width: "340px",
  },
  statChip: {
    flex: 1,
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "10px",
    padding: "10px 10px",
    display: "flex",
    flexDirection: "column",
    gap: "2px",
  },
  statLabel: {
    color: "rgba(255,255,255,0.4)",
    fontSize: "10px",
    letterSpacing: "1px",
    fontFamily: "'JetBrains Mono', monospace",
  },
  statValue: {
    color: "rgba(255,255,255,0.85)",
    fontSize: "12px",
    fontWeight: "600",
    fontFamily: "'JetBrains Mono', monospace",
  },
  statChange: {
    fontSize: "10px",
    fontWeight: "500",
    fontFamily: "'JetBrains Mono', monospace",
  },
  rightPanel: {
    flex: 1,
    maxWidth: "420px",
    width: "100%",
  },
  formCard: {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "24px",
    padding: "40px",
    backdropFilter: "blur(12px)",
  },
  brand: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "28px",
  },
  brandIcon: {
    width: "36px",
    height: "36px",
    background: "rgba(250,188,50,0.1)",
    border: "1px solid rgba(250,188,50,0.2)",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  brandName: {
    color: "#fabc32",
    fontSize: "14px",
    fontWeight: "700",
    letterSpacing: "4px",
    fontFamily: "'JetBrains Mono', monospace",
  },
  heading: {
    color: "#ffffff",
    fontSize: "28px",
    fontWeight: "700",
    letterSpacing: "-0.5px",
    marginBottom: "6px",
    lineHeight: 1.2,
  },
  subheading: {
    color: "rgba(255,255,255,0.4)",
    fontSize: "14px",
    marginBottom: "32px",
    lineHeight: 1.5,
  },
  fieldGroup: {
    marginBottom: "20px",
  },
  label: {
    display: "block",
    color: "rgba(255,255,255,0.6)",
    fontSize: "13px",
    fontWeight: "500",
    marginBottom: "8px",
    letterSpacing: "0.3px",
  },
  labelRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "8px",
  },
  forgotLink: {
    color: "#fabc32",
    fontSize: "12px",
    textDecoration: "none",
    opacity: 0.8,
  },
  inputWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "12px",
    padding: "0 16px",
    height: "50px",
    transition: "border-color 0.2s, background 0.2s",
  },
  inputWrapperFocused: {
    border: "1px solid rgba(250,188,50,0.4)",
    background: "rgba(250,188,50,0.03)",
  },
  inputIcon: {
    width: "16px",
    height: "16px",
    color: "rgba(255,255,255,0.3)",
    flexShrink: 0,
  },
  input: {
    flex: 1,
    background: "transparent",
    border: "none",
    outline: "none",
    color: "#ffffff",
    fontSize: "14px",
    fontFamily: "'Space Grotesk', sans-serif",
  },
  eyeBtn: {
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "rgba(255,255,255,0.3)",
    padding: "0",
    display: "flex",
    alignItems: "center",
    transition: "color 0.2s",
  },
  submitBtn: {
    width: "100%",
    height: "52px",
    background: "linear-gradient(135deg, #fabc32, #e8a020)",
    border: "none",
    borderRadius: "12px",
    color: "#0a0b0f",
    fontSize: "15px",
    fontWeight: "700",
    fontFamily: "'Space Grotesk', sans-serif",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    marginTop: "8px",
    letterSpacing: "0.3px",
    transition: "opacity 0.2s, transform 0.1s",
    boxShadow: "0 4px 20px rgba(250,188,50,0.25)",
  },
  submitBtnLoading: {
    opacity: 0.7,
    cursor: "not-allowed",
  },
  spinner: {
    display: "inline-block",
    width: "20px",
    height: "20px",
    border: "2px solid rgba(0,0,0,0.2)",
    borderTopColor: "#0a0b0f",
    borderRadius: "50%",
    animation: "spin 0.7s linear infinite",
  },
  divider: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    margin: "24px 0",
  },
  dividerLine: {
    flex: 1,
    height: "1px",
    background: "rgba(255,255,255,0.07)",
  },
  dividerText: {
    color: "rgba(255,255,255,0.3)",
    fontSize: "12px",
    whiteSpace: "nowrap",
  },
  socialRow: {
    display: "flex",
    gap: "12px",
  },
  socialBtn: {
    flex: 1,
    height: "46px",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "12px",
    color: "rgba(255,255,255,0.7)",
    fontSize: "13px",
    fontWeight: "500",
    fontFamily: "'Space Grotesk', sans-serif",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    transition: "background 0.2s, border-color 0.2s",
  },
  registerText: {
    textAlign: "center",
    color: "rgba(255,255,255,0.35)",
    fontSize: "13px",
    marginTop: "24px",
  },
  registerLink: {
    color: "#fabc32",
    textDecoration: "none",
    fontWeight: "600",
  },
};

 