import React, { useEffect, useRef } from 'react';

const GoogleReviews = () => {
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    // Optional: Suppress ResizeObserver warning (dev only)
    // if (process.env.NODE_ENV === 'development') {
      const originalError = window.onerror;
      window.onerror = function (message, ...args) {
        if (
          typeof message === 'string' &&
          message.includes('ResizeObserver loop completed with undelivered notifications')
        ) {
          return true;
        }
        if (originalError) return originalError(message, ...args);
        return false;
      };
    // }

    // Delay script loading to allow DOM to settle
    const timeout = setTimeout(() => {
      if (scriptLoadedRef.current) return;

      const scriptId = 'elfsight-platform-script';
      const existingScript = document.getElementById(scriptId);

      const hideBrandingLink = () => {
        try {
          document.querySelectorAll('a').forEach((el) => {
            if (el.textContent.includes('Free Google Reviews widget')) {
              el.style.display = 'none';
            }
          });
        } catch (e) {
          console.warn('⚠️ Error hiding branding link', e);
        }
      };

      const loadScript = () => {
        if (!existingScript) {
          const script = document.createElement('script');
          script.src = 'https://static.elfsight.com/platform/platform.js';
          script.async = true;
          script.id = scriptId;

          script.onload = () => {
            scriptLoadedRef.current = true;
            requestAnimationFrame(() => {
              console.log('✅ Elfsight script loaded');
              hideBrandingLink();
            });
          };

          script.onerror = (err) => {
            console.error('❌ Failed to load Elfsight script', err);
          };

          document.body.appendChild(script);
        } else {
          scriptLoadedRef.current = true;
          requestAnimationFrame(() => {
            hideBrandingLink();
          });
        }
      };

      loadScript();
    }, 100); // delay a bit to avoid layout conflicts

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="my-10 elfsight-container">
      <h2 className="text-xl font-semibold mb-4">What Our Customers Say</h2>
      <div
        className="elfsight-app-0eb3a3d8-2809-426e-9c3f-2e9532c5298a"
        data-elfsight-app-lazy
      ></div>
    </div>
  );
};

export default GoogleReviews;
