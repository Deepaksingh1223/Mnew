"use client";

import "../mudra-dashboard.css";
import { useState } from "react";

export default function FacebookTask() {
  const [showDetail, setShowDetail] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  
  // Tasks data with progress
  const [tasks, setTasks] = useState({
    fb1: { title: "Like: Mudra Official Page", points: 5, progress: 100, status: "done", type: "like", stepsDone: 1, totalSteps: 1 },
    fb2: { title: "Like: Launch Announcement", points: 5, progress: 100, status: "done", type: "like", stepsDone: 1, totalSteps: 1 },
    fb3: { title: "Comment: Share Your Experience", points: 8, progress: 25, status: "progress", type: "comment", stepsDone: 1, totalSteps: 3 },
    fb4: { title: "Share: Referral Campaign Post", points: 10, progress: 0, status: "new", type: "share", stepsDone: 0, totalSteps: 2 },
    fb5: { title: "Share: MDR Token Launch Post", points: 12, progress: 0, status: "new", type: "share", stepsDone: 0, totalSteps: 2 },
    fb6: { title: "Comment: Crypto Exchange Thread", points: 8, progress: 0, status: "new", type: "comment", stepsDone: 0, totalSteps: 3 }
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

  // Safe check for selectedTask before rendering detail view
  const renderDetailView = () => {
    if (!showDetail || !selectedTask) return null;
    
    return (
      <div id="fb-detail" style={{display: "block", marginTop: "20px"}}>
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
                  {selectedTask.type === "like" && "Open the Mudra Facebook page and click Like"}
                  {selectedTask.type === "share" && "Open the post and click Share button"}
                  {selectedTask.type === "comment" && "Open the post and read the content"}
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
            
            {/* Step 2 */}
            {selectedTask.totalSteps >= 2 && (
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
                    {selectedTask.type === "share" && "Confirm share and add a comment (optional)"}
                    {selectedTask.type === "comment" && "Write a meaningful comment (minimum 10 words)"}
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
            
            {/* Step 3 */}
            {selectedTask.totalSteps >= 3 && (
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
                    {selectedTask.type === "comment" && "Click Post to submit your comment"}
                  </div>
                  {selectedTask.stepsDone === 2 && (
                    <button 
                      className="btn bg bsm" 
                      style={{marginTop: "8px", fontSize: "11px"}}
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
                  background:"linear-gradient(90deg,var(--gold),var(--glt))",
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
                <span className="fv">Facebook</span>
              </div>
              <div className="fr" style={{display:"flex", justifyContent:"space-between", marginBottom:"8px"}}>
                <span className="fk" style={{color:"var(--tx3)"}}>Task Type</span>
                <span className="fv" style={{textTransform:"capitalize"}}>{selectedTask.type}</span>
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
                Complete each step in order on Facebook. Click <strong style={{color:"var(--tx)"}}>Claim Reward</strong> after completing all steps to verify and receive your points instantly.
              </div>
              <div style={{background:"var(--gdim)", border:"1px solid var(--gbdr)", borderRadius:"8px", padding:"10px", marginTop:"9px", display:"flex", alignItems:"center", gap:"8px"}}>
                <i className="ti ti-star" style={{fontSize:"19px", color:"var(--glt)"}} aria-hidden="true"></i>
                <div>
                  <div style={{fontSize:"12px", fontWeight:"600", color:"var(--glt)"}}>+{selectedTask.points} MDR Points</div>
                  <div style={{fontSize:"10px", color:"var(--tx3)"}}>Credited on completion</div>
                </div>
              </div>
            </div>
            
            {selectedTask.stepsDone === selectedTask.totalSteps && (
              <button 
                className="btn bg bfw" 
                onClick={claimReward}
                style={{width:"100%", padding:"10px"}}
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
    <div className="pg on" id="pg-fb">
      <div className="pad">
        <div className="bc">
          <span onClick={() => go('home')}>Dashboard</span>
          <span>›</span>
          <span onClick={() => go('tasks')}>Loyalty Tasks</span>
          <span>›</span>
          <span className="cur">Facebook</span>
        </div>
        
        <div style={{display:"flex", alignItems:"center", gap:"10px", justifyContent:"space-between", flexWrap:"wrap"}}>
          <div style={{display:"flex", alignItems:"center", gap:"10px"}}>
            <div style={{width:"42px", height:"42px", borderRadius:"10px", background:"#1877F2", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"22px", fontWeight:"700", color:"#fff"}}>f</div>
            <div>
              <div className="h1">Facebook Tasks</div>
              <div className="sub">Like, comment and share to earn points</div>
            </div>
          </div>
          <span className="pill pn">{completedCount} / {totalTasks} Completed</span>
        </div>
        
        <div className="bar" style={{height:"6px"}}>
          <div className="bf" style={{width:`${completedPercentage}%`}}></div>
        </div>
        
        <div id="fb-list" style={{display:"flex", flexDirection:"column", gap:"8px"}}>
          {/* Task 1 */}
          <div className={`tr ${tasks.fb1.status === "done" ? "dn2" : ""}`} id="srfb1">
            <div className="tico" style={{background:"#1877F2"}}>
              <i className="ti ti-heart" style={{fontSize:"15px", color:"#fff"}} aria-hidden="true"></i>
            </div>
            <div className="tb">
              <div className="tt">Like: Mudra Official Page</div>
              <div className="td">Like the Mudra Facebook page</div>
              <div className="tpg">
                <div className="bar" style={{flex:1}}>
                  <div className="bf" id="sbfb1" style={{width:`${tasks.fb1.progress}%`}}></div>
                </div>
                <span className="tpct" id="spfb1">{tasks.fb1.progress}%</span>
              </div>
            </div>
            <div className="tr-r">
              <div className="pts">+{tasks.fb1.points} pts</div>
              <span className="pill pd"><i className="ti ti-check"></i>Done</span>
            </div>
          </div>
          
          {/* Task 2 */}
          <div className={`tr ${tasks.fb2.status === "done" ? "dn2" : ""}`} id="srfb2">
            <div className="tico" style={{background:"#1877F2"}}>
              <i className="ti ti-heart" style={{fontSize:"15px", color:"#fff"}} aria-hidden="true"></i>
            </div>
            <div className="tb">
              <div className="tt">Like: Launch Announcement</div>
              <div className="td">Like our platform launch post</div>
              <div className="tpg">
                <div className="bar" style={{flex:1}}>
                  <div className="bf" id="sbfb2" style={{width:`${tasks.fb2.progress}%`}}></div>
                </div>
                <span className="tpct" id="spfb2">{tasks.fb2.progress}%</span>
              </div>
            </div>
            <div className="tr-r">
              <div className="pts">+{tasks.fb2.points} pts</div>
              <span className="pill pd"><i className="ti ti-check"></i>Done</span>
            </div>
          </div>
          
          {/* Task 3 */}
          <div className={`tr ${tasks.fb3.status === "progress" ? "act" : ""} ${tasks.fb3.status === "done" ? "dn2" : ""}`} id="srfb3">
            <div className="tico" style={{background:"#1877F2"}}>
              <i className="ti ti-message-circle" style={{fontSize:"15px", color:"#fff"}} aria-hidden="true"></i>
            </div>
            <div className="tb">
              <div className="tt">Comment: Share Your Experience</div>
              <div className="td">Leave a comment on our community post</div>
              <div className="tpg">
                <div className="bar" style={{flex:1}}>
                  <div className="bf" id="sbfb3" style={{width:`${tasks.fb3.progress}%`}}></div>
                </div>
                <span className="tpct" id="spfb3">{tasks.fb3.progress}%</span>
              </div>
            </div>
            <div className="tr-r">
              <div className="pts">+{tasks.fb3.points} pts</div>
              {tasks.fb3.status === "progress" && (
                <>
                  <span className="pill pp"><i className="ti ti-clock"></i>Progress</span>
                  <button className="btn bo bxs" style={{marginTop:"3px", fontSize:"11px"}} onClick={() => openSoc('fb3','fb')}>Continue</button>
                </>
              )}
              {tasks.fb3.status === "done" && (
                <span className="pill pd"><i className="ti ti-check"></i>Done</span>
              )}
            </div>
          </div>
          
          {/* Task 4 */}
          <div className={`tr ${tasks.fb4.status === "done" ? "dn2" : ""}`} id="srfb4">
            <div className="tico" style={{background:"#1877F2"}}>
              <i className="ti ti-share-2" style={{fontSize:"15px", color:"#fff"}} aria-hidden="true"></i>
            </div>
            <div className="tb">
              <div className="tt">Share: Referral Campaign Post</div>
              <div className="td">Share the Mudra referral post</div>
              <div className="tpg">
                <div className="bar" style={{flex:1}}>
                  <div className="bf" id="sbfb4" style={{width:`${tasks.fb4.progress}%`}}></div>
                </div>
                <span className="tpct" id="spfb4">{tasks.fb4.progress}%</span>
              </div>
            </div>
            <div className="tr-r">
              <div className="pts">+{tasks.fb4.points} pts</div>
              {tasks.fb4.status === "new" && (
                <>
                  <span className="pill pn"><i className="ti ti-sparkles"></i>New</span>
                  <button className="btn bg bxs" style={{marginTop:"3px", fontSize:"11px"}} onClick={() => openSoc('fb4','fb')}>Start Task</button>
                </>
              )}
            </div>
          </div>
          
          {/* Task 5 */}
          <div className={`tr ${tasks.fb5.status === "done" ? "dn2" : ""}`} id="srfb5">
            <div className="tico" style={{background:"#1877F2"}}>
              <i className="ti ti-share-2" style={{fontSize:"15px", color:"#fff"}} aria-hidden="true"></i>
            </div>
            <div className="tb">
              <div className="tt">Share: MDR Token Launch Post</div>
              <div className="td">Share the MDR token announcement</div>
              <div className="tpg">
                <div className="bar" style={{flex:1}}>
                  <div className="bf" id="sbfb5" style={{width:`${tasks.fb5.progress}%`}}></div>
                </div>
                <span className="tpct" id="spfb5">{tasks.fb5.progress}%</span>
              </div>
            </div>
            <div className="tr-r">
              <div className="pts">+{tasks.fb5.points} pts</div>
              {tasks.fb5.status === "new" && (
                <>
                  <span className="pill pn"><i className="ti ti-sparkles"></i>New</span>
                  <button className="btn bg bxs" style={{marginTop:"3px", fontSize:"11px"}} onClick={() => openSoc('fb5','fb')}>Start Task</button>
                </>
              )}
            </div>
          </div>
          
          {/* Task 6 */}
          <div className={`tr ${tasks.fb6.status === "done" ? "dn2" : ""}`} id="srfb6">
            <div className="tico" style={{background:"#1877F2"}}>
              <i className="ti ti-message-circle" style={{fontSize:"15px", color:"#fff"}} aria-hidden="true"></i>
            </div>
            <div className="tb">
              <div className="tt">Comment: Crypto Exchange Thread</div>
              <div className="td">Comment on the exchange features post</div>
              <div className="tpg">
                <div className="bar" style={{flex:1}}>
                  <div className="bf" id="sbfb6" style={{width:`${tasks.fb6.progress}%`}}></div>
                </div>
                <span className="tpct" id="spfb6">{tasks.fb6.progress}%</span>
              </div>
            </div>
            <div className="tr-r">
              <div className="pts">+{tasks.fb6.points} pts</div>
              {tasks.fb6.status === "new" && (
                <>
                  <span className="pill pn"><i className="ti ti-sparkles"></i>New</span>
                  <button className="btn bg bxs" style={{marginTop:"3px", fontSize:"11px"}} onClick={() => openSoc('fb6','fb')}>Start Task</button>
                </>
              )}
            </div>
          </div>
        </div>
        
        {/* Render detail view only when showDetail is true and selectedTask exists */}
        {renderDetailView()}
      </div>
    </div>
  );
}