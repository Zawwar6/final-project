import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Grid,
  Paper,
  Button,
  Box,
  Alert,
} from "@mui/material";

const LoanRequestPage = () => {
  const [guarantors, setGuarantors] = useState([
    { name: "", email: "", cnic: "" },
    { name: "", email: "", cnic: "" },
  ]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Handle form field changes
  const handleChange = (index, e) => {
    const newGuarantors = [...guarantors];
    newGuarantors[index][e.target.name] = e.target.value;
    setGuarantors(newGuarantors);
  };

  // Validate form data before submission
  const validateForm = () => {
    for (let i = 0; i < guarantors.length; i++) {
      const { name, email, cnic } = guarantors[i];
      if (!name || !email || !cnic) {
        setError("All fields are required for each guarantor.");
        return false;
      }
    }
    setError("");
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    if (!validateForm()) return;

    try {
      // Simulate an API request by logging the data (You can replace it with your actual API call)
      console.log("Submitting loan request with data:", guarantors);

      // Example of API request (replace with actual API URL)
      const response = await fetch("https://example.com/submit-loan-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ guarantors }),
      });

      // Check if the response is successful
      if (response.ok) {
        setSuccess(true);
        setError(""); // Clear any previous error
      } else {
        setError("Error submitting request. Please try again.");
        setSuccess(false);
      }
    } catch (error) {
      setError("An unexpected error occurred. Please try again.");
      setSuccess(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ marginTop: 5 }}>
        <Typography variant="h3" align="center" gutterBottom>
          Loan Request Form
        </Typography>
      </Box>

      <Paper elevation={3} sx={{ padding: 3 }}>
        <form onSubmit={handleSubmit}>
          {guarantors.map((guarantor, index) => (
            <div key={index}>
              <Typography variant="h6" gutterBottom>
                Guarantor {index + 1}
              </Typography>
              <Grid container spacing={2} sx={{ marginBottom: 3 }}>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="Name"
                    name="name"
                    value={guarantor.name}
                    onChange={(e) => handleChange(index, e)}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="Email"
                    name="email"
                    type="email"
                    value={guarantor.email}
                    onChange={(e) => handleChange(index, e)}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="CNIC"
                    name="cnic"
                    value={guarantor.cnic}
                    onChange={(e) => handleChange(index, e)}
                    fullWidth
                    required
                  />
                </Grid>
              </Grid>
            </div>
          ))}

          {/* Display error or success message */}
          {error && (
            <Alert severity="error" sx={{ marginBottom: 2 }}>
              {error}
            </Alert>
          )}
          {success && (
            <Alert severity="success" sx={{ marginBottom: 2 }}>
              Loan request submitted successfully!
            </Alert>
          )}

          <Box sx={{ display: "flex", justifyContent: "center", marginTop: 3 }}>
            <Button variant="contained" color="primary" type="submit">
              Submit Request
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default LoanRequestPage;
