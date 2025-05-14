import React, { useState, useEffect } from "react";
import { Fab, Zoom } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrolledPercentage = window.scrollY / window.innerHeight;
            setVisible(scrolledPercentage > 0.5); // Show button if scrolled more than 50% of the viewport height
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll); 
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <Zoom in={visible}>
            <Fab
                color="primary"
                size="medium"
                onClick={scrollToTop}
                aria-label="scroll to top"
                sx={{
                    position: "fixed",
                    bottom: "12px",
                    left: "16px",
                    zIndex: 1200,
                    backgroundColor: "#1976d2",
                    color: "#fff",
                    "&:hover": {
                        backgroundColor: "#115293", // Darker on hover
                    },
                }}
            >
                <KeyboardArrowUpIcon />
            </Fab>
        </Zoom>
    );
};

export default ScrollToTop;
