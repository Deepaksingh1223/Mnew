"use client";

export default function YouTubeTasksPage({
  onGo,
  onToast,
  VIDS,
  videoState,
  curVid,
  elapsed,
  totalDur,
  playing,
  fmt,
  openVid,
  closeVid,
  togglePlay,
  skipFwd,
  seek,
  claimVid,
}) {
  const tasks = Object.values(VIDS);

  const getPct = (id) => {
    const p = videoState[id + "_p"];
    if (p !== undefined) return p;
    return VIDS[id]?.pr ?? 0;
  };

  const getStatus = (id) => {
    if (videoState[id] !== undefined) return videoState[id];
    return VIDS[id]?.st ?? "new";
  };

  return (
    <div className="pad">
      <div className="bc">
        <span onClick={() => onGo("home")}>Dashboard</span>
        <span>›</span>
        <span onClick={() => onGo("tasks")}>Loyalty Tasks</span>
        <span>›</span>
        <span className="cur">YouTube</span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 10, justifyContent: "space-between", flexWrap: "wrap" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 42, height: 42, borderRadius: 10, background: "#FF0000", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M23 7s-.3-2-1.2-2.8c-1.1-1.2-2.4-1.2-3-1.3C16.2 2.8 12 2.8 12 2.8s-4.2 0-6.8.1c-.6.1-1.9.1-3 1.3C1.3 5 1 7 1 7S.7 9.1.7 11.2v2c0 2 .3 4.2.3 4.2s.3 2 1.2 2.8c1.1 1.2 2.6 1.1 3.3 1.2C7.3 21.5 12 21.5 12 21.5s4.2 0 6.8-.2c.6-.1 1.9-.1 3-1.2.9-.8 1.2-2.8 1.2-2.8s.3-2.1.3-4.2v-2C23.3 9.1 23 7 23 7zM9.7 15.5V8.4l6.5 3.6-6.5 3.5z" />
            </svg>
          </div>
          <div>
            <div className="h1">YouTube Tasks</div>
            <div className="sub">Watch, like and subscribe to earn MDR points</div>
          </div>
        </div>
        <span className="pill pd">4 / 6 Completed</span>
      </div>

      <div className="bar" style={{ height: 6 }}>
        <div className="bf" style={{ width: "67%" }} />
      </div>

      {/* list */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 6 }}>
        {tasks.map((v) => {
          const st = getStatus(v.id);
          const pr = getPct(v.id);
          const isWatched = v.type === undefined;
          const badgeCls = st === "done" ? "pd" : st === "progress" ? "pp" : "pn";
          const badgeText =
            st === "done" ? (
              <>
                <i className="ti ti-check" /> Done
              </>
            ) : st === "progress" ? (
              <>
                <i className="ti ti-clock" /> Progress
              </>
            ) : (
              <>
                <i className="ti ti-sparkles" /> New
              </>
            );

          const action =
            isWatched && st !== "done" ? (
              <button
                className={"btn " + (st === "progress" ? "bo" : "bg") + " bxs"}
                style={{ marginTop: 3, fontSize: 11 }}
                onClick={() => openVid(v.id)}
              >
                {st === "progress" ? "Continue" : "Watch"}
              </button>
            ) : v.type ? (
              <button
                className="btn bn bxs"
                style={{ marginTop: 3, fontSize: 11 }}
                onClick={() => onToast("Task opened — complete on YouTube")}
              >
                Start
              </button>
            ) : null;

          const ico =
            !isWatched && v.type === "sub" ? (
              <i className="ti ti-bell" style={{ fontSize: 15, color: "#fff" }} />
            ) : !isWatched && v.type === "like" ? (
              <i className="ti ti-heart" style={{ fontSize: 15, color: "#fff" }} />
            ) : (
              <i className="ti ti-player-play" style={{ fontSize: 15, color: "#fff" }} />
            );

          return (
            <div key={v.id} className={"tr " + (st === "done" ? "dn2" : st === "progress" ? "act" : "")}
              style={{ cursor: isWatched ? "pointer" : "default" }}
              onClick={() => {
                if (isWatched) openVid(v.id);
              }}
            >
              <div className="tico" style={{ background: isWatched ? "#FF0000" : "#FF0000" }}>
                {ico}
              </div>
              <div className="tb">
                <div className="tt">{v.title}</div>
                <div className="td">{v.desc}{v.dur ? " · " + fmt(v.dur) : ""}</div>
                <div className="tpg">
                  <div className="bar" style={{ flex: 1 }}>
                    <div className="bf" style={{ width: pr + "%" }} />
                  </div>
                  <span className="tpct">{pr}%</span>
                </div>
              </div>
              <div className="tr-r">
                <div className="pts">+{v.pts} pts</div>
                <span className={"pill " + badgeCls}>{badgeText}</span>
                {action}
              </div>
            </div>
          );
        })}
      </div>

      {/* player */}
      {curVid ? (
        <div style={{ marginTop: 14 }} className="card">
          <div className="bc" style={{ marginBottom: 10 }}>
            <span onClick={closeVid}>‹ Back to List</span>
            <span>•</span>
            <span className="cur">{VIDS[curVid].title}</span>
          </div>

          <div className="g2" style={{ alignItems: "start" }}>
            <div>
              <div className="vid-wrap">
                <div
                  className="vid-screen"
                  onClick={() => {
                    togglePlay();
                  }}
                >
                  <div className="vid-init">
                    <div className="play-big">{playing ? <i className="ti ti-player-pause" /> : <i className="ti ti-player-play" />}</div>
                  </div>
                </div>
              </div>

              <div className="vc">
                <div className="vc-btn" onClick={togglePlay} aria-label="Play/Pause">
                  {playing ? <i className="ti ti-player-pause" /> : <i className="ti ti-player-play" />}
                </div>
                <span className="vct">{fmt(elapsed)}</span>
                <div
                  className="vc-bar"
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    seek(e.clientX, rect.left, rect.width);
                  }}
                >
                  <div className="vc-prog" style={{ width: totalDur ? Math.round((elapsed / totalDur) * 100) + "%" : "0%" }} />
                </div>
                <span className="vct">{fmt(totalDur)}</span>
              </div>
            </div>

            <div>
              <div style={{ fontSize: 12.5, fontWeight: 500, color: "var(--tx)", marginBottom: 8 }}>Watch Progress</div>
              {totalDur > 0 ? (
                <>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 7 }}>
                    <div style={{ fontSize: 24, fontWeight: 800, color: "var(--glt)" }}>
                      {Math.round((elapsed / totalDur) * 100)}%
                    </div>
                    <div />
                  </div>
                  <div className="bar" style={{ height: 7, marginBottom: 10 }}>
                    <div
                      className="bf"
                      style={{
                        height: "100%",
                        borderRadius: 3,
                        width: Math.round((elapsed / totalDur) * 100) + "%",
                        background: "linear-gradient(90deg,var(--gold),var(--glt))",
                        transition: "width .5s linear",
                      }}
                    />
                  </div>
                </>
              ) : null}

              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <button className="D-btn bg bsm" onClick={togglePlay} style={{ width: "100%" }}>
                  <i className="ti ti-player-play" /> {playing ? "Pause" : "Play"}
                </button>
                <button className="btn bn bsm" onClick={skipFwd} style={{ width: "100%" }}>
                  <i className="ti ti-player-track-next" /> +10s
                </button>
                <button
                  className="D-btn bg bfw"
                  onClick={claimVid}
                  style={{ background: "var(--grbg)", border: "1px solid var(--grd)", color: "var(--gr)" }}
                >
                  <i className="ti ti-star" /> Claim {VIDS[curVid].pts} Points!
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

