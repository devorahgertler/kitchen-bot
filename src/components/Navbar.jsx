import React from 'react'
import '../style sheets/Navbar.css'
import logo from '../images/logo'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import LoginContext from '../contexts/LoginContext'
import { useContext } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function Navbar() {

    const { isLoggedIn } = useContext(LoginContext)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className='navbar'>
            \            <Button className='logo' href="http://localhost:3000/">
                <img src={logo} alt="logo" />
            </Button>
            <Stack direction="row" spacing={2} className="nav-buttons">
                <Button href="http://localhost:3000/recipes" className="nav-link">View Recipes</Button>
                <Button href="http://localhost:3000/tools" className="nav-link">Tools and Tips</Button>
                <Button href="http://localhost:3000/demos" className="nav-link">Demos</Button>
                {!isLoggedIn && <Button variant='contained' href="http://localhost:3000/">Login</Button>}
                {isLoggedIn && <div>
                    <AccountCircleIcon fontSize='large' className='account-icon' id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    />
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My Dashboard</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </div>}
            </Stack>
        </div>
    )
}

export default Navbar