import React, { useState } from "react";
import "./Navbar.css";
export default function Navbar() {
  const [isHamburgerMenuShow, setIsHamburgerMenuShow] = useState(false);

  const burgerMenuHandker = (event) => {
    setIsHamburgerMenuShow(event.target.checked);
  };

  return (
    <nav>
      <div className="logo-navbar">
        <h2>وب کدینو</h2>
      </div>
      <ul className={`navbar-lists ${isHamburgerMenuShow ? "show-menu" : ""}`}>
        <li className="navbar-item">
          <a href="#" className="navbar-item-link">
            خدمات ما
          </a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-item-link">
            پروژه ها
          </a>
        </li>

        <li className="navbar-item">
          <a href="#" className="navbar-item-link">
            درباره ما
          </a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-item-link">
            تماس با ما
          </a>
        </li>
        <div className="navbar-login-responsive">
          <button className="btn">ورود / ثبت نام</button>
        </div>
      </ul>
      <div className="navbar-login">
        <button className="btn">ورود / ثبت نام</button>
      </div>
      <div className="burger-menu">
        <label className="hamburger">
          <input type="checkbox" onChange={burgerMenuHandker} />
          <svg viewBox="0 0 32 32">
            <path
              className="line line-top-bottom"
              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
            ></path>
            <path className="line" d="M7 16 27 16"></path>
          </svg>
        </label>
      </div>
    </nav>
  );
}
