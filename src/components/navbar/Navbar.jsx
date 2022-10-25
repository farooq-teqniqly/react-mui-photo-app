import { AppBar, styled, Toolbar, Typography } from "@mui/material";
import SportsOutlinedIcon from "@mui/icons-material/SportsOutlined";
import React from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
});

function Navbar() {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          GAMES
        </Typography>
        <SportsOutlinedIcon sx={{ display: { xs: "block", sm: "none" } }}></SportsOutlinedIcon>
      </StyledToolbar>
    </AppBar>
  );
}

export default Navbar;
