import React from 'react'
import Layout from "../../../components/layouts/layout";
import SEO from "../../../components/seo";
import { Breadcrumb, Container, Row, Col, Figure, Table } from 'react-bootstrap';
import ReactPlayer from 'react-player/lazy'

const Mobile = () => {

    const data =
        [
            {
                id: 0,
                key: "A",
                link: "/industries/tele/mobile",
                title: "Self-Care Mobile App Development",
                about: "The client is a data-centric and multiple award-winning mobile data service company in Malaysia. They have established their presence in all over the country with a subscriber base of 7 million mark. It has been an award-winning telco with affordable plans and a comprehensive fintech ecosystem.",
                challenge: [
                    "The client wanted to bring unified experience across all platforms and reduce manpower involved along with simplified processes. Their Digital channels were not providing much support to their overall sales and marketing efforts."
                ],
                solution: [
                    "Avows has created a secure mobile application which was deployed for end consumers as their one stop destination for all user related information, activations, recharges, plan upgrades, utilization details, along with digital wallet. The mobile application can also be used for marketing efforts such as running consumer campaigns, communicate plans and offers to customers and many more. A content management system was created for the clients end use and provided cost optimization through cloud hosting and accessibility.",
                    "The application was created through a secure use channel and it also allows the organization to feature great branding opportunity which is seen as a modern digital savvy service provider true to consumers choice.",
                    "Some technical details of our solution encompass:",
                    "Development on React-Native Platform",
                    "Cloud Deployment on Google",
                    "Mini ESB Built for seamless Integration",
                    "Custom CMS (Content Management System)",
                    "Seamless Connectivity (On prem to Cloud)",
                    "Digital Wallet Implementation & E-KYC"
                ],
                benefit: [
                    "Through the mobile application, the client was able to realize much better customer service and was able to be a true digital service provider in a digital world.",
                    "The client experienced a year-on-year increase of revenue by 15%",
                    "Cost Optimization - Cloud Infrastructure & On-Demand Scalability",
                    "Enhanced Customer Experience – Ease of use among the Millennials and other age groups"
                ],
                image: [
                    require("../../industries/InImage/mobile1.png"),
                    require("../../industries/InImage/mobile3.jpg"),
                    require("../../industries/InImage/mobile4.jpg")
                ],
                video: [
                    require('../../industries/video/Umobile.mp4'),
                    "Cynthia Seow, General Manager of Transformation for Malaysia’s Multiple award-winning mobile data service provider - U Mobile , shares with us how Avows has helped them to develop and deliver customer-centric services and solutions."
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
                            <Breadcrumb.Item href="/industries/tele/telecommunication">TELECOMMUNICATION</Breadcrumb.Item>
                            <Breadcrumb.Item active>SELF-CARE MOBILE APP DEVELOPMENT</Breadcrumb.Item>
                        </Breadcrumb>
                        <section className="page-title">
                            <Row>
                                <Col md={4}> </Col>
                                <Col md={4}>
                                    <h1>Self- Care Mobile App Development</h1>
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
                                                    <th>Client</th>
                                                    <th>Industry</th>
                                                    <th>Service</th>
                                                </tr>
                                            </thead>
                                            <tbody >
                                                <tr>
                                                    <td>U Mobile</td>
                                                    <td>Telecommunication</td>
                                                    <td>Mobile App Development</td>
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
                                                    <p className="text-justify">{data.solution[2]}</p>
                                                    <ul>
                                                        <li>{data.solution[3]}</li>
                                                        <li>{data.solution[4]}</li>
                                                        <li>{data.solution[5]}</li>
                                                        <li>{data.solution[6]}</li>
                                                        <li>{data.solution[7]}</li>
                                                        <li>{data.solution[8]}</li>
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
                                                        <li>{data.benefit[2]}</li>
                                                        <li>{data.benefit[3]}</li>
                                                    </ul>
                                                </Col>
                                            </Row>
                                        </section>
                                        <section className="cs_about">
                                            <h4>Customer Testimonial</h4>
                                            <Container>
                                            <br/>
                                            <p>{data.video[1]}</p>
                                                <Row>
                                                    <Col md={3}></Col>
                                                    <Col md={6}>
                                                        <ReactPlayer 
                                                        controls={true}
                                                        // playing={true}
                                                        url={data.video[0]}
                                                            width='100%'
                                                            height='100%' />
                                                    </Col>
                                                </Row>
                                            </Container>  
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

export default Mobile
