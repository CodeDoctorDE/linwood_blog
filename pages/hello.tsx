import Link from 'next/link'
import React from 'react';
import Apps from '../src/Apps';

const IndexPage = () => (
  <div title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
      <p>Apps:</p>
      <Apps />
    </p>
  </div>
)

export default IndexPage