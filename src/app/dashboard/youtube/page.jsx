"use client";

import YouTubeTasksPage from "../components/pages/YouTubeTasksPage";

// Provide safe defaults for build-time prerender.
export default function YouTubeTask() {
  const VIDS = {
    yt_1: {
      id: "yt_1",
      title: "Sample YouTube Task",
      desc: "Watch the video",
      dur: 120,
      pts: 10,
      st: "new",
      pr: 0,
      type: undefined,
      s: [],
    },
  };

  const videoState = {};

  const curVid = null;
  const elapsed = 0;
  const totalDur = 0;
  const playing = false;

  const fmt = (sec) => {
    if (!Number.isFinite(sec)) return "0:00";
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${String(s).padStart(2, "0")}`;
  };

  const noop = () => {};

  const openVid = noop;
  const closeVid = noop;
  const togglePlay = noop;
  const skipFwd = noop;
  const seek = noop;
  const claimVid = noop;

  return (
    <YouTubeTasksPage
      onGo={noop}
      onToast={noop}
      VIDS={VIDS}
      videoState={videoState}
      curVid={curVid}
      elapsed={elapsed}
      totalDur={totalDur}
      playing={playing}
      fmt={fmt}
      openVid={openVid}
      closeVid={closeVid}
      togglePlay={togglePlay}
      skipFwd={skipFwd}
      seek={seek}
      claimVid={claimVid}
    />
  );
}

