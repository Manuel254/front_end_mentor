import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  navLinks: {
    padding: "0 10px",
    fontSize: "14px",
    cursor: "pointer",
    "&:hover": {
      color: "hsl(26, 100%, 55%)",
    },
  },
  cart: {
    cursor: "pointer",
    fontSize: 20,
  },
  cartBtn: {
    textTransform: "capitalize",
    backgroundColor: "hsl(26, 100%, 55%)",
    marginTop: "2rem",
    marginLeft: "1.5rem",
    padding: "1rem 2.5rem",
    "&:hover": {
      backgroundColor: "hsl(26, 100%, 70%)",
    },
    "@media (max-width: 600px)": {
      margin: "1rem 0",
      padding: "10px 30px",
      whiteSpace: "nowrap",
      width: "100%",
    },
  },
  count: {
    "@media(max-width: 600px)": {
      width: "100%",
      display: "flex",
      justifyContent: "space-around",
      marginBottom: "1rem",
    },
  },
  imageDesc: {
    margin: "8rem 0",
  },
  closeBtn: {
    margin: "1rem 1.7rem",
    cursor: "pointer",
  },
  cardImg: {
    borderRadius: "20px",
    margin: "2rem auto",
    objectFit: "contain",
    "@media(max-width: 600px)": {
      margin: "1rem auto -5rem",
    },
  },
  imageThumb: {
    width: "100%",
    height: "105px",
    "@media(max-width: 600px)": {
      display: "none",
    },
  },
  thumb: {
    borderRadius: "20px",
    cursor: "pointer",
    width: "80%",
    "&:hover": {
      opacity: 0.7,
      border: "2px solid hsl(26, 100%, 55%)",
    },
  },
  imgSize: {
    width: "100%",
    borderRadius: "20px",
  },
});
