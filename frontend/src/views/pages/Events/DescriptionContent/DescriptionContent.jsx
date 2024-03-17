import { useRef } from "react";
import Slider from "react-slick";

import "./DescriptionContent.css";
import { HERO_DESCRIPTION_INFORMATION } from "../../../../utils/data";

export default function DescriptionContent() {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 996,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  function slideRight() {
    sliderRef.current.slickNext();
  }

  function slideLeft() {
    sliderRef.current.slickPrev();
  }

  return (
    <section className="description-container">
      <div className="description-content container">
        <Slider ref={sliderRef} {...settings}>
          {HERO_DESCRIPTION_INFORMATION.map((item) => (
            <div key={item.title} className="description-card">
              <i className={item.icon}></i>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
