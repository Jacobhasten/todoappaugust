import React from 'react';
import '../App.css';
import hamburger from "../images/hamburger.png";

function Sidebar(props){
    return (
    <div className="sidebar">
    <img className="sidebar__hamburger" src={hamburger}></img>
    <div className="sidebar__avatar">
      <img className="sidebar__avatar-img" src={props.user.avatar} />
      <p className="sidebar__avatar-name"> {props.user.firstName} {props.user.lastName}</p>
    </div>
    <h3>Git 'r Done</h3>
    <h3>Dashboard</h3>
    <h3>Games</h3>
  </div>
    )
}

export default Sidebar