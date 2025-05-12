import React from "react";
import { Box, Card, CardContent, Typography, IconButton, Button } from "@mui/material";
import { ArrowForward as ArrowForwardIcon, ArrowForwardIosOutlined } from "@mui/icons-material"; // Import the icon
import { services as treatments } from "../../services/constants";
import { useNavigate } from "react-router-dom";


export default function TreatmentsList() {
  const navigate = useNavigate();
  const navigateToTreatments = () => {
    navigate("/treatments");
}
  return (
    <Box sx={{ marginBottom: "32px", paddingX: '5%' }}>
      {/* Flex container for Title and Button */}
      <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center", marginBottom: "16px" }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            textAlign: "start",
            marginRight: ".5rem",
          }}
        >
          Explore All Treatments
        </Typography>
        <IconButton
          onClick={navigateToTreatments}
          sx={{
            variant: "text",
            display: "flex",
            alignItems: "center",
            padding: "8px",
            color: "primary.main",
          }}
        >
          <ArrowForwardIosOutlined />
        </IconButton>
          
      </Box>

      {/* Treatments Cards */}
      <Box
        sx={{
          display: "grid",
          gridTemplateRows: "repeat(2, auto)", // Two rows
          gridAutoFlow: "column", // Items flow horizontally
          gap: { xs: "16px", sm: "24px", md: "32px" }, // Adjust gap for different screen sizes
          paddingY: "1rem",
          paddingX: { xs: "5%", md: "10%" }, // Responsive horizontal padding
          overflowX: "auto", // Enable horizontal scrolling
          "&::-webkit-scrollbar": { // Custom scrollbar styling
            height: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            borderRadius: "4px",
          },
        }}
      >
        {treatments.map((treatment, index) => (
          <Card
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "16px",
              backgroundColor: "#ffffff",
              borderRadius: "12px",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease, background-color 0.3s ease",
              cursor: "pointer",
              minWidth: { xs: "180px", sm: "220px", md: "250px" }, // Adjust card width for screen sizes
              maxWidth: { xs: "200px", sm: "260px", md: "300px" }, // Adjust card max width for screen sizes
              "&:hover": {
                transform: "scale(1.05)",
                backgroundColor: "rgba(0, 0, 0, 0.05)",
                "& .read-more-button": {
                  display: "block",
                },
              },
            }}
          >
            {/* Uncomment this block if images are to be displayed */}
            {/* <CardMedia
                component="img"
                image={treatment.image}
                alt={treatment.name}
                sx={{
                    height: "150px", // Adjust height for responsiveness
                    width: "150px",
                    borderRadius: "8px",
                    marginBottom: "16px",
                    objectFit: "cover",
                }}
            /> */}
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "8px" }}>
                {treatment.name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {treatment.shortDescription}
              </Typography>
            </CardContent>
            {/* Uncomment this button if navigation is required */}
            {/* <Button
                className="read-more-button"
                variant="text"
                sx={{
                    alignSelf: "center",
                    marginTop: "16px",
                    display: "none",
                    color: "primary.main",
                    fontWeight: "bold",
                }}
                onClick={() => {
                    window.location.href = `/treatments/${treatment.treatmentUrl}`;
                }}
            >
                Read More →
            </Button> */}
          </Card>
        ))}
      </Box>

    </Box>
  );
}
