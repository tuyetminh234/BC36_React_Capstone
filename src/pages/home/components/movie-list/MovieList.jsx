import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { useMovieList } from "../../../../hooks/useMovieList";
import "./style.movie.scss";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MovieList() {
  const navigate = useNavigate();
  const movieList = useMovieList();

  const settings = {
     dots: true,
     infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  const renderMovieList = () => {
    return movieList.map((ele) => {
      return (
        <div  key={ele.maPhim} style={{ padding: "20px" }}>
          <div
            className="card movie-card"
            style={{ marginBottom: 20, height: "500px" }}
          >
            <img
              style={{ height: 350, objectFit: "cover", width:"100%" }}
              className="card-img-top"
              src={ele.hinhAnh}
              alt="movie"
            />
            <div className="card-body">
              <h5 className="card-title">{ele.tenPhim}</h5>
              <Button
                onClick={() => navigate(`/movie-detail/${ele.maPhim}`)}
                size="large"
                type="primary"
              >
                XEM CHI TIẾT
              </Button>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="row mt-3 mx-auto w-75">
      <Slider {...settings}>
      {renderMovieList()}
      </Slider>
    </div>
  );
}
