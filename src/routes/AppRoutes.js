import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { routes } from "./routes";
import Loading from "../components/loading/Loading";
import SEO from "../components/seo/Seo";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<Loading />}>

                <Routes>
                    <Route path="/" element={<Navigate to={'/home'} replace />} />

                    {routes.map(({ path, component: Component, seo }, index) => {
                        return (
                            <Route
                                key={index}
                                path={path}
                                element={
                                    <>
                                        {seo && <SEO title={seo.title} description={seo.description} keywords={seo.keywords} />}
                                        <Component />
                                    </>
                                }
                            />)
                    })}
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default AppRoutes;
