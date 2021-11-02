import { AppBar, Toolbar, MenuItem, Badge, Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useHistory } from "react-router";
import { FaShoppingCart } from "react-icons/fa";
import { MdLogout, MdLogin } from "react-icons/md";
import { CardModal } from "../CardModal";
import { useState } from "react";
import { useAuth } from "../../providers/auth";
import { useCart } from "../../providers/cart";

const useStyles = makeStyles(() => ({
  appbar: {
    backgroundColor: "var(--gray-scale-0)",
    fontFamily: "var(--main-font)",
    minHeight: "80px",
    color: "var(--gray-scale-100)",
  },
  toolbar: {
    minHeight: "80px",
  },
  title: {
    fontSize: "22px",
    color: "var(--gray-scale-600)",
    fontWeight: "bold",
    position: "fixed",
    left: "10px",
  },
  span: {
    color: "var(--color-secondary)",
    fontSize: "17px",
  },
  itemlogin: {
    fontSize: "25px",
    color: "var(--gray-scale-300)",
    lineHeight: "1",
    height: "25px",
    position: "fixed",
    left: "160px",
  },
  itemcart: {
    fontSize: "25px",
    color: "var(--gray-scale-300)",
    lineHeight: "1",
    height: "60px",
    position: "fixed",
    right: "45px",

    "@media (min-width: 1024px)": { fontSize: "25px" },
  },
  itemlogout: {
    fontSize: "25px",
    color: "var(--gray-scale-300)",
    lineHeight: "1",
    height: "25px",
    position: "fixed",
    right: "2px",
  },
}));

export const NavBar = () => {
  const classes = useStyles();

  const history = useHistory();

  const sendTo = (path: string) => {
    history.push(path);
  };

  const [open, setOpen] = useState(false);

  const handleClickOpenDescrip = () => {
    setOpen(true);
  };

  const handleClickCloseDescrip = () => {
    setOpen(false);
  };

  const { Logout } = useAuth();

  const handleSubmitLogin = () => {
    Logout(history);
  };

  const { cart } = useCart();

  return (
    <>
      <AppBar className={classes.appbar} position="fixed">
        <Toolbar className={classes.toolbar}>
          <MenuItem className={classes.title} onClick={() => sendTo("/")}>
            Burguer<span className={classes.span}>Kenzie</span>
          </MenuItem>
          <MenuItem
            className={classes.itemlogin}
            onClick={() => sendTo("/login")}
          >
            <MdLogin />
          </MenuItem>
          <MenuItem
            className={classes.itemcart}
            onClick={handleClickOpenDescrip}
          >
            <Badge
              badgeContent={
                cart && cart.reduce((acc, item) => acc + item.quantity, 0)
              }
              color="secondary"
            >
              <FaShoppingCart />
            </Badge>
          </MenuItem>
          <MenuItem
            className={classes.itemlogout}
            onClick={() => handleSubmitLogin()}
          >
            <MdLogout />
          </MenuItem>
        </Toolbar>
      </AppBar>
      <Modal open={open} onClose={handleClickCloseDescrip}>
        <CardModal />
      </Modal>
      <Toolbar />
    </>
  );
};
