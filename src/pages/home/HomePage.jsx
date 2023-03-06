import React from "react";
import CarouselMovies from "./components/carousel/CarouselMovies";
import MovieList from "./components/movie-list/MovieList";
import News from "./components/news/News";
import TheaterSystemShowTimes from "./components/theaterSystem-showtimes/TheaterSystemShowTimes";
import TheaterSystem from "./components/theaterSystem/TheaterSystem";
import "./homePage.scss"

export default function HomePage() {
  return (
    <div>
      <CarouselMovies />
      <MovieList />


      <div id="theater" className="theater mt-5" >
        <div className="content" >
          <TheaterSystem />
          
             {/* <TheaterSystemShowTimes/> */}
        
             
        </div>
      </div>

      <News />
    </div>
  );
}
