import React from "react"
import Layout from "../../components/layouts/layout"
import SEO from "../../components/seo"
//import "../../components/header/header.css";
import { Tabs, Tab, Breadcrumb, Row, Col } from 'react-bootstrap';

var imageName = require('../../components/images/background/testing_sub.jpg')

const cloud = () => (
    <Layout>
        <SEO title="Cloud Technologies" />
        <div id="pageHeader" >
            <div className="vc-parent">
                <div className="vc-child">
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">HOME</Breadcrumb.Item>
                        <Breadcrumb.Item active>CLOUD TECHNOLOGIES</Breadcrumb.Item>
                    </Breadcrumb>
                    <section className="page-title">
                        <Row>
                            <Col md={4}> </Col>
                            <Col md={5}>
                                <h1 className="mb-5">CLOUD TECHNOLOGIES</h1>
                                <p className="text-center text-white">We leverage the power of Cloud technologies to enable customers to achieve desired results.</p>
                            </Col>
                        </Row>
                    </section>
                </div>
            </div>
        </div>

        <div id="blog" className="page blog-details-page">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 blog-page-content post-details">
                        <div className="post-img">
                            <img src={imageName} alt="" class="img-responsive" />
                        </div>
                        <div>
                            <p className="justified"> We have a dedicated in-house “Cloud Wizarding” team who can
                            help transform and empower our enterprise customers Cloud Transformation Journey
                            with both solution advisory and technology expertise.
                            </p>
                            <p className="justified"> Our cloud professional services scope includes in the areas as listed below:</p>
                            <ul>
                                <li>Professional Cloud Consultancy & Advisory</li>
                                <li>Cloud Integration & Migration Services</li>
                                <li>Cloud Application Development & Deployment Services</li>
                            </ul>
                            <br />
                            <div className="vc_column-inner ">
                                <div className="wpb_wrapper">
                                    <div className="vc_empty_space" >
                                        <span className="vc_empty_space_inner"></span>
                                    </div>
                                    <Tabs className="tabClass" defaultActiveKey="MCE" transition={false} id="noanim-tab-example">
                                        <Tab eventKey="MCE" title="Multi-Cloud Experience">
                                            <br />
                                            <strong>Multi-Cloud Experience</strong>
                                            <p className="justified"><br />Leveraging on our in-house multi-cloud expertise to have a
                                                seamless experience of managing multi-tier workloads of both on-prem and cloud.
                                            </p>
                                            <ul>
                                                <li>Amazon Web Services</li>
                                                <li>Microsoft Azure</li>
                                                <li>Microsoft Azure Stack(Hybrid Cloud)</li>
                                                <li>Google Cloud Platform</li>
                                            </ul>
                                        </Tab>
                                        <Tab eventKey="MS" title="Microsoft Office Suite Implementation">
                                            <br />
                                            <strong>Microsoft Office Suite Implementation</strong>
                                            <p className="justified"><br />Migration and integration related
                                                services scope are our key focus area within the domains of Microsoft
                                                Office Suite.
                                            </p>
                                            <ul>
                                                <li>Microsoft Office 365 (Teams deployment & Configuration)</li>
                                                <li>Power BI </li>
                                                <li>Power Platform (PowerApps, Power Automate)</li>
                                                <li>Dynamics CRM implementation</li>
                                            </ul>
                                        </Tab>
                                        <Tab eventKey="DMC" title="Data Migration & Consultancy">
                                            <br />
                                            <strong>Data Migration & Consultancy</strong>
                                            <p className="justified"><br />Seamless migration strategy
                                                in order to liberate any business downtimes by mitigating risks of losing
                                                data in their digital transformation journey.
                                            </p>
                                            <ul>
                                                <li>DB Migration</li>
                                                <li>App Migration</li>
                                                <li>Cloud Backup and DR</li>
                                                <li>Pilot Deployments</li>
                                                <li>Go-Live cutover support</li>
                                            </ul>
                                        </Tab>
                                    </Tabs>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    </Layout>
)

export default cloud;