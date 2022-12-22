import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import banner from '../imags/banner-hero-fay2_d2dc220f-1719-4540-a525-066324ce1c9d.webp'
import banner1 from '../imags/banner-wepsite_3.webp'
import banner2 from '../imags/kids-banner.webp'

function MultiImgs() {
 
  return (
    <Carousel fade className='my-5 pt-4'>
      <Carousel.Item >
        <img
          className="d-block w-100 img"
          src={banner}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-100 img"
          src={banner1}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-100 img"
          src={banner2}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default MultiImgs;
