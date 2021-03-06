import React from "react"
import Layout from "../../../components/layouts/layout"
import SEO from "../../../components/seo";
import { Card, Breadcrumb } from 'react-bootstrap';

const Insurance = () => {

    //var v = require('../industries/video/PublicBank.mp4')

    const data =
        [
            {
                id: 0,
                key: "SDD",
                link: "/industries/insurance/sales",
                title: "Sales and Distribution Dashboard",
                about: "Client is an insurance firm with operations in Malaysia. The Client offers life, investment-linked, group scheme, retirement, savings, and healthcare insurance services in Malaysia.",
                challenge: [
                    "Client had on centralised sales dashboard and the mid-senior management were missing standardised sales data across the organisation to compare and analyse. This led to delay in understanding changing in market dynamics, they were looking for a system to bring out standard data making it easier to identify changing forces on the ground and take quick steps to align themselves with these dynamics."
                ],
                solution: [
                    "Avows created a native mobile application available both for android and iOS for sales reports and dashboards which were available based on access. We brought together data from different places and after careful discussions with business finalised parameters and metrics that were to be reported at different levels. Through this sales report were made available at immediate access in real time to authorised associates, these reports were classified based on product types, categories, regions, channel and several other details.",
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
                    require('../../industries/InImage/Sales1.jpg'),
                    require('../../industries/InImage/Sales2.jpg'),
                    require('../../industries/InImage/Sales3.jpg')
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
                link: "/industries/insurance/chatBot",
                title: "Conversational ChatBot",
                about: "Customer is a large Insurance Services provider in Malaysia providing both general and family Insurance in Malaysia and is currently one of the leading insurance providers in Malaysia.",
                challenge: [
                    "Customers are looking at creating a strong brand awareness through better customer experience by using automation and chatbots to reduce their response times. This will also help to provide faster and easier end users resolution. They have identified customer service as an area of opportunity and partnered with Avows to implement innovative solutions to achieve operational excellence."
                ],
                solution: [
                    "We implemented a conversational Chatbot which could assist their users in gathering information related to their insurance policies or other product related information immediately through the Chatbot. The Chatbot was deployed in English and local Bahasa Melayu languages to create a further impact in resolving the issues with linguistic convenience as well. Our Chatbot solution is a comprehensive solution which can cater to client’s marketing, sales, lead capture, customer services as well as help customers raise tickets quickly without any hassle. The Chatbot can also be used internally within organisations for IT services, HR services etc.",
                    "Chatbot is built with the help of leading technologies and has been built with models that allow it to learn and improve as it goes by. Use of Natural Language Processing (NLP) techniques along with AI ML allows the bot to remain personalised and human so that end users get a more personalised feeling when implemented in an auto mode. It can also be deployed in assist mode, where actual customer service representatives can use Chatbot, these are faster to respond and provide easy and quick summary for reference at all times leading to good understanding and quicker resolution and response times."
                ],
                benefit: [
                    "Customers are able to overall enhance service levels for their customer services by 33%",
                    "2X growth in Lead Funnel along with much more structured data collection on the leads",
                    "80% of the projected traffic went started flowing through the chatbot in a very short time"
                ],
                image: [
                    require('../../industries/InImage/ccbot.jpg')
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
            <SEO title="INSURANCE" />

            <div id="pageHeader" >
                <div className="vc-parent">
                    <div className="vc-child">
                    <Breadcrumb>
                            <Breadcrumb.Item href="/">HOME</Breadcrumb.Item>
                            <Breadcrumb.Item active>INSURANCE</Breadcrumb.Item>
                        </Breadcrumb>
                        <section className="page-title">
                            <h1>INSURANCE</h1>
                        </section>
                    </div>
                </div>
            </div>

            <div id="blog">
                <div className="container">
                    <div className="row">
                        {/* <div className="post-img">
                            <img src="/img/blog-posts/blog00.jpg" alt="" className="img-responsive" />
                        </div> */}
                        <br />
                        <div className="wpb_wrapper">
                            <p class="justified">Avows has a very strong presence across the Insurance sector.
                            We have partnered and provided services to most of the leading Insurance companies in Malaysia since our inception in 2008.
                        </p>
                            <p>Innovative Digital solutions have made a breakthrough across the technological landscape, allowing us to enable our 
                                clients with the requisite technology support- such as new-age Application development, Data Analytics, Telematics, 
                                Automation Solutions etc. Our rich Insurance domain experience helps us understand our clients' most intricate business 
                                problems and provide adequate solutions.
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
                            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                                {data.map(data => (
                                    <Card className="card shadow" style={{ width: '20rem', margin: '10px' }} >
                                        <div className="inner">
                                            <Card.Img style={{ width: '20rem', height: '14rem' }} variant="top" src={data.image[0]} />
                                        </div>
                                        <Card.Body>
                                            <Card.Title>
                                                <section className="post-title">
                                                    <h2><a href={data.link}>{data.title}</a></h2>
                                                </section>
                                            </Card.Title>

                                        </Card.Body>
                                    </Card>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </Layout>


    )
}

export default Insurance;
