import { Container, makeStyles } from '@material-ui/core';
import React, { ReactNode } from 'react'

interface Props {
    left?: ReactNode
}
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper
    },
    content: {
        padding: theme.spacing(8, 0, 6)
    }
}));

export default function Hero(props: React.PropsWithChildren<Props>){
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div>
                {props.left}
            </div>
            <Container className={classes.content} maxWidth="sm">
                <div>
                    { props.children }
                </div>
            </Container>
        </div>
    )
}
