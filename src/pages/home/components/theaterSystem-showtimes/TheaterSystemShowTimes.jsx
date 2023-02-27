import React, { useEffect, useState } from "react";
import { fetchTheaterSystemApi } from "services/theater";
import { formatDate } from "utils";
import { Link } from "react-router-dom";
import "./theaterSystemShowTimes.scss";

export default function TheaterSystemShowTimes() {
  const [theaterSystem, setTheaterSystem] = useState([]);

  const [idcode, setIdCode] = useState("CGV")

  console.log(theaterSystem)

  useEffect(() => {
    getTheaterSystem();
  }, []);

  const getTheaterSystem = async () => {
    const result = await fetchTheaterSystemApi();
    console.log(result);
    setTheaterSystem(result.data.content);
  };

  const renderThearterSystem = () => {
    return theaterSystem.map((ele, idx) => {
      return (
        <button
          className={`nav-link text-capitalize`}
          data-toggle="pill"
          href={`#${ele.maHeThongRap}`}
          role="tab"
          aria-selected="true"
          key={ele.maHeThongRap}
          onClick={() => {
            setIdCode(ele.maHeThongRap)
          }}
        >
          <div>
            <img src={ele.logo} />
          </div>
        </button>
      );
    });
  };

  const renderTheaterAddress = () => {
    return theaterSystem?.map((ele, idx) => {
      if (ele.maHeThongRap === idcode)
        return TestComponent(ele);
    });
  }; 

  const TestComponent = (ele) => {
    return (
      <div
        key={ele.maHeThongRap}
        className={`tab-pane fade show`}
        id={ele.maHeThongRap}
        role="tabpanel"
      >
        {ele?.lstCumRap?.map((ele) => {
          return (
            <div className="flex-column theater-address ">
              <button
                key={ele.maCumRap}
                className={`nav-link text-capitalize`}
                data-toggle="pill"
                href={`#${ele.maHeThongRap}`}
                role="tab"
                aria-selected="true"
              >
                <span>
                  <div>
                    <h4>{ele.tenCumRap}</h4>
                    <h6>{ele.diaChi}</h6>
                    <a>[Chi tiet]</a>
                  </div>
                </span>
              </button>
            </div>
          );
        })}
      </div>
    );
  }

  const renderShowtimes = () => {
    return theaterSystem?.map((ele, idx) => {
      return (
        <div key={ele.maHeThongRap}>
          {ele?.lstCumRap?.map((ele) => {
            return (
              <div key={ele.maCumRap}>
                {ele?.danhSachPhim?.map((ele) => {
                  return (
                    <div
                      key={ele.maPhim}
                      className="flex-column "
                    >
                      <div className="theater-content">
                        <img className="theater-img" src={ele.hinhAnh} />
                        <div className=" right-content">
                          <h2 className="right-content-h2">
                            <span className="movie-name">C17</span>
                            {ele.tenPhim}
                          </h2>
                          <div className="showTime-detail">
                            {ele?.lstLichChieuTheoPhim?.map((ele) => {
                              return (
                                
                                <a key={ele.maLichChieu} className="showTime-detail-a" href="">
                              <div className="times">
                                    <p>   { formatDate (ele.ngayChieuGioChieu)}</p>
                                {/* <p> ~ </p>
                                <p className="p1">19:00</p> */}
                              </div>
                            </a>
                           
                                
                              )
                            })}
                           
                            {/* <a className="showTime-detail-a" href="">
                              <div className="times">
                                <p>14-07-2021</p>
                                <p> ~ </p>
                                <p className="p1">19:00</p>
                              </div>
                            </a>
                            <a className="showTime-detail-a" href="">
                              <div className="times">
                                <p>14-07-2021</p>
                                <p> ~ </p>
                                <p className="p1">19:00</p>
                              </div>
                            </a>
                            <a className="showTime-detail-a" href="">
                              <div className="times">
                                <p>14-07-2021</p>
                                <p> ~ </p>
                                <p className="p1">19:00</p>
                              </div>
                            </a> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      );
    });
  };

  return (
    <>
      <div className="theater-system ">{renderThearterSystem()}</div>
      <div>{renderTheaterAddress()}</div>
      <div className="theater-showtimes"
      >{renderShowtimes()}</div>
    </>
  );
}





 