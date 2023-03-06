import { useContext } from "react";
import { Grid, IconButton, Typography, Box, Button } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useStyles } from "../assets/styles";
import { CartContext } from "./CartContext";

const Cart = () => {
  const classes = useStyles();
  const [count, setCount] = useContext(CartContext);

  return (
    <Grid container>
      <Box
        sx={{
          backgroundColor: "hsl(223, 64%, 98%)",
          display: "flex",
          alignItems: "center",
          mt: 3,
        }}
        className={classes.count}
      >
        <Grid item>
          <IconButton sx={{ color: "hsl(26, 100%, 55%)" }} align="center">
            <RemoveIcon onClick={() => setCount(count - 1)} />
          </IconButton>
        </Grid>
        <Grid item>
          <Typography
            variant="caption"
            sx={{ pt: 20, margin: "0 10px", fontWeight: "bold" }}
          >
            {count}
          </Typography>
        </Grid>
        <Grid item>
          <IconButton sx={{ color: "hsl(26, 100%, 55%)" }}>
            <AddIcon onClick={() => setCount(count + 1)} />
          </IconButton>
        </Grid>
      </Box>
      <Grid
        item
        sx={{ "@media(max-width: 600px)": { diplay: "block", width: "100%" } }}
      >
        <Button
          className={classes.cartBtn}
          variant="contained"
          startIcon={<ShoppingCartIcon sx={{ mr: 1 }} />}
        >
          Add to cart
        </Button>
      </Grid>
    </Grid>
  );
};

export default Cart;
