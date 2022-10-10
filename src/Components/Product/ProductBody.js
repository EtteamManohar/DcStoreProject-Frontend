import { Link } from 'react-router-dom';
import Button from '../Button/ButtonBody';
import './product.css';
import axios from 'axios';
import { useCart } from 'react-use-cart';


const Product = (props) => {
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

    let { image, price, product_name} = props.data;
    const { addItem } = useCart();
    const addToCart = () =>{
        addItem(props.data);
        console.log(props.data);
        alert("Item Added to cart");

    }
    

    return (
        <div>
            
            <div className='product-container'>
                <div className='product-image-container'>
                    <img className='image_Product' src={image}/>
                </div>
                <div className='product-details-container row text-center'>
                    <label className='font_size_20px'>Name:{product_name}</label>
                    <label className='font_size_18px'>Price:{price}</label>
                   {getCookie("accessToken") &&
                    <button className="btn btn-secondary btnproduct"onClick={()=> addToCart()}>Add to cart</button>
                    }
                    {
                        !getCookie("accessToken") &&
                        
                        <a href='/login'> <button className="btn btn-secondary btnproduct">Add to cart</button></a>
                    }
                </div>
            </div>
        </div>
    )
}

export default Product;