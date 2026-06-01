import React from 'react'
import '../style sheets/Navbar.css'
import logo from '../images/logo'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import LoginContext from '../contexts/LoginContext'
import { useContext, useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AppBar from '@mui/material/AppBar';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Navbar() {

    const navigate = useNavigate()
    const { isLoggedIn } = useContext(LoginContext)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [isPaperOpen, setIsPaperOpen] = useState(false);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <AppBar className='navbar'>

                <Button className='logo' onClick={() => navigate('/')}>
                    <img src={logo} alt="logo" />
                </Button>

                <Stack direction="row" spacing={2} className="nav-buttons">

                    <Button className="nav-Button" onClick={() => navigate('/recipes')}>View Recipes</Button>

                    <div onMouseEnter={() => setIsPaperOpen(true)} onMouseLeave={() => setIsPaperOpen(false)} >
                        <Button className="nav-Button" onClick={() => navigate('/tools')}>
                            Tools and Tips
                        </Button>
                        <ExpandMoreIcon />
                        {isPaperOpen && <Paper elevation={0} className='tools-menu'>
                            <div>
                                <Button className="paper-header" onClick={() => navigate('/viewtools')}>Tools</Button>
                                <HashLink to="/viewtools#cool-gadgets"><Button>Cool gadgets</Button></HashLink>
                                <HashLink to="/viewtools#alternatives"><Button>Alternatives</Button></HashLink>
                                <HashLink to="/viewtools#product-recommendations"><Button>Product Recommendations</Button></HashLink>

                            </div>
                            <div>
                                
                                <Button className="paper-header" onClick={() => navigate('/conversions')}>Conversions</Button>
                              <HashLink to="/conversions#conversion-tables"><Button>Metrics</Button>
                                </HashLink>
                                <HashLink to="/conversions#recipe-scaler"><Button>Recipe Scaler</Button>
                                </HashLink>
                                <HashLink to="/conversions#ingredient-substitutions"><Button>Ingredient Substitutions</Button>
                                </HashLink>
                            </div>
                            <div>
                                <Button className="paper-header" onClick={() => navigate('/info')}>Info</Button>
                                <Button>Cooking methods</Button>
                                <Button>Nutrition</Button>
                                {/* <Button>Kitchen materials</Button> */}
                                {/* Nutrition */}
                                                                {/* Organization */}

                            </div>
                            <div>
                                <Button className="paper-header" onClick={() => navigate('/resources')}>Resources</Button>
                                <Button>Weekly meal prep planner</Button>
                                <Button>Grocery list template</Button>
                                <Button>Pantry inventory tracker</Button>
                            </div>
                        </Paper>}
                    </div>
                    <Button className="nav-Button" onClick={() => navigate('/design')}>Design World</Button>
                    <Button className="nav-Button" onClick={() => navigate('/blogs')}>Blogs</Button>

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



            </AppBar>

        </div>
    )
}

export default Navbar