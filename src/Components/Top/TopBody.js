import Button from '../Button/ButtonBody';
import './top.css';
import Footer from '../Footer/Footer';
import { Link, NavLink } from 'react-router-dom'
import logo from './logo.jpg';


const Top = () => {
    return(
        <div>
            <div className='height36px'></div>
            <div className='row top' >
                <div className='col-md-4 padding_left_69px'>
                    <Link to="/">
                    <img width="32%" src={logo}  alt="Bat-Man"></img>
    
                    </Link>
                </div>

                <div className='col-md-4 text-center'>
                    <NavLink to="/" >
                    <span className='font_size_29px'> DC STORE</span>
                    </NavLink>
                </div>
                <div className='col-md-4 txt_align_right padding_right_67px '>
                    <Link to="/contactus"><label>Contact Us</label></Link>
                </div>  
            </div>
            
        </div>
    )
}

export default Top;