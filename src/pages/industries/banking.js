import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layouts/layout"
import SEO from "../../components/seo";
import { Button } from 'react-bootstrap';

const Banking = () => (

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

        <div id="blog">
            <div className="container">
                <div className="row">
                    <div class="col-md-12 blog-page-content post-details">
                        <div class="post-img">
                            <img src="/img/blog-posts/blog00.jpg" alt="" class="img-responsive" />
                        </div>
                        <div className="wpb_wrapper">
                            <p>Banking has been a traditional consumer of IT services and a key priority 
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
                    </div>
                </div>
            </div>

            <div className="container p">
            <Button variant="primary" href="/industries/caseStudy">Case Study</Button>{' '}
            </div>
        </div>


    </Layout>


)

export default Banking;