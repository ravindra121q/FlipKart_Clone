import React from "react";
import flipkart_logo from "../assets/images/fk.jpg";
import "../css/pages/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBox,
  faCartShopping,
  faUser,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import BasicMenu from "./pages/HomePage_Menu";
export const Navbar = () => {
  const handleClick = () => {};
  const handleClose = () => {};
  return (
    <div id="main_container">
      <div className="logo">
        <img
          style={{
            width: "130px",
            height: "52px",
            mixBlendMode: "multiply",
            filter: "brightness(1) invert(0) saturate(2)",
            paddingLeft: "2rem",
          }}
          src={flipkart_logo}
          alt="flipkart_logo"
        />
      </div>
      <div className="group">
        <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
          </g>
        </svg>
        <input placeholder="Search" type="search" className="input" />
      </div>
      <div className="group_last">
        <div>
          <FontAwesomeIcon icon={faBox} />
          <h4>Become a Seller</h4>
        </div>
        <div>
          
          <BasicMenu />
        </div>
        <div>
          <FontAwesomeIcon icon={faCartShopping} />
          <h4>Cart</h4>
        </div>
        <div className="menu">
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </div>
  );
};
