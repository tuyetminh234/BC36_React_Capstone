import React from "react";
import { useMovieList } from "../../hooks/useMovieList";
import { Button, notification, Space, Table, Tag } from "antd";
import { formatDate } from "utils";
import { useNavigate } from "react-router-dom";
import { deleteMovieApi } from "services/movie";

export default function MovieManagement() {
  const movieList = useMovieList();
  const navigate = useNavigate();

  const columns = [
    {
      title: "Tên phim",
      key: "1",
      dataIndex: "tenPhim",
    },
    {
      title: "Ngày khởi chiếu",
      key: "2",
      dataIndex: "ngayKhoiChieu",
      render: (text) => formatDate(text),
    },
    {
      title: "Mô tả",
      key: "3",
      dataIndex: "moTa",
    },
    {
      title: "Đánh giá",
      key: "4",
      dataIndex: "danhGia",
    },
    {
      title: "Hành động",
      key: "5",
      render: (text) => {
        return (
          <div>
            <Button
              onClick={() =>
                navigate(`/admin/movie-management/edit/${text.maPhim}`)
              }
            >
              EDIT
            </Button>
            <Button
              onClick={async () => {
                try {
                  await deleteMovieApi(text.maPhim);

                  notification.success({
                    message: "Xóa phim thành công",
                  });
                } catch (error) {
                  console.log(error);
                  notification.error({
                    message: error.response.data.content,
                  });
                }
              }}
            >
              DELETE
            </Button>
          </div>
        );
      },
    },
  ];

  console.log(movieList);

  return (
    <div>
      <Button
        onClick={() => navigate("/admin/movie-management/add")}
        className="mb-4"
        type="primary"
      >
        THÊM PHIM
      </Button>
      <Table columns={columns} dataSource={movieList} />
    </div>
  );
}
