import React from 'react';
import { Menu, MenuItem, Typography } from '@mui/material';

interface NavMenuProps {
    navItems: { title: string; url: string }[];
    anchorEl: HTMLElement | null;
    onClose: () => void;
    onNavigate: (url: string) => void;
}

const NavMenu: React.FC<NavMenuProps> = ({ navItems, anchorEl, onClose, onNavigate }) => (
    <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }}
        open={Boolean(anchorEl)}
        onClose={onClose}
    >
        {navItems.map((navItem) => (
            <MenuItem key={navItem.url} onClick={() => onNavigate(navItem.url)}>
                <Typography sx={{ textAlign: 'center' }} color="black">
                    {navItem.title}
                </Typography>
            </MenuItem>
        ))}
    </Menu>
);

export default NavMenu;
