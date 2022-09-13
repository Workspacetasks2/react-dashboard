import React from "react";
import "./Sidear.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import ViewStreamOutlinedIcon from "@mui/icons-material/ViewStreamOutlined";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import CloudCircleOutlinedIcon from "@mui/icons-material/CloudCircleOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="top">
        <span className="logo">Dashboard</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/home">
            <li>
              <DashboardIcon className="icon" />
              <span>Home</span>
            </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/users">
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <li>
            <ProductionQuantityLimitsIcon className="icon" />
            <span>Products</span>
          </li>
          <li>
            <ViewStreamOutlinedIcon className="icon" />
            <span>Oders</span>
          </li>
          <li>
            <ViewStreamOutlinedIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>

          <li>
            <QueryStatsOutlinedIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notification</span>
          </li>
          <p className="title">SERVICES</p>

          <li>
            <CloudCircleOutlinedIcon className="icon" />
            <span>Systems Health</span>
          </li>
          <li>
            <LoginOutlinedIcon className="icon" />
            <span>logs</span>
          </li>

          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>

          <li>
            <AccountCircleIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppRoundedIcon className="icon" />
            <span>Logout </span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOptions"></div>
        <div className="colorOptions"></div>
      </div>
    </div>
  );
};

export default Sidebar;
