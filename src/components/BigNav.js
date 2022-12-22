import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { catofProductFetch,productsFetch2 } from '../features/NewproductsSlice';
import navLogo  from '../imags/best-scenery-wallpaper-scenery-images.jpg';

function BigNav() {
const[border1,setBorder1]=useState(false)
const[border2,setBorder2]=useState(false)
  const[categories1,setCategories1]=useState([])
  const[border,setborder]=useState(false)
  const handerBorder=()=>{
    setBorder1(false)
    setBorder2(true)
  }
  const handerBorder2=()=>{
    setBorder2(false)
    setBorder1(true)
  }
  const handel=()=>{
    setBorder1(false);
    setBorder2(false);
  }
  const getCategories2=()=>{
    fetch('https://dummyjson.com/products/categories').then(result=>result.json()).then(data=>setCategories1(data.slice(0,6)));
  }
  useEffect(()=>{
    getCategories2()
  },[])
  const dispatch =useDispatch();
  const[text,setText]=useState("");
  const submitHandler=(e)=>{
    if(text.length>0){
      e.preventDefault();
   dispatch(catofProductFetch(text));
   setText("");
    }else{
      e.preventDefault();
    }
  }
 
  const {cartTotalQuantity}=useSelector(state=>state.cart)
  const cursor={
    cursor:"pointer",
  }
   return (
    <>
<nav className="navbar navbar-dark bg-dark fixed-top ">
  <div className="container">
  <Link to='/' className="navbar-brand"><h1 onClick={handel} className='logo'>Bary</h1>
  <img onClick={handel} src={navLogo} alt=""/>
   </Link>
    <ul className="firstUl navbar-nav  flex-grow-1 pe-3 ">
          
    <li className='nav-item'>
          <div className='search-bar'>
          <form onSubmit={submitHandler}>
          <input type='text' value={text}placeholder='Search Categories'onChange={(e)=>setText(e.target.value)}/>
          <button type='submit'><i className='fa fa-search'></i></button>
        </form>
        </div>
        </li>
          <li className="nav-item">
          <Link to='./about' onClick={handerBorder2} className={border1?"nav-link  active":"nav-link a"}>About Bary</Link>
          </li>
          <li className='nav-item'>
          <Link className={border2?"nav-link  active":"nav-link a"}  onClick={handerBorder} to='./cart'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart-check-fill" viewBox="0 0 16 16">
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z"/>
</svg><span className='bag-quantity'>{cartTotalQuantity}</span>
</Link>
          </li>
          <li className="nav-item">
<div class="dropdown">
  <p onClick={handel} class="nav-link link" id='a5' type="button" data-bs-toggle="dropdown" aria-expanded="false">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
<path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
</svg>
  </p>
  <ul class="dropdown-menu">
    <li><Link class="dropdown-item" to='./login'>
    log out
      </Link></li>
  </ul>
</div>
        </li>
        </ul>
    <button  className= {border?"navbar-toggler d-lg-none d-md-block d-sm-block border":"navbar-toggler d-lg-none d-md-block d-sm-block"}  onClick={()=>{
      setborder(true)
    }} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span   className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end text-bg-dark border-none" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <button  type="button"  className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
        <li className='nav-item'>
          <div className='search-bar'>
          <form onSubmit={submitHandler}>
          <input type='text' value={text}placeholder='Search Categories'onChange={(e)=>setText(e.target.value)}/>
          <button type='submit'><i className='fa fa-search'></i></button>
        </form>
        </div>
        </li>
          <li className="nav-item">
          <Link className="nav-link" to='./about'>About Bary</Link>
        </li>
          <li className='nav-item'>
          <Link className="nav-link" to='./cart'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart-check-fill" viewBox="0 0 16 16">
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z"/>
</svg><span className='bag-quantity'>{cartTotalQuantity}</span>
</Link>
          </li>
          <li className="nav-item">
          <Link to='./login' className="nav-link"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
<path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
</svg>
</Link>
        </li>
        <li className='nav-item'>
          <div className='category2'>
        <button id='allproduct' className='fs-1 mb-2 bg-dark' onClick={()=>{
            dispatch(productsFetch2())
          }}>All Products</button>
        {categories1.map((cat,index)=>(
          <>
          <div onClick={()=>{
            dispatch(catofProductFetch(cat),)
          }} className='cat fs-1 mb-2 opacity-50' style={cursor}  key={index}>{cat}</div>
          </>
        ))}
        </div></li>
        </ul>
      </div>
    </div>
  </div>
</nav>
 </>
  )}
  export default BigNav;