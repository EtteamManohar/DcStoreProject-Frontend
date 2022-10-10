import Header from '../Header/HeaderBody';
import Top from '../Top/TopBody';
import Product from '../Product/ProductBody';
import Picture from '../Picture/Picture';
import Footer from '../Footer/Footer';
import './home.css';

import React, { useState ,useEffect} from 'react';

const Home = () => {
    const [productitem, setProductitem] = useState([]);
    const [error, setError] = useState({});

  useEffect(() => {
    fetch("http://localhost:8082/api/auth/product_details")
      .then(res => res.json())
      .then(
        (result) => {
          console.log('called get items')
          console.log(result)
          setProductitem(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
    //     (error) => {
    // alert("Operation failed");
    //       setError(error);
    //     }
      )
  }, [])
    return (
        <div>
            <Top />
            <Header />
          
            <Picture/>
            <div className='all-products-contain'>
            {productitem && productitem.map((productitems,i) => (
                <Product
            
                   data={productitems}
                    key={i}
                />
                
                ))}
            
            </div>
            
         
            <Footer/>
        </div>
    )
}

export default Home;
