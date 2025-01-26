// /src/components/LoanForm.js
import React, { useState } from "react";
import {
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Grid,
  Typography,
} from "@mui/material";

const LoanForm = ({ onSubmit }) => {
  const [loanCategory, setLoanCategory] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [deposit, setDeposit] = useState("");
  const [loanPeriod, setLoanPeriod] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      loanCategory,
      loanAmount,
      deposit,
      loanPeriod,
    };
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h5" gutterBottom>
        Loan Application Form
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel>Loan Category</InputLabel>
            <Select
              value={loanCategory}
              onChange={(e) => setLoanCategory(e.target.value)}
              label="Loan Category"
              required
            >
              <MenuItem value="Wedding">Wedding Loans</MenuItem>
              <MenuItem value="Home">Home Construction Loans</MenuItem>
              <MenuItem value="Business">Business Startup Loans</MenuItem>
              <MenuItem value="Education">Education Loans</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            label="Loan Amount"
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            fullWidth
            required
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            label="Initial Deposit (PKR)"
            type="number"
            value={deposit}
            onChange={(e) => setDeposit(e.target.value)}
            fullWidth
            required
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            label="Loan Period (in years)"
            type="number"
            value={loanPeriod}
            onChange={(e) => setLoanPeriod(e.target.value)}
            fullWidth
            required
          />
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" color="primary" fullWidth type="submit">
            Submit Loan Request
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default LoanForm;
