import { IoEyeOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import study from '../images/study.jpeg';
import './Login.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = (props)=>{
    
    const[logindata, setLoginData] = useState({email:"",pwd:""});
    let setLoggedin = props.setLoggedin;
    console.log(logindata);
    const navigate = useNavigate();
    function changeHandler(event){
        const {value,name} = event.target;
        setLoginData(prevLogData=>{
            return{
                ...prevLogData,
                [name] : value
            }
        })
    }
    const[showpwd, setShowPwd] = useState(false);
    function passwordHandler(){
        setShowPwd(!showpwd);
    }
    function submitHandler(){
        toast.success("Logged in successfully!", {
            position:"top-center",
        });
        setTimeout(()=>{
            navigate("/Afterlogin");
        },1000)
        setLoggedin(true);
    }
    return(
        <div className="login-container">
            <div className="login-text-box">
                <h2>Welcome Back</h2>
                <p>Build skills for today, tommorow, and beyond.</p>
                <p>Education to future-proof your career.</p>
                <label className="email" htmlFor="email">Email Address</label>
                <br/>
                <input  className="email-input" type="email" name="email" id="email" placeholder="Enter email address"
                onChange={changeHandler}/>
                <br/>
                <label class="password" htmlFor="pwd">Password</label>
                <br/>
                <div className="password-container">
                <input className="password-input" password-char="*" type={showpwd ? "text":"password"} name="pwd" id="pwd" placeholder="Enter Password"
                onChange={changeHandler}
                />
                <IoEyeOutline className="eye-logo" onClick={passwordHandler}/>
                </div>
                <div className="forget-pwd-container">
                <br/>
                <span className="forget-pwd">Forgot Password</span>
                <br/>
                </div>
                <button className="btn" onClick={submitHandler}>Sign In</button>
                <ToastContainer />
                <div className="google-signin">
                    <FcGoogle className="google-symb"/>
                    <span>Sign in with Google</span>
                </div>
            </div>
            <div className="signin-img">
                <img src={study} alt="not found"/>
            </div>
        </div>
    )
}
export default Login;