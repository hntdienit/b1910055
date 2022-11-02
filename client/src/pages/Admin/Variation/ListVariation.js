import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import axios from "axios";

import { useFormik } from "formik";
import * as yup from "yup";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import AdminPageTitle from "../../../components/AdminPageTitle";
import AdminCardHeader from "../../../components/AdminCardHeader";

import className from "classnames/bind";
import styles from "./Variation.module.scss";

const cl = className.bind(styles);

function ListVariation() {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(5);
  const [pages, setPages] = useState(0);
  const [rows, setRows] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL_API}/variations?page=${page}&limit=${limit}`).then((response) => {
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

  const deleteCaTegory = (Id) => {
    axios
      .delete(`${process.env.REACT_APP_URL_API}/variations/${Id}`, {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        setList(
          list.filter((val) => {
            return val.id !== Id;
          })
        );
      });
  };

  const validationSchema = yup.object({});

  const formik = useFormik({
    initialValues: {
      keyword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(values.keyword);
    },
  });

  return (
    <>
      <AdminPageTitle>Variation</AdminPageTitle>
      <Card elevation={4}>
        <AdminCardHeader list title={"Variation"} to={"/admin/variation"}>
          <Box component={"form"} sx={{ flexGrow: 1 }} onSubmit={formik.handleSubmit} autoComplete="off">
            <Typography component={"div"}>
              <TextField
                size="small"
                id="keyword"
                name="keyword"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Button type="submit">
                        <SearchIcon />
                      </Button>
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
                placeholder="Search item......."
                value={formik.values.keyword}
                onChange={formik.handleChange}
              />
            </Typography>
          </Box>
        </AdminCardHeader>

        <div className={cl("card-body")}>
          <div className={cl("d-flex align-items-center")}></div>
          <div className={cl("table-responsive", "mt-3")}>
            <table className={cl("table align-middle")}>
              <thead className={cl("table-secondary")}>
                <tr>
                  <th></th>
                  <th>#</th>
                  <th>Tên thể loại</th>
                  <th>Tên thể loại</th>
                  <th>chức năng</th>
                </tr>
              </thead>
              <tbody>
                {list.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td></td>
                      <td>{(page + 1) * limit - limit + index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.category.name}</td>
                      <td>
                        <div className={cl("table-actions d-flex align-items-center gap-3 fs-6")}>
                          <div className={cl("")} title="Edit">
                            <button>
                              <Link to={`/admin/editcategory/${item.id}`} className={cl("text-warning")}>
                                <EditIcon />
                              </Link>
                            </button>
                          </div>
                          <div className={cl("text-danger")} title="Delete">
                            <button
                              onClick={() => {
                                deleteCaTegory(item.id);
                              }}
                            >
                              <DeleteForeverIcon />
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <Grid container spacing={2} paddingX={3} paddingBottom={2}>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <FormControl sx={{ minWidth: 120 }}>
                  <InputLabel id="select-label">Pages</InputLabel>
                  <Select
                    labelId="select-label"
                    value={limit}
                    label="Pages"
                    size="small"
                    onChange={(e) => {
                      setLimit(e.target.value);
                      setPage(0);
                    }}
                  >
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Typography component={"div"}>
                  <ReactPaginate
                    nextLabel=">"
                    onPageChange={changePage}
                    pageRangeDisplayed={1}
                    marginPagesDisplayed={1}
                    pageCount={pages}
                    previousLabel="<"
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
                </Typography>
              </Grid>
            </Grid>
          </div>
        </div>
      </Card>
    </>
  );
}

export default ListVariation;
