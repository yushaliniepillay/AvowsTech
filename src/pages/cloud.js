import React from "react"
import Layout from "../components/layouts/layout"
import SEO from "../components/seo"
import "../components/header/header.css";
import { Tabs, Tab } from 'react-bootstrap';

// var imageName = require('../images/our_ceo.jpg')

const cloud = () => (
    <Layout>
        <SEO title="Cloud Technologies" />
        <div id="pageHeader" >
            <div className="vc-parent">
                <div className="vc-child">
                    <section className="page-title">
                        <h2>CLOUD TECHNOLOGIES</h2>
                        {/* <p className="breadcrumb text-centre">We provide enterprises with agility with our focus on customer centric journeys
                                to drive their digital transformation initiatives</p> */}
                        <ul className="text-center">
                            <li className="list-unstyled">
                                We leverage the power of Cloud technologies to enable customers to achieve desired results
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>

        <div id="blog" class="page blog-details-page">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 blog-page-content post-details">
                        <div class="post-img">
                            <img src="/imgages/app_development_banner.jpg" alt="" class="img-responsive" />
                        </div>
                        <div>
                            <p class="justified"> We have a dedicated in-house “Cloud Wizarding” team who can
                            help transform and empower our enterprise customers Cloud Transformation Journey
                            with both solution advisory and technology expertise.
                            </p>
                            <p class="justified"> Our cloud professional services scope includes in the areas as listed below:</p>
                            <ul>
                                <li>Professional Cloud Consultancy & Advisory</li>
                                <li>Cloud Integration & Migration Services</li>
                                <li>Cloud Application Development & Deployment Services</li>
                            </ul>
                            <br />
                            <div class="vc_column-inner ">
                                <div class="wpb_wrapper">
                                    <div class="vc_empty_space" >
                                        <span class="vc_empty_space_inner"></span>
                                    </div>
                                    <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
                                        <Tab eventKey="MCE" title="Multi-Cloud Experience">
                                            <br />
                                            <strong>Multi-Cloud Experience</strong>
                                            <p class="justified"><br />Leveraging on our in-house multi-cloud expertise to have a
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
                                            <p class="justified"><br />Migration and integration related
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
                                            <p class="justified"><br />Seamless migration strategy
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