import React from "react";
import Layout from "../../../components/layouts/layout";
import SEO from "../../../components/seo";
import { Breadcrumb, Container, Row, Col, Figure, Table } from 'react-bootstrap';
import ReactPlayer from 'react-player'
const Bidev = () => {

    const data =
        [
            {
                id: 0,
                key: "A",
                link: "/industries/oilNgas/biDev",
                title: "Data Unification enabling Business Decision Making",
                about: "The client is an integrated oil and gas services company based in Malaysia. It has established its presence in over 20 countries, such as China, Australia, United States of America, and those in Western Africa and the Middle East, employing approximately 22,000 people.",
                challenge: [
                    "Clients data resided in different disparate systems and lacked consistencies in bringing them together for any C level executive analysis. This resulted a very tedious exercise and took several days to achieve, hence there was an immediate need to bring data together with advanced analytics and visualization techniques to enable more insights at a faster rate and eventually enable better decision making."
                ],
                solution: [
                    "Avows partnered with the client to understand the client’s organization data sets and the different systems along with data storage access points etc. to arrive at the complete blue print for organizational data from its creating to where it was residing.",
                    "We then created a solution to bring all data together for analytics and process several other information for advanced dashboards for c level executives based on discussions and business requirements.",
                    "The solution was able to bring several benefits within a short time."
                ],
                benefit: [
                    "Gain a seamless environment that includes data visualization and analytics integrated with communication tools, and specialized business applications.",
                    "Capitalize on customers’ existing Microsoft technology to accelerate progress toward the next innovation in data analytics.",
                    "The customer has successfully migrated more than 46 metrics from 4 critical datasets from excel sheet into the SAP BW Platform for their daily, weekly and monthly reporting empowered by our design principles on Power BI platform.",
                    "And empowered the analytics and business intelligence teams, formerly dependent on IT or support teams, to create and prepare the data themselves.",
                    "Direct business and executive committee to access the data. The data which took 6 days for tabulation is now available for C level reporting on the day of request."
                ],
                image: [
                    require("../../industries/InImage/dashboard1.jpg"),
                    require("../../industries/InImage/dashboard2.jpg")
                ],
                video: [
                    // require('../../industries/video/PublicBank.mp4'),
                    // "name",
                    // "position",
                    // "speaking something"
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
                            <Breadcrumb.Item href="/industries/oilNgas/energy">OIL AND GAS</Breadcrumb.Item>
                            <Breadcrumb.Item active>DATA UNIFICATION ENABLING BUSINESS DECISION MAKING</Breadcrumb.Item>
                        </Breadcrumb>
                        <section className="page-title">
                            <Row>
                                <Col md={4}> </Col>
                                <Col md={4}>
                                    <h1>DATA UNIFICATION ENABLING BUSINESS DECISION MAKING</h1>
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
                                                    <th>Industry</th>
                                                    <th>Service</th>
                                                </tr>
                                            </thead>
                                            <tbody >
                                                <tr>
                                                    <td>Oil and Gas</td>
                                                    <td>BI Dashboard Development</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                        <section className="cs_about">
                                            <h4>Challenges</h4>
                                            <Row>
                                                <p className="text-justify">{data.challenge[0]}</p>
                                            </Row>
                                        </section>
                                        <Figure style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                                            {/* <Figure.Image
                                                key={data.image}
                                                width={300}
                                                height={500}
                                                src={data.image[0]}
                                            /> */}

                                            <Figure.Image
                                                key={data.image}
                                                width={500}
                                                height={800}
                                                src={data.image[1]}
                                            />
                                        </Figure>
                                        <section className="cs_about">
                                            <h4>Solutions</h4>
                                            <Row>
                                                <Col>
                                                    <p className="text-justify">{data.solution[0]}</p>
                                                </Col>
                                                <Col>
                                                    <p className="text-justify">{data.solution[1]}</p>
                                                    <p className="text-justify">{data.solution[2]}</p>
                                                </Col>
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
                                                    <p className="text-justify">{data.benefit[3]}</p>
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

export default Bidev;
