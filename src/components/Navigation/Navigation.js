import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import * as React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
    const theme = useTheme();
    const useStyle = makeStyles({
        navItems: {
            color: '#fff',
            textDecoration: 'none',
            textAlign: 'end'
        },
        navIcon: {
            [theme.breakpoints.up('sm')]: {
                display: 'none !important'
            }
        },
        navItemContainer: {
            [theme.breakpoints.down("sm")]: {
                display: 'none !important'
            }
        },
        navLogo: {
            [theme.breakpoints.down("sm")]: {
                textAlign: 'center !important',
            }
        },
        mobileNavItem: {
            textDecoration: 'none',
            color: '#000'
        },
        drawerDesign: {
            // background: '#000',
        },
        drawerItemsDesign: {
            color: '#000 !important',
            textDecoration: 'none'
        }
    });

    const { navItems, navIcon, navItemContainer, navLogo, mobileNavItem, drawerDesign, drawerItemsDesign } = useStyle();

    const [state, setState] = React.useState(false);



    const list = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
        >
            <List className={drawerDesign}>
                <Divider />
                <ListItem button >
                    <ListItemText>
                        <Link className={drawerItemsDesign} to="/">Dashboard Home</Link>
                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem button >
                    <ListItemText>
                        <Link className={drawerItemsDesign} to="/coupon">Coupon</Link>
                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem button >
                    <ListItemText>
                        <Link className={drawerItemsDesign} to="/customerdata">Customer Data</Link>
                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem button >
                    <ListItemText>
                        <Link className={drawerItemsDesign} to="/customerwallet">Customer Wallet</Link>
                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem button >
                    <ListItemText>
                        <Link className={drawerItemsDesign} to="/messaging">Messaging</Link>
                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem button >
                    <ListItemText>
                        <Link className={drawerItemsDesign} to="/packages">Packages</Link>
                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem button >
                    <ListItemText>
                        <Link className={drawerItemsDesign} to="/payment">Payment</Link>
                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem button >
                    <ListItemText>
                        <Link className={drawerItemsDesign} to="/productcategory">Product Category</Link>
                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem button >
                    <ListItemText>
                        <Link className={drawerItemsDesign} to="/report">Report</Link>
                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem button >
                    <ListItemText>
                        <Link className={drawerItemsDesign} to="/selldashboard">Sell Dashboard</Link>
                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem button >
                    <ListItemText>
                        <Link className={drawerItemsDesign} to="/ssl">SSL</Link>
                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem button >
                    <ListItemText>
                        <Link className={drawerItemsDesign} to="/stock">Stock</Link>
                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem button >
                    <ListItemText>
                        <Link className={drawerItemsDesign} to="/tickets">Tickets</Link>
                    </ListItemText>
                </ListItem>
                <Divider />
            </List>

        </Box>
    );

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            className={navIcon}
                            onClick={() => setState(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography className={navLogo} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Dashboard
                        </Typography>
                        <Box className={navItemContainer}>
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
            <div>
                <React.Fragment>
                    <Drawer
                        className={drawerDesign}
                        open={state}
                        onClose={() => setState(false)}
                    >
                        {list}
                    </Drawer>
                </React.Fragment>
            </div>
        </>
    );
}
