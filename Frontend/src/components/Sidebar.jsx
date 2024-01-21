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

const Sidebar = () => {
  const [selectedTeam, setSelectedTeam] = useState(null);

  
  const handleTeamClick = (team) => {
    setSelectedTeam((prevTeam) => (prevTeam === team ? null : team));
  };

  return (
    <div className="sidebar position-absolute" style={{ zIndex: "20" }}>
      <div className="dashboardLogo">Dashboard</div>
      <div>
        <ul className="list-group sidebarList">
          {teams.map((team) => (
            <Link
              to=""
              className="sidebarLink m-1"
              onClick={() => handleTeamClick(team)}
            >
              <li
                key={team.id}
                className={`list-group-item sidebarLi py-2 text-center rounded-3 ${
                  selectedTeam === team ? "active font-weight-bold" : ""
                }`}
              >
                {team.name}

                {selectedTeam === team && (
                  <ul className="list-group my-1 ">
                    {team.contacts.map((contact) => (
                      <li key={contact.id} className="sidebarDropdown font-weight-normal ">
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
  );
};

export default Sidebar;
