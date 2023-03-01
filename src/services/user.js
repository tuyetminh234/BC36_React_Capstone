import axios from "axios";
import { BASE_URL, TOKEN_CYBERSOFT } from "../constants";
import { axiosRequest } from "../configs/axios.config";

export const loginApi = (information) => {
  return axiosRequest({
    url: `/QuanLyNguoiDung/DangNhap`,
    method: "POST",
    data: information,
  });
};


export const bookingHistoryApi = (user) => {
  return axiosRequest({
    url: `/QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${user}`,
    method: "POST",
   
  });
};

