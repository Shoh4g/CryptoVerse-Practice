import { Container, makeStyles, Typography } from "@material-ui/core";
import Carousel from "./Carousel";
import Background from "./ss.gif";

const useStyles = makeStyles((theme) => ({
  banner: {
    backgroundImage: `url(${Background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  bannerContent: {
    height: 300,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
  carousel: {
    height: "50%",
    display: "flex",
    alignItems: "center",
  },
}));

function Banner() {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
              color: "white",
              fontSize: "40px",
            }}
          >
            Crypto Verse
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "white",
              fontWeight: "bold",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
              fontSize: "30px",
            }}
          >
            A highly interactive virtual platform to get data about
            cryptocurrencies.
            <br /> Click on the currencies to be redirected to their respective
            page.
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
}

export default Banner;
