import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { setUserInfoAction } from "../../store/actions/userAction";
import "./header.scss";

export default function Header() {
  const userState = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("USER_INFO_KEY");
    dispatch(setUserInfoAction(null));
    navigate("/");
  };

  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="header-ul ml-auto">
            <li>
              <a className="navbar-brand">
                <NavLink to="/">Trang chủ</NavLink>
              </a>
            </li>

            <li>
              <a className="navbar-brand" href="#movieList">
                {" "}
                Xem phim{" "}
              </a>
            </li>
            <li>
              <a className="navbar-brand" href="#theater">
                {" "}
                Cụm rạp{" "}
              </a>
            </li>
            <li>
              <a className="navbar-brand" href="#news">
                {" "}
                Tin tức{" "}
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="header-right ml-auto ">
        {userState.userInfo ? (
          <>
            <a className="account-name" href="/account/:user">
              <span className="mr-3">Hello {userState.userInfo.hoTen}</span>
            </a>
            <button className="btn btn-danger" onClick={handleLogout}>
              Đăng xuất
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => navigate("/register")}
              className="btn btn-outline-success my-2 my-sm-0 mr-2"
              type="sumit"
            >
              Đăng ký
            </button>
            <button
              onClick={() => navigate("/login")}
              className="btn btn-outline-primary my-2 my-sm-0"
            >
              Đăng nhập
            </button>
          </>
        )}
      </div>
    </div>
  );
}
