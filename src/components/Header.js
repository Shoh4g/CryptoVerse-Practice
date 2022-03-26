import { AppBar, Container, makeStyles, Toolbar } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Background from "./pp.png";

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});

const useStyles = makeStyles((theme) => ({
  banner: {
    backgroundImage: `url(${Background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <ThemeProvider theme={darkTheme}>
        <AppBar color="transparent" position="static">
          <Container>
            <Toolbar
              style={{
                width: 150,
                height: 280,
                marginLeft: 15,
                color: "gold",
              }}
            ></Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </div>
  );
}

export default Header;
