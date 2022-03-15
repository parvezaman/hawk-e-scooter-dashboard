import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import BugReportIcon from '@mui/icons-material/BugReport';
import CategoryIcon from '@mui/icons-material/Category';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import DiscountIcon from '@mui/icons-material/Discount';
import HomeIcon from '@mui/icons-material/Home';
import InventoryIcon from '@mui/icons-material/Inventory';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MenuIcon from '@mui/icons-material/Menu';
import PaidIcon from '@mui/icons-material/Paid';
import PeopleIcon from '@mui/icons-material/People';
import ReportIcon from '@mui/icons-material/Report';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { ListItem } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled, useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const MiniNav = () => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    <ListItem>
                        <Link to="/">
                            <ListItemButton>
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    Dashboard Home
                                </ListItemText>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <Link to="/coupon">
                            <ListItemButton>
                                <ListItemIcon>
                                    <DiscountIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    Coupon
                                </ListItemText>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <Link to="/customerdata">
                            <ListItemButton>
                                <ListItemIcon>
                                    <PeopleIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    Customer Data
                                </ListItemText>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <Link to="/customerwallet">
                            <ListItemButton>
                                <ListItemIcon>
                                    <AccountBalanceWalletIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    Customer Wallet
                                </ListItemText>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <Link to="/messaging">
                            <ListItemButton>
                                <ListItemIcon>
                                    <MailOutlineIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    Messages
                                </ListItemText>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <Link to="/packages">
                            <ListItemButton>
                                <ListItemIcon>
                                    <InventoryIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    Packages
                                </ListItemText>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <Link to="/payment">
                            <ListItemButton>
                                <ListItemIcon>
                                    <PaidIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    Payment
                                </ListItemText>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <Link to="/productcategory">
                            <ListItemButton>
                                <ListItemIcon>
                                    <CategoryIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    Product Category
                                </ListItemText>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <Link to="/report">
                            <ListItemButton>
                                <ListItemIcon>
                                    <ReportIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    Report
                                </ListItemText>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <Link to="/selldashboard">
                            <ListItemButton>
                                <ListItemIcon>
                                    <StorefrontIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    Sells Dashboard
                                </ListItemText>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <Link to="/ssl">
                            <ListItemButton>
                                <ListItemIcon>
                                    <ConnectWithoutContactIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    SSL
                                </ListItemText>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <Link to="/stock">
                            <ListItemButton>
                                <ListItemIcon>
                                    <LocalGroceryStoreIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    Stock
                                </ListItemText>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <Link to="/tickets">
                            <ListItemButton>
                                <ListItemIcon>
                                    <BugReportIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    Tickets
                                </ListItemText>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <Divider />
                </List>

                {/* To incorporate another list from the bollow of MUI to see the icon position changes */}

            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

            </Box>
        </Box>
    );
};

export default MiniNav;