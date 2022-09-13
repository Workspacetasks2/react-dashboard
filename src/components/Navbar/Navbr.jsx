import React from "react";
// import "./topbar.css";
// import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import ReorderOutlinedIcon from "@mui/icons-material/ReorderOutlined";
const Navbr = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="search...." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <FullscreenExitIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ReorderOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <div class="dropdown">
              <img
                className="topAvatar"
                src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="Cinque Terre"
                width="100"
                height="50"
              />
              <div class="dropdown-content">
                <Link to="#">
                  <div class="desc">Profile</div>
                </Link>
                <Link to="#">
                  <div class="desc">Settings</div>
                </Link>
                <Link to="/">
                  <div class="desc">Logout</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    /* <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Dashboard</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <div class="dropdown">
            <img
              className="topAvatar"
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="Cinque Terre"
              width="100"
              height="50"
            />
            <div class="dropdown-content">
              <Link to="#">
                <div class="desc">Profile</div>
              </Link>
              <Link to="#">
                <div class="desc">Settings</div>
              </Link>
              <Link to="#">
                <div class="desc">Logout</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>*/
  );
};

export default Navbr;
