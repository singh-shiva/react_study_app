import {NavLink, useNavigate} from 'react-router-dom';
import './Navbar.css';
import logo from '../images/logo.png';
import { useState } from 'react';
const Navbar = (props)=>{
    let isLoggedin = props.isLoggedin;
    let setLoggedin = props.setLoggedin;
    const navigate = useNavigate();
    function navToHomeHandler(){
      navigate("/");
    }
    function moveToSigninHandler(){
      setLoggedin(false);
    }
    return(
        <div>
        <div className="nav-container">
          <div className="nav-logo-container">
            <img className="nav-logo" src={logo} alt='not found'/>
            <h3 className="nav-name" onClick={navToHomeHandler}>StudyNotion</h3>
          </div>
          <div className="nav-name-container">
            <span>Home</span>
            <span>About</span>
            <span>Contact</span>
          </div>
          <div className="nav-link-container">
            {
              !isLoggedin && <NavLink className="login-link" to="/Login">Log in</NavLink>
            }
            {
              !isLoggedin && <NavLink className="signup-link" to="/Signup">Sign up</NavLink>
            }
            {
              isLoggedin && <NavLink className="login-link" to="/Login" onClick={moveToSigninHandler}>Log Out</NavLink>
            }
            {
              isLoggedin && <NavLink className="signup-link" to="/Afterlogin">Dashboard</NavLink>
            }
          </div>
        </div>
        </div>
    )
}
export default Navbar;