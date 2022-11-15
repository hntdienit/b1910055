import React from "react";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import HomeIcon from "@mui/icons-material/Home";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ListIcon from "@mui/icons-material/List";

function AdminCardHeader({ add = false, edit = false, list = false, title, to, children }) {
  let action = "";
  let icon = "";

  if (add) {
    action = `New ${title}`;
    icon = <AddCircleOutlineIcon />;
  }
  if (edit) {
    action = `Edit ${title}`;
    icon = <HomeIcon />;
  }
  if (list) {
    action = `List ${title}`;
    icon = <ListIcon />;
  }

  return (
    <Box>
      <Typography component="div" marginTop={2}>
        <Grid container spacing={2} paddingX={3}>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Typography variant="h6" component="span" marginLeft={3} marginRight={1} color={"#198754"}>
              {icon}
            </Typography>
            <Typography variant="h6" component="span" color={"#198754"}>
              {action}
            </Typography>
          </Grid>
          {list !== false ? (
            <>
              {" "}
              <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                <Typography component={"div"}>{children}</Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                <Typography component="div" align="right">
                  <Link to={to}>
                    <Button variant="contained" startIcon={<AddCircleOutlineIcon />}>
                      New {title}
                    </Button>
                  </Link>
                </Typography>
              </Grid>
            </>
          ) : (
            <>
              <Grid item xs={12} sm={12} md={4} lg={4} xl={4}></Grid>
              <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                <Typography component="div" align="right">
                  <Link to={to}>
                    <Button variant="contained" startIcon={<AddCircleOutlineIcon />}>
                      List {title}
                    </Button>
                  </Link>
                </Typography>
              </Grid>
            </>
          )}
        </Grid>
      </Typography>
    </Box>
  );
}

export default AdminCardHeader;
