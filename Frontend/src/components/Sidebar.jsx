import React, { useState } from "react";
import { Link } from "react-router-dom";

const teams = [
  {
    id: 1,
    name: "Frontend Team",
    contacts: [
      {
        id: 1,
        name: "Robert",
        email: "robert@gmail.com",
      },
      {
        id: 2,
        name: "Haundey",
        email: "haundey@gmail.com",
      },
      {
        id: 3,
        name: "Qasim",
        email: "muhammadqasimbhatti4@gmail.com",
      },
    ],
  },
  {
    id: 2,
    name: "Backend Team",
    contacts: [
      {
        id: 1,
        name: "Robert",
        email: "robert@gmail.com",
      },
      {
        id: 2,
        name: "Haundey",
        email: "haundey@gmail.com",
      },
      {
        id: 3,
        name: "Qasim",
        email: "muhammadqasimbhatti4@gmail.com",
      },
    ],
  },
  {
    id: 3,
    name: "SEO Team",
    contacts: [
      {
        id: 1,
        name: "Robert",
        email: "robert@gmail.com",
      },
      {
        id: 2,
        name: "Haundey",
        email: "haundey@gmail.com",
      },
      {
        id: 3,
        name: "Qasim",
        email: "muhammadqasimbhatti4@gmail.com",
      },
    ],
  },
  {
    id: 4,
    name: "Marketing Team",
    contacts: [
      {
        id: 1,
        name: "Robert",
        email: "robert@gmail.com",
      },
      {
        id: 2,
        name: "Haundey",
        email: "haundey@gmail.com",
      },
      {
        id: 3,
        name: "Qasim",
        email: "muhammadqasimbhatti4@gmail.com",
      },
    ],
  },
];


const Sidebar = ({ selectedGroup }) => {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [dropdownTeam, setDropdownTeam] = useState(null);

  const handleTeamClick = (team) => {
    setDropdownTeam((prevTeam) => (prevTeam === team ? null : team));
    setSelectedTeam(team);
    selectedGroup(team.name);
  };

  return (
    <div className="position-absolute d-flex align-items-center justify-justify-content-center p-3" style={{ height: "100vh" }}>
      <div className="sidebar rounded-5" style={{ zIndex: "999" }}>
        <div className="dashboardLogo text-center">TEAMS</div>
        <div>
          <ul className="list-group sidebarList">
            {teams.map((team) => (
              <Link to="" className="sidebarLink m-1" onClick={() => handleTeamClick(team)}>
                <li
                  key={team.id}
                  className={`sidebarLi py-2 text-center rounded-3 ${selectedTeam === team ? "activetab" : "sidebarLi"} ${dropdownTeam===team?"fw-bold":"fw-normal"}`}
                >
                  {team.name}

                  {dropdownTeam === team && (
                    <ul className="list-group py-1">
                      {team.contacts.map((contact) => (
                        <li key={contact.id} className="sidebarDropdown font-weight-normal">
                          {contact.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};



export default Sidebar;
