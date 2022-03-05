import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
// import { makeStyles } from '@mui/styles';
import * as React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
    const useStyle = makeStyles({
        navItems: {
            color: '#fff',
            textDecoration: 'none',
            textAlign: 'end'
        }
    });

    const { navItems } = useStyle();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <Box>
                        <Link className={navItems} to="/"><Button color="inherit">Dashboard Home</Button></Link>
                        <Link className={navItems} to="/coupon"><Button color="inherit">Coupon</Button></Link>
                        <Link className={navItems} to="/customerdata"><Button color="inherit">Customer Data</Button></Link>
                        <Link className={navItems} to="/customerwallet"><Button color="inherit">Customer Wallet</Button></Link>
                        <Link className={navItems} to="/messaging"><Button color="inherit">Messaging</Button></Link>
                        <Link className={navItems} to="/packages"><Button color="inherit">Packages</Button></Link>
                        <Link className={navItems} to="/payment"><Button color="inherit">Payment</Button></Link>
                        <Link className={navItems} to="/productcategory"><Button color="inherit">Product Category</Button></Link>
                        <Link className={navItems} to="/report"><Button color="inherit">Report</Button></Link>
                        <Link className={navItems} to="/selldashboard"><Button color="inherit">Sell Dashboard</Button></Link>
                        <Link className={navItems} to="/ssl"><Button color="inherit">SSL</Button></Link>
                        <Link className={navItems} to="/stock"><Button color="inherit">Stock</Button></Link>
                        <Link className={navItems} to="/tickets"><Button color="inherit">Tickets</Button></Link>
                    </Box>

                </Toolbar>
            </AppBar>
        </Box>
    );
}
