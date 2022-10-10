import Button from '../Button/ButtonBody';
import './header.css';
import { Link } from 'react-router-dom';
import { useCart } from "react-use-cart";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js';



const Header = () => {
    const {
        isEmpty,
        totalItems,
    } = useCart();

    const getCookie = (cname) => {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
            
        }
        
        return "";
        
    }


    const signoutHandler = () => {
        console.log("logout")
        console.log(window.location);
        document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        window.location.href = '/';
    }
    const username = sessionStorage.getItem("username");
  
    return (
        <div>
            <div className='header' >
                
                {
                    getCookie("accessToken") &&

                        <div className="row">
                                <div className="col">
                                    <label><b>Welcome! {username}</b></label>
                                </div>
                                <div className="col-lg-auto margin_right_46px">
                                    {/* <a href="/orders"><span>My Orders</span></a> */}
                                    <a href="/cart"><span className="margin_left_20px">Cart  ({totalItems})</span></a>
                                    <Link to="/" onClick={signoutHandler} ><label className='margin_left_20px'>Logout</label></Link>
                                </div>
                            </div>
                    // <div className='login-register'>
                        
                    //     <a href='/orders'><label className='margin_left_20px margin_left_850px'>My Orders</label></a>
                    //     <a href='/cart'><label className='margin_left_20px'>Cart</label></a>
                    //     <label className='margin_left_62px'> <strong>{username}</strong></label>
                    //     <Link to="/" onClick={signoutHandler} ><label className='margin_left_20px'>Logout</label> </Link>
                    // </div>
                //     <Button text='Logout' />
                 }
                {
                    !(getCookie("accessToken")) &&
                    <div className="col-lg-auto margin_right_46px">
                    <a href='/login' className='margin_left_1120px'><label className='margin_right_20px '>Login</label></a>
                        <a href='/register'><label>Register</label></a>
                </div>

                    // <div className='login-register'>
                    //     <a href='/login' className='margin_left_1120px'><label className='margin_right_20px '>Login</label></a>
                    //     <a href='/register'><label>Register</label></a>
                    // </div>
                }
            </div>
        </div>
    )
}

export default Header;