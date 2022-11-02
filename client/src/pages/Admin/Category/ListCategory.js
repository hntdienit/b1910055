import React, { useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import axios from "axios";
import className from "classnames/bind";

import styles from "./Category.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdd,
  faEye,
  faHouse,
  faMagnifyingGlass,
  faPen,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

import Button from "../../../components/Button";

const cl = className.bind(styles);

function ListCategory() {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(5);
  const [pages, setPages] = useState(0);
  const [rows, setRows] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");


  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_URL_API}/categories?page=${page}&limit=${limit}`
      )
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        } else {
          setList(response.data.result);
          setPage(response.data.page);
          setPages(response.data.totalPage);
          setRows(response.data.totalRows);
        }
      });
  }, [page, limit]);

  const changePage = ({ selected }) => {
    setPage(selected);
  };

  const deleteCaTegory = (CategoryId) => {
    axios
      .delete(`${process.env.REACT_APP_URL_API}/categories/${CategoryId}`, {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        setList(
          list.filter((val) => {
            return val.id !== CategoryId;
          })
        );
        // navigate("/admin/listcategory");
      });
  };

  return (
    <>
      <div
        className={cl(
          "page-breadcrumb",
          "d-none d-sm-flex align-items-center mb-3"
        )}
      >
        <div className={cl("breadcrumb-title", "pe-2")}>
          <Link to={"/admin"}>
            <FontAwesomeIcon icon={faHouse} className={""} />
          </Link>
        </div>
        <div className={cl("ps-3")}>
          <nav>
            <ol className={cl("breadcrumb", "mb-0 p-0")}>
              <li className={cl("breadcrumb-item")}>Thể loại</li>
            </ol>
          </nav>
        </div>
      </div>

      <div className={cl("card")}>
        <div className={cl("card-body")}>
          <div className={cl("d-flex align-items-center")}>
            <h5 className={cl("mb-0")}>Danh sách thể loại</h5>
            <form className={cl("ms-auto position-relative")}>
              <div
                onClick={() => {
                  alert("tim");
                }}
                className={cl(
                  "search-icon",
                  "position-absolute top-50 translate-middle-y px-3"
                )}
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} className={""} />
              </div>
              <input
                className={cl("form-control ps-5")}
                type="text"
                placeholder="Tìm kiếm...."
              />
            </form>
            <Button
              to={"/admin/category"}
              leftIcon={<FontAwesomeIcon icon={faAdd} />}
              className={cl("ms-5 py-1 px-3")}
              primary
            >
              New Category
            </Button>
          </div>
          <div className={cl("table-responsive", "mt-3")}>
            <table className={cl("table align-middle")}>
              <thead className={cl("table-secondary")}>
                <tr>
                  <th></th>
                  <th>#</th>
                  <th>Tên thể loại</th>
                  <th>chức năng</th>
                </tr>
              </thead>
              <tbody>
                {list.map((value, index) => {
                  return (
                    <tr key={index}>
                      <td></td>
                      <td>{(page + 1) * limit - limit + index + 1}</td>
                      {/* <td>
                    <div class="d-flex align-items-center gap-3 cursor-pointer">
                      <img
                        src="assets/images/avatars/avatar-1.png"
                        class="rounded-circle"
                        width="44"
                        height="44"
                        alt=""
                      />
                      <div class="">
                        <p class="mb-0">Thomas Hardy</p>
                      </div>
                    </div>
                  </td> */}
                      <td>{value.name}</td>
                      <td>
                        <div
                          className={cl(
                            "table-actions d-flex align-items-center gap-3 fs-6"
                          )}
                        >
                          <div className={cl("text-primary")} title="Views">
                            <FontAwesomeIcon icon={faEye} className={""} />
                          </div>
                          <div className={cl("")} title="Edit">
                            <button>
                              <Link
                                to={`/admin/editcategory/${value.id}`}
                                className={cl("text-warning")}
                              >
                                <FontAwesomeIcon icon={faPen} className={""} />
                              </Link>
                            </button>
                          </div>
                          <div className={cl("text-danger")} title="Delete">
                            <button
                              onClick={() => {
                                deleteCaTegory(value.id);
                              }}
                            >
                              <FontAwesomeIcon icon={faTrash} className={""} />
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className={cl("d-flex flex-row mt-4")}>
              <div className={cl("")}>
                <select
                  className={cl("form-select ms-5")}
                  onChange={(e) => {
                    setLimit(e.target.value);
                    setPage(0)
                  }}
                >
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                </select>
              </div>
              <nav
                className="pagination is-centered ms-auto me-5"
                key={rows}
                role="navigation"
                aria-label="pagination"
              >
                <ReactPaginate
                  nextLabel="next >"
                  onPageChange={changePage}
                  pageRangeDisplayed={1}
                  marginPagesDisplayed={2}
                  pageCount={pages}
                  previousLabel="< previous"
                  pageClassName="page-item"
                  pageLinkClassName="page-link"
                  previousClassName="page-item"
                  previousLinkClassName="page-link"
                  nextClassName="page-item"
                  nextLinkClassName="page-link"
                  breakLabel="..."
                  breakClassName="page-item"
                  breakLinkClassName="page-link"
                  containerClassName="pagination"
                  activeClassName="active"
                  renderOnZeroPageCount={null}
                />
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListCategory;
