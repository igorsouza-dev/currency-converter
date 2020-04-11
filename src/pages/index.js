import React, { useEffect } from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import api from '../services/api';
const IndexPage = () => {
  useEffect(() => {
    async function getExchange() {
      const response = await api.get('/latest?base=USD');
      console.log(response.data);
    }
    getExchange();
  }, []);

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hello world</h1>
    </Layout>
  );
};

export default IndexPage;
