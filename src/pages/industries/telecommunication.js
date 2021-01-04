import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layouts/layout"
import SEO from "../../components/seo";
import { Tabs, Tab, Container, Row, Col, Figure } from 'react-bootstrap';
import ReactPlayer from 'react-player/lazy'


const Telecommunication = () => {
    var tele1 = require("../industries/InImage/mobile1.png");
    var tele2 = require("../industries/InImage/mobile3.jpg");
    var tele3 = require("../industries/InImage/mobile4.jpg");



    return (
        <Layout>
            <SEO title="AVOWS" />
            <div id="pageHeader" >
                <div className="vc-parent">
                    <div className="vc-child">
                        <section className="page-title">
                            <h2>TELECOMMUNICATION</h2>
                            <ul className="text-center">
                                <li className="list-unstyled text-danger">
                                    <Link className="text-white" href="/">Home / </Link> Telecommunication</li>
                                {/* <li className="list-unstyled active">Blog</li> */}
                            </ul>
                        </section>
                    </div>
                </div>
            </div>

            <div id="blog">
                <div className="container">
                    <div className="row">
                        {/* <div class="post-img">
                            <img src="/img/blog-posts/blog00.jpg" alt="" class="img-responsive" />
                        </div> */}
                        <br />
                        <div className="wpb_wrapper">
                            <p class="justified">
                            </p>

                        </div>

                        <div>
                            <br />
                            <h2>Case Studies</h2>
                            <Tabs defaultActiveKey="Mobile" transition={false} id="noanim-tab-example">
                                <Tab eventKey="Mobile" title="Self- Care Mobile App Development">
                                    <br />
                                    <h3><strong>Self- Care Mobile App Development</strong></h3>
                                    <Figure style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                                        <Figure.Image
                                            width={300}
                                            height={500}
                                            src={tele1}
                                        />
                                        <Figure.Image
                                            width={300}
                                            height={500}
                                            src={tele2}
                                        />
                                        <Figure.Image
                                            width={300}
                                            height={500}
                                            src={tele3}
                                        />
                                    </Figure>
                                    <section>
                                        <h3 className="text-primary">About the Client</h3>
                                        <p class="p1 text-justify">The client is a data-centric and multiple award-winning mobile
                                        data service company in Malaysia. They have established their presence in all over the country
                                        with a subscriber base of 7 million mark. It has been an award-winning telco with affordable plans
                                        and a comprehensive fintech ecosystem.
                                    </p>
                                    </section>
                                    <section>
                                        <h3 className="text-primary">Challenges</h3>
                                        <p class="p1 text-justify">
                                            The client wanted to bring unified experience across all platforms and reduce manpower involved
                                            along with simplified processes. Their Digital channels were not providing much support to their
                                            overall sales and marketing efforts.
                                    </p>
                                    </section>
                                    <section>
                                        <h3 className="text-primary">Solution</h3>
                                        <p class="p1 text-justify">
                                            Avows has created a secure mobile application which was deployed for end consumers as their one stop
                                            destination for all user related information, activations, recharges, plan upgrades, utilization details,
                                            along with digital wallet. The mobile application can also be used for marketing efforts such as running
                                            consumer campaigns, communicate plans and offers to customers and many more. A content management system
                                            was created for the clients end use and provided cost optimization through cloud hosting and accessibility.
                                            The application was created through a secure use channel and it also allows the organization to feature great
                                            branding opportunity which is seen as a modern digital savvy service provider true to consumers choice.
                                    </p>
                                        <p class="p1 text-justify">
                                            Some technical details of our solution encompass:
                                    </p>
                                        <ul>
                                            <li>Development on React-Native Platform</li>
                                            <li>Cloud Deployment on Google</li>
                                            <li>Mini ESB Built for seamless Integration</li>
                                            <li>Custom CMS (Content Management System)</li>
                                            <li>Seamless Connectivity (On prem to Cloud)</li>
                                            <li>Digital Wallet Implementation & E-KYC</li>
                                        </ul>
                                    </section>
                                    <section>
                                        <image />
                                        <h3 className="text-primary">Benefits</h3>
                                        <p class="p1 text-justify">
                                            Through the mobile application, the client was able to realize much better customer
                                            service and was able to be a true digital service provider in a digital world.
                                    </p>
                                        <ul>
                                            <li>The client experienced a year-on-year increase of revenue by 15%</li>
                                            <li>Cost Optimization - Cloud Infrastructure & On-Demand Scalability</li>
                                            <li>Enhanced Customer Experience – Ease of use among the Millennials and other age groups</li>
                                        </ul>
                                    </section>
                                    {/* <section>
                                        <h3 className="text-primary">Customer Testimonial</h3>
                                        <Container>
                                            <Row>
                                                <Col md={6}>
                                                    <ReactPlayer url={}
                                                        width='100%'
                                                        height='100%' />
                                                </Col>
                                                <Col md={{ span: 3, offset: 1 }}>
                                                    <p>Speaking</p>
                                                </Col>
                                            </Row>
                                        </Container>
                                        <p>name</p>
                                        <p>title</p>
                                    </section> */}
                                </Tab>

                            </Tabs>
                        </div>

                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default Telecommunication