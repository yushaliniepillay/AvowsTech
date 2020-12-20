import React from "react"
import Layout from "../components/layouts/layout"
import SEO from "../components/seo"
import "../components/header/header.css";
import { Tabs, Tab } from 'react-bootstrap';

// var imageName = require('../images/our_ceo.jpg')

const data = () => (
    <Layout>
        <SEO title="Data Analytics & AI" />
        <div id="pageHeader" >
            <div className="vc-parent">
                <div className="vc-child">
                    <section className="page-title">
                        <h2>DATA ANALYTICS AND AI</h2>
                        {/* <p className="breadcrumb text-centre">We provide enterprises with agility with our focus on customer centric journeys
                                to drive their digital transformation initiatives</p> */}
                        <ul className="text-center">
                            <li className="list-unstyled">
                                We aim to help organizations regardless of any sizes improve
                                their security processes, achieve compliance and protect their data
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

                        <div class="vc_column-inner ">
                            <div class="wpb_wrapper">
                                <div class="vc_empty_space" >
                                    <span class="vc_empty_space_inner"></span>
                                </div>
                                <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
                                    <Tab eventKey="FTM" title="Functional & Test Management">
                                        <br />
                                        <strong>Functional & Test Management</strong>
                                        <ul><br/>
                                            <li>End to End test management with high degree of quality assutance</li>
                                            <li>Optimal resource utilization with various industry best test tools</li>
                                            <li>Rapid QA cycles with reusable test artefacts</li>
                                        </ul>
                                    </Tab>
                                    <Tab eventKey="FA" title="Functional Automation">
                                        <br />
                                        <strong>Functional Automation</strong>
                                        <ul><br/>
                                            <li>Multiple proven functional automation frameworks for web, mobile and desktop applications</li>
                                            <li>Best suitable for applications with frequent changes</li>
                                            <li>Faster time to market with quick ROI</li>
                                        </ul>
                                    </Tab>
                                    <Tab eventKey="PT" title="Performance Testing">
                                        <br />
                                        <strong>Performance Testing</strong>
                                        <ul><br/>
                                            <li>Performance bottleneck causal analysis to identify the specific latency</li>
                                            <li>Analyse the Performance Vulnerabilities</li>
                                            <li>Creating, managing and maintaining test scripts in a timely and cost effective manner</li>
                                        </ul>
                                    </Tab>
                                </Tabs>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>



    </Layout>
)

export default data;