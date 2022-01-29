import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import EmailIcon from '@mui/icons-material/Email';
import ListSubheader from '@mui/material/ListSubheader';
import GitHubIcon from '@mui/icons-material/GitHub';
import MapIcon from '@mui/icons-material/Map';
import HomeIcon from '@mui/icons-material/Home';
import BackpackIcon from '@mui/icons-material/Backpack';
import ForumIcon from '@mui/icons-material/Forum';
import WebIcon from '@mui/icons-material/Web';
import ArticleIcon from '@mui/icons-material/Article';


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

type Props = {
  children: React.ReactNode;
}

const Navigator = ({ children }: Props) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setOpen(!open);
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
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Link href={process.env.PUBLIC_URL} color="inherit" underline="none" variant="h6" noWrap component="a">
            WSAN Computing
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <HomeList />
        <Divider />
        <MemberList />
        <Divider />
        <BasicList />
        <Divider />
        <DayDreamList />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <div>{children}</div>
      </Main>
    </Box>
  );
}

function HomeList() {
  return (
    <>
      <List>
        <ListItemButton component="a" href="https://github.com/wsan-computing">
          <ListItemIcon>
            <GitHubIcon />
          </ListItemIcon>
          <ListItemText primary="GitHub" />
        </ListItemButton>
        <ListItemButton component="a" href="mailto:wsan.inc@gmail.com">
          <ListItemIcon>
            <EmailIcon />
          </ListItemIcon>
          <ListItemText primary="Contact Us" />
        </ListItemButton>
      </List>
    </>
  );
}


function MemberList() {
  return (
    <>
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href={process.env.PUBLIC_URL + "/members/wsan"}>
            <ListItemIcon>
              <ArticleIcon />
            </ListItemIcon>
            <ListItemText primary="CEO Wsan" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href={process.env.PUBLIC_URL + "/members/shirashoji"}>
            <ListItemIcon>
              <ArticleIcon />
            </ListItemIcon>
            <ListItemText primary="Shirashoji" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href={process.env.PUBLIC_URL + "/members/Miyazawa"}>
            <ListItemIcon>
              <ArticleIcon />
            </ListItemIcon>
            <ListItemText primary="Miyazawa" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href={process.env.PUBLIC_URL + "/members/Chutoro_Detteiu"}>
            <ListItemIcon>
              <ArticleIcon />
            </ListItemIcon>
            <ListItemText primary="Chutoro_Detteiu" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href={process.env.PUBLIC_URL + "/members/Traveler__"}>
            <ListItemIcon>
              <ArticleIcon />
            </ListItemIcon>
            <ListItemText primary="Traveler__" />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );
}


function BasicList() {
  return (
    <>
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href={process.env.PUBLIC_URL + "/pageA"}>
            <ListItemIcon>
              <ArticleIcon />
            </ListItemIcon>
            <ListItemText primary="PageA" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href={process.env.PUBLIC_URL + "/pageB"}>
            <ListItemIcon>
              <ArticleIcon />
            </ListItemIcon>
            <ListItemText primary="PageB" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href={process.env.PUBLIC_URL + "/Images"}>
            <ListItemIcon>
              <ArticleIcon />
            </ListItemIcon>
            <ListItemText primary="Images" />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );
}

function DayDreamList() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Minecraft Server
        </ListSubheader>
      }
    >
      <ListItemButton component="a" href="https://www.daydream.mydns.jp/index.php">
        <ListItemIcon>
          <WebIcon />
        </ListItemIcon>
        <ListItemText primary="WebSite" />
      </ListItemButton>
      <ListItemButton component="a" href="https://discord.gg/H5DjHWVDmq">
        <ListItemIcon>
          <ForumIcon />
        </ListItemIcon>
        <ListItemText primary="Discord" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <MapIcon />
        </ListItemIcon>
        <ListItemText primary="Maps" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} component="a" href="https://maps.daydream.mydns.jp/Main/">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Main" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} component="a" href="https://maps.daydream.mydns.jp/Materials/">
            <ListItemIcon>
              <BackpackIcon />
            </ListItemIcon>
            <ListItemText primary="Materials" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}



export default Navigator;