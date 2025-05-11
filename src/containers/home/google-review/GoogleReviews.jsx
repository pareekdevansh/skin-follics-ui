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
    <iframe
      ref={iframeRef}
      src="https://0eb3a3d82809426e9c3f2e9532c5298a.elf.site"
      style={{ border: "none", width: "100%", height: "500px" }}
      title="Elfsight Widget"
      loading="lazy"
    />
  );
};

export default GoogleReviews;
