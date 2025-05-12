import React from 'react';
import { Button, Box, Typography } from '@mui/material';
import { useGoogleLogin } from '@react-oauth/google';
import Cookies from 'js-cookie';
import OAuth2ApiService from '../../services/api/oauth2Service';
import './GoogleSignInButton.css';
const GoogleSignInButton: React.FC = () => {
    const [errorMessage, setErrorMessage] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const clientId = process.env.REACT_APP_GOOGLE_OAUTH2_CLIENT_ID;
    const clientSecret = process.env.REACT_APP_GOOGLE_OAUTH2_CLIENT_SECRET;
    const oauth2Service = new OAuth2ApiService(clientId, clientSecret);

    const login = useGoogleLogin({
        onSuccess: async (oAuthToken) => {
            handleGoogleSuccess(oAuthToken);
        },
        onError: (error) => {
            handleGoogleError(error);
        },
        scope: 'openid https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/user.birthday.read https://www.googleapis.com/auth/user.gender.read https://www.googleapis.com/auth/user.phonenumbers.read',
    });

    const handleGoogleSuccess = async (oAuthToken: any) => {
        try {
            const googleApiAccessToken = oAuthToken.access_token;
            const requestBody = {
                access_token: googleApiAccessToken,
                request_type: 'REGISTER',
            };
            const tokenResponse = await oauth2Service.exchangeAuthCodeForToken("/auth/oauth2/google", requestBody);
            const { accessToken, refreshToken } = tokenResponse;
            Cookies.set('accessToken', accessToken, {
                secure: true,
                sameSite: 'Strict',
                expires: 1 / 24,
            });
            Cookies.set('refreshToken', refreshToken, {
                secure: true,
                sameSite: 'Strict',
                expires: 1,
            });
            alert("Google login successful!");
        } catch (error) {
            console.error('Login Failed:', error);
            setErrorMessage('Google login failed. Please try again.');
        }
    };

    const handleGoogleError = (error: any) => {
        console.error("Google Login Error:", error);
        setErrorMessage("Google login failed. Please try again.");
    };

    return (
        <button type="button" className="login-with-google-btn" onClick={() => login()} >
            Sign in with Google
        </button>
    );
};

export default GoogleSignInButton;
