import React from "react";
import { Card, Typography, Stack } from "@mui/material";
import styled from "styled-components";
import { APP_NAME } from "../../constants/app-info";
import CustomCard from "../../components/card/CustomCard";
import CustomList from "../../components/list/CustomList";

const PageContainer = styled.div`
  display : flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  width: 100%;
  background-color: #f5f5f5;
  gap: 2rem;
  padding : 2rem 5% 4rem 5%;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 100%;
`;

const AboutUsPage = () => {

  const listItems = [
    { title: "Expert Dermatologists", content: "Our team of dermatologists stays at the forefront of medical advancements to offer you exceptional care." },
    { title: "State-of-the-Art Technology", content: "We use the latest tools and techniques to deliver safe and effective treatments." },
    { title: "Personalized Care", content: "We understand that every patient is unique, so we tailor our treatments to meet your specific needs." },
    { title: "Comprehensive Services", content: "Whether you need general dermatology or specialized treatments, we offer a full spectrum of services." },
    { title: "Ethical Standards", content: "Our commitment to integrity, respect, and patient safety is at the core of everything we do." }
  ];

  const ourClaimsData = [
    {
      title: "Expertise in Dermatology",
      content:
        "Our highly skilled dermatologists are continuously trained to offer you the most up-to-date and effective treatments for your skin health.",
    },
    {
      title: "Cutting-Edge Facilities",
      content:
        "Equipped with the latest medical technologies, we ensure that all our treatments are at the forefront of global standards.",
    },
    {
      title: "Patient-Focused Care",
      content:
        "Your well-being is at the center of everything we do. We are committed to ensuring a comfortable and supportive experience throughout your journey with us.",
    },
  ];
  return (

    <PageContainer>
      <Typography variant="h4" sx={{ fontWeight: "bold", textAlign: "left", alignSelf: "flex-start" }}>
        About Us
      </Typography>
      <Card sx={{ paddingX: "5%", paddingY: '16px', backgroundColor: "#ffffff", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}>
        <Typography variant="h6" sx={{ textAlign: "left", marginBottom: "32px", fontWeight: 400 }}>
          Welcome to {APP_NAME} - Your Trusted Partner in Dermatology
        </Typography>

        <Typography variant="body1" sx={{ lineHeight: 1.8, marginBottom: "16px" }}>
          At {APP_NAME}, we take pride in being a leading dermatology hospital committed to providing top-tier healthcare services.
          Our motto, "We Cure because We Care," underscores our dedication to delivering personalized treatments with a patient-first approach.
        </Typography>

        <Typography variant="h6" sx={{ textAlign: "left", marginBottom: "32px", fontWeight: 400 }}>
          What You Can Expect from Us:
        </Typography>

        <Stack direction={{ sm: "column", md: "row" }} spacing={3} sx={{ marginBottom: "32px", gap: "16px", display: "flex", justifyContent: "center", alignItems: "center" }}>

          {ourClaimsData.map((card, index) => (

            <CustomCard
              key={index}
              title={card.title}
              content={card.content}

            />
          ))}
        </Stack>
      </Card>

      <CustomCard
        title="Founder’s Message"
        content={
          "At SkinFollics, we are dedicated to offering the best dermatology care for skin, hair, and anti-aging. With advanced treatments and a patient-first approach, we focus on bringing you visible results and renewed confidence. Our promise is simple: the highest quality care, unparalleled expertise, and a journey toward healthier, radiant skin and hair you deserve."
        }
        imageUrl="assets/images/dr_vipul.webp" // Passing image URL to the CustomCard
        imageAlt="Founder of SkinFollics, Dr. Vipul"
        // imageHeight="400px"
        // imageWidth="400px"
        flexDirection="row" // Image on left for larger screens
      />

      <CustomList items={listItems} />
    </PageContainer>
  );
};

export default AboutUsPage;
