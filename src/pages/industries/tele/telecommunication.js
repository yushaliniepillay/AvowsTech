import React from "react"
import Layout from "../../../components/layouts/layout"
import SEO from "../../../components/seo";
import { Card, Breadcrumb } from 'react-bootstrap';

const Telecommunication = () => {


    const data =
        [
            {
                id: 0,
                key: "A",
                link: "/industries/tele/mobile",
                title: "Self- Care Mobile App Development",
                about: "The client is a data-centric and multiple award-winning mobile data service company in Malaysia. They have established their presence in all over the country with a subscriber base of 7 million mark. It has been an award-winning telco with affordable plans and a comprehensive fintech ecosystem.",
                challenge: [
                    "The client wanted to bring unified experience across all platforms and reduce manpower involved along with simplified processes. Their Digital channels were not providing much support to their overall sales and marketing efforts."
                ],
                solution: [
                    "Avows has created a secure mobile application which was deployed for end users as their one stop destination for all user related information, activations, recharges, plan upgrades, utiliatsion details, along with digital wallet. The mobile application can also be used for marketing efforts such as running user campaigns, communicate plans and offers to customers and many more. A content management system was created for the clients end use and provided cost optimisation through cloud hosting and accessibility. The application was created through a secure use channel and it also allows the organisation to feature great branding opportunity which is seen as a modern digital savvy service provider true to users choice.",
                    "Some technical details of our solution encompass:",
                    "Development on React-Native Platform",
                    "Cloud Deployment on Google",
                    "Mini ESB Built for seamless Integration",
                    "Custom CMS (Content Management System)",
                    "Seamless Connectivity (On prem to Cloud)",
                    "Digital Wallet Implementation & E-KYC"
                ],
                benefit: [
                    "Through the mobile application, the client was able to realise much better customer service and was able to be a true digital service provider in a digital world.",
                    "The client experienced a year-on-year increase of revenue by 15%",
                    "Cost Optimisation - Cloud Infrastructure & On-Demand Scalability",
                    "Enhanced Customer Experience – Ease of use among the Millennials and other age groups"
                ],
                image: [
                    require("../../industries/InImage/mobile1.png"),
                    require("../../industries/InImage/mobile3.jpg"),
                    require("../../industries/InImage/mobile4.jpg")
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
            <SEO title="TELECOMMUNICATION" />
            <div id="pageHeader" >
                <div className="vc-parent">
                    <div className="vc-child">
                        <Breadcrumb>
                            <Breadcrumb.Item href="/">HOME</Breadcrumb.Item>
                            <Breadcrumb.Item active>TELECOMMUNICATION</Breadcrumb.Item>
                        </Breadcrumb>
                        <section className="page-title">
                            <h1>TELECOMMUNICATION</h1>
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
                            <p className="justified">
                                As our motto echoes, “Turning Visions into Reality” - Avows drives a whole lot of digital transformation, adoption and consultancy activities to our broad spectrum of clients especially in the vast area of telecommunication industry.
                            </p>
                            <p className="justified">
                                With the recent boom in 5G technology all across the globe, Avows is set to embark on a revolutionary journey of catalysing change by continuously merging new technology frameworks connecting all users.
                            </p>
                            <p className="justified">
                                With advancement in 5G technology, Avows sets up our footprint in new technologies such as:
                            </p>
                            <ul>
                                <li>Augmented Reality (AR) & Virtual Reality (VR) – To enhance human computer interactions with advanced immersive technologies</li>
                                <li>RPA & Chatbots – To deliver the best in-class customer support and issue resolution mechanism</li>
                                <li>AI/ML & Big Data – To analyse and drive new enterprise business opportunities via data analytics with advanced AI and Machine Learning models</li>
                                <li>Cloud Technology – To make effective use of cloud services framework in order to ensure cloud economics are sustained by reducing OPEX costs</li>
                                <li>Mobile/Web Apps – Driving excellent user experience to ensure all user centric functions are consolidated in a single use of application platform</li>
                            </ul>
                        </div>

                        <div>
                            <br />
                            <h2>Case Studies</h2>

                            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                                {data.map(data => (
                                    <Card className="card shadow" style={{ width: '20rem', margin: '10px' }} >
                                        <div className="inner">
                                            <Card.Img variant="top" src={data.image[0]} />
                                        </div>
                                        {/* style={{ width: '20rem', height: '14rem' }} */}
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
                            {/* <Tabs defaultActiveKey="Mobile" transition={false} id="noanim-tab-example">
                                <Tab eventKey="Mobile" title="Self- Care Mobile App Development">
                                    <br />
                                    <h3><strong>Self- Care Mobile App Development</strong></h3>
                                    <Figure style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                                        <Figure.Image
                                            width={300}
                                            height={500}
                                            src={tele1}
                                        />
                                        <Figure.Image
                                            width={300}
                                            height={500}
                                            src={tele2}
                                        />
                                        <Figure.Image
                                            width={300}
                                            height={500}
                                            src={tele3}
                                        />
                                    </Figure>
                                    <section>
                                        <h3 className="text-primary">About the Client</h3>
                                        <p className="p1 text-justify">The client is a data-centric and multiple award-winning mobile
                                        data service company in Malaysia. They have established their presence in all over the country
                                        with a subscriber base of 7 million mark. It has been an award-winning telco with affordable plans
                                        and a comprehensive fintech ecosystem.
                                    </p>
                                    </section>
                                    <section>
                                        <h3 className="text-primary">Challenges</h3>
                                        <p className="p1 text-justify">
                                            The client wanted to bring unified experience across all platforms and reduce manpower involved
                                            along with simplified processes. Their Digital channels were not providing much support to their
                                            overall sales and marketing efforts.
                                    </p>
                                    </section>
                                    <section>
                                        <h3 className="text-primary">Solution</h3>
                                        <p className="p1 text-justify">
                                            Avows has created a secure mobile application which was deployed for end users as their one stop
                                            destination for all user related information, activations, recharges, plan upgrades, utilisation details,
                                            along with digital wallet. The mobile application can also be used for marketing efforts such as running
                                            user campaigns, communicate plans and offers to customers and many more. A content management system
                                            was created for the clients end use and provided cost optimisation through cloud hosting and accessibility.
                                            The application was created through a secure use channel and it also allows the organisation to feature great
                                            branding opportunity which is seen as a modern digital savvy service provider true to users choice.
                                    </p>
                                        <p className="p1 text-justify">
                                            Some technical details of our solution encompass:
                                    </p>
                                        <ul>
                                            <li>Development on React-Native Platform</li>
                                            <li>Cloud Deployment on Google</li>
                                            <li>Mini ESB Built for seamless Integration</li>
                                            <li>Custom CMS (Content Management System)</li>
                                            <li>Seamless Connectivity (On prem to Cloud)</li>
                                            <li>Digital Wallet Implementation & E-KYC</li>
                                        </ul>
                                    </section>
                                    <section>
                                        <image />
                                        <h3 className="text-primary">Benefits</h3>
                                        <p className="p1 text-justify">
                                            Through the mobile application, the client was able to realise much better customer
                                            service and was able to be a true digital service provider in a digital world.
                                    </p>
                                        <ul>
                                            <li>The client experienced a year-on-year increase of revenue by 15%</li>
                                            <li>Cost Optimisation - Cloud Infrastructure & On-Demand Scalability</li>
                                            <li>Enhanced Customer Experience – Ease of use among the Millennials and other age groups</li>
                                        </ul>
                                    </section>
                                    <section>
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
                                    </section> 
                                </Tab>
                            </Tabs> */}
                        </div>

                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default Telecommunication