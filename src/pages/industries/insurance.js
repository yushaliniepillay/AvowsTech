import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layouts/layout"
import SEO from "../../components/seo";
import { Tabs, Tab, Container, Row, Col, Figure } from 'react-bootstrap';
import ReactPlayer from 'react-player/lazy'

const Insurance = () => {

    //var v = require('../industries/video/PublicBank.mp4')
    var sales1 = require("../industries/InImage/Sales1.jpg");
    var sales2 = require("../industries/InImage/Sales2.jpg")
    var sales3 = require("../industries/InImage/Sales3.jpg")

    const data =
        [
            {
                id: 0,
                key: "SDD",
                title: "Sales and Distribution Dashboard",
                about: "Client is an insurance firm with operations in Malaysia. The Client offers life, investment-linked, group scheme, retirement, savings, and healthcare insurance services in Malaysia.",
                challenge: [
                    "Client had on centralized sales dashboard and the mid-senior management were missing standardized sales data across the organization to compare and analyse. This led to delay in understanding changing in market dynamics, they were looking for a system to bring out standard data making it easier to identify changing forces on the ground and take quick steps to align themselves with these dynamics."
                ],
                solution: [
                    "Avows created a native mobile application available both for android and iOS for sales reports and dashboards which were available based on access. We brought together data from different places and after careful discussions with business finalized parameters and metrics that were to be reported at different levels. Through this sales report were made available at immediate access in real time to authorized associates, these reports were classified based on product types, categories, regions, channel and several other details.",
                    "Some technical details of our solutions:",
                    "Implementation of ETL : Pentaho",
                    "Data Warehouse MS SQL",
                    "BI/Dashboard Pentaho",
                    "Native Mobile App"
                ],
                benefit: [
                    "Sales management had access to more transparent data in real time which allowed them to manage their teams closely",
                    "Quick Decision by Sales Leaders to drive 3X sales productivity"
                ],
                image: [
                    require('../industries/InImage/Sales1.jpg'),
                    require('../industries/InImage/Sales2.jpg'),
                    require('../industries/InImage/Sales3.jpg')
                ],
                video: [
                    //require('../industries/video/PublicBank.mp4'),
                    // "",
                    // "",
                    // ""
                ]

            },
            {
                id: 1,
                key: "CC",
                title: "Conversational ChatBot",
                about: "Customer is a large Insurance Services provider in Malaysia providing both general and family Insurance in Malaysia and is currently one of the leading insurance providers in Malaysia.",
                challenge: [
                    "Customers are looking at creating a strong brand awareness through better customer experience by using automation and chatbots to reduce their response times. This will also help to provide faster and easier end users resolution. They have identified customer service as an area of opportunity and partnered with Avows to implement innovative solutions to achieve operational excellence."
                ],
                solution: [
                    "We implemented a conversational Chatbot which could assist their consumers in gathering information related to their insurance policies or other product related information immediately through the Chatbot. The Chatbot was deployed in English and local Bahasa Melayu languages to create a further impact in resolving the issues with linguistic convenience as well. Our Chatbot solution is a comprehensive solution which can cater to client’s marketing, sales, lead capture, customer services as well as help customers raise tickets quickly without any hassle. The Chatbot can also be used internally within organizations for IT services, HR services etc.",
                    "Chatbot is built with the help of leading technologies and has been built with models that allow it to learn and improve as it goes by. Use of Natural Language Processing (NLP) techniques along with AI ML allows the bot to remain personalized and human so that end consumers get a more personalized feeling when implemented in an auto mode. It can also be deployed in assist mode, where actual customer service representatives can use Chatbot, these are faster to respond and provide easy and quick summary for reference at all times leading to good understanding and quicker resolution and response times."
                ],
                benefit: [
                    "Customers are able to overall enhance service levels for their customer services by 33%",
                    "2X growth in Lead Funnel along with much more structured data collection on the leads",
                    "80% of the projected traffic went started flowing through the chatbot in a very short time"
                ],
                image: [
                    // require('../industries/InImage/AML1.jpg'),
                    // require('../industries/InImage/AML2.jpg')
                ],
                video: [
                    //require('../industries/video/PublicBank.mp4'),
                    // "",
                    // "",
                    // ""
                ]

            }
        ]

    return (

        <Layout>
            <SEO title="AVOWS" />

            <div id="pageHeader" >
                <div className="vc-parent">
                    <div className="vc-child">
                        <section className="page-title">
                            <h2>INSURANCE</h2>
                            <ul className="text-center">
                                <li className="list-unstyled text-danger">
                                    <Link className="text-white" href="/">Home /</Link> Insurance</li>
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
                            <p class="justified">Avows has a very strong presence across Insurance sector,
                            we have partnered and provided services across most of the leading Insurance
                            companies across Malaysia to several of our clients since our existence from 2008.
                     </p>
                            <p>Innovative Digital solutions have made a break through across the technological
                            landscape of several of our clients and we are enabling them with the requisite
                            technology support like new age application development, analytics, Telematics,
                            Automation solution etc. Our rich Insurance domain experience helps us understand
                            our clients most intricate business problems and provides adequate solutions.
                            </p>
                            <p>Our Services and Solutions:</p>
                            <ul>
                                <li>Claims Management</li>
                                <li>Policy Administration</li>
                                <li>Wellness, IoT, Telematics</li>
                                <li>Custom Mobile/Web Development</li>
                                <li>E-KYC</li>
                                <li>Application Maintenance Services</li>
                                <li>Mobility solutions</li>
                                <li>Enterprise Applications Implementations, Integrations and Upgrades</li>
                                <li>Data and Analytics</li>
                                <li>Customer 360 – Behaviour Analytics</li>
                                <li>Insurance Platforms</li>
                                <li>Payment Solutions</li>
                                <li>Card Services</li>
                                <li>Business Process Automation</li>
                                <li>Digital Transformation</li>
                                <li>Domain led Systems Consulting</li>
                            </ul>
                        </div>

                        <div>
                            <br />
                            <h2>Case Studies</h2>
                            <Tabs defaultActiveKey='CC' transition={false} id="noanim-tab-example">
                                <Tab eventKey="CC" title="Conversational ChatBot">
                                    <br />
                                    <h3><strong>Conversational ChatBot</strong></h3>
                                    <section>
                                        <h3 className="text-primary">About the Client</h3>
                                        <p class="p1 text-justify">Customer is a large Insurance Services provider in Malaysia
                                        providing both general and family Insurance in Malaysia and is
                                        currently one of the leading insurance providers in Malaysia.</p>
                                    </section>
                                    <section>
                                        <h3 className="text-primary">Challenge</h3>
                                        <p class="p1 text-justify">
                                            Customers are looking at creating a strong brand awareness through better customer experience
                                            by using automation and chatbots to reduce their response times. This will also help to provide
                                            faster and easier end users resolution. They have identified customer service as an area of
                                            opportunity and partnered with Avows to implement innovative solutions to achieve
                                            operational excellence.
                                        </p>
                                    </section>
                                    <section>
                                        <h3 className="text-primary">Solution</h3>
                                        <p class="p1 text-justify">
                                            We implemented a conversational Chatbot which could assist their consumers in gathering information
                                            related to their insurance policies or other product related information immediately through the Chatbot.
                                            The Chatbot was deployed in English and local Bahasa Melayu languages to create a further impact in
                                            resolving the issues with linguistic convenience as well. Our Chatbot solution is a comprehensive
                                            solution which can cater to client’s marketing, sales, lead capture, customer services as well as
                                            help customers raise tickets quickly without any hassle. The Chatbot can also be used internally
                                            within organizations for IT services, HR services etc. The Chatbot is built with the help of leading
                                            technologies and has been built with models that allow it to learn and improve as it goes by. Use of
                                            Natural Language Processing (NLP) techniques along with AI ML allows the bot to remain personalized
                                            and human so that end consumers get a more personalized feeling when implemented in an auto mode.
                                            It can also be deployed in assist mode, where actual customer service representatives can use Chatbot,
                                            these are faster to respond and provide easy and quick summary for reference at all times leading to
                                            good understanding and quicker resolution and response times.
                                        </p>
                                    </section>
                                    <section>
                                        <image />
                                        <h3 className="text-primary">Benefits</h3>
                                        <ul>
                                            <li>Customers are able to overall enhance service levels for their customer services by 33%</li>
                                            <li>2X growth in Lead Funnel along with much more structured data collection on the leads</li>
                                            <li>80% of the projected traffic went started flowing through the chatbot in a very short time</li>
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
                                <Tab eventKey="SDD" title="Sales and Distribution Dashboard">
                                    <br />
                                    <h3><strong>Sales and Distribution Dashboard</strong></h3>
                                    <Figure style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                                        <Figure.Image
                                            width={300}
                                            height={500}
                                            src={sales1}
                                        />
                                        <Figure.Image
                                            width={300}
                                            height={500}
                                            src={sales2}
                                        />
                                        <Figure.Image
                                            width={300}
                                            height={500}
                                            src={sales3}
                                        />
                                    </Figure>
                                    <section>
                                        <h3 className="text-primary">About the Client</h3>
                                        <p class="p1 text-justify">Client is an insurance firm with operations in Malaysia. The Client offers life,
                                        investment-linked, group scheme, retirement, savings, and healthcare insurance services in Malaysia.
                                    </p>
                                    </section>
                                    <section>
                                        <h3 className="text-primary">Challenge</h3>
                                        <p class="p1 text-justify">
                                            Client had on centralized sales dashboard and the mid-senior management were missing standardized sales data
                                            across the organization to compare and analyse. This led to delay in understanding changing in market dynamics,
                                            they were looking for a system to bring out standard data making it easier to identify changing forces on the ground
                                            and take quick steps to align themselves with these dynamics.
                                    </p>
                                    </section>
                                    <section>
                                        <h3 className="text-primary">Solution</h3>
                                        <p class="p1 text-justify">
                                            Avows created a native mobile application available both for android and iOS for sales reports and dashboards
                                            which were available based on access. We brought together data from different places and after careful discussions
                                            with business finalized parameters and metrics that were to be reported at different levels. Through this sales
                                            report were made available at immediate access in real time to authorized associates, these reports were classified
                                            based on product types, categories, regions, channel and several other details.
                                    </p>
                                        <p class="p1 text-justify">
                                            Some technical details of our solutions:
                                    </p>
                                        <ul>
                                            <li>Implementation of ETL : Pentaho</li>
                                            <li>Data Warehouse MS SQL</li>
                                            <li>BI/Dashboard Pentaho</li>
                                            <li>Native Mobile App</li>
                                        </ul>
                                    </section>
                                    <section>
                                        <image />
                                        <h3 className="text-primary">Benefits</h3>
                                        <ul>
                                            <li>Sales management had access to more transparent data in real time which allowed them
                                                to manage their teams closely</li>
                                            <li>Quick Decision by Sales Leaders to drive 3X sales productivity</li>
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

export default Insurance;


{/*  */ }