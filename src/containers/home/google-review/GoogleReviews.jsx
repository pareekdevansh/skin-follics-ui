import React, { useEffect } from 'react';
import { ElfsightWidget } from 'react-elfsight-widget';
import './google-reviews.css';
const GoogleReviews = () => {

  return (
    <div className="elf-container">
      <div className="elf-inner">
        <ElfsightWidget widgetId="0eb3a3d8-2809-426e-9c3f-2e9532c5298a" lazy />
      </div>
    </div>
  );
};

export default GoogleReviews;
