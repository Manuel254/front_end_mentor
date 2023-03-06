import { Grid, Container } from "@mui/material";
import Navbar from "./components/Navbar";
import Image from "./components/Image";
import ImageDesc from "./components/ImageDesc";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "typeface-kumbh-sans";
import { CartProvider } from "./components/CartContext";

const theme = createTheme({
  typography: {
    fontFamily: ["Kumbh Sans", "sans-serif"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <CartProvider>
          <Navbar />
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Image />
              </Grid>
              <Grid item xs={12} md={6}>
                <ImageDesc />
              </Grid>
            </Grid>
          </Container>
        </CartProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
