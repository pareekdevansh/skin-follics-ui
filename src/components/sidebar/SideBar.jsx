import React, { useState } from "react";
import { Box, Divider, Typography, IconButton } from "@mui/material";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import { useTheme, useMediaQuery, Fab, Zoom } from "@mui/material";
import { MdMenu, MdClose } from "react-icons/md"; // Menu toggle icons
import { CONTACT_PHONE_NUMBER } from "../../constants/contact-info";
import { LOCATION_LINK } from "../../constants/address";

const sidebarItems = [
    {
        icon: <SiGooglemaps color="#25D366" size={24} />,
        label: "Location",
        // details: "123 Main St, City, State",
        onClick: () => {
            window.open(LOCATION_LINK, "_blank");
        },
    },
    {
        icon: <FaPhone size={24} color="#25D366" />,
        label: "Call Us",
        // details: "+91 1234567890",
        onClick: () => {
            const url = `tel:+91${CONTACT_PHONE_NUMBER}`;
            window.open(url, "_blank");
        },
    },
    {
        icon: <FaWhatsapp size={24} color="#25D366" />,
        label: "WhatsApp",
        // details: "+91 1234567890",
        onClick: () => {
            const message = "Hello SkinFollics Team, I have a query about your services.";
            const url = `https://wa.me/${CONTACT_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
            window.open(url, "_blank");
        },
    },
];

const SideBar = () => {
    const [hoveredIcon, setHoveredIcon] = useState(null);
    const [fabOpen, setFabOpen] = useState(false);

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));


    const handleMouseEnter = (index) => {
        setHoveredIcon(index);
    };
    const toggleFab = () => {
        setFabOpen(prev => !prev);
    };


    const handleMouseLeave = () => {
        setHoveredIcon(null);
    };

    return (
        <Box>
            {!isSmallScreen && (
                <Box
                    sx={{
                        height: "auto",
                        position: "fixed",
                        padding: "12px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "space-around",
                        borderRadius: "8px",
                        zIndex: 10,
                        bottom: "12px",
                        right: "16px",
                        gap: "1.5rem",
                    }}
                >
                    {sidebarItems.map((item, index) => (
                        <IconButton
                            key={index}
                            onClick={item.onClick}
                            sx={{
                                transform: hoveredIcon === index ? "scale(1.4)" : "scale(1.15)",
                                transition: "transform 0.3s ease",
                                backgroundColor: "white",
                                borderRadius: "50%",
                                boxShadow: hoveredIcon === index ? 2 : 1,
                            }}
                            onMouseEnter={() => setHoveredIcon(index)}
                            onMouseLeave={() => setHoveredIcon(null)}
                        >
                            {item.icon}
                        </IconButton>
                    ))}
                </Box>
            )}

            {isSmallScreen && (
                <Box
                    sx={{
                        position: "fixed",
                        bottom: "16px",
                        right: "16px",
                        zIndex: 20,
                    }}
                >
                    <Fab
                        color="primary"
                        size="medium"
                        onClick={toggleFab}
                        sx={{ backgroundColor: "#25D366", color: "#fff" }}
                    >
                        {fabOpen ? <MdClose /> : <MdMenu />}
                    </Fab>

                    <Box
                        sx={{
                            position: "absolute",
                            bottom: "64px",
                            right: "0px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-end",
                            gap: "12px",
                        }}
                    >
                        {sidebarItems.map((item, index) => (
                            <Zoom in={fabOpen} key={index}>
                                <Fab
                                    size="medium"
                                    onClick={() => {
                                        item.onClick();
                                        setFabOpen(false);
                                    }}
                                    sx={{
                                        backgroundColor: "#fff",
                                        color: "#25D366",
                                        boxShadow: 3,
                                    }}
                                >
                                    {item.icon}
                                </Fab>
                            </Zoom>
                        ))}
                    </Box>
                </Box>
            )}
        </Box>

    );
};

export default SideBar;
