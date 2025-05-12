import React, { useState, useEffect } from "react";
import { Typography, TextField, Button, Box, CircularProgress, Link } from "@mui/material";
import { FaUserAlt, FaPhoneAlt } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";
import { Refresh } from "@mui/icons-material";

const CustomRegistrationForm = ({ registrationForm, handleSubmitForm, loading }) => {
    const { name: _name, phone: _phone } = registrationForm;

    const [name, setName] = useState(_name);
    const [phoneNumber, setPhoneNumber] = useState(_phone);
    const [otp, setOtp] = useState("");
    const [otpVerificationSuccess, setOtpVerificationSuccess] = useState(false);
    const [errors, setErrors] = useState({});
    const [timer, setTimer] = useState(10);
    const [isOtpSent, setIsOtpSent] = useState(false);

    useEffect(() => {
        let countdown;
        if (isOtpSent && timer > 0) {
            countdown = setInterval(() => {
                setTimer((prevTime) => prevTime - 1);
            }, 1000);
        } else if (timer === 0) {
            clearInterval(countdown);
        }
        return () => clearInterval(countdown);
    }, [isOtpSent, timer]);

    const validateForm = () => {
        const newErrors = {};
        if (name.length < 3) newErrors.name = "Name must be at least 3 characters";
        if (phoneNumber === "") newErrors.phoneNumber = "Please enter your phone number";
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(phoneNumber)) newErrors.phoneNumber = "Invalid phone number";
        if (otp.length !== 4) newErrors.otp = "OTP must be of 4 digits";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            handleSubmitForm({ name, phoneNumber, otp });
        } else {
            console.log("Form validation failed");
        }
    };

    const handleOtpRequest = () => {
        setIsOtpSent(true); // Simulating OTP sent
        setTimer(10); // Reset the timer to 40 seconds
        setOtpVerificationSuccess(false); // Reset OTP verification status
    };

    const handleVerifyOtp = () => {
        if(otp === "1234") {
            const isOtpVerified = true;
            setOtpVerificationSuccess(isOtpVerified);
            handleSubmitForm({ name, phoneNumber, otp });
        } else { 
            setErrors({ otp: "Otp Verification Failed. Pls try again" });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", maxWidth: 400 }} gap={2}>
                <TextField
                    label="Full Name"
                    fullWidth
                    margin="normal"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    error={!!errors.name}
                    helperText={errors.name}
                    InputProps={{
                        startAdornment: <FaUserAlt style={{ marginRight: 8, color: "#4e627b" }} />,
                    }}
                    variant="outlined"
                    sx={{ backgroundColor: "#fff" }}
                />

                {name.length >= 3 && (
                    <TextField
                        label="Phone Number"
                        fullWidth
                        margin="normal"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        error={!!errors.phoneNumber}
                        helperText={errors.phoneNumber}
                        type="tel"
                        InputProps={{
                            startAdornment: <FaPhoneAlt style={{ marginRight: 8, color: "#4e627b" }} />,
                        }}
                        variant="outlined"
                        sx={{ backgroundColor: "#fff" }}
                        inputProps={{
                            pattern: "[0-9]*", // Allow only numbers on mobile devices (for iOS)
                            inputMode: "numeric", // Hint to browsers for numeric keypad (especially for mobile)
                        }}
                        onInput={(e) => {
                            e.target.value = e.target.value.replace(/[^0-9]/g, "");
                        }}
                    />
                )}

                {name.length >= 3 && phoneNumber.length === 10 && !otpVerificationSuccess && (
                    <Button
                        variant="outlined"
                        color="primary"
                        sx={{ maxWidth: "50%", minWidth: '100px', padding: "4px 2.5%", borderRadius: "4px", marginLeft: "auto" }}
                        onClick={handleOtpRequest} disabled={loading || (isOtpSent && timer > 0)}
                    >
                        {loading ? <CircularProgress size={24} /> :
                            <Typography>
                                {isOtpSent ? <><Refresh sx={{ marginRight: 1 }} /> Resend OTP</> : <> Send OTP</>}
                            </Typography>}
                    </Button>

                )
                }

                {isOtpSent && !otpVerificationSuccess && timer > 0 && (
                    <Typography variant="body2" textAlign="center" sx={{ marginTop: "10px", color: "#4e627b" }}>
                        OTP sent. Please wait {timer} seconds to resend.
                    </Typography>
                )}

                {isOtpSent && !otpVerificationSuccess && (
                    <TextField
                        label="Enter OTP"
                        fullWidth
                        margin="normal"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        error={!!errors.otp}
                        helperText={errors.otp}
                        variant="outlined"
                        inputProps={{
                            maxLength: 4, // Limit to 4 digits
                            inputMode: "numeric", // Hint for numeric keypad on mobile
                            pattern: "[0-9]*", // Numeric-only pattern
                        }}
                        onInput={(e) => {
                            e.target.value = e.target.value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
                        }}

                        sx={{ backgroundColor: "#fff" }}
                    />
                )}
                {
                    isOtpSent &&
                    <Button
                        fullWidth
                        variant="contained"
                        sx={{
                            backgroundColor: "#0066cc",
                            color: "#fff",
                            padding: "8px",
                            borderRadius: "4px",
                        }}
                        onClick={handleVerifyOtp}
                        disabled={loading || otp.length !== 4}
                    >
                        {loading ? <CircularProgress size={24} /> : "Verify OTP & Register"}
                    </Button>}
                <Typography variant="body2" textAlign="center" sx={{ marginTop: "1rem" }}>
                    Already have an account?{" "}
                    <Link href="/login" sx={{ color: "#0066cc", textDecoration: "none" }}>
                        Login
                    </Link>
                </Typography>
            </Box>
        </form >
    );
};

export default CustomRegistrationForm;
