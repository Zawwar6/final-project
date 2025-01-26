// /src/pages/CalculatorPage.js
import React, { useState } from "react";
import LoanCalculator from "../components/LoanCalculator";
import {
  Container,
  Typography,
  Paper,
  Grid,
  Box,
  Button,
  Card,
  CardContent,
} from "@mui/material";

const CalculatorPage = () => {
  const [loanDetails, setLoanDetails] = useState(null);

  return (
    <Container maxWidth="sm">
      <Box sx={{ marginTop: 5, marginBottom: 3 }}>
        <Typography variant="h3" gutterBottom align="center">
          Loan Calculator
        </Typography>
      </Box>
      
      <Paper elevation={3} sx={{ padding: 3, marginBottom: 3 }}>
        <LoanCalculator setLoanDetails={setLoanDetails} />
      </Paper>

      {loanDetails && (
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Loan Breakdown
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="body1">
                  <strong>Loan Amount:</strong> PKR {loanDetails.loanAmount}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1">
                  <strong>Monthly Installment:</strong> PKR {loanDetails.monthlyInstallment}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      )}

      <Box sx={{ textAlign: "center", marginTop: 3 }}>
        <Button variant="contained" color="primary" href="/" sx={{ padding: "10px 20px" }}>
          Go Back
        </Button>
      </Box>
    </Container>
  );
};

export default CalculatorPage;
