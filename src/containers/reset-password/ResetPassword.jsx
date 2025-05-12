import React, { useState, useEffect } from "react";
import {
	Box,
	TextField,
	Button,
	CircularProgress,
	Typography,
	Container,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";

const ResetPasswordPage = () => {
	const DEFAULT_OTP_TIMER = 60; // OTP countdown duration (in seconds)
	const [phone, setPhone] = useState("");
	const [otp, setOtp] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [otpSent, setOtpSent] = useState(false);
	const [otpTimer, setOtpTimer] = useState(DEFAULT_OTP_TIMER);
	const [otpVerified, setOtpVerified] = useState(false);
	const [errors, setErrors] = useState({});
	const [loading, setLoading] = useState(false);

	// Handle OTP countdown
	useEffect(() => {
		let countdown;
		if (otpSent && otpTimer > 0) {
			countdown = setInterval(() => {
				setOtpTimer((prev) => prev - 1);
			}, 1000);
		} else if (otpTimer === 0) {
			clearInterval(countdown);
		}
		return () => clearInterval(countdown);
	}, [otpSent, otpTimer]);

	const validateForm = (forOtpSend = false) => {
		const newErrors = {};
		const phoneRegex = /^[0-9]{10}$/;

		if (!phoneRegex.test(phone)) newErrors.phone = "Enter a valid 10-digit phone number";
		if (newPassword.length < 6) newErrors.newPassword = "Password must be at least 6 characters long";
		if (newPassword !== confirmPassword) newErrors.confirmPassword = "Passwords do not match";

		if (!forOtpSend && otp.length !== 4) newErrors.otp = "OTP must be 4 digits";

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};


	// Simulate OTP sending
	const handleSendOtp = () => {
		if (validateForm(true)) {
			setOtpSent(true);
			setOtpTimer(DEFAULT_OTP_TIMER);
			setOtp("");
			setOtpVerified(false);
			// Add API call to send OTP here
		}
	};

	// Simulate OTP verification
	const handleVerifyOtp = () => {
		if (otp === "1234") {
			setOtpVerified(true);
		} else {
			setErrors({ otp: "Invalid OTP" });
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (validateForm()) {
			setLoading(true);
			// Add API call to reset password here
			setTimeout(() => {
				setLoading(false);
				alert("Password reset successful");
			}, 2000);
		}
	};

	return (
		<Container maxWidth="sm" sx={{ minHeight: "50vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
			<Box
				sx={{
					width: "100%",
					padding: "2rem 10%",
					backgroundColor: "#fff",
					borderRadius: "8px",
					boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
					marginTop: "2rem",
				}}
			>
				<Typography variant="h5" align="center" sx={{ fontWeight: "bold", marginBottom: "1rem" }}>
					Reset Password
				</Typography>
				<form onSubmit={handleSubmit}>
					<TextField
						label="Phone Number"
						fullWidth
						margin="normal"
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
						error={!!errors.phone}
						helperText={errors.phone}
						InputProps={{
							startAdornment: <PhoneIcon sx={{ marginRight: 1 }} />,
						}}
						inputProps={{ maxLength: 10 }}
						sx={{ backgroundColor: "#f9f9f9" }}
					/>

					{phone.length === 10 && <TextField
						label="New Password"
						type="password"
						fullWidth
						margin="normal"
						value={newPassword}
						onChange={(e) => setNewPassword(e.target.value)}
						error={!!errors.newPassword}
						helperText={errors.newPassword}
						sx={{ backgroundColor: "#f9f9f9" }}
					/>
					}{phone.length === 10 && newPassword.length > 0 &&
						<TextField
							label="Confirm Password"
							type="password"
							fullWidth
							margin="normal"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
							error={!!errors.confirmPassword}
							helperText={errors.confirmPassword}
							sx={{ backgroundColor: "#f9f9f9" }}
						/>
					}
					{phone.length === 10 && newPassword.length > 0 && confirmPassword.length > 0 &&
						<Button
							variant="outlined"
							fullWidth
							disabled={otpSent && otpTimer > 0}
							onClick={handleSendOtp}
							sx={{ marginTop: "1rem" }}
						>
							{otpSent && otpTimer > 0 ? `Resend OTP in ${otpTimer}s` : "Send OTP"}
						</Button>}

					{otpSent && (
						<>
							<TextField
								label="Enter OTP"
								fullWidth
								margin="normal"
								value={otp}
								onChange={(e) => setOtp(e.target.value)}
								error={!!errors.otp}
								helperText={errors.otp}
								inputProps={{ maxLength: 4 }}
								sx={{ backgroundColor: "#f9f9f9" }}
							/>
						</>
					)}

					<Button
						fullWidth
						variant="contained"
						onClick={handleVerifyOtp}
						disabled={otpVerified || otp.length !== 4}
						sx={{ marginBottom: "1rem" }}
					> Reset Password
					</Button>

				</form>
			</Box>
		</Container>
	);
};

export default ResetPasswordPage;
