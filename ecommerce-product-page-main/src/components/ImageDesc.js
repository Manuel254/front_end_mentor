import Cart from "./Cart";
import { Typography, Container, Box } from "@mui/material";
import { useStyles } from "../assets/styles";
import React from "react";

const ImageDesc = () => {
  const classes = useStyles();
  return (
    <Container className={classes.imageDesc}>
      <Typography
        variant="h6"
        sx={{
          color: "hsl(26, 100%, 55%)",
          fontWeight: 700,
          fontSize: "13px",
          letterSpacing: "1px",
          mb: 1,
        }}
      >
        SNEAKER COMPANY
      </Typography>
      <Typography variant="h3" sx={{ fontWeight: "bold" }}>
        Fall Limited Edition Sneakers
      </Typography>
      <Typography
        variant="body2"
        color="textSecondary"
        paragraph
        sx={{ mt: 3 }}
      >
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand the weather can
        offer.
      </Typography>

      <Box sx={{ display: "flex" }}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          $125.00
        </Typography>
        <Typography
          variant="body2"
          sx={{
            ml: 2,
            p: 1,
            color: "hsl(26, 100%, 55%)",
            backgroundColor: "hsl(25, 100%, 94%)",
            fontWeight: "bold",
          }}
        >
          50%
        </Typography>
      </Box>
      <Typography
        variant="caption"
        color="textSecondary"
        sx={{ textDecoration: "line-through" }}
      >
        $250.00
      </Typography>
      <Cart />
    </Container>
  );
};

export default ImageDesc;
