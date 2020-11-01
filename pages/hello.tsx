import Link from 'next/link'
import React from 'react';
import Apps from '../components/Apps';
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
      <p>Apps:</p>
      <Apps />
    </p>
  </Layout>
)

export default IndexPage