"use client";

import "../mudra-dashboard.css";
import { useEffect, useState, useRef } from "react";

export default function YouTubeTask() {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [watchedPercent, setWatchedPercent] = useState(0);
  const [completedCount, setCompletedCount] = useState(4);
  const [showPlayer, setShowPlayer] = useState(false);
  
  const videoRef = useRef(null);
  const intervalRef = useRef(null);

  // Video data with WORKING video URLs (public sample videos that definitely work)
  const videos = {
    v1: { 
      title: "Mudra Platform Overview", 
      duration: "0:30", 
      durationSec: 30, 
      points: 12, 
      progress: 100, 
      status: "done", 
      type: "video",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    v2: { 
      title: "How to Convert Crypto to Fiat", 
      duration: "0:30", 
      durationSec: 30, 
      points: 15, 
      progress: 60, 
      status: "progress", 
      type: "video",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    v3: { 
      title: "MDR Token Explained", 
      duration: "0:30", 
      durationSec: 30, 
      points: 12, 
      progress: 0, 
      status: "new", 
      type: "video",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    v4: { 
      title: "Loyalty Rewards Deep Dive", 
      duration: "0:30", 
      durationSec: 30, 
      points: 15, 
      progress: 0, 
      status: "new", 
      type: "video",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    v5: { 
      title: "Subscribe to Mudra Channel", 
      duration: "N/A", 
      durationSec: 0, 
      points: 20, 
      progress: 100, 
      status: "done", 
      type: "subscribe" 
    },
    v6: { 
      title: "Like: Mudra Launch Video", 
      duration: "N/A", 
      durationSec: 0, 
      points: 5, 
      progress: 100, 
      status: "done", 
      type: "like" 
    }
  };

  const go = (page) => {
    window.location.href = `/${page}`;
  };

  const formatTime = (seconds) => {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const openVid = (videoId) => {
    const video = videos[videoId];
    if (video && video.type === "video") {
      // Clear existing interval
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      
      setCurrentVideo({ id: videoId, ...video });
      setCurrentTime((video.progress / 100) * video.durationSec);
      setWatchedPercent(video.progress);
      setIsPlaying(false);
      setShowPlayer(true);
    }
  };

  const closeVid = () => {
    setShowPlayer(false);
    setCurrentVideo(null);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const skipFwd = () => {
    if (videoRef.current && currentVideo) {
      videoRef.current.currentTime = Math.min(videoRef.current.currentTime + 10, currentVideo.durationSec);
    }
  };

  const skipBack = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = Math.max(videoRef.current.currentTime - 10, 0);
    }
  };

  const seekV = (event, element) => {
    if (!videoRef.current || !currentVideo) return;
    
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const width = rect.width;
    const percentage = x / width;
    const newTime = percentage * currentVideo.durationSec;
    videoRef.current.currentTime = newTime;
  };

  const updateProgress = () => {
    if (videoRef.current && currentVideo) {
      const time = videoRef.current.currentTime;
      setCurrentTime(time);
      const percent = (time / currentVideo.durationSec) * 100;
      const newPercent = Math.min(percent, 100);
      setWatchedPercent(newPercent);
      
      if (newPercent > videos[currentVideo.id].progress) {
        videos[currentVideo.id].progress = Math.floor(newPercent);
        if (newPercent > 0 && videos[currentVideo.id].status === "new") {
          videos[currentVideo.id].status = "progress";
        }
      }
      
      if (newPercent >= 80 && videos[currentVideo.id].progress < 100 && videos[currentVideo.id].status !== "done") {
        videos[currentVideo.id].progress = 100;
        videos[currentVideo.id].status = "done";
        setCompletedCount(prev => prev + 1);
      }
    }
  };

  useEffect(() => {
    if (videoRef.current && currentVideo) {
      const video = videoRef.current;
      
      const handleTimeUpdate = () => {
        updateProgress();
      };
      
      const handleEnded = () => {
        setIsPlaying(false);
        if (videos[currentVideo.id].progress < 100) {
          videos[currentVideo.id].progress = 100;
          videos[currentVideo.id].status = "done";
          setCompletedCount(prev => prev + 1);
          setWatchedPercent(100);
        }
      };
      
      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);
      
      video.addEventListener('timeupdate', handleTimeUpdate);
      video.addEventListener('ended', handleEnded);
      video.addEventListener('play', handlePlay);
      video.addEventListener('pause', handlePause);
      
      // Set initial time
      const startTime = (currentVideo.progress / 100) * currentVideo.durationSec;
      video.currentTime = startTime;
      
      return () => {
        video.removeEventListener('timeupdate', handleTimeUpdate);
        video.removeEventListener('ended', handleEnded);
        video.removeEventListener('play', handlePlay);
        video.removeEventListener('pause', handlePause);
      };
    }
  }, [currentVideo]);

  const claimReward = () => {
    if (watchedPercent >= 80 && currentVideo && videos[currentVideo.id].status !== "done") {
      alert(`🎉 You earned +${currentVideo.points} points!`);
      videos[currentVideo.id].status = "done";
      videos[currentVideo.id].progress = 100;
      setCompletedCount(prev => prev + 1);
      setWatchedPercent(100);
      closeVid();
    } else if (watchedPercent >= 80 && currentVideo && videos[currentVideo.id].status === "done") {
      alert("✅ Reward already claimed for this video!");
      closeVid();
    } else {
      const remaining = Math.floor(80 - watchedPercent);
      alert(`Watch ${remaining}% more to claim reward!`);
    }
  };

  const totalTasks = Object.keys(videos).length;
  const completedPercentage = (completedCount / totalTasks) * 100;
  const remainingTime = currentVideo ? Math.max(0, currentVideo.durationSec - currentTime) : 0;

  return (
    <div className="pg on" id="pg-yt">
      <div className="pad">
        <div className="bc">
          <span onClick={() => go('home')}>Dashboard</span>
          <span>›</span>
          <span onClick={() => go('tasks')}>Loyalty Tasks</span>
          <span>›</span>
          <span className="cur">YouTube</span>
        </div>
        
        <div style={{display:"flex", alignItems:"center", gap:"10px", justifyContent:"space-between", flexWrap:"wrap"}}>
          <div style={{display:"flex", alignItems:"center", gap:"10px"}}>
            <div style={{width:"42px", height:"42px", borderRadius:"10px", background:"#FF0000", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0}}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M23 7s-.3-2-1.2-2.8c-1.1-1.2-2.4-1.2-3-1.3C16.2 2.8 12 2.8 12 2.8s-4.2 0-6.8.1c-.6.1-1.9.1-3 1.3C1.3 5 1 7 1 7S.7 9.1.7 11.2v2c0 2 .3 4.2.3 4.2s.3 2 1.2 2.8c1.1 1.2 2.6 1.1 3.3 1.2C7.3 21.5 12 21.5 12 21.5s4.2 0 6.8-.2c.6-.1 1.9-.1 3-1.2.9-.8 1.2-2.8 1.2-2.8s.3-2.1.3-4.2v-2C23.3 9.1 23 7 23 7zM9.7 15.5V8.4l6.5 3.6-6.5 3.5z"></path>
              </svg>
            </div>
            <div>
              <div className="h1">YouTube Tasks</div>
              <div className="sub">Watch, like and subscribe to earn MDR points</div>
            </div>
          </div>
          <span className="pill pd">{completedCount} / {totalTasks} Completed</span>
        </div>
        
        <div className="bar" style={{height:"6px"}}>
          <div className="bf" style={{width:`${completedPercentage}%`}}></div>
        </div>
        
        {/* YouTube Tasks List */}
        <div id="yt-list" style={{display:"flex", flexDirection:"column", gap:"8px"}}>
          {/* Task 1 - Done */}
          <div className="tr dn2" id="yrv1">
            <div className="tico" style={{background:"#FF0000"}}>
              <i className="ti ti-player-play" style={{fontSize:"15px", color:"#fff"}} aria-hidden="true"></i>
            </div>
            <div className="tb">
              <div className="tt">Mudra Platform Overview</div>
              <div className="td">Complete dashboard walkthrough · 0:30</div>
              <div className="tpg">
                <div className="bar" style={{flex:1}}>
                  <div className="bf" id="ybv1" style={{width:"100%"}}></div>
                </div>
                <span className="tpct" id="ypv1">100%</span>
              </div>
            </div>
            <div className="tr-r">
              <div className="pts">+12 pts</div>
              <span className="pill pd"><i className="ti ti-check"></i>Done</span>
            </div>
          </div>
          
          {/* Task 2 - In Progress */}
          <div className="tr act" id="yrv2">
            <div className="tico" style={{background:"#FF0000"}}>
              <i className="ti ti-player-play" style={{fontSize:"15px", color:"#fff"}} aria-hidden="true"></i>
            </div>
            <div className="tb">
              <div className="tt">How to Convert Crypto to Fiat</div>
              <div className="td">Step-by-step exchange guide · 0:30</div>
              <div className="tpg">
                <div className="bar" style={{flex:1}}>
                  <div className="bf" id="ybv2" style={{width:"60%"}}></div>
                </div>
                <span className="tpct" id="ypv2">60%</span>
              </div>
            </div>
            <div className="tr-r">
              <div className="pts">+15 pts</div>
              <span className="pill pp"><i className="ti ti-clock"></i>Progress</span>
              <button className="btn bo bxs" style={{marginTop:"3px", fontSize:"11px"}} onClick={() => openVid('v2')}>Continue</button>
            </div>
          </div>
          
          {/* Task 3 - New */}
          <div className="tr" id="yrv3">
            <div className="tico" style={{background:"#FF0000"}}>
              <i className="ti ti-player-play" style={{fontSize:"15px", color:"#fff"}} aria-hidden="true"></i>
            </div>
            <div className="tb">
              <div className="tt">MDR Token Explained</div>
              <div className="td">MDR tokenomics and utility · 0:30</div>
              <div className="tpg">
                <div className="bar" style={{flex:1}}>
                  <div className="bf" id="ybv3" style={{width:"0%"}}></div>
                </div>
                <span className="tpct" id="ypv3">0%</span>
              </div>
            </div>
            <div className="tr-r">
              <div className="pts">+12 pts</div>
              <span className="pill pn"><i className="ti ti-sparkles"></i>New</span>
              <button className="btn bg bxs" style={{marginTop:"3px", fontSize:"11px"}} onClick={() => openVid('v3')}>Watch</button>
            </div>
          </div>
          
          {/* Task 4 - New */}
          <div className="tr" id="yrv4">
            <div className="tico" style={{background:"#FF0000"}}>
              <i className="ti ti-player-play" style={{fontSize:"15px", color:"#fff"}} aria-hidden="true"></i>
            </div>
            <div className="tb">
              <div className="tt">Loyalty Rewards Deep Dive</div>
              <div className="td">Earn and redeem points guide · 0:30</div>
              <div className="tpg">
                <div className="bar" style={{flex:1}}>
                  <div className="bf" id="ybv4" style={{width:"0%"}}></div>
                </div>
                <span className="tpct" id="ypv4">0%</span>
              </div>
            </div>
            <div className="tr-r">
              <div className="pts">+15 pts</div>
              <span className="pill pn"><i className="ti ti-sparkles"></i>New</span>
              <button className="btn bg bxs" style={{marginTop:"3px", fontSize:"11px"}} onClick={() => openVid('v4')}>Watch</button>
            </div>
          </div>
          
          {/* Task 5 - Subscribe Done */}
          <div className="tr dn2" id="yrv5">
            <div className="tico" style={{background:"#FF0000"}}>
              <i className="ti ti-bell" style={{fontSize:"15px", color:"#fff"}} aria-hidden="true"></i>
            </div>
            <div className="tb">
              <div className="tt">Subscribe to Mudra Channel</div>
              <div className="td">Stay updated with Mudra content</div>
              <div className="tpg">
                <div className="bar" style={{flex:1}}>
                  <div className="bf" id="ybv5" style={{width:"100%"}}></div>
                </div>
                <span className="tpct" id="ypv5">100%</span>
              </div>
            </div>
            <div className="tr-r">
              <div className="pts">+20 pts</div>
              <span className="pill pd"><i className="ti ti-check"></i>Done</span>
            </div>
          </div>
          
          {/* Task 6 - Like Done */}
          <div className="tr dn2" id="yrv6">
            <div className="tico" style={{background:"#FF0000"}}>
              <i className="ti ti-heart" style={{fontSize:"15px", color:"#fff"}} aria-hidden="true"></i>
            </div>
            <div className="tb">
              <div className="tt">Like: Mudra Launch Video</div>
              <div className="td">Like our official launch video</div>
              <div className="tpg">
                <div className="bar" style={{flex:1}}>
                  <div className="bf" id="ybv6" style={{width:"100%"}}></div>
                </div>
                <span className="tpct" id="ypv6">100%</span>
              </div>
            </div>
            <div className="tr-r">
              <div className="pts">+5 pts</div>
              <span className="pill pd"><i className="ti ti-check"></i>Done</span>
            </div>
          </div>
        </div>
        
        {/* Video Player - Responsive for mobile */}
        {showPlayer && currentVideo && (
          <div id="yt-player" style={{display:"block"}}>
            <div className="card">
              <div style={{display:"flex", alignItems:"center", gap:"9px", marginBottom:"12px", flexWrap:"wrap"}}>
                <button className="btn bn bsm" onClick={closeVid}>
                  <i className="ti ti-arrow-left"></i>Back to List
                </button>
                <div style={{fontSize:"13px", fontWeight:"600", color:"var(--tx)"}}>{currentVideo.title}</div>
              </div>
              
              <div style={{
                display:"grid", 
                gridTemplateColumns: "1.4fr 1fr", 
                gap:"14px"
              }}>
                <div>
                  <div className="vid-wrap">
                    <video
                      ref={videoRef}
                      className="vid-screen"
                      style={{width:"100%", borderRadius:"10px", background:"#000"}}
                      onClick={togglePlay}
                      src={currentVideo.videoUrl}
                    />
                    <div className="vc">
                      <button className="vc-btn" onClick={togglePlay} aria-label="Play/Pause">
                        <i className={`ti ti-player-${isPlaying ? "pause" : "play"}`} id="pico"></i>
                      </button>
                      <span className="vct" id="et">{formatTime(currentTime)}</span>
                      <div className="vc-bar" onClick={(e) => seekV(e, e.currentTarget)}>
                        <div className="vc-prog" id="vpr" style={{width:`${(currentTime / currentVideo.durationSec) * 100}%`}}></div>
                      </div>
                      <span className="vct">{currentVideo.duration}</span>
                    </div>
                  </div>
                  
                  <div style={{fontSize:"12.5px", fontWeight:"500", color:"var(--tx)", marginBottom:"2px"}}>{currentVideo.title}</div>
                  <div style={{fontSize:"11px", color:"var(--tx3)", marginBottom:"10px"}}>Mudra Official · YouTube · {currentVideo.duration}</div>
                  
                  <div style={{display:"flex", gap:"7px", flexWrap:"wrap"}}>
                    <button className="btn bg bsm" onClick={togglePlay} id="ppb">
                      <i className={`ti ti-player-${isPlaying ? "pause" : "play"}`}></i>
                      {isPlaying ? "Pause" : "Play"}
                    </button>
                    <button className="btn bn bsm" onClick={skipBack}>
                      <i className="ti ti-player-track-prev"></i>-10s
                    </button>
                    <button className="btn bn bsm" onClick={skipFwd}>
                      <i className="ti ti-player-track-next"></i>+10s
                    </button>
                  </div>
                </div>
                
                <div style={{display:"flex", flexDirection:"column", gap:"10px"}}>
                  <div className="card">
                    <div style={{fontSize:"12px", fontWeight:"600", color:"var(--tx)", marginBottom:"9px"}}>Watch Progress</div>
                    <div style={{display:"flex", justifyContent:"space-between", alignItems:"baseline", marginBottom:"7px", flexWrap:"wrap", gap:"5px"}}>
                      <div style={{fontSize:"24px", fontWeight:"800", color:"var(--glt)"}} id="wpc">{Math.floor(watchedPercent)}%</div>
                      <div id="wst">
                        <span className={`pill ${watchedPercent >= 80 ? "pd" : watchedPercent > 0 ? "pp" : "pn"}`}>
                          {watchedPercent >= 80 ? "Completed" : watchedPercent > 0 ? "In Progress" : "Not started"}
                        </span>
                      </div>
                    </div>
                    <div className="bar" style={{height:"7px", marginBottom:"10px"}}>
                      <div id="wpb" style={{height:"100%", borderRadius:"3px", width:`${watchedPercent}%`, background:"linear-gradient(90deg,var(--gold),var(--glt))", transition:"width .5s linear"}}></div>
                    </div>
                    <div className="g2" style={{gap:"7px", display:"flex", justifyContent:"space-between"}}>
                      <div className="mst">
                        <div className="mv" id="wt" style={{fontFamily:"monospace"}}>{formatTime(currentTime)}</div>
                        <div className="ml">Watched</div>
                      </div>
                      <div className="mst">
                        <div className="mv" id="wr" style={{fontFamily:"monospace", color:"var(--am)"}}>{formatTime(remainingTime)}</div>
                        <div className="ml">Remaining</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="card">
                    <div style={{fontSize:"12px", fontWeight:"600", color:"var(--tx)", marginBottom:"9px"}}>Reward</div>
                    <div style={{display:"flex", alignItems:"center", gap:"9px", marginBottom:"9px", flexWrap:"wrap"}}>
                      <div style={{width:"34px", height:"34px", borderRadius:"8px", background:"var(--gdim)", border:"1px solid var(--gbdr)", display:"flex", alignItems:"center", justifyContent:"center", color:"var(--glt)", fontSize:"18px"}}>
                        <i className="ti ti-star" aria-hidden="true"></i>
                      </div>
                      <div>
                        <div style={{fontSize:"19px", fontWeight:"700", color:"var(--glt)"}}>+{currentVideo.points} pts</div>
                        <div style={{fontSize:"10px", color:"var(--tx3)"}}>On completion</div>
                      </div>
                    </div>
                    <div style={{fontSize:"11px", color:"var(--tx2)", lineHeight:"1.65", marginBottom:"10px"}}>
                      Watch at least <strong style={{color:"var(--tx)"}}>80%</strong> of the video to unlock your reward.
                    </div>
                    <div id="ca">
                      <button 
                        className={`btn bg bfw ${watchedPercent >= 80 ? "" : "disabled"}`} 
                        id="cbd" 
                        disabled={watchedPercent < 80}
                        style={{opacity: watchedPercent >= 80 ? 1 : 0.38, cursor: watchedPercent >= 80 ? "pointer" : "not-allowed", width:"100%"}}
                        onClick={claimReward}
                      >
                        <i className={`ti ti-${watchedPercent >= 80 ? "gift" : "lock"}`}></i>
                        {watchedPercent >= 80 ? "Claim Reward" : "Watch to Unlock"}
                      </button>
                    </div>
                  </div>
                  
                  {/* Up Next Section - Click any video to switch! */}
                  <div className="card">
                    <div style={{fontSize:"12px", fontWeight:"600", color:"var(--tx)", marginBottom:"9px"}}>Up Next</div>
                    {Object.keys(videos).filter(id => id !== currentVideo.id && videos[id].type === "video").map(id => (
                      <div 
                        key={id} 
                        style={{
                          display:"flex", 
                          alignItems:"center", 
                          gap:"8px", 
                          cursor:"pointer", 
                          padding:"7px 9px", 
                          background:"var(--sf3)", 
                          borderRadius:"7px", 
                          border:"1px solid var(--bd)", 
                          marginBottom:"5px", 
                          flexWrap:"wrap",
                          transition: "all 0.2s ease"
                        }}
                        onClick={() => openVid(id)}
                        onMouseEnter={(e) => e.currentTarget.style.background = "var(--sf4)"}
                        onMouseLeave={(e) => e.currentTarget.style.background = "var(--sf3)"}
                      >
                        <div style={{width:"24px", height:"24px", borderRadius:"5px", background:"#FF0000", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0}}>
                          <i className="ti ti-player-play" style={{fontSize:"12px", color:"#fff"}} aria-hidden="true"></i>
                        </div>
                        <div style={{flex:1, minWidth:0}}>
                          <div style={{fontSize:"11px", fontWeight:"500", color:"var(--tx)", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap"}}>{videos[id].title}</div>
                          <div style={{fontSize:"10px", color:"var(--tx3)"}}>{videos[id].duration} · +{videos[id].points} pts</div>
                        </div>
                        <span className={`pill ${videos[id].status === "done" ? "pd" : videos[id].status === "progress" ? "pp" : "pn"}`} style={{fontSize:"9px", padding:"2px 6px"}}>
                          {videos[id].status === "done" ? "Done" : videos[id].status === "progress" ? "Resume" : "New"}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          #yt-player .card > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}