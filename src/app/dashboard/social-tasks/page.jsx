"use client";

import SocialTasksPage from "../components/pages/SocialTasksPage";

// This page is statically prerendered during `next build`.
// The underlying SocialTasksPage expects data props (SOC/PIDS/PCOL/etc).
// Provide safe defaults so prerender never crashes.
export default function SocialTask() {
  const platformKey = "fb";

  const SOC = {
    // minimal structure required by SocialTasksPage
    fb_1: {
      t: "Sample Facebook Task",
      d: "Loading social task data...",
      k: "like",
      pts: 10,
      st: "new",
      cs: 0,
      s: ["Sample step 1", "Sample step 2"],
    },
  };

  const PIDS = {
    fb: ["fb_1"],
    ig: [],
    tw: [],
    li: [],
  };

  const PCOL = {
    fb: "#1877F2",
    ig: "linear-gradient(135deg,#f58529,#dd2a7b)",
    tw: "#1DA1F2",
    li: "#0077B5",
  };

  const socialState = {};
  const openSocId = null;
  const openSocPlatform = null;

  const noop = () => {};

  return (
    <SocialTasksPage
      platformKey={platformKey}
      onGo={noop}
      onToast={noop}
      SOC={SOC}
      PIDS={PIDS}
      PCOL={PCOL}
      socialState={socialState}
      openSocId={openSocId}
      openSocPlatform={openSocPlatform}
      onOpenTask={noop}
      onCloseTask={noop}
      onAdvanceStep={noop}
    />
  );
}

