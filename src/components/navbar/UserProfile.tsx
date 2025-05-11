import React, { useState } from 'react';
import { Avatar, Box, Menu, MenuItem, IconButton, Tooltip } from '@mui/material';
import AppointmentService from '../../services/api/appointmentService';

interface UserProfileProps {
    user: { isAuthenticated: boolean; name: string; avatarUrl: string };
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
    const [profileMenuOpen, setProfileMenuOpen] = useState<null | HTMLElement>(null);

    const appointmentService = new AppointmentService();
    const handleOpenProfileMenu = (event: React.MouseEvent<HTMLElement>) => {
        setProfileMenuOpen(event.currentTarget);
    };

    const handleCloseProfileMenu = () => {
        setProfileMenuOpen(null);
    };

    const handleProfileAction = (action: string) => {
        // use switch case 
        switch(action) {
            case 'profile':
                window.location.href = '/profile';
                break;
            case 'appointments':
                // TODO: remove hardcoding later 
                window.location.href = '/my-appointments/1';
                break;
            case 'logout':
                console.log('User logged out');
                break;
        }
        setProfileMenuOpen(null);
    };

    return (
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
                <IconButton onClick={handleOpenProfileMenu} sx={{ p: 0 }}>
                    <Avatar alt={user.name} src={user.avatarUrl} />
                </IconButton>
            </Tooltip>
            <Menu
                id="menu-appbar-profile"
                anchorEl={profileMenuOpen}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(profileMenuOpen)}
                onClose={handleCloseProfileMenu}
            >
                <MenuItem onClick={() => handleProfileAction('profile')}>Profile</MenuItem>
                <MenuItem onClick={() => handleProfileAction('appointments')}>My Appointments</MenuItem>
                <MenuItem onClick={() => handleProfileAction('logout')}>Logout</MenuItem>
            </Menu>
        </Box>
    );
};

export default UserProfile;
