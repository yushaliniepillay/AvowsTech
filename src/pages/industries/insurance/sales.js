import React from 'react'
import Layout from "../../../components/layouts/layout";
import SEO from "../../../components/seo";
import { Breadcrumb, Row, Col, Figure, Table } from 'react-bootstrap';


const Sales = () => {

    const data =
        [
            {
                id: 0,
                key: "SDD",
                link: "/industries/insurance/sales",
                title: "Sales and Distribution Dashboard",
                about: "Client is an insurance firm with operations in Malaysia. The client offers life, investment-linked, group scheme, retirement, savings, and healthcare insurance services in Malaysia.",
                challenge: [
                    "Client had a centralised sales dashboard and the mid-senior management were missing standardised sales data across the organisation to compare and analyse. This led to delay understanding changing market dynamics. Thus, they were looking for a system on a immediate basis in real time to bring out standard data making it easier to identify changing forces on the ground and take quick steps to align themselves with these dynamics."
                ],
                solution: [
                    "Avows created a native mobile application available both for android and iOS for sales reports and dashboards which were available based on access. We brought together data from different places, and after careful discussions with business partners finalised parameters and metrics that were to be reported at different levels. Through this, sales report available on a immediate basis real time. Classified based on product types, categories, regions, channel and several other details.",
                    "Some technical details of our solutions:",
                    "Implementation of ETL : Pentaho",
                    "Data Warehouse MS SQL",
                    "BI/Dashboard Pentaho",
                    "Native Mobile App"
                ],
                benefit: [
                    "Sales management had access to manage their teams more efficiently",
                    "Sales leaders were able to make decisions more quickly and improve sales productivity by 3 times"
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
                            <Breadcrumb.Item active>SALES AND DISTRIBUTION DASHBOARD</Breadcrumb.Item>
                        </Breadcrumb>
                        <section className="page-title">
                            <Row>
                                <Col md={4}> </Col>
                                <Col md={4}>
                                    <h1>Sales and Distribution Dashboard</h1>
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
                                <br/>
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
                                                    <td>Analytics Dashboard</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                        <section className="cs_about">
                                            <h4>Challenges</h4>
                                            <Row>
                                                <Col><p className="text-justify">{data.challenge[0]}</p></Col>
                                            </Row>
                                        </section>
                                        <Figure style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
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
                                        </Figure>

                                        <section className="cs_about">
                                            <h4>Solutions</h4>
                                            <Row>
                                                <Col>
                                                    <p className="text-justify">{data.solution[0]}</p>

                                                </Col>
                                                <Col>
                                                    <p className="text-justify">{data.solution[1]}</p>
                                                    <ul>
                                                        <li>{data.solution[2]}</li>
                                                        <li>{data.solution[3]}</li>
                                                        <li>{data.solution[4]}</li>
                                                        <li>{data.solution[5]}</li>
                                                    </ul>
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
                                                    </ul>
                                                    <p className="text-justify">{data.benefit[6]}</p>
                                                    <p className="text-justify"></p>
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

export default Sales;
