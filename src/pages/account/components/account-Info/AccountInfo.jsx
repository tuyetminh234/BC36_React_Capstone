import React from 'react'

export default function AccountInfo() {
  return (
    <div className="account-info">
    <h1>Cài đặt tài khoản chung</h1>
      <p>Thông tin có thể được thay đổi</p>
      <hr />
      <form className="form-account">
    
        <div className="form-content">
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <label>Tài khoản</label>
                <input
                  required
                  title="Tài khoản"
                  name="taiKhoan"
                  type="text"
                  className="form-control"
                />
                <span className="text-danger"></span>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label>Mật khẩu</label>
                <input
                  required
                  title="mật khẩu"
                  name="matKhau"
                  minLength={5}
                  maxLength={10}
                  type="text"
                  className="form-control"
                />
                <span className="text-danger"></span>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label>Họ tên</label>
                <input
                  required
                  title="họ tên"
                  name="hoTen"
                  type="text"
                  className="form-control"
                />
                <span className="text-danger"></span>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label>Email</label>
                <input
                  required
                  title="email"
                  name="email"
                  type="text"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  className="form-control"
                />
                <span className="text-danger"></span>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label>Số điện thoại</label>
                <input
                  required
                  title="số điện thoại"
                  name="soDt"
                  type="text"
                  className="form-control"
                />
                <span className="text-danger"></span>
              </div>
            </div>
          </div>
          <hr />
          <button
            // disabled={!formRef.current?.checkValidity()}
            className="update btn btn-warning mr-2"
          >
            CẬP NHẬT
          </button>
        </div>
      </form>
    </div>
  )
}
