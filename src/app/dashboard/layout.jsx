
// import "./mudra-dashboard.css";

// export default function DashboardLayout({ children }) {

//   return <>{children}</>;
// }


// "use client";

// import SidebarNav from "./components/SidebarNav";
// import Topbar from "./components/Topbar";
// import { useState } from "react";

// export default function DashboardLayout({ children }) {
//   const [dark, setDark] = useState(false);

//   const toggleDark = () => {
//     setDark(!dark);
//   };

//   return (
//     <div id="mudra-dashboard-root-react"
//       data-dk={dark ? "1" : undefined}
//       style={{ minHeight: "100vh" }}
//     >
//       <div className="app">

//         {/* Sidebar */}
//         <SidebarNav />

//         {/* Main Content */}
//         <div className="main">

//           {/* Header */}
//           <Topbar
//             dark={dark}
//             onToggleDark={toggleDark}
//             points={"4,820 pts"}
//           />

//           {/* Dynamic Pages */}
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// } 


"use client";

import SidebarNav from "./components/SidebarNav";
import Topbar from "./components/Topbar";
import { useState } from "react";

export default function DashboardLayout({ children }) {
  const [dark, setDark] = useState(false);

  const toggleDark = () => {
    setDark(!dark);
  };
  return (
    <html lang="en">
      <head>


      </head>
      <body className="dashboard-body">
        <div id="mudra-dashboard-root-react"
          data-dk={dark ? "1" : undefined}
          style={{ minHeight: "100vh" }}
        >
          <div className="app">

            {/* Sidebar */}
            <SidebarNav />

            {/* Main Content */}
            <div className="main">

              {/* Header */}
              <Topbar
                dark={dark}
                onToggleDark={toggleDark}
                points={"4,820 pts"}
              />

              {/* Dynamic Pages */}
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}