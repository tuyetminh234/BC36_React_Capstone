import React from "react";
import CarouselMovies from "./components/carousel/CarouselMovies";
import MovieList from "./components/movie-list/MovieList";
import News from "./components/news/News";
import TheaterSystem from "./components/theaterSystem/TheaterSystem";
import "./homePage.scss";

export default function HomePage() {
  return (
    <div>
      <CarouselMovies />
      <MovieList />

      <div id="theater" className="theater mt-5">
        <div className="content">
          <TheaterSystem />
        </div>
      </div>

      <News />
    </div>
  );
}
