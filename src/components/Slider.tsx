import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Sliders: React.FC = () => {
  const imgArr: string[] = [
    "./asset 9.jpeg",
    "./asset 10.jpeg",
    "./asset 11.jpeg",
    "./asset 12.jpeg",
    "./asset 13.jpeg",
  ];
  var settings = {
    infinite: false,
    arrows: false,
    dots: true,
    speed: 800,
    slidesToShow: 2.5,
    slidesToScroll: 1.5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
          arrows: false,
          slidesToScroll: 1.5,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {imgArr.map((img: string, i: number) => {
          return (
            <div className="swipe-img" key={i}>
              <img src={img} alt="" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Sliders;
