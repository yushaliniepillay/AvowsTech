import React from "react";
import Layout from "../components/layouts/layout"
import SEO from "../components/seo";
import Carousel from '../components/slider/carousel';

const Home = () => (
  <Layout>
    <SEO title="Home" />
    <Carousel />
    <h1>Home</h1>

  </Layout>
)

export default Home