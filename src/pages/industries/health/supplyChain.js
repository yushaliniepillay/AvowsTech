import React from 'react'
import Layout from "../../../components/layouts/layout";
import SEO from "../../../components/seo";
import { Container, Row, Col, Figure } from 'react-bootstrap';
import ReactPlayer from 'react-player/lazy'

const SupplyChain = () => {
    const data =
        [
            {
                id: 0,
                link: "/industries/health/supplyChain",
                title: "Accelerating Supply Chain through Hospitals",
                about: "A Leading Healthcare Hospital Group targeted for better forecasting and managing the Supply Chain effectively. The client is the largest hospital chain in SEA with more than 5,000 employees.",
                challenge: [
                    "The hospital chain wanted to have a better view and understanding of their supply chain and inventory. Data regarding inventories was lying in disparate systems and was lacking a unified view for any management executive analysis and decision making."
                ],
                solution: [
                    "Through our supply chain visibility solution, Avows was able to bring data across together with a view of inventory available at each locations. The system was further equipped with AI ML techniques to forecast future inventories helping decision makers take inventory related decision such as placing an order at an appropriate time. The solution was aimed at solving ageing of inventory issues as well to eliminating wastages in perishable and manage by intelligent decision and usage of data.",
                    "Some Salient features of our Supply Chain Solution:",
                    "Data Science Models like Multi Variate Time Series (Vector Auto Regression), Deep Learning Techniques like LSTM (Recurrent Neural Networks) and Advanced AI Techniques of ARIMA",
                    "Sanitize and Integrate data from various Heterogeneous Systems into Large Volumes of Structured, Semi-Structured, Unstructured data stored in “NoSQL storage” like Graph DB, Columnar DB, Key-Value DB and Document DB",
                    "Effective Data Transformation using Python",
                    "Develop tools in GBQ using SQ"
                ],
                benefit: [
                    "Situation of Overstocking was reduced and Days of Inventory were also reduced significantly."
                ],
                image: [
                    require('../../industries/InImage/medical1.jpg'),
                    require('../../industries/InImage/medical2.jpg'),
                    require('../../industries/InImage/medical4.jpg')
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
                            <h2>Accelerating Supply Chain through Hospitals</h2>
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
                                            <p class="p1 text-justify">{data.benefit[0]}</p>
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

export default SupplyChain;
