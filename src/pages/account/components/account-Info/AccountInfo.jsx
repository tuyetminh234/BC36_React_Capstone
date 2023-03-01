import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { profileApi } from 'services/user'

export default function AccountInfo(props) {
  const [form, setForm] = useState()
 
 
  useEffect(() => {
    if (props.data) {
      setForm(props.data)
    }
  }, [props.data])

  // const getProfileApi = async () => {
  //   try {
  //     const result = await getProfileApi()
  //   console.log(result)
    
  //   } catch (error) {
  //     console.log("error", error)
  //   }
    
// }

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
                  value={form?.taiKhoan}
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
                  value={form?.matKhau}
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
                  value={form?.hoTen}
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
                  value={form?.email}
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
                  value={form?.soDt}
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
