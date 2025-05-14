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
                // width: { lg: "100px", md: "80px", sm: "60px", xs: "60px" },
                height: "auto",
                position: "fixed",
                padding: "12px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around",
                transition: "width 0.3s ease",
                borderRadius: "8px",
                overflow: "hidden",
                zIndex: 10,
                bottom: "12px",
                right : "16px",
                gap: "1.5rem",
            }}
        >
            {sidebarItems.map((item, index) => (
                <IconButton
                    key={index}
                    sx={{
                        display: "flex",
                        cursor: "pointer",
                        transform: hoveredIcon === index ? "scale(1.5)" : "scale(1.25)",
                        transition: "transform 0.3s ease, background-color 0.3s ease",
                        backgroundColor: hoveredIcon === index ? "rgba(255, 255, 255, 0.2)" : "transparent",
                        borderRadius: "50%",
                        boxShadow: hoveredIcon === index ? "1px 1px 0px rgba(0, 0, 0, 0.2)" : "none",
                        backgroundColor: "white",
                        "&:hover": {
                            // boxShadow: "0px 1px 12px rgba(0, 0, 0, 0.3)"
                        },
                    }}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    onClick={item.onClick}
                    
                >
                    {item.icon}
                </IconButton>
            ))}
        </Box>
    );
};

export default SideBar;
