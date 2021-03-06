import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layouts/layout"
import SEO from "../components/seo"
import { Breadcrumb, Row, Col } from 'react-bootstrap';

const Careers = () => (
    
    <Layout>
        <SEO title="CAREERS" />

        <div id="pageHeader2" >
            <div className="vc-parent">
                <div className="vc-child">
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">HOME</Breadcrumb.Item>
                        <Breadcrumb.Item active>CAREERS</Breadcrumb.Item>
                    </Breadcrumb>
                    <section className="page-title">
                        <Row>
                            <Col md={4}> </Col>
                            <Col md={4}>
                                <h1>CAREERS</h1>
                            </Col>
                        </Row>
                    </section>
                </div>
            </div>
        </div>

        {/* why join avows */}
        <div id="blog">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <section>
                            <h2 className="section-title"><span></span>WHY JOIN AVOWS?</h2>
                        </section>
                    </div>
                </div>
                <div className="mdl-card mdl-shadow--2dp">
                    <div className="vc_empty_space" >
                        <span className="vc_empty_space_inner"></span>
                    </div>
                    <div className="wpb_text_column wpb_content_element ">
                        <div className="wpb_wrapper">
                            <p>Avows hires some of the most creative and forward-thinking individuals.
                                 At Avows, we have people coming from a wide range of cultural, educational and geographic backgrounds who work together 
                                 with passion to deliver results.
                            </p>
                            <br /><b>OUR PEOPLE</b><br />
                            <p>At Avows, we hire and train individuals to enhance their talents, create value, and foster innovation-led solutions 
                                for the benefit of our customers. Our people come from diverse backgrounds with multi-disciplinary skills and strong 
                                educational credentials. We encourage an entrepreneurial spirit among our employees that helps us to respond quickly and 
                                successfully to new opportunities while consistently improve our processes and methodologies - resulting  in detailed 
                                analysis and productive recommendations for our clients.
                                    </p>
                            <br />
                            <p>At Avows, employee development is fostered through a collaborative, 
                                intellectually challenging work environment that emphasises mutual respect, leadership, and measured risk-taking.
                             </p>

                            <br /><b>OUR CULTURE</b><br />
                            <p>
                                Avows aims to be an inclusive organisation where everyone is treated with respect and dignity, with equal opportunity
                                 for all. We pledge to respect and value the diversity of all our staff and clients, where all of Avows’ staff 
                                 understand and respect the diverse communities we operate in and where everyone has the right to be treated with
                                  dignity regardless of race, nationality, gender etc., in light of the Avows ‘Equal Opportunity’ policy all times.
                                   Corporate culture at Avows gives its employees the personal freedom to decide and accomplish on what they want to 
                                   achieve as their individual goals, while supporting the objectives of the company.
                             </p>
                            <br /><b>WHY JOIN AVOWS?</b><br /><br />
                            <ul>
                                <li>Be sure not to miss the fun at office everyday – for us work is definitely fun</li>
                                <li>To get incentivised every day, for dreaming and to dare your dreams</li>
                                <li>To get ready to change – just take the challenge, innovate and change</li>
                                <li>Try the Nirvana – bliss of continuous learning and unlearning</li>
                                <li>And we definitely understand your requirements for stretched coffee breaks at work</li>
                            </ul>
                            <br/>
                            <p>If you think you have what it takes to stand out in the vast technology landscape, come show us what you've got!</p>
                            <p>Send us your resume at
                                <tab> <Link href="mailto:info@avowstech.com">
                                    info@avowstech.com
                                </Link> </tab>
                                and we'll contact you to set up an interview if you're selected.
                            </p>

                        </div>

                    </div>
                </div>
            </div>
        </div>

        {/* career form */}
        <div id="blog">
            <div className="container">
                {/*  <div className="row">
                   <div className="col-md-12">
                        <section>
                            <h2 className="section-title"><span>Graduate Students</span>Apply here</h2>
                        </section>
                    </div> 
                </div>
                 <div className="row">
                    <iframe title="Avows Career" src="https://docs.google.com/forms/d/e/1FAIpQLSdn3i6c2WjKctZw3VlLoNXNn2a8-L643gswpFEKwj5dBQLQSw/viewform?embedded=true" width="100%" height="2800" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
                </div> */}
            </div>
        </div>

    </Layout>
)

export default Careers;
