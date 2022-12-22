import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams,useNavigate } from 'react-router-dom';
import { productFetch2, removeSelectedproduct } from '../features/NewproductsSlice';
import { addtocart, getTotals } from '../features/CartSlice';
import { Zoom } from 'react-reveal';
import './SelectProduct.scss';
import Slider from "react-slick";

function SelectedProduct() {
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
  const product=useSelector(state=>state.newproducts.selectProduct);
  console.log(product);
    const navigate=useNavigate();
    const params=useParams()
    const {id}=params;
    const dispatch=useDispatch();
    const handelevent=()=>{
      dispatch(addtocart(product))
      navigate('cart')
    }
    useEffect(()=>{
        dispatch(productFetch2(id))
        dispatch(getTotals());
        return () => {
            dispatch(removeSelectedproduct());
          };
      },[dispatch,id])
  return (
<div className="product-section">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <>
          <div className="section-left">
            <div className="product-title">{product.Title}</div>
            <div className="product-brand">{product.brand}</div>
            
            <div className="product-describtion">{product.description}</div>
            <div className="product-info">
              <div>
                <span>price</span>
                <span>${product.price}</span>
              </div>
              <div>
                <span>Discount</span>
                <span>${product.discountPercentage}</span>
              </div>
              <Zoom left>
    <button  id='btn2' className="btn btn-primary" onClick={handelevent}>AddtoCart</button>
    </Zoom>
            </div>
          </div>
          <div className="section-right">
          <Slider {...settings}>{product.images.map((img)=>(
         <img src={img} alt={product.Title} className='card-img-top'/>       
          ))}</Slider>
         </div>
        </>
      )}
    </div>
  )
}

export default SelectedProduct;
