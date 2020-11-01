import { createStyles, Grid, makeStyles, Paper, Theme, Typography } from '@material-ui/core'
import React, { ReactElement } from 'react'
import Link from './Link';

interface Props {
    
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        margin: 0,
        padding: theme.spacing(5, 0),
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
    container: {
        margin: 0,
        width: '100%'
    }
  }),
);

export default function Footer({}: Props): ReactElement {
    const classes = useStyles();
    return (
        <div className={classes.root}>
          <Grid container spacing={3} className={classes.container}>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
        	    <Typography>Links</Typography>
                <ul>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="https://codedoctor.tk/impress" target="_blank">Impress</Link></li>
                <li><Link href="https://codedoctor.tk/privacy" target="_blank">Privacy</Link></li>
                </ul>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>xs=6 sm=3</Paper>
            </Grid>
          </Grid>
        </div>
    )
}
