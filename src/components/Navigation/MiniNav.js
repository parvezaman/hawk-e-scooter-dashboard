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
import { makeStyles } from '@mui/styles';
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

    const useStyles = makeStyles({
        navTextDesign: {
            textDecoration: 'none !important',
            color: '#000'
        },
        navLinkDesign: {
            textDecoration: 'none'
        },
        listItemStyle: {
            marginLeft: '-3 !important'
        }
    })

    const { navTextDesign, navLinkDesign, listItemStyle } = useStyles();

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
                    <ListItem sx={{ marginLeft: -3 }}>
                        <Link to="/" className={navLinkDesign}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText className={navTextDesign}>
                                    Dashboard Home
                                </ListItemText>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <Divider />
                    <ListItem sx={{ marginLeft: -3 }}>
                        <Link to="/coupon" className={navLinkDesign}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <DiscountIcon />
                                </ListItemIcon>
                                <ListItemText className={navTextDesign}>
                                    Coupon
                                </ListItemText>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <Divider />
                    <ListItem sx={{ marginLeft: -3 }}>
                        <Link to="/customerdata" className={navLinkDesign}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <PeopleIcon />
                                </ListItemIcon>
                                <ListItemText className={navTextDesign}>
                                    Customer Data
                                </ListItemText>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <Divider />
                    <ListItem sx={{ marginLeft: -3 }}>
                        <Link to="/customerwallet" className={navLinkDesign}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <AccountBalanceWalletIcon />
                                </ListItemIcon>
                                <ListItemText className={navTextDesign}>
                                    Customer Wallet
                                </ListItemText>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <Divider />
                    <ListItem sx={{ marginLeft: -3 }}>
                        <Link to="/messaging" className={navLinkDesign}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <MailOutlineIcon />
                                </ListItemIcon>
                                <ListItemText className={navTextDesign}>
                                    Messages
                                </ListItemText>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <Divider />
                    <ListItem sx={{ marginLeft: -3 }}>
                        <Link to="/packages" className={navLinkDesign}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <InventoryIcon />
                                </ListItemIcon>
                                <ListItemText className={navTextDesign}>
                                    Packages
                                </ListItemText>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <Divider />
                    <ListItem sx={{ marginLeft: -3 }}>
                        <Link to="/payment" className={navLinkDesign}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <PaidIcon />
                                </ListItemIcon>
                                <ListItemText className={navTextDesign}>
                                    Payment
                                </ListItemText>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <Divider />
                    <ListItem sx={{ marginLeft: -3 }}>
                        <Link to="/productcategory" className={navLinkDesign}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <CategoryIcon />
                                </ListItemIcon>
                                <ListItemText className={navTextDesign}>
                                    Product Category
                                </ListItemText>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <Divider />
                    <ListItem sx={{ marginLeft: -3 }}>
                        <Link to="/report" className={navLinkDesign}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ReportIcon />
                                </ListItemIcon>
                                <ListItemText className={navTextDesign}>
                                    Report
                                </ListItemText>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <Divider />
                    <ListItem sx={{ marginLeft: -3 }}>
                        <Link to="/selldashboard" className={navLinkDesign}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <StorefrontIcon />
                                </ListItemIcon>
                                <ListItemText className={navTextDesign}>
                                    Sells Dashboard
                                </ListItemText>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <Divider />
                    <ListItem sx={{ marginLeft: -3 }}>
                        <Link to="/ssl" className={navLinkDesign}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ConnectWithoutContactIcon />
                                </ListItemIcon>
                                <ListItemText className={navTextDesign}>
                                    SSL
                                </ListItemText>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <Divider />
                    <ListItem sx={{ marginLeft: -3 }}>
                        <Link to="/stock" className={navLinkDesign}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <LocalGroceryStoreIcon />
                                </ListItemIcon>
                                <ListItemText className={navTextDesign}>
                                    Stock
                                </ListItemText>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <Divider />
                    <ListItem sx={{ marginLeft: -3 }}>
                        <Link to="/tickets" className={navLinkDesign}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <BugReportIcon />
                                </ListItemIcon>
                                <ListItemText className={navTextDesign}>
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