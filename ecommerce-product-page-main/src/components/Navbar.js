import { useState, useEffect, useContext } from "react";
import {
  AppBar,
  Avatar,
  Toolbar,
  Typography,
  Box,
  Container,
  Menu,
  MenuItem,
  IconButton,
  Drawer,
  Badge,
} from "@mui/material";
import { ReactComponent as Logo } from "../images/logo.svg";
import avatar from "../images/image-avatar.png";
import { ReactComponent as Cart } from "../images/icon-cart.svg";
import { useStyles } from "../assets/styles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { CartContext } from "./CartContext";

const pages = ["Collections", "Men", "Women", "About", "Contact"];

const Navbar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [count, setCount] = useContext(CartContext);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar>
        <Container
          sx={{
            display: "flex",
            borderBottom: 1,
            borderColor: "hsl(223, 64%, 98%)",
            mt: 3,
          }}
        >
          <Logo />
          <Box sx={{ display: "flex", flexGrow: 1, ml: 2 }}>
            {pages.map((page) => (
              <Typography className={classes.navLinks} color="textSecondary">
                {page}
              </Typography>
            ))}
          </Box>
          <Box sx={{ mr: 2 }}>
            <Badge badgeContent={count} color="error">
              <Cart
                className={classes.cart}
                id="cart-display"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              />
            </Badge>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "cart-display",
              }}
              sx={{ mt: 3 }}
            >
              <MenuItem
                onClick={handleClose}
                sx={{ borderBottom: 1, borderColor: "hsl(223, 64%, 98%)" }}
              >
                Cart
              </MenuItem>
              <MenuItem>
                <Container>
                  <Typography sx={{ m: 10 }} color="textSecondary">
                    Your cart is empty
                  </Typography>
                </Container>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ mb: 2, ml: 1 }}>
            <Avatar src={avatar} sx={{ width: 25, height: 25 }}></Avatar>
          </Box>
        </Container>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));

    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    const getDrawerChoices = () => {
      return (
        <Container>
          <CloseIcon
            className={classes.closeBtn}
            onClick={() => handleDrawerClose()}
          />
          {pages.map((page) => (
            <Typography
              className={classes.navLinks}
              color="textSecondary"
              sx={{ m: 2, p: 1 }}
            >
              {page}
            </Typography>
          ))}
        </Container>
      );
    };

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ display: "flex", flexGrow: 1, ml: 2 }}>
          <Logo />
        </Box>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div>{getDrawerChoices()}</div>
        </Drawer>

        <Box sx={{ mr: 2 }}>
          <Badge badgeContent={count} color="error">
            <Cart
              className={classes.cart}
              id="cart-display"
              aria-controls="basic-menu"
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            />
          </Badge>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "cart-display",
            }}
            sx={{ mt: 3 }}
          >
            <MenuItem
              onClick={handleClose}
              sx={{ borderBottom: 1, borderColor: "hsl(223, 64%, 98%)" }}
            >
              Cart
            </MenuItem>
            <MenuItem>
              <Container>
                <Typography sx={{ m: 8 }} color="textSecondary">
                  Your cart is empty
                </Typography>
              </Container>
            </MenuItem>
          </Menu>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Avatar src={avatar} sx={{ width: 30, height: 30, mt: 2 }}></Avatar>
        </Box>
      </Toolbar>
    );
  };

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      {mobileView ? displayMobile() : displayDesktop()}
    </AppBar>
  );
};

export default Navbar;
