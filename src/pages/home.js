import React from "react";
import Layout from "../components/layouts/layout"
import SEO from "../components/seo";
import Carousel from '../components/slider/carousel';
import { Button } from 'react-bootstrap';

const Home = () => (
  <Layout>
    <SEO title="Home" />
    <Carousel />

    <div className="our-mv">
      <div className="button-mv">
        <Button variant="light" size="lg" type="submit" >Our Mission</Button>
        <Button className="m-3" variant="light" size="lg" type="submit" >Our Vission</Button>
        <br></br>
      </div>
      <article >
        <p> </p>
        <h3>We have a great Mission</h3>
        <p>"To be Recognized as <br />the “Preferred Technology Partner of Choice” by all Customers”</p>
      </article>
      <article >
        <p> </p>
        <h3>We have a one focused Vision</h3>
        <p>“To become long term partners-in progress of our customers to enable their Business Transformation by providing a range of <br />
        Services & Solutions that deliver Value-For-Money and enhance competitiveness and provides them a opportunity to <br />
        position themselves best price-performers of choice in their industries” </p>
      </article>
    </div>
    <div className="main-statistics">

    </div>
    <div className="carrer">
      <h3>WISH TO MAKE A CAREER WITH US?</h3>
      <Button className="m-3" variant="light" size="lg" type="submit">JOIN US</Button>
    </div>

  </Layout>
)

export default Home