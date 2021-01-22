import React from "react"
import Layout from "../../../components/layouts/layout"
import SEO from "../../../components/seo";
import { Card, Breadcrumb, Row, Col } from 'react-bootstrap';

const Banking = () => {

    //var v = require('../../industries/InImage/AML1.jpg')

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
                    "Avows partnered with the client to provide an AML solution that matched their requirements in term of being fully equipped to weed out unnecessary noise, effective screening and comprehensive detection of suspicious transactions in real time. Our Anti-money laundering solutions comprises of proven methodologies that we use to detect more and more behavioural characteristics to classify risks and threats as authentic. Over time, our solution is capable of learning and integrating new patterns that emerge out of newer fraudulent ways the scammers or money launderers adopt hence making it increasingly difficult for them to beat the system.",
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

    const cust_test =
        [
            {
                id: 0,
                key: "A",
                link: "/industries/banking/publicBank",
                title: "Client From One of the Leading Banks in Malaysia",
                image: [
                    require('../../industries/InImage/pb_image.jpg')
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
            <SEO title="BANKING" />

            <div id="pageHeader9" >
                <div className="vc-parent">
                    <div className="vc-child">
                        <Breadcrumb>
                            <Breadcrumb.Item href="/">HOME</Breadcrumb.Item>
                            <Breadcrumb.Item active >BANKING</Breadcrumb.Item>
                        </Breadcrumb>
                        <section className="page-title">
                            <Row>
                                <Col md={4}> </Col>
                                <Col md={5}>
                                    <h1>BANKING & FINANCIAL SOLUTION</h1>
                                </Col>
                            </Row>
                        </section>
                    </div>
                </div>
            </div>

            <div id="blog" >
                <div className="container">
                    <div className="row">
                        {/* <div class="post-img">
                            <img src="/img/blog-posts/blog00.jpg" alt="" className="img-responsive" />
                        </div> */}
                        <br />
                        <div className="wpb_wrapper">
                            <p class="justified">Banking has been a traditional consumer of IT services and a key priority
                            area for Avows, the recent significant developments in Digital and new
                            technologies has spurred a growth in the demand for impeccable service
                            providers across Malaysia, we cater to all businesses be it retail banking,
                            lending services, NBFC’s, capital markets, fixed income etc.
                            </p>
                            <p>Banking Industry has been at the forefront of technology adoption, over
                            the past few years the way consumers interact with financial institutions
                            has changed a lot, thanks to the several digitization efforts taken by the
                            banks and other financial institutions. With the onset of Industrial Revolution 4.0
                            and 5G banking services, these are going to take new shapes further more.
                            At Avows we partner with clients in their Technology journey to enable them
                            to excel in their business and help them provide the best to their end consumers.
                            </p>
                            <p>Our Services and Solutions:</p>
                            <ul>
                                <li>Digital Banking</li>
                                <li>Digital Transformation</li>
                                <li>AML</li>
                                <li>E-KYC</li>
                                <li>Custom Application Development</li>
                                <li>Application Maintenance Services</li>
                                <li>Mobile banking</li>
                                <li>Enterprise Applications Implementations, Integrations and upgrades</li>
                                <li>Data and Analytics</li>
                                <li>Business Intelligence</li>
                                <li>Core Platforms</li>
                                <li>Payment Solutions</li>
                                <li>Card Services</li>
                                <li>Business Process Automation</li>
                            </ul>
                        </div>

                        <div>
                            <br />
                            <h2>Case Studies</h2>
                            <div className="ml-auto" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
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

                            <br />
                            <br />
                            <h2>Customer Testimonials</h2>
                            {cust_test.map(cust_test => (
                                <Card className="card shadow" style={{ width: '20rem', margin: '10px' }} >
                                    <div className="inner">
                                        <Card.Img variant="top" src={cust_test.image} />
                                    </div>
                                    {/* style={{ width: '20rem', height: '14rem' }} */}
                                    <Card.Body>
                                        <Card.Title>
                                            <section className="post-title">
                                                <h2><a href={cust_test.link}>{cust_test.title}</a></h2>
                                            </section>
                                        </Card.Title>

                                    </Card.Body>
                                </Card>
                            ))}

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
                                                    <li> {data.benefit[2]}
                                                        <ul>
                                                            <li>{data.benefit[3]}</li>
                                                            <li>{data.benefit[4]}</li>
                                                            <li>{data.benefit[5]}</li>
                                                        </ul>
                                                    </li>
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


        </Layout>

    )
}
export default Banking;