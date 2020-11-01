import { createStyles, makeStyles, Typography } from "@material-ui/core"
import React from "react"
import Apps from "../src/Apps";
import Footer from "../src/Footer";
import Hero from "../src/Hero";

const useStyles = makeStyles(() =>
  createStyles({
    media: {
      maxWidth: '100%'
    }
  }),
);
export default function Index() {
  const classes = useStyles();
  return (
    <div>
      <Hero nav={<Apps />}>
      <iframe className={classes.media} width="560" height="315" src="https://www.youtube.com/embed/m1mac2d19Fo?controls=0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Linwood
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Communication on every platform
        </Typography>
      </Hero>
      <Footer />
    </div>
  );
}
