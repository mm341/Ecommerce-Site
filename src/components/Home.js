import React, { useEffect,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Fade } from 'react-reveal';
import LightSpeed from 'react-reveal/Zoom';
import { Zoom } from 'react-reveal';
import {getTotals } from '../features/CartSlice';
import { catofProductFetch, productsFetch2,removeSelectedproduct} from '../features/NewproductsSlice';
import Head from './Head';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

function Home() {

const[display,setDisplay]=useState(false);
const handelDisplay=()=>{
 if(window.scrollY>2500){
  setDisplay(true);
 }else{
  setDisplay(false)
 }
}
window.addEventListener('scroll',handelDisplay); 
const handelScroll =()=>{
  window.scrollTo({
    top:0,
    behavior:'smooth',
  })
}

  const[categories,setCategories]=useState([])
  const products=useSelector(state=>state.newproducts.products);
  console.log(products);
  
  const getCategories=()=>{
    fetch('https://dummyjson.com/products/categories').then(result=>result.json()).then(data=>setCategories(data.slice(0,6)));
  }
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(productsFetch2());
    getCategories();
    dispatch(getTotals());
    dispatch(removeSelectedproduct());
  },[dispatch])
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
 
  return (  
<>
<Head/>  
<div className='container mt-5 pt-5'>
      <div className='row'>
        <div className='category col-md-2 d-sm-2 col-xs-12'>
        <button id='allproduct' onClick={()=>{
            dispatch(productsFetch2())
          }}>All Products</button>
        {categories.map((cat,index)=>(
          <>
          <div onClick={()=>{
            dispatch(catofProductFetch(cat),)
          }} className='cat' key={index}>{cat}</div>
          </>
        ))}
        </div>
      
      <div className='products col-md-10 col-sm-10 col-xs-12'>
        <div className='row'>     
         {products.length === 0 ?(<div>...Wait Please</div>): (products.map((product)=>(
          <div className='card1 col-lg-3 col-md-4 col-sm-6 col-xs-12'>
          <Fade left>    
        <div className="card" key={product.id}>
        <Slider {...settings}>{product.images.map((img)=>(
         <img src={img} alt="..." className='card-img-top'/>       
          ))}</Slider>
 
  <div className="card-body">
    <h5 className="card-title">{product.title.slice(0,10)}</h5>
    
    <LightSpeed right>
    <p text-sucess className="card-text ">${product.price}</p>
    </LightSpeed>
   
  </div>
  <Zoom left>
    <Link to={`/product/${product.id}`} id='btn' className="btn btn-primary">Details</Link>
    </Zoom>
</div>
  </Fade>
  </div>
   
         )
  ))}
  
  </div>
      </div>
          
      </div>
     
  </div>
  <button onClick={handelScroll} className={display?'btn btn-danger position-fixed arrow-top ':'btn btn-danger position-fixed arrow-top display'}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
</svg></button>
</>

  )
}
export default Home;
