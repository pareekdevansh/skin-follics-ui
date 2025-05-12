import React, { useState } from "react";
import {
	Container,
	Typography,
	Box,
	CircularProgress,
	Link,
	Tabs,
	Tab,
	Divider,
} from "@mui/material";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import PasswordLogin from "./PasswordLogin";
import OtpLogin from "./OtpLogin";
import GoogleSignInButton from "../../components/google-sign-in/GoogleSignInButton";

const Login = () => {
	const navigate = useNavigate();
	const [activeTab, setActiveTab] = useState(0);
	const [loading, setLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [timer, setTimer] = useState(0);

	const passwordLoginForm = {
		phone: "",
		password: "",
	};

	const otpLoginForm = {
		phone: "",
		otp: "",
	}

	const handlePasswordLoginFormSubmit = (data) => {
		setLoading(true);
		setErrorMessage("");

		console.log("Form submitted", data);
	}

	const handleOtpLoginFormSubmit = (data) => {
		setLoading(true);
		setErrorMessage("");
		console.log("Form submitted", data);
	}

	const handleTabChange = (event, newValue) => {
		setActiveTab(newValue);
	};

	const handleSubmitForm = (data) => {
		setLoading(true);
		setErrorMessage("");

		console.log("Form submitted", data);
		setLoading(false);
	};



	const handleGoogleSuccess = async (credentialResponse) => {
		try {
			console.log("Google login response:", credentialResponse);
			alert("Google login successful!");
		} catch (error) {
			console.error("Google Login Error:", error);
			setErrorMessage("Failed to authenticate with Google.");
		}
	};

	const handleGoogleError = (error) => {
		console.error("Google Login Error:", error);
		setErrorMessage("Google login failed. Please try again.");
	};

	const handleResendOtp = () => {
		setTimer(30); // 30 seconds timer for OTP resend
	};

	return (
		<Box
			sx={{
				minHeight: "100vh",
				background: "linear-gradient(135deg, #f3f3f3, #f6f6f6)",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				paddingY: "2rem",
				paddingX: "5%",
			}}
		>
			<Container
				maxWidth="xs"
				sx={{
					backgroundColor: "white",
					padding: "2rem",
					borderRadius: "8px",
					boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
					width: "100%",
					boxSizing: "border-box",
				}}
			>
				<Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: "bold", color: "#333" }}>
					Welcome Back!
				</Typography>
				<Typography variant="body2" align="center" paragraph sx={{ color: "#555", fontSize: "14px" }}>
					Choose your login method below.
				</Typography>

				{errorMessage && (
					<Box sx={{ backgroundColor: "red", padding: "10px", borderRadius: "4px", color: "white", marginBottom: "1rem" }}>
						<Typography variant="body2">{errorMessage}</Typography>
					</Box>
				)}

				<Tabs value={activeTab} onChange={handleTabChange} centered>
					<Tab label="Phone & OTP" />
					<Tab label="Phone & Password" />
				</Tabs>

				{activeTab === 1 && (
					<PasswordLogin
						passwordLoginForm={passwordLoginForm}
						handleFormSubmit={handlePasswordLoginFormSubmit}
					/>
				)}

				{activeTab === 0 && (
					<OtpLogin
						otpLoginForm={otpLoginForm}
						handleFormSubmit={handleOtpLoginFormSubmit}
					/>
				)}

				<Box sx={{ mt: 2 }}>
					<Divider><Typography variant="body2">OR</Typography></Divider>
				</Box>
				<Box sx={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
					<GoogleSignInButton />
				</Box>

				<Box sx={{ mt: 2, textAlign: "center" }}>
					<Typography variant="body2" sx={{ color: "#555" }}>
						Don't have an account?{" "}
						<Link href="/register" style={{ textDecoration: "none", fontWeight: "bold" }}>
							Register
						</Link>
					</Typography>
				</Box>
			</Container>
		</Box>
	);
};

export default Login;
