import React from 'react'
import Slider from "react-slick";
import image1 from "../../assets/category/image2.jpeg"
// import image3 from "../../assets/category/image3.jpeg"
// import image2 from "../../assets/hero/image3.jpeg"


const helloSlider=[
    

]

const Hello = () => {
    const settings= {
        dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed:4000,
    cssEase:"ease-in-out",
    pauseOnHover:false,
    pauseOnFocus:true,
    }
  return (
    <div>
        <div className='w-full'>
            {/*hello section*/}
            <Slider {...settings}></Slider>

        </div>
    </div>
  )
}

export default Hello