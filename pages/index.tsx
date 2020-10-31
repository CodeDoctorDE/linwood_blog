import { Box, Container, Link, Typography } from "@material-ui/core"
import React from "react"

export default function Index() {
    return (
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Next.js example
          </Typography>
          <Link href="/about" color="secondary">
            Go to the about page
          </Link>
        </Box>
      </Container>
    );
  }
