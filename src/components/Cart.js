import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { decreaseCart, removeFromCart,addtocart,clearCart, getTotals} from "../features/CartSlice";
import Slider from "react-slick";
function Cart(){
    
    const cart=useSelector((state)=>state.cart);
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 1500,
        cssEase: "linear"
      };     
    
    const dispatch=useDispatch();
    useEffect(()=>{
    dispatch(getTotals());
    },[cart,dispatch])
    return (
    <div className="cart-container mt-5 pt-5">
     <h2 className="pt-3">
        Shopping Cart
     </h2>
     {cart.cartItems.length===0?(
        <div className="cart-empty">
            <p>Your Cart is currently empty</p>
            <div className="start-shopping">
            <Link to='/Ecommerce-Site/'><svg xmlns="http://www.w3.org/2000/svg" width="20"
             height="20" fill="currentColor"
              className="bi bi-arrow-left"
               viewBox="0 0 16 16">
              <path fillRule="evenodd" 
                d ="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0
                 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
             </svg>
               <span>Start Shopping</span>
           </Link>
            </div>
        </div>
     
    ): (
    <>
    <div>
        <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="price">Price</h3>
            <h3 className="Quantity">Quantity</h3>
            <h3 className="Total">Total</h3>
        </div>
        <div className="cart-items">
            {cart.cartItems.map(cartitem=>(
                <div className="cart-item" key={cartitem.id}>
                    <div className="cart-product">
                    <Slider {...settings}>{cartitem.images.map((img)=>(
         <img src={img} alt={cartitem.Title} className='card-img-top'/>       
          ))}</Slider>
                        <div>
                            <h5>
                                {cartitem.title.slice(0,15)}
                            </h5>
                            <button onClick={()=>dispatch(removeFromCart(cartitem))}>Remove</button>
                        </div>
                    </div>
                    <div className="cart-product-price">${cartitem.price}</div>
                    <div className="cart-product-quantity">
                        <button onClick={()=>dispatch(decreaseCart(cartitem))}>-</button>
                        <div className="count">{cartitem.cartQuantity}</div>
                        <button onClick={()=> dispatch(addtocart(cartitem))}>+</button>
                    </div>
                    <div className="cart-product-total-price">
                        ${cartitem.price*cartitem.cartQuantity}
                    </div>
                </div>
            ))}
        </div>
        <div className="cart-summary">
            <button className="clear-cart"onClick={()=> dispatch(clearCart())}>Clear Cart</button>
            <div className="cart-checkout">
            <div className="subtotal">
                <span>Subtotal</span>
                <span className="amount">${cart.cartTotalAmount}</span>
            </div>
            <p>Taxes and shipping calculated at checkout</p>
            <button>Check out</button>
            <div className="continue-shopping">
            <Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="20"
             height="20" fill="currentColor"
              className="bi bi-arrow-left"
               viewBox="0 0 16 16">
              <path fillRule="evenodd" 
                d ="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0
                 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
             </svg>
               <span>Continue Shopping</span>
           </Link>
            </div>
        </div>
    </div>
    </div>
    </>
    )}
    </div>
    );

}
export default Cart;
