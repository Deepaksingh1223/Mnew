"use client";

import "../mudra-dashboard.css";
import { useState } from "react";

export default function InstagramTask() {
  const [showDetail, setShowDetail] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  
  // Tasks data with progress
  const [tasks, setTasks] = useState({
    ig1: { title: "Follow @MudraFinance", description: "Follow the official Mudra Instagram", points: 10, progress: 100, status: "done", type: "follow", stepsDone: 1, totalSteps: 1 },
    ig2: { title: "Like: Platform Launch Reel", description: "Like our launch reel", points: 5, progress: 100, status: "done", type: "like", stepsDone: 1, totalSteps: 1 },
    ig3: { title: "Like: MDR Token Infographic", description: "Like our MDR token explainer post", points: 5, progress: 0, status: "new", type: "like", stepsDone: 0, totalSteps: 1 },
    ig4: { title: "Share Story: Referral Code", description: "Share our referral template to your story", points: 12, progress: 50, status: "progress", type: "story", stepsDone: 1, totalSteps: 2 },
    ig5: { title: "Like: Rewards Feature Reel", description: "Like the rewards wallet highlight reel", points: 5, progress: 0, status: "new", type: "like", stepsDone: 0, totalSteps: 1 }
  });

  const [completedCount, setCompletedCount] = useState(() => {
    return Object.values(tasks).filter(t => t.status === "done").length;
  });

  const totalTasks = Object.keys(tasks).length;
  const completedPercentage = (completedCount / totalTasks) * 100;

  const go = (page) => {
    window.location.href = `/${page}`;
  };

  const openSoc = (taskId, platform) => {
    const task = tasks[taskId];
    if (task) {
      setSelectedTask({
        id: taskId,
        ...task
      });
      setShowDetail(true);
    }
  };

  const closeSoc = () => {
    setShowDetail(false);
    setSelectedTask(null);
  };

  const completeStep = (stepIndex) => {
    if (!selectedTask) return;
    
    const newStepsDone = stepIndex + 1;
    const newProgress = (newStepsDone / selectedTask.totalSteps) * 100;
    let newStatus = selectedTask.status;
    
    if (newStepsDone === selectedTask.totalSteps) {
      newStatus = "done";
    } else if (newStepsDone > 0) {
      newStatus = "progress";
    }
    
    // Update tasks state
    setTasks(prev => ({
      ...prev,
      [selectedTask.id]: {
        ...prev[selectedTask.id],
        stepsDone: newStepsDone,
        progress: newProgress,
        status: newStatus
      }
    }));
    
    // Update selected task
    setSelectedTask(prev => ({
      ...prev,
      stepsDone: newStepsDone,
      progress: newProgress,
      status: newStatus
    }));
    
    // Update completed count
    if (newStepsDone === selectedTask.totalSteps && selectedTask.status !== "done") {
      setCompletedCount(prev => prev + 1);
    }
  };

  const claimReward = () => {
    if (selectedTask && selectedTask.stepsDone === selectedTask.totalSteps) {
      alert(`🎉 Congratulations! You earned +${selectedTask.points} points!`);
      closeSoc();
    }
  };

  const getIcon = (type) => {
    switch(type) {
      case "follow":
        return <i className="ti ti-user-plus" style={{fontSize:"15px", color:"#fff"}} aria-hidden="true"></i>;
      case "like":
        return <i className="ti ti-heart" style={{fontSize:"15px", color:"#fff"}} aria-hidden="true"></i>;
      case "story":
        return <i className="ti ti-share-2" style={{fontSize:"15px", color:"#fff"}} aria-hidden="true"></i>;
      default:
        return <i className="ti ti-heart" style={{fontSize:"15px", color:"#fff"}} aria-hidden="true"></i>;
    }
  };

  // Render detail view
  const renderDetailView = () => {
    if (!showDetail || !selectedTask) return null;
    
    return (
      <div id="ig-detail" style={{display: "block", marginTop: "20px"}}>
        <div style={{display:"flex", alignItems:"center", gap:"9px", marginBottom:"12px", flexWrap:"wrap"}}>
          <button className="btn bn bsm" onClick={closeSoc}>
            <i className="ti ti-arrow-left"></i>Back
          </button>
          <div style={{fontSize:"13px", fontWeight:"600", color:"var(--tx)", flex:1, minWidth:0, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap"}}>
            {selectedTask.title}
          </div>
          <div className="pts" style={{flexShrink:0}}>+{selectedTask.points} pts</div>
        </div>
        
        <div style={{
          display:"grid", 
          gridTemplateColumns: "1.2fr 1fr", 
          gap:"12px"
        }}>
          <div className="card">
            <div style={{fontSize:"12px", fontWeight:"600", color:"var(--tx)", marginBottom:"10px"}}>Task Steps</div>
            
            {/* Step 1 */}
            <div className="step-i" style={{display:"flex", alignItems:"flex-start", gap:"10px", marginBottom: "15px"}}>
              <div style={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                background: selectedTask.stepsDone > 0 ? "var(--gr)" : (selectedTask.stepsDone === 0 ? "var(--glt)" : "var(--bg3)"),
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0
              }}>
                {selectedTask.stepsDone > 0 ? (
                  <i className="ti ti-check" style={{fontSize:"12px", color:"#fff"}}></i>
                ) : (
                  <span style={{fontSize:"11px", color: selectedTask.stepsDone === 0 ? "#fff" : "var(--tx3)"}}>1</span>
                )}
              </div>
              <div style={{flex: 1}}>
                <div style={{
                  fontSize: "13px",
                  fontWeight: selectedTask.stepsDone === 0 ? "600" : "normal",
                  color: selectedTask.stepsDone > 0 ? "var(--tx2)" : "var(--tx)"
                }}>
                  {selectedTask.type === "follow" && "Search and follow @MudraFinance on Instagram"}
                  {selectedTask.type === "like" && "Find the post and double-tap to like"}
                  {selectedTask.type === "story" && "Open the story template from our highlights"}
                </div>
                {selectedTask.stepsDone === 0 && (
                  <button 
                    className="btn bg bsm" 
                    style={{marginTop: "8px", fontSize: "11px"}}
                    onClick={() => completeStep(0)}
                  >
                    Complete Step 1
                  </button>
                )}
                {selectedTask.stepsDone > 0 && (
                  <div style={{fontSize: "11px", color: "var(--gr)", marginTop: "4px"}}>
                    ✓ Step completed
                  </div>
                )}
              </div>
            </div>
            
            {/* Step 2 - Only for story type */}
            {selectedTask.type === "story" && selectedTask.totalSteps >= 2 && (
              <div className="step-i" style={{display:"flex", alignItems:"flex-start", gap:"10px", marginBottom: "15px"}}>
                <div style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  background: selectedTask.stepsDone > 1 ? "var(--gr)" : (selectedTask.stepsDone === 1 ? "var(--glt)" : "var(--bg3)"),
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0
                }}>
                  {selectedTask.stepsDone > 1 ? (
                    <i className="ti ti-check" style={{fontSize:"12px", color:"#fff"}}></i>
                  ) : (
                    <span style={{fontSize:"11px", color: selectedTask.stepsDone === 1 ? "#fff" : "var(--tx3)"}}>2</span>
                  )}
                </div>
                <div style={{flex: 1}}>
                  <div style={{
                    fontSize: "13px",
                    fontWeight: selectedTask.stepsDone === 1 ? "600" : "normal",
                    color: selectedTask.stepsDone > 1 ? "var(--tx2)" : "var(--tx)"
                  }}>
                    Share the story to your feed with your referral code
                  </div>
                  {selectedTask.stepsDone === 1 && (
                    <button 
                      className="btn bg bsm" 
                      style={{marginTop: "8px", fontSize: "11px"}}
                      onClick={() => completeStep(1)}
                    >
                      Complete Step 2
                    </button>
                  )}
                  {selectedTask.stepsDone > 1 && (
                    <div style={{fontSize: "11px", color: "var(--gr)", marginTop: "4px"}}>
                      ✓ Step completed
                    </div>
                  )}
                </div>
              </div>
            )}
            
            {/* Completion Message */}
            {selectedTask.stepsDone === selectedTask.totalSteps && (
              <div style={{marginTop:"12px"}}>
                <div style={{background:"var(--grbg)", border:"1px solid var(--grd)", borderRadius:"9px", padding:"13px", textAlign:"center"}}>
                  <i className="ti ti-circle-check" style={{fontSize:"26px", color:"var(--gr)", display:"block", marginBottom:"5px"}} aria-hidden="true"></i>
                  <div style={{fontSize:"13px", fontWeight:"600", color:"var(--gr)"}}>Task Completed!</div>
                  <div style={{fontSize:"11px", color:"var(--tx3)", marginTop:"2px"}}>+{selectedTask.points} points are ready to claim!</div>
                </div>
              </div>
            )}
          </div>
          
          <div style={{display:"flex", flexDirection:"column", gap:"10px"}}>
            <div className="card">
              <div style={{fontSize:"12px", fontWeight:"600", color:"var(--tx)", marginBottom:"9px"}}>Your Progress</div>
              <div style={{display:"flex", justifyContent:"space-between", alignItems:"baseline", marginBottom:"7px", flexWrap:"wrap", gap:"5px"}}>
                <div style={{fontSize:"24px", fontWeight:"800", color:"var(--glt)"}}>
                  {Math.floor((selectedTask.stepsDone / selectedTask.totalSteps) * 100)}%
                </div>
                <div style={{fontSize:"11px", color:"var(--tx3)"}}>
                  Step {selectedTask.stepsDone} of {selectedTask.totalSteps}
                </div>
              </div>
              <div className="bar" style={{height:"7px", marginBottom:"10px"}}>
                <div style={{
                  height:"100%",
                  borderRadius:"3px",
                  width: `${(selectedTask.stepsDone / selectedTask.totalSteps) * 100}%`,
                  background:"linear-gradient(135deg, #f58529, #dd2a7b)",
                  transition:"width .4s"
                }}></div>
              </div>
              <div className="g2" style={{gap:"7px", display:"flex", justifyContent:"space-between"}}>
                <div className="mst">
                  <div className="mv" style={{color:"var(--gr)"}}>{selectedTask.stepsDone}</div>
                  <div className="ml">Steps Done</div>
                </div>
                <div className="mst">
                  <div className="mv" style={{color:"var(--am)"}}>{selectedTask.totalSteps - selectedTask.stepsDone}</div>
                  <div className="ml">Remaining</div>
                </div>
              </div>
            </div>
            
            <div className="card">
              <div style={{fontSize:"12px", fontWeight:"600", color:"var(--tx)", marginBottom:"9px"}}>Task Info</div>
              <div className="fr" style={{display:"flex", justifyContent:"space-between", marginBottom:"8px"}}>
                <span className="fk" style={{color:"var(--tx3)"}}>Platform</span>
                <span className="fv">Instagram</span>
              </div>
              <div className="fr" style={{display:"flex", justifyContent:"space-between", marginBottom:"8px"}}>
                <span className="fk" style={{color:"var(--tx3)"}}>Task Type</span>
                <span className="fv" style={{textTransform:"capitalize"}}>
                  {selectedTask.type === "follow" ? "Follow" : selectedTask.type === "like" ? "Like" : "Share Story"}
                </span>
              </div>
              <div className="fr" style={{display:"flex", justifyContent:"space-between", marginBottom:"8px"}}>
                <span className="fk" style={{color:"var(--tx3)"}}>Reward</span>
                <span className="fv" style={{color:"var(--glt)", fontWeight:"700"}}>+{selectedTask.points} pts</span>
              </div>
              <div className="fr" style={{display:"flex", justifyContent:"space-between"}}>
                <span className="fk" style={{color:"var(--tx3)"}}>Status</span>
                <span className={`pill ${selectedTask.stepsDone === selectedTask.totalSteps ? "pd" : "pp"}`}>
                  {selectedTask.stepsDone === selectedTask.totalSteps ? "Ready to Claim" : "In Progress"}
                </span>
              </div>
            </div>
            
            <div className="card">
              <div style={{fontSize:"12px", fontWeight:"600", color:"var(--tx)", marginBottom:"7px"}}>How It Works</div>
              <div style={{fontSize:"12px", color:"var(--tx2)", lineHeight:"1.65"}}>
                Complete each step in order on Instagram. Click <strong style={{color:"var(--tx)"}}>Claim Reward</strong> after completing all steps to verify and receive your points instantly.
              </div>
              <div style={{background:"linear-gradient(135deg, #f58529, #dd2a7b)", opacity:"0.1", borderRadius:"8px", padding:"10px", marginTop:"9px", display:"flex", alignItems:"center", gap:"8px"}}>
                <i className="ti ti-star" style={{fontSize:"19px", color:"#dd2a7b"}} aria-hidden="true"></i>
                <div>
                  <div style={{fontSize:"12px", fontWeight:"600", color:"#dd2a7b"}}>+{selectedTask.points} MDR Points</div>
                  <div style={{fontSize:"10px", color:"var(--tx3)"}}>Credited on completion</div>
                </div>
              </div>
            </div>
            
            {selectedTask.stepsDone === selectedTask.totalSteps && (
              <button 
                className="btn bg bfw" 
                onClick={claimReward}
                style={{
                  width:"100%", 
                  padding:"10px",
                  background:"linear-gradient(135deg, #f58529, #dd2a7b)",
                  border:"none"
                }}
              >
                <i className="ti ti-gift"></i>
                Claim Reward
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="pg on" id="pg-ig">
      <div className="pad">
        <div className="bc">
          <span onClick={() => go('home')}>Dashboard</span>
          <span>›</span>
          <span onClick={() => go('tasks')}>Loyalty Tasks</span>
          <span>›</span>
          <span className="cur">Instagram</span>
        </div>
        
        <div style={{display:"flex", alignItems:"center", gap:"10px", justifyContent:"space-between", flexWrap:"wrap"}}>
          <div style={{display:"flex", alignItems:"center", gap:"10px"}}>
            <div style={{width:"42px", height:"42px", borderRadius:"10px", background:"linear-gradient(135deg,#f58529,#dd2a7b)", display:"flex", alignItems:"center", justifyContent:"center"}}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="2.2"></rect>
                <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2"></circle>
                <circle cx="17.5" cy="6.5" r="1.5" fill="white"></circle>
              </svg>
            </div>
            <div>
              <div className="h1">Instagram Tasks</div>
              <div className="sub">Follow, like reels and share stories</div>
            </div>
          </div>
          <span className="pill pn">{completedCount} / {totalTasks} Completed</span>
        </div>
        
        <div className="bar" style={{height:"6px"}}>
          <div className="bf" style={{width:`${completedPercentage}%`, background:"linear-gradient(90deg, #f58529, #dd2a7b)"}}></div>
        </div>
        
        <div id="ig-list" style={{display:"flex", flexDirection:"column", gap:"8px"}}>
          {/* Task 1 - Follow @MudraFinance (Done) */}
          <div className={`tr ${tasks.ig1.status === "done" ? "dn2" : ""}`} id="srig1">
            <div className="tico" style={{background:"#dd2a7b"}}>
              <i className="ti ti-user-plus" style={{fontSize:"15px", color:"#fff"}} aria-hidden="true"></i>
            </div>
            <div className="tb">
              <div className="tt">Follow @MudraFinance</div>
              <div className="td">Follow the official Mudra Instagram</div>
              <div className="tpg">
                <div className="bar" style={{flex:1}}>
                  <div className="bf" id="sbig1" style={{width:`${tasks.ig1.progress}%`}}></div>
                </div>
                <span className="tpct" id="spig1">{tasks.ig1.progress}%</span>
              </div>
            </div>
            <div className="tr-r">
              <div className="pts">+{tasks.ig1.points} pts</div>
              <span className="pill pd"><i className="ti ti-check"></i>Done</span>
            </div>
          </div>
          
          {/* Task 2 - Like: Platform Launch Reel (Done) */}
          <div className={`tr ${tasks.ig2.status === "done" ? "dn2" : ""}`} id="srig2">
            <div className="tico" style={{background:"#dd2a7b"}}>
              <i className="ti ti-heart" style={{fontSize:"15px", color:"#fff"}} aria-hidden="true"></i>
            </div>
            <div className="tb">
              <div className="tt">Like: Platform Launch Reel</div>
              <div className="td">Like our launch reel</div>
              <div className="tpg">
                <div className="bar" style={{flex:1}}>
                  <div className="bf" id="sbig2" style={{width:`${tasks.ig2.progress}%`}}></div>
                </div>
                <span className="tpct" id="spig2">{tasks.ig2.progress}%</span>
              </div>
            </div>
            <div className="tr-r">
              <div className="pts">+{tasks.ig2.points} pts</div>
              <span className="pill pd"><i className="ti ti-check"></i>Done</span>
            </div>
          </div>
          
          {/* Task 3 - Like: MDR Token Infographic (New) */}
          <div className={`tr ${tasks.ig3.status === "done" ? "dn2" : ""}`} id="srig3">
            <div className="tico" style={{background:"#dd2a7b"}}>
              <i className="ti ti-heart" style={{fontSize:"15px", color:"#fff"}} aria-hidden="true"></i>
            </div>
            <div className="tb">
              <div className="tt">Like: MDR Token Infographic</div>
              <div className="td">Like our MDR token explainer post</div>
              <div className="tpg">
                <div className="bar" style={{flex:1}}>
                  <div className="bf" id="sbig3" style={{width:`${tasks.ig3.progress}%`}}></div>
                </div>
                <span className="tpct" id="spig3">{tasks.ig3.progress}%</span>
              </div>
            </div>
            <div className="tr-r">
              <div className="pts">+{tasks.ig3.points} pts</div>
              {tasks.ig3.status === "new" && (
                <>
                  <span className="pill pn"><i className="ti ti-sparkles"></i>New</span>
                  <button className="btn bg bxs" style={{marginTop:"3px", fontSize:"11px"}} onClick={() => openSoc('ig3','ig')}>Start Task</button>
                </>
              )}
            </div>
          </div>
          
          {/* Task 4 - Share Story: Referral Code (In Progress) */}
          <div className={`tr ${tasks.ig4.status === "progress" ? "act" : ""} ${tasks.ig4.status === "done" ? "dn2" : ""}`} id="srig4">
            <div className="tico" style={{background:"#dd2a7b"}}>
              <i className="ti ti-share-2" style={{fontSize:"15px", color:"#fff"}} aria-hidden="true"></i>
            </div>
            <div className="tb">
              <div className="tt">Share Story: Referral Code</div>
              <div className="td">Share our referral template to your story</div>
              <div className="tpg">
                <div className="bar" style={{flex:1}}>
                  <div className="bf" id="sbig4" style={{width:`${tasks.ig4.progress}%`}}></div>
                </div>
                <span className="tpct" id="spig4">{tasks.ig4.progress}%</span>
              </div>
            </div>
            <div className="tr-r">
              <div className="pts">+{tasks.ig4.points} pts</div>
              {tasks.ig4.status === "progress" && (
                <>
                  <span className="pill pp"><i className="ti ti-clock"></i>Progress</span>
                  <button className="btn bo bxs" style={{marginTop:"3px", fontSize:"11px"}} onClick={() => openSoc('ig4','ig')}>Continue</button>
                </>
              )}
            </div>
          </div>
          
          {/* Task 5 - Like: Rewards Feature Reel (New) */}
          <div className={`tr ${tasks.ig5.status === "done" ? "dn2" : ""}`} id="srig5">
            <div className="tico" style={{background:"#dd2a7b"}}>
              <i className="ti ti-heart" style={{fontSize:"15px", color:"#fff"}} aria-hidden="true"></i>
            </div>
            <div className="tb">
              <div className="tt">Like: Rewards Feature Reel</div>
              <div className="td">Like the rewards wallet highlight reel</div>
              <div className="tpg">
                <div className="bar" style={{flex:1}}>
                  <div className="bf" id="sbig5" style={{width:`${tasks.ig5.progress}%`}}></div>
                </div>
                <span className="tpct" id="spig5">{tasks.ig5.progress}%</span>
              </div>
            </div>
            <div className="tr-r">
              <div className="pts">+{tasks.ig5.points} pts</div>
              {tasks.ig5.status === "new" && (
                <>
                  <span className="pill pn"><i className="ti ti-sparkles"></i>New</span>
                  <button className="btn bg bxs" style={{marginTop:"3px", fontSize:"11px"}} onClick={() => openSoc('ig5','ig')}>Start Task</button>
                </>
              )}
            </div>
          </div>
        </div>
        
        {/* Render detail view */}
        {renderDetailView()}
      </div>
    </div>
  );
}