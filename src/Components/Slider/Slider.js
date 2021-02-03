import './Slider.css';
import Slider from "react-slick";
import slidesData from './_data'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import { useEffect, useState } from 'react';

function MainSlider() {

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  useEffect(() => {

    setNav1(slider1);
    setNav2(slider2);

  });


  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    asNavFor: '.slider-nav',
    nextArrow: (
      <div>
        <div className="arrow-frame">
          <div className="next-slick-arrow"> →   </div>
        </div>
      </div>
    ),
    prevArrow: (
      <div>
        <div className="arrow-frame">
          <div className="prev-slick-arrow"> ← </div>
        </div>
      </div>
    )
  };

  const settingsThumbs = {
    slidesToShow: 15,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: '10px'
  };


  

  return (
  <>
    <div className="slider">
      <div className="slider-wrapper">

        <Slider {...settingsMain}
        asNavFor={nav2}
        ref={slider => (setSlider1(slider))}
        >

          {slidesData.map((slide) =>
            <>
            <div className="slick-slide" key={slide.id}>
              <div className="slider-main">
                <div className="slider-text">
                  <h3>{slide.text}</h3>
                  <h1>{slide.title}</h1>
                  <button className="btn" style={{backgroundColor: slide.btn}} >Fırsatları Kaçırma !</button>
                </div>
                <img className="slick-slide-image" src={slide.img} alt="" />
              </div>
            </div>             
            </>
          )}

        </Slider>
        <div className="thumbnail-slider-wrap">
          <Slider
            {...settingsThumbs}
            asNavFor={nav1}
            ref={slider => (setSlider2(slider))}>

            {slidesData.map((slide) =>

              <div className="slick-slide" key={slide.id}>
                <img className="slick-slide-image" src={slide.thumbnail} alt="" />
              </div>

            )}

          </Slider>
        </div>

      </div>
    </div>
  </>
  );
}

export default MainSlider;
