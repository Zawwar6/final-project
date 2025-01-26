// /src/pages/LandingPage.js
import React from "react";
import LoanCategory from "../components/LoanCategory";
import LoanCalculator from "../components/LoanCalculator";
import { Container, Typography, Box, Paper, Grid } from "@mui/material";

const LandingPage = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ marginTop: 5, marginBottom: 5 }}>
        <Typography variant="h3" align="center" gutterBottom>
          Welcome to Our Loan Portal
        </Typography>
        <Typography variant="h6" align="center" color="textSecondary">
          We offer various loan options to cater to your financial needs. Explore
          and calculate the best loan plan for you!
        </Typography>
      </Box>

      {/* Loan Categories Section */}
      <Box sx={{ marginBottom: 5 }}>
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Typography variant="h5" gutterBottom align="center">
            Explore Loan Categories
          </Typography>
          <LoanCategory />
        </Paper>
      </Box>

      {/* Loan Calculator Section */}
      <Box sx={{ marginBottom: 5 }}>
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Typography variant="h5" gutterBottom align="center">
            Loan Calculator
          </Typography>
          <LoanCalculator />
        </Paper>
      </Box>
    </Container>
  );
};

export default LandingPage;
