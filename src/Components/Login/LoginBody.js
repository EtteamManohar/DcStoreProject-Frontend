import { useState } from 'react';
import Button from '../Button/ButtonBody';
import './login.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Top from '../Top/TopBody';
import Footer from '../Footer/Footer';


const Login = () => {

    const navigate = useNavigate();
    const [errorMessages,setErrorMessages]=useState({});
    const [username,setUserName] = useState("");
    const [password,setPassword] = useState("");
    const [items, setItems] = useState("");
    const loginData = {
        "username": username,
        "password": password
    }
    
    const userLogin = (e) => {
        e.preventDefault();
        authenticateUser(loginData)
    }

    const errors={
        password:"invalid username/password"
    };

    const setCookie= (cname, cvalue, exdays) => {
        const d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    
    const authenticateUser = (data) => {
        console.log(data);
        axios.post("http://localhost:8082/api/auth/signin", data).then(
            (response) => {
                
                console.log(response);
                if (response.status==200) {
                    setItems(response);
                
                    setCookie("accessToken",response.data.accessToken,1);
                    sessionStorage.setItem("username", response.data.username);
                    
                    console.log("navigating");
                    alert("login successfull");
                    navigate('/');
                }
            }, (error) => {
                console.log(error);
                setErrorMessages({name:"password",message:errors.password});
            }
        );
    }
    
    const onInputChangeUsername = event => {
        setUserName(event.target.value)
    }
    
    const onInputChangePassword = event => {
        setPassword(event.target.value)
    }

    const renderErrorMessage=(name)=>
        name===errorMessages.name && (<div>{errorMessages.message}</div>)


    return(
        <div>
            <Top />
            <div className='login-form-container margin_bottom_18per'>
                <div className='login-form'>
                    <input className='login-form-element' type='text' id="username" value={username} placeholder="User Name" onChange={e => onInputChangeUsername(e)} required></input>
                    <input className='login-form-element' type='password' id="password" value={password} placeholder="Password" onChange={e => onInputChangePassword(e)} required></input>
                    {renderErrorMessage("password")}
                    <button onClick={e => userLogin(e)}>LOGIN</button>
                  
                </div>
            </div>
            <Footer />
            
        </div>
    )
}

export default Login;

