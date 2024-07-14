import React from 'react'
import './header.css'
import images from "../..//data/images";
import ImageSlider from "../Slider/ImageSlider";
function Header() {
  return (
    <div className="home">
    <ImageSlider>
      {images.map((image, index) => {
        return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
      })}
    </ImageSlider>
  </div>
  )
}

export default Header
