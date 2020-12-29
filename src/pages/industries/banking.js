import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layouts/layout"
import SEO from "../../components/seo";
import { Button, Tabs, Tab } from 'react-bootstrap';
import ReactPlayer from 'react-player/lazy'

const Banking = () => {

    var v = require('../industries/video/PublicBank.mp4')
    
    return (
        <Layout>
            <SEO title="AVOWS" />

            <div id="pageHeader" >
                <div className="vc-parent">
                    <div className="vc-child">
                        <section className="page-title">
                            <h2>BANKING & FINANCIAL SOLUTION</h2>
                            <ul className="text-center">
                                <li className="list-unstyled text-danger">
                                    <Link className="text-white" href="/">Home /</Link> Banking</li>
                                {/* <li className="list-unstyled active">Blog</li> */}
                            </ul>
                        </section>
                    </div>
                </div>
            </div>

            <div id="blog" >
                <div className="container">
                    <div className="row">
                        {/* <div class="post-img">
                            <img src="/img/blog-posts/blog00.jpg" alt="" class="img-responsive" />
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
                            <Tabs defaultActiveKey="Anti" transition={false} id="noanim-tab-example">
                                <Tab eventKey="Anti" title="Anti-Money Laundering for Merchantrade">
                                    <br />
                                    <h3><strong>Anti-Money Laundering for Merchantrade</strong></h3>
                                    <section>
                                        <h3 className="text-primary">About the Client</h3>
                                        <p class="p1 text-justify">Client is a Money Services Business, Digital Payment Service and Mobile Virtual Network operator provider, based in Malaysia. The company’s core business is centered on international money transfers, foreign currency exchange, wholesale banknotes, digital payment processing and mobile telecommunications. It is Asia’s Leader in Digital Payments & Communications.
                                        </p>
                                    </section>
                                    <section>
                                        <h3 className="text-primary">Challenge</h3>
                                        <p class="p1 text-justify">
                                            As regulatory bodies across the globe enforce stricter regulations, banks & financial institutions are facing compliance challenges. As financial activity increases along with digital means, there will be an ever-growing increase in needs to detect fraudulent money movements and patterns involving more and more digital investigations.
                                        </p>
                                        <p class="p1 text-justify">Client was looking to adopt an AML solution for its banking enterprise to comply with regulatory requirements through unified and consistent watch list screening at the same time also create value through effective weeding out of fraudulent participants on its network. Some of the other concerns were to have a low maintenance solution, effective with less false alarms to help optimize usage of resources.
                                        </p>
                                    </section>
                                    <section>
                                        <h3 className="text-primary">Solution</h3>
                                        <p class="p1 text-justify">Avows partnered with the client to provide an AML solution that matched their requirements in term of being fully equipped to weed out unnecessary noise, effective screening and comprehensive detection of suspicious transactions in real time. Our Anti-money laundering solutions comprises of proven methodologies that we use to detect more and more behavioural characteristics to classify risks and threats as authentic. Over time, our solution is capable of learning and integrating new patterns that emerge out of newer fraudulent ways the scammers or money launderers adopt hence making it increasingly difficult for them to beat the system.
                                        </p>
                                        <p class="p1 text-justify">
                                            Our solution helps this remittance institutions through all AML aspects and stages. Our integrated system offers an end-to-end anti-money laundering solution with components which can also be used as stand-alone applications. This has given an opportunity to go for one-off investment by the customer to acquire multiple peripheral solutions on top of existing core applications or systems.
                                    </p>
                                    </section>
                                    <section>
                                        <h3 className="text-primary">Benefits</h3>
                                        <ul>
                                            <li>Our solution incorporates modern technologies like AI, ML and robotic automation along with audio/facial recognition and document verification to allow organizations manage their compliance 100 percent and predict fraudulent behaviour patterns which reduce unaccounted damages.</li>
                                            <li>Smart Automation with 360 degree and round the clock surveillance to combat money laundering, providing real time alerts for action.</li>
                                            <li>Achieved real-time risk visibility and accelerate screening and monitoring with industry-proven tools -
                                                <li>Identity Verification</li>
                                                <li>Sanctions, PEPs and Enforcements Data</li>
                                                <li>Account and Payment Screening</li>
                                            </li>
                                        </ul>
                                    </section>
                                    <section>
                                        <h3 className="text-primary">Customer Testimonial</h3>
                                        <ReactPlayer url={v} />
                                    </section>
                                </Tab>
                            </Tabs>
                        </div>


                    </div>
                </div>



                {/* <div className="container">
                    <Button variant="primary" href="/industries/caseStudy">Case Study</Button>{' '}
                </div> */}

            </div>


        </Layout>
    )
}
export default Banking;