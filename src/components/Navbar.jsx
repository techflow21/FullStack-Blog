import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="container">
      <Link to="/">
        <div className="logo">
          <img src={Logo} alt="logo" />
          <span className="links">HOME</span>
        </div>
      </Link>
        <div className="links">
          <Link to="/?cat=software" className="link">
            <h6>SOFTWARE</h6>
          </Link>
          <Link to="/?cat=technology" className="link">
            <h6>TECHNOLOGY</h6>
          </Link>
          {/* <Link to="/?cat=science" className="link">
            <h6>SCIENCE</h6>
          </Link> */}
          <Link to="/?cat=art" className="link">
            <h6>CODES</h6>
          </Link>
          <Link to="/?cat=design" className="link">
            <h6>DESIGN</h6>
          </Link>
          <Link to="/?cat=food" className="link">
            <h6>FOOD</h6>
          </Link>
          {/* <span className="username">{currentUser?.username}</span> */}
          {currentUser ? (
            <>
            <span className="username">Welcome {currentUser?.username}!</span>
            <span className="logout" onClick={logout}>Logout</span>
            </>
          ) : (
            <Link className="login" to="/login">
              Login
            </Link>
          )}
          <span className="write">
            <Link className="link" to="/write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
