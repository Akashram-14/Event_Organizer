import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ChurchIcon from '@mui/icons-material/Church';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import { Link } from 'react-router-dom';

const pages = [
  { label: 'Home', link: '/Home', icon: <HomeIcon /> },
  { label: 'Events', link: '/Events', icon: <PetsOutlinedIcon /> },
  { label: 'Location', link: '/Location', icon: <StorefrontOutlinedIcon /> },
  { label: 'Clients', link: '/Clients', icon: <StorefrontOutlinedIcon /> },
  { label: 'About', link: '/About', icon: <AccountBoxOutlinedIcon /> },
];

const settings = [
  { label: 'Profile', link: '/Profile', icon: <AccountBoxOutlinedIcon /> },
  { label: 'Dashboard', link: '/Dashboard', icon: <AssignmentIndOutlinedIcon /> },
  { label: 'Sign Out', link: '/Login', icon: <AssignmentIndOutlinedIcon /> },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const toggleDrawer = (open) => () => {
    setOpenDrawer(open);
  };

  return (
    <>
      <AppBar position="static" sx={{ background: '#333', color: '#fff' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <IconButton
              size="large"
              aria-label="open drawer"
              edge="start"
              onClick={toggleDrawer(true)}
              sx={{ mr: 2, display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/Home"
              sx={{
                mr: 2,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <ChurchIcon sx={{ fontSize: 32, marginRight: 1 }} />
              HeartFeltHappenings
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page.label}
                  component={Link}
                  to={page.link}
                  sx={{ my: 2, color: '#ccc' }}
                >
                  {page.label}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
             <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
               {/* Replace the src attribute with the path to your desired image */}
                <Avatar alt="User Avatar" src="/path/to/your/image.jpg" />
              </IconButton>
           </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting.label} onClick={handleCloseUserMenu}>
                    <Link to={setting.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <Typography textAlign="center">{setting.label}</Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={toggleDrawer(false)}
        sx={{ '& .MuiDrawer-paper': { width: '200px' } }}
      >
        <List>
          {pages.map((page) => (
            <ListItem button key={page.label} component={Link} to={page.link} onClick={toggleDrawer(false)}>
              <ListItemIcon>{page.icon}</ListItemIcon>
              <ListItemText primary={page.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        {pages.map((page) => (
          <MenuItem key={page.label} onClick={handleCloseNavMenu}>
            <Link to={page.link} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography textAlign="center">{page.label}</Typography>
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export default Navbar;