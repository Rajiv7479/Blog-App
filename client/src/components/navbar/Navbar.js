import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function ButtonAppBar() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5"
            className="logo"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            <Link to="/" className="button">
              BLOG-APP
            </Link>
          </Typography>

          {user ? (
            <div className="loginBox">
              <span
                style={{
                  fontSize: "17px",
                  color: "yellow",
                  fontWeight: "bold",
                }}
              >
                {user.data.result.username}
              </span>
              <h5
                onClick={() => {
                  window.localStorage.clear();
                }}
                style={{
                  fontSize: "17px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                LogOut
              </h5>
            </div>
          ) : (
            <div className="loginBox">
              <Link to="/login" className="button">
                Sign In
              </Link>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
