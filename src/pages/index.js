import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Searcher from '../components/Searcher';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Searcher />
    </Layout>
  );
};

export default IndexPage;
