import React, { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { AiOutlineTeam } from "react-icons/ai";
import Sidebar from "./Sidebar";
import Email from "./Email";
import Sms from "./Sms";

const Dashboard = () => {
  const [toggle, setToggle] = useState("");
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const handleToggle = (event, newToggle) => {
    if (newToggle !== null) {
      setToggle(newToggle);
    }
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="dashboard " style={{ overflow: "hidden", height: "100vh" }}>
      {/* Toggle button for sidebar */}
      <button
        onClick={toggleSidebar}
        className="d-lg-none"
        style={{
          position: "absolute",
          top: "15%",
          alignContent: "start",
          backgroundColor: "transparent",
          border: "none",
          zIndex: "999",
        }}
      >
        <AiOutlineTeam fontSize={30} />
      </button>

      <div>
        <div
          className="flex position-relative align-items-center justify-content-center"
          style={{ height: "100vh"}}
        >
          {sidebarVisible && (
            <div className="position-absolute top-0 left-0">
              <Sidebar />
            </div>
          )}
          <div className="position-relative h-100 w-100 d-flex flex-column align-items-center justify-content-center">
            <div
              className="toggleButton position-absolute "
              style={{ top: "13%", right: "50%" }}
            >
              <ToggleButtonGroup
                value={toggle}
                exclusive
                onChange={handleToggle}
                aria-label="sms"
              >
                <ToggleButton
                  value="SMS"
                  aria-label="sms"
                  style={{
                    backgroundColor: toggle === "SMS" ? "#2196f3" : "",
                    color: toggle === "SMS" ? "white" : "", // Text color
                  }}
                >
                  <MessageOutlinedIcon fontSize="medium" />
                </ToggleButton>
                <ToggleButton
                  value="Email"
                  aria-label="email"
                  style={{
                    backgroundColor: toggle === "Email" ? "#2196f3" : "",
                    color: toggle === "Email" ? "white" : "",
                  }}
                >
                  <EmailOutlinedIcon fontSize="medium" />
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
            <div className="formsDiv">
            {toggle !== "Email" && toggle !== "SMS" && (
              <div className="w-100 text-center text-white font-monospace">
                <h1>Welcome!</h1>
                <h2>Want To Send Text or Email?</h2>
              </div>
            )}

            {toggle === "SMS" && (
              <div >
                <Sms />
              </div>
            )}
            {toggle === "Email" && (
              <div >
                <Email />
              </div>
            )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
