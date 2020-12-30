import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layouts/layout"
import SEO from "../../components/seo";
import { Tabs, Tab, Container, Row, Col, Figure } from 'react-bootstrap';
import ReactPlayer from 'react-player/lazy'


const Energy = () => {

    var dashboard1 = require("../industries/InImage/dashboard1.jpg");
    var dashboard2 = require("../industries/InImage/dashboard2.jpg");

    return (
        <Layout>
            <SEO title="AVOWS" />

            <div id="pageHeader" >
                <div className="vc-parent">
                    <div className="vc-child">
                        <section className="page-title">
                            <h2>OILS AND GAS</h2>
                            <ul className="text-center">
                                <li className="list-unstyled text-danger">
                                    <Link className="text-white" href="/">Home /</Link> Oil and Gas</li>
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
                            <Tabs defaultActiveKey="BI" transition={false} id="noanim-tab-example">
                                <Tab eventKey="BI" title="BI Dashboard Development">
                                    <h3><strong>BI Dashboard Development</strong></h3>
                                    <Figure style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                                        <Figure.Image
                                            width={300}
                                            height={500}
                                            src={dashboard1}
                                        />
                                        <Figure.Image
                                            width={300}
                                            height={500}
                                            src={dashboard1}
                                        />
                                    </Figure>
                                    <section>
                                        <h3 className="text-primary">About the Client</h3>
                                        <p class="p1 text-justify">The client is an integrated oil and gas services company based in Malaysia. It has established its presence in over 20 countries, such as China, Australia, United States of America, and those in Western Africa and the Middle East, employing approximately 22,000 people.
                                        </p>
                                    </section>
                                    <section>
                                        <h3 className="text-primary">Challenge</h3>
                                        <p class="p1 text-justify">
                                            Clients data resided in different disparate systems and lacked consistencies in bringing them together for any C level executive analysis. This resulted a very tedious exercise and took several days to achieve, hence there was an immediate need to bring data together with advanced analytics and visualization techniques to enable more insights at a faster rate and eventually enable better decision making.
                                        </p>
                                    </section>
                                    <section>
                                        <h3 className="text-primary">Solution</h3>
                                        <p class="p1 text-justify">Avows partnered with the client to understand the client’s organization data sets and the
                                        different systems along with data storage access points etc. to arrive at the complete blue print for organizational data from its creating to where it was residing. We then created a solution to bring all data together for analytics and process several other information for advanced dashboards for c level executives based on discussions and business requirements.
                                        </p>
                                        <p class="p1 text-justify">
                                            The solution was able to bring several benefits within a short time.
                                    </p>
                                    </section>
                                    <section>
                                        <h3 className="text-primary">Benefits</h3>
                                        <ul>
                                            <li>Gain a seamless environment that includes data visualization and analytics integrated with communication tools, and specialized business applications</li>
                                            <li>Capitalize on customers’ existing Microsoft technology to accelerate progress toward the next innovation in data analytics</li>
                                            <li>The customer has successfully migrated more than 46 metrics from 4 critical datasets from excel sheet into the SAP BW Platform for their daily, weekly and monthly reporting empowered by our design principles on Power BI platform</li>
                                            <li>And empowered the analytics and business intelligence teams, formerly dependent on IT or support teams, to create and prepare the data themselves.</li>
                                            <li>Direct business and executive committee to access the data. The data which took 6 days for tabulation is now available for C level reporting on the day of request.</li>
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

export default Energy