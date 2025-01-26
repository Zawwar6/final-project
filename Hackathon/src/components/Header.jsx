// /src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box, Container } from "@mui/material";

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#1e88e5",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              fontFamily: "'Roboto', sans-serif",
              letterSpacing: "0.05em",
              color: "#ffffff",
            }}
          >
            Microfinance App
          </Typography>
          <Box sx={{ display: "flex", gap: 3 }}>
            <Button
              component={Link}
              to="/"
              sx={{
                color: "#ffffff",
                fontWeight: 500,
                textTransform: "capitalize",
                '&:hover': {
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                },
              }}
            >
              Home
            </Button>
            <Button
              component={Link}
              to="/calculator"
              sx={{
                color: "#ffffff",
                fontWeight: 500,
                textTransform: "capitalize",
                '&:hover': {
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                },
              }}
            >
              Loan Calculator
            </Button>
            <Button
              component={Link}
              to="/register"
              sx={{
                color: "#ffffff",
                fontWeight: 500,
                textTransform: "capitalize",
                '&:hover': {
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                },
              }}
            >
              Register
            </Button>
            <Button
              component={Link}
              to="/loan-request"
              sx={{
                color: "#ffffff",
                fontWeight: 500,
                textTransform: "capitalize",
                '&:hover': {
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                },
              }}
            >
              Loan Request
            </Button>
            <Button
              component={Link}
              to="/dashboard"
              sx={{
                color: "#ffffff",
                fontWeight: 500,
                textTransform: "capitalize",
                '&:hover': {
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                },
              }}
            >
              Dashboard
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
