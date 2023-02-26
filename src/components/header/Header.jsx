import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { setUserInfoAction } from "../../store/actions/userAction";
import "./header.scss"

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
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
    
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
        <ul className="navbar-brand">
          <li className="nav-item active">
            {/* <a className="nav-link" href="#">
              {" "}
              Home{" "}
            </a> */}
            <NavLink to="/">Home</NavLink>
          </li>
        </ul>

        <a className="navbar-brand" href="#">
        {" "}
        Movie{" "}
      </a>
      <a className="navbar-brand" href="#">
      {" "}
        Member{" "}
        </a>
        <a className="navbar-brand" href="#">
      {" "}
        Contact{" "}
      </a>
      
        <div className="ml-auto">
          {userState.userInfo ? (
            <>
              <span className="mr-3">Hello {userState.userInfo.hoTen}</span>
              <button className="btn btn-danger" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
                <button
                  onClick={()=>navigate("/register")}
                className="btn btn-outline-info my-2 my-sm-0 mr-2"
                type="sumit"
              >
                Register
              </button>
              <button
                onClick={() => navigate("/login")}
                className="btn btn-outline-success my-2 my-sm-0"
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
