"use client";

import "../mudra-dashboard.css";
import { useState } from "react";

export default function TwitterTask() {
  const [showDetail, setShowDetail] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  
  // Tasks data with progress
  const [tasks, setTasks] = useState({
    tw1: { title: "Follow @MudraFinance", description: "Follow official Mudra X account", points: 8, progress: 100, status: "done", type: "follow", stepsDone: 1, totalSteps: 1 },
    tw2: { title: "Retweet: Platform Launch Tweet", description: "Retweet our platform launch", points: 10, progress: 100, status: "done", type: "retweet", stepsDone: 1, totalSteps: 1 },
    tw3: { title: "Reply: Introduce Yourself", description: "Reply to our community intro tweet", points: 7, progress: 25, status: "progress", type: "reply", stepsDone: 1, totalSteps: 4 },
    tw4: { title: "Retweet: MDR Token Tweet", description: "Retweet the MDR token listing", points: 10, progress: 0, status: "new", type: "retweet", stepsDone: 0, totalSteps: 1 },
    tw5: { title: "Like: Crypto Exchange Thread", description: "Like our thread on crypto conversion", points: 5, progress: 0, status: "new", type: "like", stepsDone: 0, totalSteps: 1 }
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
      case "retweet":
        return <i className="ti ti-repeat" style={{fontSize:"15px", color:"#fff"}} aria-hidden="true"></i>;
      case "reply":
        return <i className="ti ti-arrow-back-up" style={{fontSize:"15px", color:"#fff"}} aria-hidden="true"></i>;
      case "like":
        return <i className="ti ti-heart" style={{fontSize:"15px", color:"#fff"}} aria-hidden="true"></i>;
      default:
        return <i className="ti ti-heart" style={{fontSize:"15px", color:"#fff"}} aria-hidden="true"></i>;
    }
  };

  // Render detail view
  const renderDetailView = () => {
    if (!showDetail || !selectedTask) return null;
    
    return (
      <div id="tw-detail" style={{display: "block", marginTop: "20px"}}>
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
                  {selectedTask.type === "follow" && "Search and follow @MudraFinance on X/Twitter"}
                  {selectedTask.type === "retweet" && "Find the tweet and click Retweet button"}
                  {selectedTask.type === "reply" && "Open the community intro tweet"}
                  {selectedTask.type === "like" && "Find the thread and click Like button"}
                </div>
                {selectedTask.stepsDone === 0 && (
                  <button 
                    className="btn bg bsm" 
                    style={{marginTop: "8px", fontSize: "11px", background: "#1DA1F2"}}
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
            
            {/* Step 2 - For reply type */}
            {selectedTask.type === "reply" && selectedTask.totalSteps >= 2 && (
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
                    Write a thoughtful reply (minimum 10 words)
                  </div>
                  {selectedTask.stepsDone === 1 && (
                    <button 
                      className="btn bg bsm" 
                      style={{marginTop: "8px", fontSize: "11px", background: "#1DA1F2"}}
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
            
            {/* Step 3 - For reply type */}
            {selectedTask.type === "reply" && selectedTask.totalSteps >= 3 && (
              <div className="step-i" style={{display:"flex", alignItems:"flex-start", gap:"10px", marginBottom: "15px"}}>
                <div style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  background: selectedTask.stepsDone > 2 ? "var(--gr)" : (selectedTask.stepsDone === 2 ? "var(--glt)" : "var(--bg3)"),
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0
                }}>
                  {selectedTask.stepsDone > 2 ? (
                    <i className="ti ti-check" style={{fontSize:"12px", color:"#fff"}}></i>
                  ) : (
                    <span style={{fontSize:"11px", color: selectedTask.stepsDone === 2 ? "#fff" : "var(--tx3)"}}>3</span>
                  )}
                </div>
                <div style={{flex: 1}}>
                  <div style={{
                    fontSize: "13px",
                    fontWeight: selectedTask.stepsDone === 2 ? "600" : "normal",
                    color: selectedTask.stepsDone > 2 ? "var(--tx2)" : "var(--tx)"
                  }}>
                    Include relevant hashtags (#Mudra #Crypto)
                  </div>
                  {selectedTask.stepsDone === 2 && (
                    <button 
                      className="btn bg bsm" 
                      style={{marginTop: "8px", fontSize: "11px", background: "#1DA1F2"}}
                      onClick={() => completeStep(2)}
                    >
                      Complete Step 3
                    </button>
                  )}
                  {selectedTask.stepsDone > 2 && (
                    <div style={{fontSize: "11px", color: "var(--gr)", marginTop: "4px"}}>
                      ✓ Step completed
                    </div>
                  )}
                </div>
              </div>
            )}
            
            {/* Step 4 - For reply type */}
            {selectedTask.type === "reply" && selectedTask.totalSteps >= 4 && (
              <div className="step-i" style={{display:"flex", alignItems:"flex-start", gap:"10px", marginBottom: "15px"}}>
                <div style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  background: selectedTask.stepsDone > 3 ? "var(--gr)" : (selectedTask.stepsDone === 3 ? "var(--glt)" : "var(--bg3)"),
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0
                }}>
                  {selectedTask.stepsDone > 3 ? (
                    <i className="ti ti-check" style={{fontSize:"12px", color:"#fff"}}></i>
                  ) : (
                    <span style={{fontSize:"11px", color: selectedTask.stepsDone === 3 ? "#fff" : "var(--tx3)"}}>4</span>
                  )}
                </div>
                <div style={{flex: 1}}>
                  <div style={{
                    fontSize: "13px",
                    fontWeight: selectedTask.stepsDone === 3 ? "600" : "normal",
                    color: selectedTask.stepsDone > 3 ? "var(--tx2)" : "var(--tx)"
                  }}>
                    Click Reply to submit your response
                  </div>
                  {selectedTask.stepsDone === 3 && (
                    <button 
                      className="btn bg bsm" 
                      style={{marginTop: "8px", fontSize: "11px", background: "#1DA1F2"}}
                      onClick={() => completeStep(3)}
                    >
                      Complete Step 4
                    </button>
                  )}
                  {selectedTask.stepsDone > 3 && (
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
                  background:"#1DA1F2",
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
                <span className="fv">X / Twitter</span>
              </div>
              <div className="fr" style={{display:"flex", justifyContent:"space-between", marginBottom:"8px"}}>
                <span className="fk" style={{color:"var(--tx3)"}}>Task Type</span>
                <span className="fv" style={{textTransform:"capitalize"}}>
                  {selectedTask.type === "follow" ? "Follow" : selectedTask.type === "retweet" ? "Retweet" : selectedTask.type === "reply" ? "Reply" : "Like"}
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
                Complete each step in order on X/Twitter. Click <strong style={{color:"var(--tx)"}}>Claim Reward</strong> after completing all steps to verify and receive your points instantly.
              </div>
              <div style={{background:"#1DA1F2", opacity:"0.1", borderRadius:"8px", padding:"10px", marginTop:"9px", display:"flex", alignItems:"center", gap:"8px"}}>
                <i className="ti ti-star" style={{fontSize:"19px", color:"#1DA1F2"}} aria-hidden="true"></i>
                <div>
                  <div style={{fontSize:"12px", fontWeight:"600", color:"#1DA1F2"}}>+{selectedTask.points} MDR Points</div>
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
                  background:"#1DA1F2",
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
    <div className="pg on" id="pg-tw">
      <div className="pad">
        <div className="bc">
          <span onClick={() => go('home')}>Dashboard</span>
          <span>›</span>
          <span onClick={() => go('tasks')}>Loyalty Tasks</span>
          <span>›</span>
          <span className="cur">X / Twitter</span>
        </div>
        
        <div style={{display:"flex", alignItems:"center", gap:"10px", justifyContent:"space-between", flexWrap:"wrap"}}>
          <div style={{display:"flex", alignItems:"center", gap:"10px"}}>
            <div style={{width:"42px", height:"42px", borderRadius:"10px", background:"#1DA1F2", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"17px", fontWeight:"700", color:"#fff"}}>𝕏</div>
            <div>
              <div className="h1">X / Twitter Tasks</div>
              <div className="sub">Follow, retweet and reply to earn points</div>
            </div>
          </div>
          <span className="pill pn">{completedCount} / {totalTasks} Completed</span>
        </div>
        
        <div className="bar" style={{height:"6px"}}>
          <div className="bf" style={{width:`${completedPercentage}%`, background:"#1DA1F2"}}></div>
        </div>
        
        <div id="tw-list" style={{display:"flex", flexDirection:"column", gap:"8px"}}>
          {/* Task 1 - Follow @MudraFinance (Done) */}
          <div className={`tr ${tasks.tw1.status === "done" ? "dn2" : ""}`} id="srtw1">
            <div className="tico" style={{background:"#1DA1F2"}}>
              <i className="ti ti-user-plus" style={{fontSize:"15px", color:"#fff"}} aria-hidden="true"></i>
            </div>
            <div className="tb">
              <div className="tt">Follow @MudraFinance</div>
              <div className="td">Follow official Mudra X account</div>
              <div className="tpg">
                <div className="bar" style={{flex:1}}>
                  <div className="bf" id="sbtw1" style={{width:`${tasks.tw1.progress}%`}}></div>
                </div>
                <span className="tpct" id="sptw1">{tasks.tw1.progress}%</span>
              </div>
            </div>
            <div className="tr-r">
              <div className="pts">+{tasks.tw1.points} pts</div>
              <span className="pill pd"><i className="ti ti-check"></i>Done</span>
            </div>
          </div>
          
          {/* Task 2 - Retweet: Platform Launch Tweet (Done) */}
          <div className={`tr ${tasks.tw2.status === "done" ? "dn2" : ""}`} id="srtw2">
            <div className="tico" style={{background:"#1DA1F2"}}>
              <i className="ti ti-repeat" style={{fontSize:"15px", color:"#fff"}} aria-hidden="true"></i>
            </div>
            <div className="tb">
              <div className="tt">Retweet: Platform Launch Tweet</div>
              <div className="td">Retweet our platform launch</div>
              <div className="tpg">
                <div className="bar" style={{flex:1}}>
                  <div className="bf" id="sbtw2" style={{width:`${tasks.tw2.progress}%`}}></div>
                </div>
                <span className="tpct" id="sptw2">{tasks.tw2.progress}%</span>
              </div>
            </div>
            <div className="tr-r">
              <div className="pts">+{tasks.tw2.points} pts</div>
              <span className="pill pd"><i className="ti ti-check"></i>Done</span>
            </div>
          </div>
          
          {/* Task 3 - Reply: Introduce Yourself (In Progress) */}
          <div className={`tr ${tasks.tw3.status === "progress" ? "act" : ""} ${tasks.tw3.status === "done" ? "dn2" : ""}`} id="srtw3">
            <div className="tico" style={{background:"#1DA1F2"}}>
              <i className="ti ti-arrow-back-up" style={{fontSize:"15px", color:"#fff"}} aria-hidden="true"></i>
            </div>
            <div className="tb">
              <div className="tt">Reply: Introduce Yourself</div>
              <div className="td">Reply to our community intro tweet</div>
              <div className="tpg">
                <div className="bar" style={{flex:1}}>
                  <div className="bf" id="sbtw3" style={{width:`${tasks.tw3.progress}%`}}></div>
                </div>
                <span className="tpct" id="sptw3">{tasks.tw3.progress}%</span>
              </div>
            </div>
            <div className="tr-r">
              <div className="pts">+{tasks.tw3.points} pts</div>
              {tasks.tw3.status === "progress" && (
                <>
                  <span className="pill pp"><i className="ti ti-clock"></i>Progress</span>
                  <button className="btn bo bxs" style={{marginTop:"3px", fontSize:"11px"}} onClick={() => openSoc('tw3','tw')}>Continue</button>
                </>
              )}
            </div>
          </div>
          
          {/* Task 4 - Retweet: MDR Token Tweet (New) */}
          <div className={`tr ${tasks.tw4.status === "done" ? "dn2" : ""}`} id="srtw4">
            <div className="tico" style={{background:"#1DA1F2"}}>
              <i className="ti ti-repeat" style={{fontSize:"15px", color:"#fff"}} aria-hidden="true"></i>
            </div>
            <div className="tb">
              <div className="tt">Retweet: MDR Token Tweet</div>
              <div className="td">Retweet the MDR token listing</div>
              <div className="tpg">
                <div className="bar" style={{flex:1}}>
                  <div className="bf" id="sbtw4" style={{width:`${tasks.tw4.progress}%`}}></div>
                </div>
                <span className="tpct" id="sptw4">{tasks.tw4.progress}%</span>
              </div>
            </div>
            <div className="tr-r">
              <div className="pts">+{tasks.tw4.points} pts</div>
              {tasks.tw4.status === "new" && (
                <>
                  <span className="pill pn"><i className="ti ti-sparkles"></i>New</span>
                  <button className="btn bg bxs" style={{marginTop:"3px", fontSize:"11px"}} onClick={() => openSoc('tw4','tw')}>Start Task</button>
                </>
              )}
            </div>
          </div>
          
          {/* Task 5 - Like: Crypto Exchange Thread (New) */}
          <div className={`tr ${tasks.tw5.status === "done" ? "dn2" : ""}`} id="srtw5">
            <div className="tico" style={{background:"#1DA1F2"}}>
              <i className="ti ti-heart" style={{fontSize:"15px", color:"#fff"}} aria-hidden="true"></i>
            </div>
            <div className="tb">
              <div className="tt">Like: Crypto Exchange Thread</div>
              <div className="td">Like our thread on crypto conversion</div>
              <div className="tpg">
                <div className="bar" style={{flex:1}}>
                  <div className="bf" id="sbtw5" style={{width:`${tasks.tw5.progress}%`}}></div>
                </div>
                <span className="tpct" id="sptw5">{tasks.tw5.progress}%</span>
              </div>
            </div>
            <div className="tr-r">
              <div className="pts">+{tasks.tw5.points} pts</div>
              {tasks.tw5.status === "new" && (
                <>
                  <span className="pill pn"><i className="ti ti-sparkles"></i>New</span>
                  <button className="btn bg bxs" style={{marginTop:"3px", fontSize:"11px"}} onClick={() => openSoc('tw5','tw')}>Start Task</button>
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