import React from "react";

export default function Sidebar(props) {
  return (
    <div className="sidebar">
      <ul className="logo">
        <li
          onClick={() => {
            props.setActiveTab("");
            window.history.pushState({}, "", "/");
          }}
          className={props.activeTab === "" ? "active" : ""}
        >
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
            <line x1="16" y1="8" x2="2" y2="22" />
            <line x1="17.5" y1="15" x2="9" y2="15" />
          </svg>
          <div className="sidebarButtonName siteName">speedread</div>
        </li>
      </ul>
      <ul>
        <li
          onClick={() => {
            props.setActiveTab("saved");
            window.history.pushState({}, "", "/saved");
          }}
          className={props.activeTab === "saved" ? "active" : ""}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
          </svg>
          <div className="sidebarButtonName">saved</div>
        </li>
        <li
          onClick={() => {
            props.setActiveTab("start");
            window.history.pushState({}, "", "/start");
          }}
          className={props.activeTab === "start" ? "active" : ""}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="10" />
            <polygon points="10 8 16 12 10 16 10 8" />
          </svg>
          <div className="sidebarButtonName">start</div>
        </li>
      </ul>
      <ul>
        <li
          onClick={() => {
            props.setActiveTab("statistics");
            window.history.pushState({}, "", "/statistics");
          }}
          className={props.activeTab === "statistics" ? "active" : ""}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
            <path d="M22 12A10 10 0 0 0 12 2v10z" />
          </svg>
          <div className="sidebarButtonName">statistics</div>
        </li>
        <li className={props.activeTab === "about" ? "active" : ""}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
          <div className="sidebarButtonName">about</div>
        </li>
        <li
          onClick={() => {
            props.setActiveTab("settings");
            window.history.pushState({}, "", "/settings");
          }}
          className={props.activeTab === "settings" ? "active" : ""}
        >
          <svg
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx={"12"} cy={"12"} r={"3"} />
            <path
              d={
                "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
              }
            />
          </svg>
          <div className="sidebarButtonName">settings</div>
        </li>
      </ul>
    </div>
  );
}
