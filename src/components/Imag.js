import React from 'react';
import img1 from '../imags/banner-websiter-kids_482x.webp'
import img2 from '../imags/web_banner-1400-940_pull_over_482x.webp'
import img3 from '../imags/web-banner-1400-940-jacket_482x.webp'

function Imag() {
  return (
 <div className='container' >
  <div className='row'>
    <div className='col-md-6 col-12 mb-3 '>
      <img  className='img-fluid' src={img1} alt=''/>
      </div>
      <div className='col-md-6 col-12 '><img className='img-fluid' src={img2} alt=''/></div>    
  </div>
  <div className='row'>
    <div className='col-md-6 col-12'>
      <img  className='img-fluid' src={img3} alt=''/>
      </div>
      <div className='col-md-6 col-12'><img  className='img-fluid' src={img3} alt=''/></div>    
  </div>
 </div>    
  )
}

export default Imag;
