import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import { fetchCarouselApi } from "services/carousel";
import "./carouselMovie.scss"


const contentStyle = {
  width: "100%",
  height: "600px",
  objectFit: "cover",
};

export default function CarouselMovies() {
  const [carouselList, setCarouselList] = useState([]);
  useEffect(() => {
    getCarousel();
  }, []);

  const getCarousel = async () => {
    const result = await fetchCarouselApi();
    // console.log(result)
    setCarouselList(result.data.content);
  };

  const renderCarousel = () => {
    return carouselList.map((ele) => {
      return (
        <div key={ele.maBanner} className="banner">
          <div>
            <img style={contentStyle} src={ele.hinhAnh} className="banner-img"/>
          </div>
        </div>
      );
    });
  };

  const onChange = (currentSlide) => {
    // console.log(currentSlide);
  };
  return (
    <Carousel afterChange={onChange} dotPosition="right" autoplay={true}>
      {renderCarousel()}
    </Carousel>
  );
}



