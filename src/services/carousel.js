import axios from "axios";
import { axiosRequest } from "configs/axios.config";
import { TOKEN_CYBERSOFT } from "constants";
import { BASE_URL } from "constants";

export const fetchCarouselApi = (information) => {
  return axiosRequest({
    url: `/QuanLyPhim/LayDanhSachBanner`,
    method: "GET",
    data: information,
  });
};
