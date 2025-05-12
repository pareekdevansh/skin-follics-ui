import React from "react";
import {
    Box,
    Typography,
    Container,
    Grid,
    List,
    ListItem,
    ListItemText,
    Divider,
    Card,
    CardContent,
} from "@mui/material";
import { LocalHospital, CheckCircle } from "@mui/icons-material";

const DoctorDetailPage = () => {
    const expertiseItems = [
        "Hair Transplant",
        "Skin Aesthetics",
        "PRP Treatments",
        "Chemical Peels",
        "CO2 Laser for Acne Scars",
    ];
    return (
        <Box sx={{
            backgroundColor: "#f5f5f5", minHeight: "100vh",
            //padding: { xs: "2.5%", md: "10%" } 
        }}>
            <Container>
                {/* Page Title */}
                <Typography variant="h4" align="center" sx={{ fontWeight: "bold", mb: 2 }}>
                    Meet Our Founder
                </Typography>
                <Divider sx={{ mb: 4 }} />

                <Grid container spacing={4}>
                    {/* Doctor Photo and Info */}
                    <Grid item xs={12} md={5}>
                        <Card elevation={3} sx={{ borderRadius: 2, overflow: "hidden" }}>
                            <Box sx={{ textAlign: "center" }}>
                                <img
                                    src="/assets/profiles/profile_dr_vipul.webp"
                                    alt="Dr. Vipul Pareek"
                                    style={{ maxWidth: "100%", maxHeight: 400, objectFit: "cover", alignSelf: "center", justifySelf: "center" }}
                                />
                            </Box>
                            <CardContent>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 3,
                                        padding: 3,
                                        borderRadius: 2,
                                        width: "100%",
                                        maxWidth: "600px",
                                        margin: "0 auto",
                                    }}
                                >
                                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                        <LocalHospital sx={{ color: "primary.main" }} />
                                        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                                            Speciality
                                        </Typography>
                                    </Box>
                                    <Typography variant="body1" color="textSecondary" sx={{ paddingLeft: 3 }}>
                                        Dermatology
                                    </Typography>

                                    <Box >
                                        <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 1 }}>
                                            Degrees
                                        </Typography>
                                        <Typography variant="body1" color="textSecondary" sx={{ paddingLeft: 3 }} >
                                            MBBS, MD - Dermatology, DNB
                                        </Typography>
                                    </Box>

                                    <Box>
                                        <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 1 }}>
                                            Expertise
                                        </Typography>
                                        <List dense sx={{ paddingLeft: 3 }}>
                                            {expertiseItems.map((item, index) => (
                                                <ListItem key={index} sx={{ padding: 0 }}>
                                                    <ListItemText primary={item} primaryTypographyProps={{ variant: "body1" }} />
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Doctor Details */}
                    <Grid item xs={12} md={7}>
                        <Card elevation={3} sx={{ borderRadius: 2, padding: 2 }}>
                            <CardContent>
                                <Box sx={{ mr: 3 }}>
                                    <Grid container alignItems="center" spacing={2}>
                                        {/* Left-aligned Name and Position */}
                                        <Grid item xs={12} sm={8}>
                                            <Typography
                                                variant="h4"
                                                component="h2"
                                                sx={{
                                                    fontWeight: "bold",
                                                    mb: 1,
                                                    textAlign: { xs: "center", sm: "left" },
                                                    whiteSpace: "normal", // Ensures text wraps on small screens
                                                    wordBreak: "break-word", // Prevents words from getting cut
                                                }}
                                            >
                                                Dr. Vipul Pareek
                                            </Typography>
                                            <Typography
                                                variant="subtitle1"
                                                color="textSecondary"
                                                sx={{
                                                    mb: 2,
                                                    textAlign: { xs: "center", sm: "left" },
                                                    whiteSpace: "normal",
                                                    wordBreak: "break-word",
                                                }}
                                            >
                                                Consultant Dermatologist and Aesthetic Physician
                                            </Typography>
                                        </Grid>

                                        {/* Right-aligned Phone Number */}
                                        {/* <Grid item xs={12} sm={4} sx={{ textAlign: { xs: "center", sm: "right" } }}>
                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "flex-end",
                                                    mb: 3,
                                                    wordBreak: "break-word",
                                                }}
                                            >
                                                <Phone sx={{ mr: 1, color: "primary.main" }} />
                                                <strong>Phone: </strong>
                                                <Link href="tel:+918000400082" underline="hover" color="primary" sx={{ ml: 1 }}>
                                                    80004 00082
                                                </Link>
                                            </Typography>
                                        </Grid> */}
                                    </Grid>
                                </Box>

                                <Divider sx={{ my: 2 }} />

                                <Typography variant="body1" paragraph>
                                    Dr. Vipul Pareek MBBS, MD, DNB (Dermatology) is a consultant dermatologist and dermatosurgeon.
                                    He completed his MBBS from Mahatma Gandhi Medical College and Hospital, Mumbai, and pursued his MD
                                    (Dermatology) and senior residency from Vardhman Mahavir Medical College and Safdarjung Hospital,
                                    New Delhi, one of the most prestigious medical colleges and hospitals in India.
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    His keen interest in dermatosurgical procedures like vitiligo surgery, acne scar surgery, and hair
                                    transplant helped him achieve the highest standards of quality and care.
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    Dr. Pareek has also published research articles in national and international journals and cleared
                                    the DNB in dermatology from the National Board of Examination, New Delhi.
                                </Typography>

                                <List>
                                    <ListItem sx={{ display: "flex", alignItems: "center" }}>
                                        <CheckCircle sx={{ color: "primary.main", mr: 1 }} />
                                        <Typography variant="body1">
                                            <i>Accomplished MD in Dermatology</i>
                                        </Typography>
                                    </ListItem>
                                    <ListItem sx={{ display: "flex", alignItems: "center" }}>
                                        <CheckCircle sx={{ color: "primary.main", mr: 1 }} />
                                        <Typography variant="body1">
                                            <i>Renowned for Personalized Patient Care</i>
                                        </Typography>
                                    </ListItem>
                                </List>
                            </CardContent>
                        </Card>

                        <Divider sx={{ my: 4 }} />

                        {/* Additional Sections */}
                        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                            The Importance of Skin Health
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Our skin, the largest organ of the body, is vital for protecting us against external harm while reflecting
                            our inner health. At SkinFollics, we prioritize the health and aesthetics of your skin, providing care that
                            is tailored to each individual’s needs.
                        </Typography>
                        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                            Personalized Rejuvenation Solutions
                        </Typography>
                        <Typography variant="body1" paragraph>
                            We excel in offering advanced skin rejuvenation treatments that are designed to restore and enhance your
                            natural beauty. From addressing signs of aging to correcting skin imperfections, our holistic approach
                            ensures noticeable and lasting results.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default DoctorDetailPage;
