import React from "react";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import HomeIcon from "@mui/icons-material/Home";

function AdminPageTitle({ children }) {
  return (
    <Box component={"div"}>
      <Typography variant="h5" component="div" marginBottom={3} color={"#000"}>
        <Link to={"/admin"}>
          <HomeIcon />
        </Link>{" "}
        | {children}
      </Typography>
    </Box>
  );
}

export default AdminPageTitle;
