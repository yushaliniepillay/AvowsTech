import React from "react"
import Layout from "../components/layouts/layout"
import SEO from "../components/seo"
import "../components/header/header.css";
import Carousel from '../components/slider/Management';
import { Breadcrumb, Row, Col } from 'react-bootstrap';

// var imageName = require('../images/our_ceo.jpg')

const AboutUs = () => (


  <Layout>
    <SEO title="ABOUT US" />
    {/* style={{ backgroundImage: `url("../components/images/background/about-bg.jpg")` }} */}
    <div id="pageHeader" >
      {/* <img src="../images/background/about-us.jpg" /> */}
      <div className="vc-parent">
        <div className="vc-child">
          <Breadcrumb>
            <Breadcrumb.Item href="/">HOME</Breadcrumb.Item>
            <Breadcrumb.Item active>ABOUT US</Breadcrumb.Item>
          </Breadcrumb>
          <section className="page-title">
            <Row>
              <Col md={3}> </Col>
              <Col md={6}>
                <h1 className="mb-5">DELIVERING INTELLIGENT AUTOMATION FOR ENTERPRISE</h1>
                <p className="text-center text-white">We provide enterprises with agility by focusing on customer centric journeys
                  to drive their digital transformation initiatives</p>
              </Col>
            </Row>
          </section>
        </div>
      </div>
    </div>

    {/* about us */}
    <div id="about" className="page about--overlay-full">
      <div className="about-page-description">
        <div className="container">
          <div className="vc_column-inner ">
            <div className="wpb_wrapper">
              <div className="vc_empty_space">
                <span class="vc_empty_space_inner"></span>
              </div>
              <div className="heading-title-alt text-center Massive498c7c8e853bb6fdeb29906e3396519d">
                <h2 className="black-color section-title">COMPANY OVERVIEW</h2>
              </div>
              <div className="vc_empty_space" ><span class="vc_empty_space_inner"></span>
              </div>
              <div className="wpb_text_column wpb_content_element ">
                <div className="wpb_wrapper">
                  <p>Avows is a IT services and Solutions company with Our professionals combining innovative thinking with unrivalled industry and domain expertise to offer our clients consulting expertise, complex technology and package integration, transformation delivery, and managed services, to move their organizations forward. Through our collaborative and efficient approach, we help our clients successfully innovate, increase revenue, manage risk and regulatory change, reduce costs, and enhance controls.</p>
                  <p>Founded in 2008, Avows serves global IT companies and the leading software vendors in Communications &amp; Technology, Banking &amp; Financial Services, Insurance, Telecommunications, and Media, Information &amp; Entertainment industries. We build and support applications and platforms for our clients that create competitive advantage and bring true value to the customer.</p>
                </div>
              </div>
              <div className="vc_empty_space" >
                <span class="vc_empty_space_inner"></span>
              </div>
              <div className="vc_empty_space" >
                <span className="vc_empty_space_inner"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Management slide */}
    <div className="about-page-team team-items1">
      <div className="container">
        <h2 className="section-title white">MANAGEMENT TEAM</h2>
        <div>
          <Carousel />
        </div>

      </div>
    </div>

    {/* Ceo speech */}
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-6 about--img">
            <div className="ceo_image"></div>
            {/* <img className="ceo_image" alt="ceo" /> */}
            {/* <img src={imageName} alt="ceo" className="img-responsive" /> */}
          </div>
          <div className="col-md-6 team-skills">
            <h2 className="section-title text-left">OUR CEO'S MESSAGE</h2>
            <div className="about-description">
              <p className="justified">
                Our number one commitment since inception has been to delight customers by bringing in the right solutions at the right time,
                while maintaining the quality of service. The one trait in common among Avowsians is passion. Passion for technology,  passion for
                our customers, passion to be the best in everything that we do.</p><br /><br />
              <p className="justified">
                Everyday, we strive to deliver value to our customers, investing
                the time to understand their operational and business issues. We create some of the best solutions available and our dedicated team
                ensures customer needs are well managed. With a pipeline of innovative products and solutions waiting to be launched, we have our
                eyes set on achieving larger goals.</p><br /><br />
              <p className="justified">
                I am excited about the future at Avows Technologies, the people, the products, the passion.
                Come let’s make vision into reality.</p>
              <br /><br /><br />
              <h6 className="text-center">- MR. ASHOK K RAMAVATH - <br />  FOUNDER &amp; GROUP CEO</h6>
            </div>
          </div>
        </div>
      </div>
    </div>

  </Layout>
)

export default AboutUs;