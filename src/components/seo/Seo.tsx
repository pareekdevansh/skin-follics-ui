import React from "react";
import { Helmet } from "react-helmet";

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords }) => (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        {keywords && <meta name="keywords" content={keywords} />}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {keywords && <meta property="og:keywords" content={keywords} />}
    </Helmet>
);

export default SEO;
