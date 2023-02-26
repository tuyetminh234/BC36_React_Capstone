import React from "react";
import "./register.scss";
export default function Register() {
  return (
    <>
      <form className="register">
        <div>
          <div className="container">
            <h1>REGISTER</h1>
            <p>Please fill in this form to create an account.</p>
            <hr />

            <label htmlFor="account">
              <b>Account</b>
            </label>
            <input
              className="flex"
              type="text"
              placeholder="Enter Account"
              name="account"
              id="account"
              required
            />

            <label htmlFor="password">
              <b>Password</b>
            </label>
            <input
              className="flex"
              type="password"
              placeholder="Password"
              name="password"
              id="password"
              required
            />

            <label htmlFor="repeatPassword">
              <b>Repeat Password</b>
            </label>
            <input
              type="password"
              placeholder="Nhập lại mật khẩu"
              name="nhapLaiMatKhau"
              id="nhapLaiMatKhau"
              required
            />

            <label htmlFor="fullName">
              <b>Full Name</b>
            </label>
            <input
              type="text"
              placeholder="Enter full name"
              name="fullName"
              id="fullName"
              required
            />

            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              id="email"
              required
            />

            <label htmlFor="phoneNumber">
              <b>Phone Number</b>
            </label>
            <input
              type="text"
              placeholder="Enter phone Number"
              name="phoneNumber"
              id="phoneNumber"
              required
            />

            <hr />
            <button
              // disabled={!formRef.current?.checkValidity()}
              className="btn btn-warning mr-2"
            >
              REGISTER
            </button>
            <button className="btn btn-outline-dark">LOGIN</button>
          </div>
        </div>
      </form>
    </>
  );
}
