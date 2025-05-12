import React, { useState } from "react";
import { Box, TextField, Button, CircularProgress, IconButton } from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';
import LockIcon from '@mui/icons-material/Lock';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const PasswordLogin = ({ passwordLoginForm, handleFormSubmit }) => {
    const { phone: _phone, password: _password } = passwordLoginForm;
    const [phone, setPhone] = useState(_phone);
    const [password, setPassword] = useState(_password);
    const [togglePasswordVisibility, setTogglePasswordVisibility] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        if (phone.length === 10 && password.length > 0) {
            handleFormSubmit({ phone, password });
        } else {
            setErrors({
                phoneNumber: phone.length !== 10 ? "Please enter a valid phone number" : "",
                password: password.length === 0 ? "Password cannot be empty" : "",
            });
        }
    };

    const handlePasswordVisibilityToggle = () => {
        setTogglePasswordVisibility((prev) => !prev);
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
                    error={!!errors.phoneNumber}
                    helperText={errors.phoneNumber}
                    type="tel"
                    InputProps={{
                        startAdornment: <PhoneIcon sx={{ marginRight: 1, color: "#4e627b" }} />,
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

                {phone.length === 10 && (
                    <TextField
                        label="Password"
                        fullWidth
                        margin="normal"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        error={!!errors.password}
                        helperText={errors.password}
                        type={togglePasswordVisibility ? "text" : "password"}
                        InputProps={{
                            startAdornment: <LockIcon sx={{ marginRight: 1, color: "#4e627b" }} />,
                            endAdornment: (
                                <IconButton onClick={handlePasswordVisibilityToggle} edge="end">
                                    {togglePasswordVisibility ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            ),
                        }}
                        variant="outlined"
                        sx={{ backgroundColor: "#fff" }}
                    />
                )}

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                        backgroundColor: "#0066cc",
                        color: "#fff",
                        padding: "8px",
                        borderRadius: "4px",
                    }}
                    disabled={loading || phone.length !== 10 || password.length === 0}
                >
                    {loading ? <CircularProgress size={24} /> : "Login"}
                </Button>
            </Box>
        </form>
    );
};

export default PasswordLogin;
