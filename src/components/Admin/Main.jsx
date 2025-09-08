import React from "react";
import { Outlet } from "react-router-dom";
import A_Sidebar from "./A_Sidebar";

function Main() {
  return (
    <div className="d-flex flex-column flex-lg-row">
      {/* Sidebar - always visible */}
      <A_Sidebar />

      {/* Main content */}
      <div className="flex-grow-1 p-3">
        <Outlet />
      </div>
    </div>
  );
}

export default Main;
