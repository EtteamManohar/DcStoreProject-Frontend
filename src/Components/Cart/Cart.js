import React from 'react';
// import { Button, Container, Col, Row, Table} from 'react-bootstrap';
import { useCart } from 'react-use-cart';
// import { useThemeHook } from '../GlobalComponents/ThemeProvider';
// import { BsCartCheck, BsCartX} from 'react-icons/bs';
import { Button, Container, Col, Row, Table} from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Header from '../Header/HeaderBody';
import Top from '../Top/TopBody';
import Footer from '../Footer/Footer';

const Cart = () => {
    const {
        isEmpty,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
   
    return (
       <>
        <Top />
        <Header />
        <Container className="py-4 mt-5">
        <h1 >The Cart</h1>
       
            
        <Row className="justify-content-center">
                <Table responsive="sm" striped bordered hover  className="mb-5">
               
                    <tbody>
                    {items.map((item, index)=>{
                            return(
                                <tr key={index}>
                                    <td>
                                        <div style={{ background: 'white', height: '8rem', overflow: 'hidden', display: 'flex',
                                        justifyContent: 'center', alignItems: 'center' }}>
                                            <div style={{ padding: '.5rem'}}>
                                                <img src={item.image} style={{ width: '4rem'}} alt={item.product_name} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <h6 style={{ whiteSpace: 'nowrap', width: '14rem', overflow: 'hidden', textOverFlow: 'ellipsis'}}>
                                            {item.product_name}
                                        </h6>
                                    </td>
                                    <td>Rs. {item.price}</td>
                                    <td>Quantity ({item.quantity})</td>
                                    <td>
                                        <Button onClick={()=> updateItemQuantity(item.id, item.quantity - 1)} className="ms-2">-</Button>
                                        <Button onClick={()=> updateItemQuantity(item.id, item.quantity + 1)} className="ms-2">+</Button>
                                        <Button variant="danger" onClick={()=> removeItem(item.id)} className="ms-2">Remove Item</Button>
                                    </td>
                                </tr>
                            )
                        })}
                                {/* <tr>
                                    <td>
                                        <div style={{ background: 'white', height: '8rem', overflow: 'hidden', display: 'flex',
                                        justifyContent: 'center', alignItems: 'center' }}>
                                            <div style={{ padding: '.5rem'}}>
                                                <img src="Product Image"style={{ width: '4rem'}} alt="Product Image" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <h6 style={{ whiteSpace: 'nowrap', width: '14rem', overflow: 'hidden', textOverFlow: 'ellipsis'}}>
                                         "Product Name"
                                        </h6>
                                    </td>
                                    <td>Rs. 30</td>
                                    <td>Quantity </td>
                                    <td>
                                        <Button onClick={()=> updateItemQuantity()} className="ms-2">-</Button>
                                        <Button onClick={()=> updateItemQuantity()} className="ms-2">+</Button>
                                        <Button variant="danger" onClick={()=> removeItem()} className="ms-2">Remove Item</Button>
                                    </td>
                                </tr> */}
                            
              
                    </tbody>
                </Table>
                
                    <Row >
                        <Col className="py-2">
                            <h4>Total Price: Rs. {cartTotal}</h4>
                        </Col>
                        <Col className="p-0" md={4}>
                            
                          <a href="/checkout"  ><Button variant="success"
                                className="m-2"
                            >
                               
                                Check Out
                            </Button></a>
                        </Col>
                        
                    </Row>
            </Row>
        
            </Container>
            <Footer/>
                 
       </>
       
    );
};

export default Cart;