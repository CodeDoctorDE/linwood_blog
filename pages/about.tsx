import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Link from '../src/Link';

export default function About() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
        </Typography>
        <Button {...{component: Link, href:"/about", naked: true}} color="default" variant="contained">About</Button>

        <Link href="/" color="secondary">Go to the main page</Link>
      </Box>
    </Container>
  );
}