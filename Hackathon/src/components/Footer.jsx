// /src/components/Footer.js
import React from "react";
import { Box, Typography, Container } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#0d47a1",
        color: "#ffffff",
        py: 3,
        mt: 4,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="body2"
          align="center"
          sx={{ fontSize: "0.875rem", fontWeight: 500 }}
        >
          &copy; 2025 Microfinance Portal. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
