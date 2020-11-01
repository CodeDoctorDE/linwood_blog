import { Typography } from "@material-ui/core"
import React from "react"
import Hero from "../src/Hero";
import Link from '../src/Link'

export default function Index() {
  return (
    <Hero>
      <Typography variant="h4" component="h1" gutterBottom>
        Next.js example
      </Typography>
      <Link href="/about" color="secondary">
        Go to the about page
      </Link>
    </Hero>
  );
}
