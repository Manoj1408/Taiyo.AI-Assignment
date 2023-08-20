import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <>
      <div className="sider-comp">
        <NavLink to="/Taiyo.AI-Assignment/">Contact</NavLink>
        <NavLink to="/Taiyo.AI-Assignment/map">Charts and Maps</NavLink>
      </div>
    </>
  );
}
