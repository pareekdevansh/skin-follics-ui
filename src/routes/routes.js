import React, { lazy } from "react";
import { APP_NAME } from "../constants/app-info";
import MyAppointments from "../containers/my-appointments";
const Home = lazy(() => import("../containers/home"));
const Appointment = lazy(() => import("../containers/appointment"));
const About = lazy(() => import("../containers/about"));
const Services = lazy(() => import("../containers/services"));
const Testimonials = lazy(() => import("../containers/testimonials"));
const ContactUs = lazy(() => import("../containers/contact-us"));
const Login = lazy(() => import("../containers/login"));
const Register = lazy(() => import("../containers/register"));
const ForgotPassword = lazy(() => import("../containers/forgot-password"));
const ResetPassword = lazy(() => import("../containers/reset-password"));
const Team = lazy(() => import("../containers/team"));
const Blogs = lazy(() => import("../containers/blogs"));
const NotFound = lazy(() => import("../containers/not-found"));
const PrivacyPolicy = lazy(() => import("../containers/privacy-policy"));
const Gallery = lazy(() => import("../containers/gallery"));
const TermsOfUse = lazy(() => import("../containers/terms-of-use"));
const ManageAppointmentsAdmin = lazy(() => import("../containers/admin/appointments"));
const TestContainer = lazy(() => import("../containers/test/Test"));
const generalKeywords = 'skin clinic near me, skin clinic in Delhi, best skin clinic in Delhi, best dermatologist in Delhi, skin care clinic in Delhi, dermat near me, skin clinic near me, acne treatment, skin specialist near me, skin doctor near me, skin clinic in Malviya Nagar, skincare clinic, Delhi, Malviya Nagar, Dr. Vipul Pareek, ${APP_NAME}, hair transplant, laser treatments, best dermatology clinic in Malviya Nagar, best dermatology clinic near me, Skin Follics';
export const routes = [
    // {
    //     path: "/",
    //     component: Home,
    //     name: "Home",
    //     
    //     seo: {
    //         title: `${APP_NAME} - Expert Dermatology Care`,
    //         description: `${APP_NAME} offers expert acne treatments, skin rejuvenation, laser services, and hair transplant solutions in Malviya Nagar, Delhi. Book your consultation today!`,
    //         keywords: generalKeywords
    //     },
    // },
    {
        path: "/home",
        component: Home,
        name: "Home",

        seo: {
            title: `${APP_NAME} - Expert Dermatology Care`,
            description: `Welcome to ${APP_NAME}, your trusted dermatology clinic in Malviya Nagar, Delhi.`,
            keywords: `home, about us, contact, gallery, skin treatments, anti-aging, hair transplant, expert dermatology, ${generalKeywords}`
        },
    },
    {
        path: "/login",
        component: Login,
        name: "Login",
        visibleToRouter: false,
        seo: {
            title: `Login - ${APP_NAME}`,
            description: `Login to your ${APP_NAME} account to book appointments or access your treatment history.`,
            keywords: `login, user login, patient portal, ${APP_NAME}, best dermatology clinic in Malviya Nagar, best dermatology clinic near me, SkinFollics, Skin Follics, Dr. Vipul Pareek, access account, appointment login, patient care, secure login, dermatologist near me, Malviya Nagar clinic, expert dermatology, personalized care, skin treatments, hair transplant login`,
        },
    },
    {
        path: "/register",
        component: Register,
        name: "Register",
        visibleToRouter: false,
        seo: {
            title: `Register - ${APP_NAME}`,
            description: `Create an account on ${APP_NAME} to book your first appointment or consult our experts.`,
            keywords: `register, sign up, create account, patient registration, ${APP_NAME}, best dermatology clinic in Malviya Nagar, best dermatology clinic near me, SkinFollics, Skin Follics, Dr. Vipul Pareek, skin care account, book appointment, skin specialists, acne treatment, skin rejuvenation, Malviya Nagar dermatology, personalized skincare, laser treatment, hair restoration services`,
        },
    },
    {
        path: "/forgot-password",
        component: ForgotPassword,
        name: "Forgot Password",
        visibleToRouter: false,
        seo: {
            title: `Forgot Password - ${APP_NAME}`,
            description: `Forgot your password? Reset it quickly with ${APP_NAME} and regain access to your account.`,
            keywords: `forgot password, reset password, account recovery, ${APP_NAME}, best dermatology clinic in Malviya Nagar, best dermatology clinic near me, SkinFollics, Skin Follics, Dr. Vipul Pareek, secure account recovery, patient login reset, skincare services, dermatologist access, personalized care, Malviya Nagar clinic, advanced dermatology, acne treatment recovery, hair transplant login`,
        },
    },
    {
        path: "/reset-password",
        component: ResetPassword,
        name: "Reset Password",
        visibleToRouter: false,
        seo: {
            title: `Reset Password - ${APP_NAME}`,
            description: `Reset your password to access your ${APP_NAME} account and continue booking appointments.`,
            keywords: `reset password, password recovery, ${APP_NAME}, best dermatology clinic in Malviya Nagar, best dermatology clinic near me, SkinFollics, Skin Follics, Dr. Vipul Pareek, secure reset, dermatologist access, skincare appointments, personalized care, patient login, skin treatments, laser services, Malviya Nagar clinic, hair transplant login, acne care recovery`,
        },
    },
    {
        path: "/book-an-appointment",
        component: Appointment,
        name: "Book Appointment",

        seo: {
            title: `Book Appointment - ${APP_NAME}`,
            description: `Schedule an appointment at ${APP_NAME} for expert acne treatments, hair transplants, and more.`,
            keywords: `book appointment, schedule consultation, book skin treatment, dermatology appointment, ${generalKeywords}`,
        },
    },
    {
        path : "/my-appointments/:userId",
        component: MyAppointments,
        name: "My Appointments",
        seo: {
            title: `My Appointments - ${APP_NAME}`,
            description: `View and manage your appointments with ${APP_NAME}.`,
            keywords: `book appointment, schedule consultation, book skin treatment, dermatology appointment, ${generalKeywords}`,
        }
    },
    {
        path: "/about-us",
        component: About,
        name: "About Us",

        seo: {
            title: `About Us - ${APP_NAME}`,
            description: `Learn more about ${APP_NAME}, our team of expert dermatologists, and our commitment to providing personalized skin care solutions.`,
            keywords: `about ${APP_NAME}, dermatologists, skincare experts, ${generalKeywords}`,
        },
    },
    {
        path: "/treatments",
        component: Services,
        name: "Services",

        seo: {
            title: `Our Treatments - ${APP_NAME}`,
            description: `Explore the range of treatments available at ${APP_NAME}, including acne care, skin rejuvenation, and hair transplant services.`,
            keywords: "acne-treatment, acne-scar-treatment, hair-loss-treatment, hair-transplant, prp-treatment, laser-treatments, vitiligo-treatment, vitiligo-surgery, wart-treatment, eczema-treatment, atopic-dermatitis-treatment, psoriasis-treatment, skin-allergy-treatment, urticaria-treatment, keloid-treatment, hypertrophic-scar-treatment, burn-scar-treatment, nail-disease-treatment, unwanted-hair-treatment, std-treatment"
                + `treatments, acne care, hair transplant, skin rejuvenation, dermatology treatments, skincare services, ${generalKeywords}`,
        },
    },
    {
        path: "/testimonials",
        component: Testimonials,
        name: "Testimonials",

        seo: {
            title: `Testimonials - ${APP_NAME}`,
            description: `Read real-life experiences and testimonials from our satisfied patients who trusted ${APP_NAME} for their dermatology needs.`,
            keywords: `testimonials, patient reviews, customer feedback, skin care experiences, ${generalKeywords}`,
        },
    },
    {
        path: "/doctors",
        component: Team,
        name: "Doctors",

        seo: {
            title: `Our Doctors - ${APP_NAME}`,
            description: `Meet our team of experienced dermatologists at ${APP_NAME}, dedicated to providing high-quality skin care.`,
            keywords: `doctors, medical staff,dermats, skin experts, dermatologists, skincare experts, medical team, ${generalKeywords}`,
        },
    },
    {
        path: "/gallery",
        component: Gallery,
        name: "Gallery",

        seo: {
            title: `Gallery - ${APP_NAME}`,
            description: `Explore the ${APP_NAME} gallery and see the results of our advanced skin care treatments and services.`,
            keywords: `skin clinic images, skin care results ,skin clinic photos, skinfollics images, skin care results, before and after, skin treatment photos, ${generalKeywords}`,
        },
    },
    {
        path: "/blogs",
        component: Blogs,
        name: "Blogs",
        visibleToRouter: false,
        seo: {
            title: `Blogs - ${APP_NAME}`,
            description: `Read the latest articles and blogs on skin care, treatments, and expert tips from ${APP_NAME}.`,
            keywords: `blogs, skin care tips, skincare advice, dermatology articles, ${APP_NAME}, best dermatology clinic in Malviya Nagar, SkinFollics, Skin Follics, Dr. Vipul Pareek, expert tips, acne solutions, hair transplant tips, skin rejuvenation insights, personalized skincare, laser treatments, Malviya Nagar skin care, advanced dermatology advice`,
        },
    },
    {
        path: "/contact-us",
        component: ContactUs,
        name: "Contact Us",

        seo: {
            title: `Contact Us - ${APP_NAME}`,
            description: `Get in touch with ${APP_NAME} for consultations, appointments, or to learn more about our dermatology services.`,
            keywords: `contact ${APP_NAME}, contact us, dermatology inquiries, appointment scheduling, skin care clinic, ${generalKeywords}`,
        },
    },
    {
        path: "/privacy-policy",
        component: PrivacyPolicy,
        name: "Privacy Policy",

        seo: {
            title: `Privacy Policy - ${APP_NAME}`,
            description: `Read the privacy policy of ${APP_NAME}, outlining how we protect your personal information and ensure your privacy.`,
            keywords: `${generalKeywords}`,
        },
    },
    {
        path: "/terms-of-use",
        component: TermsOfUse,
        name: "Terms of Use",

        seo: {
            title: `Terms of Use - ${APP_NAME}`,
            description: `Discover the terms of use for ${APP_NAME}, the best dermatology clinic in Malviya Nagar. Learn the guidelines for accessing our expert dermatology services and treatments.`,
            keywords: generalKeywords
        },
    },
    {
        path: "/admin/appointments",
        component: ManageAppointmentsAdmin,
        name: "Manage Appointments",

    },
    {
        path: "test",
        component: TestContainer,
        name: "Test",
        visibleToRouter: true
    },
    {
        path: "*",
        component: NotFound,
        name: "404: Page Not Found",

    },
];
