import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Avatar,
  Divider,
  CircularProgress,
} from "@mui/material";
import userService from "../../services/api/userService";

const genders = {
  M: "Male",
  F: "Female",
  O: "Other",
};

export default function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // TODO: Replace with actual user ID from auth context or redux store
        const response = await userService.getUserById(1); 
        if (response) {
          setUser(response);
        }
      } catch (error) {
        console.error("Error loading profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading || !user) {
    return (
      <Box height="80vh" display="flex" justifyContent="center" alignItems="center">
        <CircularProgress size={60} />
      </Box>
    );
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", paddingY: 5 , minHeight: "60vh"}}>
      <Card sx={{ maxWidth: 600, width: "100%", p: 3, borderRadius: 4, boxShadow: 6 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            User Profile
          </Typography>
          <Divider sx={{ mb: 3 }} />

          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} sm={3} textAlign="center">
              <Avatar
                src={user.avatar || ""}
                sx={{ width: 80, height: 80, margin: "auto", mb: 1 }}
              />
            </Grid>

            <Grid item xs={12} sm={9}>
              <Typography variant="subtitle1"><strong>Name:</strong> {user.name}</Typography>
              <Typography variant="subtitle1"><strong>Email:</strong> {user.email ? user.email : "-"}</Typography>
              <Typography variant="subtitle1"><strong>Phone:</strong> {user.phoneNumber ? user.phoneNumber : "-"}</Typography>
              <Typography variant="subtitle1"><strong>DOB:</strong> {user.dob ? user.dob : "-"}</Typography>
              <Typography variant="subtitle1"><strong>Gender:</strong> {genders[user.gender] || "-"}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}
