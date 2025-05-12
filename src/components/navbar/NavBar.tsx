import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import NavMenu from './NavMenu';
import Logo from './Logo';
import UserProfile from './UserProfile';
import { navItems } from './constants';
import { IconButton } from '@mui/material';


const StyledAppBar = styled.header`
    background: var(--navbar-color, linear-gradient(to right, #2c2c2c, #1f1f1f));
    color: black;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
    padding: 0 5%;
    position: static;
`;

const Toolbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 64px;
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: center;
    order: 2; 
    @media (min-width: 960px) {
        justify-content: flex-start;
        order: 1;
    }
`;

const MobileMenuButton = styled.div`
    display: flex;
    order: 1;
    @media (min-width: 960px) {
        display: none;
    }
`;

const DesktopMenuContainer = styled.nav`
    display: none;
    flex: 1;
    justify-content: center;
    gap: 2rem; /* Standard gap for larger screens */
    width: 100%;
    margin: 0 auto;
    white-space: nowrap; /* Prevent wrapping */

    @media (min-width: 960px) {
        display: flex;
        flex-grow: 1;
        order: 2;
    }

    @media (max-width: 1200px) {
        gap: 1rem; /* Reduce gap for screens between 960px and 1200px */
    }
`;

const UserProfileContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    order: 3;
`;

const NavButton = styled.button`
    background: none;
    border: none;
    color: black;
    cursor: pointer;
    font-size: 1rem;
    padding: 16px 4px;
    text-transform: capitalize;
    transition: transform 0.3s ease, color 0.3s ease;

    &:hover {
        transform: scale(1.1);
        color: #0066cc;
    }
`;

const NavBar = () => {
    const [navMenuOpen, setNavMenuOpen] = useState<null | HTMLElement>(null);

    // Update event type to match SVG elements
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setNavMenuOpen(event.currentTarget);
    };

    // Handle closing of the mobile navigation menu
    const handleCloseNavMenu = () => {
        setNavMenuOpen(null);
    };

    // Handle navigation to a specific URL
    const handleNavigation = (url: string = '/home') => {
        window.location.href = url;
        setNavMenuOpen(null);
    };

    // Mock user data for the UserProfile component
    const user = {
        isAuthenticated: true,
        name: 'John Doe',
        avatarUrl: '/assets/user_avatar.png',
    };

    return (
        <StyledAppBar>
            <Toolbar>
                {/* Mobile Navigation Menu */}
                <MobileMenuButton>
                    <IconButton
                        aria-label="open navigation menu"
                        onClick={handleOpenNavMenu}
                    >
                        <MenuIcon
                            fontSize="large"
                            sx={{ color: 'gray' }}
                        />
                    </IconButton>
                    <NavMenu
                        navItems={navItems}
                        anchorEl={navMenuOpen}
                        onClose={handleCloseNavMenu}
                        onNavigate={handleNavigation}
                    />
                </MobileMenuButton>

                {/* Logo Section */}
                <LogoContainer onClick={() => handleNavigation('/home')}>
                    <Logo />
                </LogoContainer>

                {/* Desktop Navigation Menu */}
                <DesktopMenuContainer>
                    {navItems.map((navItem) => (
                        <NavButton
                            key={navItem.url}
                            onClick={() => handleNavigation(navItem.url)}
                        >
                            {navItem.title}
                        </NavButton>
                    ))}
                </DesktopMenuContainer>

                {/* User Profile Section */}
                {/* <UserProfileContainer>
                    {user.isAuthenticated && <UserProfile user={user} />}
                </UserProfileContainer> */}
            </Toolbar>
        </StyledAppBar>
    );
}

export default NavBar;
