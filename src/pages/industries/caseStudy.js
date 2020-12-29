import React from "react"
//import { Link } from "gatsby"
import Layout from "../../components/layouts/layout"
import SEO from "../../components/seo";
import { Col, Row } from 'react-bootstrap';
//import { FaLinkedinIn } from "@react-icons/all-files";

const CaseStudy = () => {


    return (
        <Layout>
            <SEO title="AVOWS" />

            <div id="pageHeader" >
                <div className="vc-parent">
                    <div className="vc-child">
                        <section className="page-title">
                            <h2>Title</h2>
                            <ul className="text-center">
                                <li className="list-unstyled text-danger">
                                    {/* <Link className="text-white" href="/">Home /</Link> Banking */}
                                </li>
                                {/* <li className="list-unstyled active">Blog</li> */}
                            </ul>
                        </section>
                    </div>
                </div>
            </div>

            <div className="container p-4">
                <Row md={4}>
                    <Col>
                        <h6 className="text-dark"><b>Client</b></h6>
                        <h6>name</h6>
                    </Col>
                    <Col>
                        <h6 className="text-dark"><b>Industires</b></h6>
                        <h6>name</h6>
                    </Col>
                    <Col>
                        <h6 className="text-dark"><b>Service</b></h6>
                        <h6>a</h6>
                        <h6>a</h6>
                        <h6>a</h6>
                        <h6>a</h6>
                    </Col>
                    <Col className="ml-auto">
                    <Row sx={4} md={1} lg={5}>
                        {/* <Col><FaLinkedinIn /></Col> */}
                    </Row>
                    </Col>
                </Row>
            </div>

            <div clasName="container p-4">
            <section>
                <h3>About the Client</h3>
                <p>Customer is a large Insurance Services provider in Malaysia providing both general and family Insurance in Malaysia and is currently one of the leading insurance providers in Malaysia.</p>
            </section>
            <section>
                <h3>Challenge</h3>
            </section>
            <section>
                <h3>Solution</h3>
            </section>
            <section>
                <h3>Benefits</h3>
            </section>
            <section>
                <h2>Customer testimoni</h2>
            </section>
            </div>

        </Layout>

    )
}

export default CaseStudy;