import React from "react";
import Layout from "../components/layouts/layout"
import SEO from "../components/seo";
import Carousel from '../components/slider/carousel';
import { Button } from 'react-bootstrap';
import "../components/header/header.css";


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

    <div id="feedback">
      <div className="feedback-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <section>
                <h2 className="section-title">
                  <span></span>OUR STATISTICS
              </h2>
              </section>
            </div>
          </div>

          <div className="row facts-items">
            <div className="col-sm-3 col-xs-6 text-center">
              <div className="facts">
                <div className="facts-icon">
                  <i className="fa fa-flag"></i>
                </div>
                <p className="facts-text">Projects Completed</p>
                <h4>100+</h4>
              </div>
            </div>
            <div class="col-sm-3 col-xs-6 text-center">
              <div class="facts">
                <div class="facts-icon">
                  <i class="fa fa-smile-o"></i>
                </div>
                <p class="facts-text">Happy Clients</p>
                <h4>50+</h4>
              </div>
            </div>
            <div class="col-sm-3 col-xs-6 text-center">
              <div class="facts">
                <div class="facts-icon">
                  <i class="fas fa-building"></i>
                </div>
                <p class="facts-text">Overall Offices</p>
                <h4>4</h4>
              </div>
            </div>
            <div class="col-sm-3 col-xs-6 text-center">
              <div class="facts last-child">
                <div class="facts-icon">
                  <i class="fas fa-award"></i>
                </div>
                <p class="facts-text">Anniversary</p>
                <h4>11</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="subscribe">
      <div className="container">
        <div className="row">
          <div class="col-sm-7">
            <section>
              <h4>WISH TO MAKE A CAREER WITH US?</h4>
            </section>
          </div>
          <div class="col-sm-5">
            <div data-form-validation="true">
              <Button className="join_us" variant="light" size="lg" type="submit">JOIN US</Button>
            </div>
          </div>
        </div>
      </div>
    </div>


  </Layout>
)

export default Home