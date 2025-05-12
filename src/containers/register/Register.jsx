import React, { useState } from "react";
import { Container, Typography, Box, CircularProgress } from "@mui/material";
import CustomRegistrationForm from "./CustomRegistrationForm";
import GoogleSignInButton from "../../components/google-sign-in/GoogleSignInButton";

const Register = () => {
	const registrationForm = {
		name: "",
		phone: ""
	};	
	const [loading, setLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const handleSubmitForm = (data) => {
		setLoading(true);
		setErrorMessage("");

		console.log("Form data submitted:", data);

		// Mock form submission delay
		setTimeout(() => {
			setLoading(false);
		}, 2000);
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
					Create an Account
				</Typography>
				<Typography variant="body2" align="center" paragraph sx={{ color: "#555", fontSize: "14px" }}>
					Enter your details to sign up and start your journey with us.
				</Typography>

				{errorMessage && (
					<Box sx={{ backgroundColor: "red", padding: "10px", borderRadius: "4px", color: "white", marginBottom: "1rem" }}>
						<Typography variant="body2">{errorMessage}</Typography>
					</Box>
				)}

				<CustomRegistrationForm 
					registrationForm={registrationForm} 
					handleSubmitForm={handleSubmitForm} 
					loading={loading} 
				/>

				<Box sx={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
					<GoogleSignInButton />
				</Box>
			</Container>
		</Box>
	);
};

export default Register;
