import React from "react";
import Timer from "../Timer/Timer";
import "./InfoBar.css";

const InfoBar = (props) => {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <div
          className="usersBar"
          onClick={(event) => props.toggleSideBar(event)}
        >
          {props.users.map(() => {
            return <span class={props.sideBarOpen ? "" : "dot"}></span>;
          })}
        </div>
      </div>
      <div className="rightInnerContainer">
        <Timer
          setCanSpeak={props.setCanSpeak}
          canSpeak={props.canSpeak}
          messages={props.messages}
          name={props.name}
        />
      </div>
    </div>
  );
};

export default InfoBar;
