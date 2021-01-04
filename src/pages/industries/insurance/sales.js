import React from 'react'
import Layout from "../../../components/layouts/layout";
import SEO from "../../../components/seo";
import { Container, Row, Col, Figure } from 'react-bootstrap';
import ReactPlayer from 'react-player/lazy'


const Sales = () => {

    const data =
        [
            {
                id: 0,
                key: "SDD",
                link: "/industries/insurance/sales",
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
            <SEO title="AVOWS" />

            <div id="pageHeader" >
                <div className="vc-parent">
                    <div className="vc-child">
                        <section className="page-title">
                            <h2>Sales and Distribution Dashboard</h2>
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
                                <br/>
                            </div>

                            {
                                data.map(data => (
                                    <div>
                                        {/* <h3><strong>{data.title}</strong></h3> */}

                                        <Figure style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                                            <Figure.Image
                                                key={data.image}
                                                width={300}
                                                height={500}
                                                src={data.image[1]}
                                            />

                                            <Figure.Image
                                                key={data.image}
                                                width={300}
                                                height={500}
                                                src={data.image[2]}
                                            />
                                        </Figure>

                                        <section>
                                            <h3 className="text-primary">About the Client</h3>
                                            <p class="p1 text-justify">{data.about}</p>
                                        </section>
                                        <section>
                                            <h3 className="text-primary">Challenges</h3>
                                            <p class="p1 text-justify">{data.challenge[0]}</p>
                                            <p class="p1 text-justify">{data.challenge[1]}</p>
                                        </section>
                                        <section>
                                            <h3 className="text-primary">Solution</h3>
                                            <p class="p1 text-justify">{data.solution[0]}</p>
                                            <p class="p1 text-justify">{data.solution[1]}</p>
                                            <ul>
                                                <li>{data.solution[2]}</li>
                                                <li>{data.solution[3]}</li>
                                                <li>{data.solution[4]}</li>
                                                <li>{data.solution[5]}</li>
                                            </ul>
                                        </section>
                                        <section>
                                            <h3 className="text-primary">Benefits</h3>
                                            <ul>
                                                <li>{data.benefit[0]}</li>
                                                <li>{data.benefit[1]}</li>
                                            </ul>
                                        </section>
                                        {/* <section>
                                            <h3 className="text-primary">Customer Testimonial</h3>
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
