"use client";

export default function SocialTasksPage({
  platformKey,
  onGo,
  onToast,
  SOC,
  PIDS,
  PCOL,
  socialState,
  openSocId,
  openSocPlatform,
  onOpenTask,
  onCloseTask,
  onAdvanceStep,
}) {
  const ids = PIDS[platformKey] || [];
  const col = PCOL[platformKey];

  const platformTitle =
    platformKey === "fb"
      ? "Facebook"
      : platformKey === "ig"
        ? "Instagram"
        : platformKey === "tw"
          ? "X / Twitter"
          : "LinkedIn";

  const listVisible = !openSocId;

  const renderBadge = (st) => {
    if (st === "done") return <span className="pill pd"><i className="ti ti-check" />Done</span>;
    if (st === "progress") return <span className="pill pp"><i className="ti ti-clock" />Progress</span>;
    return <span className="pill pn"><i className="ti ti-sparkles" />New</span>;
  };

  return (
    <div className="pad">
      <div className="bc">
        <span onClick={() => onGo("home")}>Dashboard</span>
        <span>›</span>
        <span onClick={() => onGo("tasks")}>Loyalty Tasks</span>
        <span>›</span>
        <span className="cur">{platformTitle}</span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 10, justifyContent: "space-between", flexWrap: "wrap" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 42,
              height: 42,
              borderRadius: 10,
              background:
                platformKey === "fb"
                  ? "#1877F2"
                  : platformKey === "ig"
                    ? "linear-gradient(135deg,#f58529,#dd2a7b)"
                    : platformKey === "tw"
                      ? "#1DA1F2"
                      : "#0077B5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: platformKey === "li" ? 11 : 22,
              fontWeight: 700,
              color: "#fff",
            }}
          >
            {platformKey === "fb" ? "f" : platformKey === "li" ? "in" : platformKey === "tw" ? "𝑂" : "◎"}
          </div>
          <div>
            <div className="h1">{platformTitle} Tasks</div>
            <div className="sub">Complete tasks to earn MDR points</div>
          </div>
        </div>
        <span className={platformKey === "fb" ? "pill pn" : "pill pn"}>2 / 6 Completed</span>
      </div>

      <div className="bar" style={{ height: 6 }}>
        <div className="bf" style={{ width: "33%" }} />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 8 }}>
        {ids.map((id) => {
          const t = SOC[id];
          if (!t) return null;
          const st = socialState[id] || t.st;
          const step = socialState[id + "_s"] !== undefined ? socialState[id + "_s"] : t.cs || 0;
          const total = t.s.length;
          const pr = st === "done" ? 100 : Math.min(100, Math.round((step / total) * 100));
          const pc = st === "done" ? "pd" : st === "progress" ? "pp" : "pn";

          const pctWidth = pr + "%";

          return (
            <div
              key={id}
              className={"tr " + (st === "done" ? "dn2" : st === "progress" ? "act" : "")}
              style={{ cursor: "pointer" }}
              onClick={() => onOpenTask(platformKey, id)}
            >
              <div className="tico" style={{ background: col }}>{/* icon */}
                <i className={
                  t.k === "like" ? "ti ti-heart" :
                  t.k === "comment" ? "ti ti-message-circle" :
                  t.k === "share" ? "ti ti-share-2" :
                  t.k === "follow" ? "ti ti-user-plus" :
                  "ti ti-check"
                } style={{ color: "#fff", fontSize: 15 }} />
              </div>
              <div className="tb">
                <div className="tt">{t.t}</div>
                <div className="td">{t.d}</div>
                <div className="tpg">
                  <div className="bar" style={{ flex: 1 }}>
                    <div className="bf" style={{ width: pctWidth }} />
                  </div>
                  <span className="tpct">{pr}%</span>
                </div>
              </div>
              <div className="tr-r">
                <div className="pts">+{t.pts} pts</div>
                <span className={"pill " + pc}>{st === "done" ? <><i className="ti ti-check" />Done</> : st === "progress" ? <><i className="ti ti-clock" />Progress</> : <><i className="ti ti-sparkles" />New</>}</span>
                {st !== "done" ? (
                  <button className={"btn " + (st === "progress" ? "bo" : "bg") + " bxs"} style={{ marginTop: 3, fontSize: 11 }} onClick={(e) => {e.stopPropagation(); onOpenTask(platformKey, id);}}>
                    {st === "progress" ? "Continue" : "Start Task"}
                  </button>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>

      {/* detail */}
      {openSocId && openSocPlatform === platformKey ? (
        <SocialDetail
          platformKey={platformKey}
          id={openSocId}
          SOC={SOC}
          socialState={socialState}
          PCOL={PCOL}
          onAdvanceStep={onAdvanceStep}
          onClose={() => onCloseTask(platformKey)}
        />
      ) : null}
    </div>
  );
}

function SocialDetail({ platformKey, id, SOC, socialState, PCOL, onAdvanceStep, onClose }) {
  const t = SOC[id];
  const col = PCOL[platformKey];
  if (!t) return null;

  const st = socialState[id] || t.st;
  const step = socialState[id + "_s"] !== undefined ? socialState[id + "_s"] : t.cs || 0;
  const total = t.s.length;
  const pct = st === "done" ? 100 : Math.min(100, Math.round((step / total) * 100));

  return (
    <div className="card" style={{ marginTop: 14 }}>
      <div className="ch" style={{ marginBottom: 8 }}>
        <div>
          <div className="ct">{t.t}</div>
          <div className="cs">{t.d}</div>
        </div>
        <button className="btn bn bsm" onClick={onClose}>
          <i className="ti ti-arrow-left" /> Back
        </button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 12 }}>
        <div className="card" style={{ background: "transparent" }}>
          <div className="ct" style={{ marginBottom: 8 }}>Task Steps</div>
          {t.s.map((s, i) => {
            const dn = i < step;
            const ac = i === step && st !== "done";
            return (
              <div key={i} className="step-i">
                <div className={"step-n " + (dn ? "sdn" : ac ? "sact" : "")}
                >
                  {dn ? <i className="ti ti-check" style={{ fontSize: 10, color: "var(--gr)" }} /> : <span style={{ fontSize: 10, fontWeight: 700, color: ac ? "var(--glt)" : "var(--tx3)" }}>{i + 1}</span>}
                </div>
                <div className={"step-t " + (dn ? "tdn" : ac ? "tact" : "")}>{s}{ac ? <div style={{ fontSize: 11, color: "var(--glt)", marginTop: 2, fontWeight: 600 }}>▶ Current step</div> : null}</div>
              </div>
            );
          })}

          <div style={{ marginTop: 12 }}>
            {st === "done" ? (
              <div style={{ background: "var(--grbg)", border: "1px solid var(--grd)", borderRadius: 9, padding: 13, textAlign: "center" }}>
                <i className="ti ti-circle-check" style={{ fontSize: 26, color: "var(--gr)", display: "block", marginBottom: 5 }} aria-hidden="true" />
                <div style={{ fontSize: 13, fontWeight: 600, color: "var(--gr)" }}>Task Completed!</div>
                <div style={{ fontSize: 11, color: "var(--tx3)", marginTop: 2 }}>+{t.pts} points have been added to your wallet</div>
              </div>
            ) : (
              <button className="D-btn bg bfw" onClick={() => onAdvanceStep(id, total, platformKey)}>
                {step === 0 ? <><i className="ti ti-player-play" /> Start Task</> : step < total - 1 ? <><i className="ti ti-arrow-right" /> Complete Step {step + 1} & Continue</> : <><i className="ti ti-check" /> Submit & Claim +{t.pts} Points!</>}
              </button>
            )}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div className="card" style={{ background: "transparent" }}>
            <div className="ct" style={{ marginBottom: 8 }}>Your Progress</div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 7 }}>
              <div style={{ fontSize: 24, fontWeight: 800, color: "var(--glt)" }}>{pct}%</div>
              <div style={{ fontSize: 11, color: "var(--tx3)" }}>Step {Math.min(step + 1, total)} of {total}</div>
            </div>
            <div className="bar" style={{ height: 7, marginBottom: 10 }}>
              <div
                style={{
                  height: "100%",
                  borderRadius: 3,
                  width: pct + "%",
                  background: "linear-gradient(90deg,var(--gold),var(--glt))",
                  transition: "width .4s",
                }}
              />
            </div>
            <div className="g2" style={{ gap: 7 }}>
              <div className="mst">
                <div className="mv" style={{ color: "var(--gr)" }}>{step}</div>
                <div className="ml">Steps Done</div>
              </div>
              <div className="mst">
                <div className="mv" style={{ color: "var(--am)" }}>{total - step}</div>
                <div className="ml">Remaining</div>
              </div>
            </div>
          </div>

          <div className="card" style={{ background: "transparent" }}>
            <div className="ct" style={{ marginBottom: 8 }}>Task Info</div>
            <div className="fr"><span className="fk">Platform</span><span className="fv">{platformKey.toUpperCase()}</span></div>
            <div className="fr"><span className="fk">Task Type</span><span className="fv" style={{ textTransform: "capitalize" }}>{t.k}</span></div>
            <div className="fr"><span className="fk">Reward</span><span className="fv" style={{ color: "var(--glt)", fontWeight: 700 }}>+{t.pts} pts</span></div>
            <div className="fr"><span className="fk">Status</span><span className={"pill " + (st === "done" ? "pd" : st === "progress" ? "pp" : "pn")}>{st === "done" ? "Done" : st === "progress" ? "In Progress" : "New"}</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

