import React from "react";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import HomeIcon from "@mui/icons-material/Home";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function AdminCardHeader({ add = false, edit = false, list = false, children }) {
  
  let action = "";
  let icon = "";

  if(add){
    action = `New ${children}`
    icon = <AddCircleOutlineIcon />
  }
  if(edit){
    action = `Edit ${children}`
    icon = <HomeIcon />
  }
  if(list){
    action = `List ${children}`
    icon = <AddCircleOutlineIcon />
  }
  
  return (
   <>
      <Typography variant="h6" component="div" marginBottom={2} color={"#198754"}>
        <Typography variant="h6" component="span" marginRight={1}>
          {icon}
        </Typography>
        {action}
      </Typography>
      {list ? <h3>sdasdad</h3>: ""}
   </>
  );
}

export default AdminCardHeader;
