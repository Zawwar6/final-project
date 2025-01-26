// /src/pages/DashboardPage.js
import React, { useEffect, useState } from "react";
// import { getUserApplications } from "../services/loanService";
import {
  Container,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
  Box,
} from "@mui/material";

const DashboardPage = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch user loan applications
    const fetchApplications = async () => {
      try {
        // const apps = await getUserApplications(); // Make API call here
        // Simulating API data for demonstration
        const apps = [
          { loanType: "Wedding Loan", status: "Pending" },
          { loanType: "Home Construction Loan", status: "Approved" },
          { loanType: "Business Loan", status: "Rejected" },
        ];
        setApplications(apps);
      } catch (err) {
        console.error("Failed to fetch applications:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchApplications();
  }, []);

  return (
    <Container maxWidth="lg">
      <Box sx={{ marginTop: 5, marginBottom: 3 }}>
        <Typography variant="h3" gutterBottom align="center">
          Your Dashboard
        </Typography>
      </Box>

      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h5" gutterBottom>
          Your Loan Applications
        </Typography>

        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
            <CircularProgress />
          </Box>
        ) : (
          <Grid container spacing={3}>
            {applications.length === 0 ? (
              <Grid item xs={12}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="body1" color="textSecondary">
                      No loan applications found.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ) : (
              applications.map((app, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Card variant="outlined">
                    <CardContent>
                      <Typography variant="h6">{app.loanType}</Typography>
                      <List>
                        <ListItem>
                          <ListItemText
                            primary="Status"
                            secondary={app.status}
                          />
                        </ListItem>
                      </List>
                    </CardContent>
                  </Card>
                </Grid>
              ))
            )}
          </Grid>
        )}
      </Paper>
    </Container>
  );
};

export default DashboardPage;
