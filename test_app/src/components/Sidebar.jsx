import React from "react";
import "./Sidebar.css";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar({ showSidebar, setShowSidebar }) {
  const closeSidebar = () => {
    setShowSidebar(false);
  };

  const location = useLocation();

  return (
    <>
      <div className="col-lg-3" id="sidear-wrapper">
        <nav
          id="sidebarMenu"
          className={`sidebar ${!showSidebar ? "d-none" : ""} d-lg-block`}
        >
          <Link
            onClick={closeSidebar}
            className="navbar-brand mt-2 mt-lg-0"
            to="/"
          >
            <div className="d-flex justify-content-center header-logo">
              Coding Task
            </div>
          </Link>
          <div onClick={closeSidebar} className="hide d-lg-none">
            &lsaquo;
          </div>
          <div className="mt-md-4 mt-2">
            <ul>
              <li>
                <Link
                  onClick={closeSidebar}
                  to="/home"
                  className={`list-group-item list-group-item-action py-2 ripple ${location.pathname === '/home' ? 'bg-lightgrey text-black' : ''}`}
                >
                  <span className={`${location.pathname === '/home' ? 'bg-lightgrey text-black' : 'item'}`}>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  onClick={closeSidebar}
                  to="/my-articles"
                  className={`list-group-item list-group-item-action py-2 ripple ${location.pathname === '/my-articles' ? 'bg-lightgrey text-black' : ''}`}
                >
                  <span className={`${location.pathname === '/my-articles' ? 'bg-lightgrey text-black' : 'item'}`}>My Articles</span>
                </Link>
              </li>
              <li>
                <Link
                  onClick={closeSidebar}
                  to="/article/new"
                  className={`list-group-item list-group-item-action py-2 ripple `}
                >
                  <span className={`${location.pathname === '/article/new' ? 'bg-lightgrey text-black' : 'item'}`}>New Article</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
