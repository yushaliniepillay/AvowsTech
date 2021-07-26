import React from "react"
import Layout from "../components/layouts/layout"
import SEO from "../components/seo"
import { Breadcrumb, Row, Col } from 'react-bootstrap';

const briberyCorruption = () => {



    return (
        <Layout>
            <SEO title="BRIBERY AND CORRUPTION" />

            <div id="pageHeader11" >
                <div className="vc-parent">
                    <div className="vc-child">
                        <Breadcrumb>
                            <Breadcrumb.Item href="/aboutUS">ABOUT US</Breadcrumb.Item>
                            <Breadcrumb.Item active>OUR STANCE AGAINST BRIBERY AND CORRUPTION</Breadcrumb.Item>
                        </Breadcrumb>
                        <section className="page-title">
                            <Row>
                                <Col md={4}> </Col>
                                <Col md={4}>
                                    <h1>OUR STANCE AGAINST BRIBERY AND CORRUPTION</h1>
                                </Col>
                            </Row>
                        </section>
                    </div>
                </div>
            </div>

            <div id="blog">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <section className="cs_about">
                                <h4>Declaration</h4>
                                <p className="text-justify" >Group Avows conducts its business professionally, with integrity and in compliance with the laws of those jurisdictions in which it operates. 
                                Our reputation for acting fairly is built on our values as a company and the values of our employees. 
                                As part of our commitment to ethical business practices, we will not tolerate acts of bribery or corruption. 
                                Our Anti-Bribery and Anti-Corruption (ABAC) Policy ensures that members of the Avows family, and those acting on our behalf, behave in a manner that is consistent with anti-bribery and corruption laws in all countries in which Avows does business.</p>
                            </section>

                            <section className="cs_about" >
                                <h4>Message from the Group CEO</h4>
                                    <p className="text-justify">At Group Avows, we are committed to maintain high standards of honesty, integrity, business ethics and corporate governance in line with laws and regulations in force in the jurisdictions we operate in.</p>
                                    <p className="text-justify">Avows has a zero-tolerance approach for giving or receiving of bribes or corrupt payments, in any form.  To receive and/or give bribe, and to become an aide to corrupt practices is absolutely prohibited, whether committed by employees or anyone else acting for and on the Company’s behalf. We also expect our representatives, vendors, and suppliers to share our commitment to integrity, and if we see signs that a relationship is unethical or could be engaging in corrupt conduct, we take steps to mitigate and ameliorate the matter.</p>
                                    <p className="text-justify">At Avows, we always are on the lookout to adopt fresh and innovative methods to combat and detect corruption. In line with this, our anti-corruption compliance program is designed to prevent, detect, and fix compliance issues.</p>
                                    <p className="text-justify">As part of our ongoing commitment to ensure the practice of the high ethical standards expected of us, we at Group Avows have designed protocols and policies to acquaint and familiarize the employees and all other associated persons with rules that any member or partner or supplier is committed to follow to contribute significantly to prevent and control dross, bribery, and corruption. It is the expectation of the Group Avows that our commitment to build a better World find resonance in even the most minor of forms.</p>
                                    <p className="text-justify">Ashok K Ramavath <br />Group CEO, Avows </p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>



        </Layout>
    );
}
export default briberyCorruption;