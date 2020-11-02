import { Container, createStyles, Grid, makeStyles, Paper, SvgIcon, Typography, Theme } from '@material-ui/core';
import React from "react"
import { Fade, Zoom } from "react-awesome-reveal";
import Apps from "../src/Apps";
import Footer from "../src/Footer";
import Hero from "../src/Hero";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    media: {
      maxWidth: '100%'
    },
    section: {
      padding: theme.spacing(24, 0)
    },
    root: {
      overflowX: "hidden"
    }
  })
);
export default function Index() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Hero nav={<Fade direction="left"><Apps /></Fade>}>
        <Fade direction="down">
          <iframe className={classes.media} width="560" height="315" src="https://www.youtube.com/embed/m1mac2d19Fo?controls=0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Fade>
        <Fade direction="up">
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Linwood
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Communication on every platform
        </Typography>
        </Fade>
      </Hero>
      <Fade direction="left">
        <Paper className={classes.section}>
          <Container maxWidth="sm">
            <Typography variant="h6" color="textSecondary">
              It's
            </Typography>
            <Typography variant="h3">
              Open source
            </Typography>
            <Typography paragraph>
              The bot and the app are opensource. You can look in the code if you want to see what's inside.
            </Typography>
          </Container>
        </Paper>
      </Fade>
      <Fade direction="right">
        <Paper className={classes.section}>
          <Container maxWidth="sm">
            <Typography variant="h6" color="textSecondary">
              It's
            </Typography>
            <Typography variant="h3">
              Cross platform
            </Typography>
            <Typography paragraph>
              The bot and the app are opensource. You can look in the code if you want to see what's inside.
            </Typography>
          </Container>
        </Paper>
      </Fade>
      <Fade direction="left">
        <Paper className={classes.section}>
          <Container maxWidth="sm">
            <Typography variant="h6" color="textSecondary">
              It's
            </Typography>
            <Typography variant="h3">
              Everything you need
            </Typography>
            <Typography paragraph>
              The bot has everything what you need.
            </Typography>
          </Container>
        </Paper>
      </Fade>
      <Zoom>
      <Footer />
      </Zoom>
    </div>
  );
}
