import { axiosRequest } from "configs/axios.config";

export const fetchTheaterSystemApi = () => {
  return axiosRequest({
      url: `/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP02`,
      method: "GET",
      
    })
}


