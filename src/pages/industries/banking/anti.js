import React from "react";
import Layout from "../../../components/layouts/layout";
import SEO from "../../../components/seo";
import { Breadcrumb, Container, Row, Col, Figure, Table } from 'react-bootstrap';
import ReactPlayer from 'react-player/lazy'

const Anti = () => {

    const data =
        [
            {
                id: 0,
                key: "A",
                link: "/industries/banking/anti",
                title: "Anti-Money Laundering for Foreign Exchange Company",
                about: "Client is a Money Services Business, Digital Payment Service and Mobile Virtual Network operator provider, based in Malaysia. The company’s core business is centered on international money transfers, foreign currency exchange, wholesale banknotes, digital payment processing and mobile telecommunications. It is Asia’s Leader in Digital Payments & Communications.",
                challenge: [
                    "As regulatory bodies across the globe enforce stricter regulations, banks & financial institutions are facing compliance challenges. As financial activity increases along with digital means, there will be an ever-growing increase in needs to detect fraudulent money movements and patterns involving more and more digital investigations.",
                    "Client was looking to adopt an AML solution for its banking enterprise to comply with regulatory requirements through unified and consistent watch list screening at the same time also create value through effective weeding out of fraudulent participants on its network. Some of the other concerns were to have a low maintenance solution, effective with less false alarms to help optimize usage of resources."
                ],
                solution: [
                    "Avows partnered with the client to provide an AML solution that matched their requirements in term of being fully equipped to weed out unnecessary noise, effective screening and comprehensive detection of suspicious transactions in real time. Our Anti-money laundering solutions comprises of proven methodologies that we use to detect more and more behavioural characteristics to classify risks and threats as authentic.",
                    "Over time, our solution is capable of learning and integrating new patterns that emerge out of newer fraudulent ways the scammers or money launderers adopt hence making it increasingly difficult for them to beat the system.",
                    "Our solution helps this remittance institutions through all AML aspects and stages. Our integrated system offers an end-to-end anti-money laundering solution with components which can also be used as stand-alone applications. This has given an opportunity to go for one-off investment by the customer to acquire multiple peripheral solutions on top of existing core applications or systems."
                ],
                benefit: [
                    "Our solution incorporates modern technologies like AI, ML and robotic automation along with audio/facial recognition and document verification to allow organizations manage their compliance 100 percent and predict fraudulent behaviour patterns which reduce unaccounted damages.",
                    "Smart Automation with 360 degree and round the clock surveillance to combat money laundering, providing real time alerts for action.",
                    "Achieved real-time risk visibility and accelerate screening and monitoring with industry-proven tools -",
                    "Identity Verification",
                    "Sanctions, PEPs and Enforcements Data",
                    "Account and Payment Screening"
                ],
                image: [
                    require('../../industries/InImage/AML1.jpg'),
                    require('../../industries/InImage/AML2.jpg')
                ],
                video: [
                    require('../../industries/video/PublicBank.mp4'),
                    "name",
                    "position",
                    "speaking something"
                ]

            }
        ]
    return (
        <Layout>
            <SEO title="AVOWS" />

            <div id="pageHeader" >
                <div className="vc-parent">
                    <div className="vc-child">
                        <Breadcrumb>
                            <Breadcrumb.Item href="/">HOME</Breadcrumb.Item>
                            <Breadcrumb.Item href="/industries/banking/banking">BANKING</Breadcrumb.Item>
                            <Breadcrumb.Item active>ANTI-MONEY LAUNDERING</Breadcrumb.Item>
                        </Breadcrumb>
                        <section className="page-title">
                            <Row>
                                <Col md={4}> </Col>
                                <Col md={4}>
                                    <h1>Anti-Money Laundering for Foreign Exchange Company</h1>
                                </Col>
                            </Row>


                        </section>
                    </div>
                </div>
            </div>

            <div id="blog">
                <div className="container">
                    <div className="row">
                        <div class="col-md-12 blog-page-content post-details">
                            <div class="post-img">
                                {/* <img src="/img/blog-posts/blog00.jpg" alt="" class="img-responsive" /> */}
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
                                                    <th>Client</th>
                                                    <th>Industry</th>
                                                    <th>Service</th>
                                                </tr>
                                            </thead>
                                            <tbody >
                                                <tr>
                                                    <td>NaN</td>
                                                    <td>NaN</td>
                                                    <td>NaN</td>
                                                </tr>
                                            </tbody>
                                        </Table>

                                        <section className="cs_about">
                                            <h4>Challenges</h4>
                                            <Row>
                                                <Col><p className="text-justify">{data.challenge[0]}</p></Col>
                                                <Col><p className="text-justify">{data.challenge[1]}</p></Col>
                                            </Row>
                                        </section>
                                        <Figure style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                                            {/* <Figure.Image
                                                key={data.image}
                                                width={300}
                                                height={500}
                                                src={data.image[0]} /> */}
                                            <Figure.Image
                                                key={data.image}
                                                width={500}
                                                height={800}
                                                src={data.image[1]} />
                                        </Figure>
                                        <section className="cs_about">
                                            <h4>Solution</h4>
                                            <Row>
                                                <Col>
                                                    <p className="text-justify">{data.solution[0]}</p>
                                                    <p className="text-justify">{data.solution[1]}</p>
                                                </Col>
                                                <Col><p className="text-justify">{data.solution[2]}</p></Col>
                                            </Row>
                                        </section>
                                        <section className="cs_about">
                                            <h4>Benefits</h4>
                                            <Row>
                                                <Col>
                                                    <p className="text-justify">{data.benefit[0]}</p>
                                                    <p className="text-justify">{data.benefit[1]}</p>
                                                </Col>
                                                <Col>
                                                    <p className="text-justify">{data.benefit[2]}</p>
                                                    <ul>
                                                        <li>{data.benefit[3]}</li>
                                                        <li>{data.benefit[4]}</li>
                                                        <li>{data.benefit[5]}</li>
                                                    </ul>
                                                </Col>
                                            </Row>
                                        </section>
                                        <section className="cs_about">
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
                                        </section>
                                    </div>
                                ))}

                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default Anti;
