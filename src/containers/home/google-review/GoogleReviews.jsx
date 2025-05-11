import { Box, Typography } from "@mui/material";
import { useEffect, useRef } from "react";

const GoogleReviews = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;

    const handleResize = () => {
      try {
        // You can write custom iframe resizing logic here if needed
        iframe.style.height = iframe.contentWindow.document.body.scrollHeight + "px";
      } catch (err) {
        // Cross-origin protection might block access
        console.warn("Resize attempt failed:", err.message);
      }
    };

    if (iframe) {
      iframe.addEventListener("load", handleResize);
    }

    return () => {
      if (iframe) {
        iframe.removeEventListener("load", handleResize);
      }
    };
  }, []);

  return (
    <Box sx={{ paddingBottom : "32px", paddingX: '5%' }}>
      {/* Flex container for Title and Button */}
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>

        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            textAlign: "start",
            marginRight: ".5rem",
          }}
          alignSelf={"start"}
        >
          What our Patients say
        </Typography>
        <iframe
          ref={iframeRef}
          src="https://0eb3a3d82809426e9c3f2e9532c5298a.elf.site"
          style={{
            width: '100%', minHeight: '500px',maxHeight: '1100px', margin: 0, padding: 0,
            flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
          }}
          title="Elfsight Widget"
          loading="lazy"
        />
      </Box>
    </Box>
  );
};

export default GoogleReviews;
