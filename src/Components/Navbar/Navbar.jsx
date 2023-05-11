import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import { GiThreeLeaves } from "react-icons/gi";
import Manubar from "./Manubar";
import "./Navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <React.Fragment>
      <div className="navbar">
        <div className="navbar__container">
          <div className="navbar__flex">
            <div className="navbar__left">
              <Link to={"/"}>
                <div className="navbar__logo">
                  <div className="logo">
                    <i>
                      <GiThreeLeaves size={35} />
                    </i>
                    <span>Food Bank</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="navbar__middle">
              <div className="navbar__menu">
                <Manubar />
              </div>
            </div>
          </div>
        </div>
        <div
          className="navbar__menu__container"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? (
            <RiCloseLine
              size={35}
              color="white"
              onClick={() => setToggle(false)}
            />
          ) : (
            <AiOutlineMenu
              size={35}
              color="white"
              onClick={() => setToggle(true)}
            />
          )}
          {toggle && (
            <div className="navbar__container__menu scale-up-center">
              <div className="navbar__links">
                <Manubar />
              </div>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
