import React from "react"
import Layout from "../../../components/layouts/layout"
import SEO from "../../../components/seo";
import { Card, Breadcrumb } from 'react-bootstrap';


const Energy = () => {

    //var dashboard1 = require("../industries/InImage/dashboard1.jpg");
    //var dashboard2 = require("../industries/InImage/dashboard2.jpg");
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
                    "Avows partnered with the client to understand the client’s organization data sets and the different systems along with data storage access points etc. to arrive at the complete blue print for organizational data from its creating to where it was residing. We then created a solution to bring all data together for analytics and process several other information for advanced dashboards for c level executives based on discussions and business requirements.",
                    "The solution was able to bring several benefits within a short time."
                ],
                benefit: [
                    "Gain a seamless environment that includes data visualization and analytics integrated with communication tools, and specialized business applications",
                    "Capitalize on customers’ existing Microsoft technology to accelerate progress toward the next innovation in data analytics",
                    "The customer has successfully migrated more than 46 metrics from 4 critical datasets from excel sheet into the SAP BW Platform for their daily, weekly and monthly reporting empowered by our design principles on Power BI platform",
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
            <SEO title="OIL AND GAS" />

            <div id="pageHeader" >
                <div className="vc-parent">
                    <div className="vc-child">
                        <Breadcrumb>
                            <Breadcrumb.Item href="/">HOME</Breadcrumb.Item>
                            <Breadcrumb.Item active>OIL AND GAS</Breadcrumb.Item>
                        </Breadcrumb>
                        <section className="page-title">
                            <h1>OIL AND GAS</h1>
                        </section>
                    </div>
                </div>
            </div>

            <div id="blog">
                <div className="container">
                    <div className="row">
                        {/* <div className="post-img">
                            <img src="/img/blog-posts/blog00.jpg" alt="" class="img-responsive" />
                        </div> */}
                        <br />
                        <div className="wpb_wrapper">
                            <p className="justified">
                                Avows specialises in various industry verticals including Oil & Gas sector. With our broad understanding on the Upstream, Downstream and B2B business operations; our technology expertise can be rightly leveraged to further our client’s business outcome towards becoming an operational excellence powerhouse.
                            </p>
                            <p className="justified">
                                Our core solution includes customised mobile/web applications, Internet of Things (IoT), Advanced Analytics & Big Data, Robotic Process Automation (RPA) & Chatbots, AI/ML, and Augmented and Virtual Reality technologies.
                            </p>
                            <p className="justified">
                                We value our client objectives of attaining optimal business goals in order to stay competitive in business by coupling our digital transformation consultancy to continuously advocate our client’s future technology roadmap that reduces cost intensive processes in existing business practice.
                            </p>
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
                            {/* <Tabs defaultActiveKey={data[0].key} transition={false} id="noanim-tab-example">
                                {
                                    data.map((data, index) => (
                                        <Tab key={index} eventKey={data.key} title={data.title}>
                                            <br />
                                            <h3><strong>{data.title}</strong></h3>

                                            <Figure style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                                                <Figure.Image
                                                    key={data.image}
                                                    width={300}
                                                    height={500}
                                                    src={data.image[0]}
                                                />

                                                <Figure.Image
                                                    key={data.image}
                                                    width={300}
                                                    height={500}
                                                    src={data.image[1]}
                                                />
                                            </Figure>

                                            <section>
                                                <h3 className="text-primary">About the Client</h3>
                                                <p className="p1 text-justify">{data.about}</p>
                                            </section>
                                            <section>
                                                <h3 className="text-primary">Challenges</h3>
                                                <p className="p1 text-justify">{data.challenge[0]}</p>
                                                <p className="p1 text-justify">{data.challenge[1]}</p>
                                            </section>
                                            <section>
                                                <h3 className="text-primary">Solution</h3>
                                                <p className="p1 text-justify">{data.solution[0]}</p>
                                                <p className="p1 text-justify">{data.solution[1]}</p>
                                            </section>
                                            <section>
                                                <h3 className="text-primary">Benefits</h3>
                                                <ul>
                                                    <li>{data.benefit[0]}</li>
                                                    <li>{data.benefit[1]}</li>
                                                    <li>{data.benefit[2]}</li>
                                                    <li>{data.benefit[3]}</li>
                                                    <li>{data.benefit[4]}</li>
                                                </ul>
                                            </section>
                                            <section>
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
                                            </section> 
                                        </Tab>
                                    ))}

                            </Tabs> */}
                        </div>

                    </div>
                </div>
            </div>

        </Layout >
    )
}

export default Energy