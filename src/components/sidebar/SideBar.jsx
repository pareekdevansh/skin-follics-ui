import React, { useState } from "react";
import { Box, Divider, Typography, IconButton } from "@mui/material";
import { FaWhatsapp } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import { CONTACT_PHONE_NUMBER } from "../../constants/contact-info";
import { LOCATION_LINK } from "../../constants/address";

const sidebarItems = [
    {
        icon: <SiGooglemaps color="#25D366" size={24} />,
        label: "Location",
        details: "123 Main St, City, State",
        onClick: () => {
            window.open(LOCATION_LINK, "_blank");
        },
    },
    {
        icon: <FaWhatsapp size={24} color="#25D366" />,
        label: "WhatsApp",
        details: "+91 1234567890",
        onClick: () => {
            const message = "Hello SkinFollics Team, I have a query about your services.";
            const url = `https://wa.me/${CONTACT_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
            window.open(url, "_blank");
        },
    },
];

const SideBar = () => {
    const [hoveredIcon, setHoveredIcon] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIcon(index);
    };

    const handleMouseLeave = () => {
        setHoveredIcon(null);
    };

    return (
        <Box
            sx={{
                width: { lg: "100px", md: "80px", sm: "60px", xs: "60px" },
                height: "fit-content",
                position: "fixed",
                bottom: 0,
                right: 0,
                transform: "translateY(-25%)",
                padding: "12px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around",
                transition: "width 0.3s ease",
                borderRadius: "8px",
                overflow: "hidden",
                zIndex: 10,
                gap: "1rem",
            }}
        >
            {sidebarItems.map((item, index) => (
                <Box
                    key={index}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        cursor: "pointer",
                        transform: hoveredIcon === index ? "scale(1.4)" : "scale(1.1)",
                        transition: "transform 0.3s ease, background-color 0.3s ease",
                        backgroundColor: hoveredIcon === index ? "rgba(255, 255, 255, 0.2)" : "transparent",
                        borderRadius: "25%",
                        padding: "10px",
                        // boxShadow: hoveredIcon === index ? "1px 1px 0px rgba(0, 0, 0, 0.2)" : "none",
                    }}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    onClick={item.onClick}
                >
                    <IconButton
                        sx={{
                            backgroundColor: "white",
                            borderRadius: "50%",
                            padding: "4px",
                            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
                            transition: "box-shadow 0.3s ease",
                            "&:hover": {
                                boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.3)",
                            },
                        }}
                    >
                        {item.icon}
                    </IconButton>
                    {/* <Typography
                        variant="caption"
                        sx={{
                            fontSize: "14px",
                            textAlign: "center",
                            color: "white",
                            marginTop: "5px",
                        }}
                    >
                        {item.label}
                    </Typography> */}
                    {/* <Divider sx={{ width: "80%", marginTop: "4px" }} /> */}
                </Box>
            ))}
        </Box>
    );
};

export default SideBar;
