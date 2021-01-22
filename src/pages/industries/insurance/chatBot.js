import React from 'react'
import Layout from "../../../components/layouts/layout";
import SEO from "../../../components/seo";
import { Breadcrumb, Row, Col, Table } from 'react-bootstrap';

const ChatBot = () => {

    const data =
        [
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
                    "We implemented a conversational Chatbot which could assist their consumers in gathering information related to their insurance policies or other product related information immediately through the Chatbot. The Chatbot was deployed in English and local Bahasa Melayu languages to create a further impact in resolving the issues with linguistic convenience as well. Our Chatbot solution is a comprehensive solution which can cater to client’s marketing, sales, lead capture, customer services as well as help customers raise tickets quickly without any hassle. The Chatbot can also be used internally within organizations for IT services, HR services etc.",
                    "Chatbot is built with the help of leading technologies and has been built with models that allow it to learn and improve as it goes by. Use of Natural Language Processing (NLP) techniques along with AI ML allows the bot to remain personalized and human so that end consumers get a more personalized feeling when implemented in an auto mode. It can also be deployed in assist mode, where actual customer service representatives can use Chatbot, these are faster to respond and provide easy and quick summary for reference at all times leading to good understanding and quicker resolution and response times."
                ],
                benefit: [
                    "Customers are able to overall enhance service levels for their customer services by 33%",
                    "2X growth in Lead Funnel along with much more structured data collection on the leads",
                    "80% of the projected traffic went started flowing through the chatbot in a very short time"
                ],
                image: [
                    // require('../../industries/InImage/ccbot.jpg')
                    // require('../../industries/InImage/AML2.jpg')
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
                            <Breadcrumb.Item href="/industries/insurance/insurance">INSURANCE</Breadcrumb.Item>
                            <Breadcrumb.Item active>CONVERSATIONAL CHATBOT</Breadcrumb.Item>
                        </Breadcrumb>
                        <section className="page-title">
                            <Row>
                                <Col md={4}> </Col>
                                <Col md={4}>
                                    <h1>Conversational ChatBot</h1>
                                </Col>
                            </Row>
                        </section>
                    </div>
                </div>
            </div>

            <div id="blog">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 blog-page-content post-details">
                            <div className="post-img">
                                {/* <img src="/img/blog-posts/blog00.jpg" alt="" className="img-responsive" /> */}
                                <br />
                            </div>

                            {
                                data.map(data => (
                                    <div>
                                        <section className="cs_about">
                                            <h4>About the Client</h4>
                                            <p className="text-justify" >{data.about}</p>
                                        </section>

                                        <Table className="text-center" bordered="sm" borderless size="md">
                                            <thead >
                                                <tr>
                                                    <th>Industry</th>
                                                    <th>Service</th>
                                                </tr>
                                            </thead>
                                            <tbody >
                                                <tr>
                                                    <td>Insurance</td>
                                                    <td>Chatbot</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                        <section className="cs_about">
                                            <h4>Challenges</h4>
                                            <Row>
                                                <p className="text-justify">{data.challenge[0]}</p>

                                            </Row>
                                        </section>
                                        {/* <Figure style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                                            <Figure.Image
                                                key={data.image}
                                                width={500}
                                                height={800}
                                                src={data.image[1]}
                                            />

                                            <Figure.Image
                                                key={data.image}
                                                width={500}
                                                height={800}
                                                src={data.image[2]}
                                            />
                                        </Figure> */}
                                        <section className="cs_about">
                                            <h4>Solutions</h4>
                                            <Row>
                                                <Col>
                                                    <p className="text-justify">{data.solution[0]}</p>

                                                </Col>
                                                <Col>
                                                    <p className="text-justify">{data.solution[1]}</p>

                                                </Col>
                                            </Row>
                                        </section>
                                        <section className="cs_about">
                                            <h4>Benefits</h4>
                                            <Row>
                                                <Col>
                                                    <ul>
                                                        <li>{data.benefit[0]}</li>
                                                        <li>{data.benefit[1]}</li>
                                                        <li>{data.benefit[2]}</li>
                                                    </ul>
                                                    {/* <p className="text-justify">{data.benefit[0]}</p>
                                                    <p className="text-justify">{data.benefit[1]}</p>
                                                    <p className="text-justify">{data.benefit[2]}</p> */}
                                                </Col>
                                            </Row>
                                        </section>
                                        {/* <section className="cs_about">
                                            <h4>Customer Testimonial</h4>
                                            <Container>
                                                <Row>
                                                    <Col md={6}>
                                                        <ReactPlayer url={data.video[0]}
                                                            width='100%'
                                                            height='100%' />
                                                    </Col>
                                                    <Col md={{ span: 3, offset: 1 }}>
                                                        <p>{data.video[3]}</p>
                                                    </Col>
                                                </Row>
                                            </Container>
                                            <p>{data.video[1]}</p>
                                            <p>{data.video[2]}</p>
                                        </section> */}
                                    </div>
                                ))}

                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default ChatBot;
