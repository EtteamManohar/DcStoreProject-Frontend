import Button from '../Button/ButtonBody';
import './register.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState } from 'react';
import Top from '../Top/TopBody';
import Footer from '../Footer/Footer';
const Register = () => {

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [errorMessages, setErrorMessages] = useState({});
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [formErrors, setFormErrors] = useState({});
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    const errors = {
        pass: "invalid password",
        noerr: ""
      };

    const registerData = {
        "username": username,
        "email": email,
        
        "password": password,
        "confirmpassword": confirmPassword
    }

    const Validate = (values) => {
        const error = {};
        
        if (!values.username) {
          error.username = "Username is required!";
        
        }
        if (!values.email) {
          error.email = "Email is required!";
        } else if (!regex.test(email)) {
          error.email = "This is not a valid email format!";
        }
        if (!values.confirmpassword) {
            error.confirmpassword = "confirmPassword is required";
          } 
        if (!values.password) {
          error.password = "Password is required";
        } else if (values.password.length < 4) {
          error.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
          error.password = "Password cannot exceed more than 10 characters";
        }
        return error;
      };
    
      const onInputChangeUsername = event => {
        setUsername(event.target.value)
    }
    
    const onInputChangePassword = event => {
        setPassword(event.target.value)
    }
    const onInputChangeEmail= event => {
      setEmail(event.target.value)
    }
    
    const onChangePassword = event => {
      let value=event.target.value;
      setConfirmPassword(value);
    
      if(value!=password){
        
         setErrorMessages({ name: "pass", message: errors.pass });
      }
      
      else{
        setErrorMessages({name: "noerr",message: errors.noerr})
      }
       
      
    }
    const registerUser = (e) => {
        e.preventDefault();
        if(!registerData.username || !registerData.password || !registerData.email||registerData.password.length> 10||registerData.password.length < 4||!registerData.confirmpassword || !regex.test(registerData.email)){ 
            setFormErrors(Validate(registerData));}
            else{
        console.log(registerData);
        axios.post("http://localhost:8082/api/auth/signup", registerData).then(
            (response) => {

                console.log(response);
                if (response.status == 200) {
                    alert("registered successfully");
                    console.log("navigating");
                    navigate('/login');
                }
            }, (error) => {
                console.log(error);
                alert("Operation failed");
            }
        );
            }
    }

    const renderErrorMessage = (name) =>
    name!=password && (
      <div className="error">{errorMessages.message}</div>
    ) ;



    return (
        
        <div>
            <Top />
            <div className='register-form-container'>
                <div className='register-form'>
                    <input className='register-form-element'  id="username" value={username} placeholder="User Name"  onChange={e => onInputChangeUsername(e)}required type='text'></input>
                    <p className='error'>{formErrors.username}</p>
                    <input className='register-form-element' id="email" value={email} placeholder="Email" onChange={e => onInputChangeEmail(e)}required type='text'></input>
                    <p className='error'>{formErrors.email}</p>
                    <input className='register-form-element'id="password"  value={password} placeholder="Password" onChange={e => onInputChangePassword(e)}required type='password'></input>
                    <p className='error'>{formErrors.password}</p>
                    <input className='register-form-element' id="retypepassword" value={confirmPassword} placeholder="Confirm Password"  onChange={e => onChangePassword (e)}required type='password'></input>
                    {renderErrorMessage("retypepassword")}
                    <p className='error'>{formErrors.confirmpassword}</p>
                    <button onClick={e => registerUser(e)}>REGISTER</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Register;