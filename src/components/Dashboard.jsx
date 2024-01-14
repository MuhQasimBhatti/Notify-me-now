import React, { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Sidebar from "./Sidebar";
const Dashboard = () => {
  const [toggle, setToggle] = useState("SMS");

  const handleToggle = (event, newToggle) => {
    if (newToggle !== null) {
      setToggle(newToggle);
    }
  };

  return (
    <div className="dashboard row">

      <div className="sidebar col-2 ">
            <Sidebar/>
      </div>
      
      <div className="toggleButton col-10" >
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
              color: toggle === "Email" ? "white" : "", // Text color
            }}
          >
            <EmailOutlinedIcon fontSize="medium" />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>

      


    </div>
  );
};

export default Dashboard;
