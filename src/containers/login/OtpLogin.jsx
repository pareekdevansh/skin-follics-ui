import React, { useState, useEffect } from "react";
import { Box, TextField, Button, CircularProgress, Typography } from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';
import RefreshIcon from '@mui/icons-material/Refresh';
import VerifiedIcon from '@mui/icons-material/Verified';

const OtpLogin = ({ otpLoginForm, handleFormSubmit, loading }) => {
    const DEFAULT_OTP_TIMER = 6;
    const { phone: _phone, otp: _otp } = otpLoginForm;
    const [phone, setPhone] = useState(_phone);
    const [otp, setOtp] = useState(_otp);
    const [errors, setErrors] = useState({});
    const [timer, setTimer] = useState(DEFAULT_OTP_TIMER);
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [otpVerificationSuccess, setOtpVerificationSuccess] = useState(false);

    // Timer for OTP countdown
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
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(phone)) newErrors.phone = "Invalid phone number";
        if (otp && otp.length !== 4) newErrors.otp = "OTP must be 4 digits";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            handleFormSubmit({ phone, otp });
        }
    };

    const handleOtpRequest = () => {
        setIsOtpSent(true); // Simulating OTP sent
        setOtp("");
        setTimer(DEFAULT_OTP_TIMER); // Reset the timer to DEFAULT_OTP_TIMER seconds
        setOtpVerificationSuccess(false); // Reset OTP verification status
    };

    const handleVerifyOtp = () => {
        setOtpVerificationSuccess(true); // Simulating OTP verification success
        // make API call to verify OTP here
    };

    return (
        <form onSubmit={handleSubmit}>
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", maxWidth: 400 }} gap={2}>
                <TextField
                    label="Phone Number"
                    fullWidth
                    margin="normal"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    error={!!errors.phone}
                    helperText={errors.phone}
                    type="tel"
                    InputProps={{
                        startAdornment: <PhoneIcon sx={{ marginRight: 1 }} />,
                    }}
                    variant="outlined"
                    sx={{ backgroundColor: "#fff" }}
                    inputProps={{
                        pattern: "[0-9]*",
                        inputMode: "numeric",
                    }}
                    onInput={(e) => {
                        e.target.value = e.target.value.replace(/[^0-9]/g, "");
                    }}
                />

                {phone.length === 10 && !otpVerificationSuccess && (
                    <Button
                        variant="outlined"
                        color="primary"
                        sx={{ maxWidth: "50%", minWidth: '100px', padding: "4px 2.5%", borderRadius: "4px", marginLeft: "auto" }}
                        onClick={handleOtpRequest} disabled={loading || (isOtpSent && timer > 0)}
                    >
                        {loading ? <CircularProgress size={24} /> :
                            <Typography>
                                {isOtpSent ? <><RefreshIcon sx={{ marginRight: 1 }} /> Resend OTP</> : <> Send OTP</>}
                            </Typography>}
                    </Button>
                )}

                {isOtpSent && !otpVerificationSuccess && timer > 0 && (
                    <Typography variant="body2" sx={{ color: "#4e627b", marginTop: "10px" }}>
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

                {isOtpSent && (
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={handleVerifyOtp}
                        disabled={loading || otp.length !== 4}
                        sx={{ marginTop: "1rem" }}
                    >
                        {loading ? <CircularProgress size={24} /> : <>Verify OTP</>}
                    </Button>
                )}
            </Box>
        </form>
    );
};

export default OtpLogin;
