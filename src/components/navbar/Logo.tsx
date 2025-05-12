import React from 'react';
import Box from '@mui/material/Box';

interface LogoProps {
    onClick?: () => void;
}

const Logo: React.FC<LogoProps> = ({ onClick }) => (
    <Box
        sx={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            marginRight: '4rem',
            transition: 'transform 0.3s ease, opacity 0.3s ease',
            '&:hover': {
                transform: 'scale(1.1)',
                opacity: 0.8,
            },
        }}
        onClick={onClick}
    >
        <img
            src="/assets/app_logo.png"
            alt="App Logo"
            style={{
                maxWidth: '120px',
                maxHeight: '60px',
                transition: 'transform 0.3s ease',
            }}
        />
    </Box>
);

export default Logo;
