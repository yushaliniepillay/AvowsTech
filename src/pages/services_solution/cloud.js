import React from "react"
import Layout from "../../components/layouts/layout"
import SEO from "../../components/seo"
//import "../../components/header/header.css";
import { Tabs, Tab, Breadcrumb, Row, Col } from 'react-bootstrap';

var imageName = require('../../components/images/background/testing_sub.jpg')

const cloud = () => {

    const cloud =
        [
            {
                id: 0,
                key: "A",
                title: "Multi-Cloud Experience",
                descp: [
                    "Leveraging our in-house multi-cloud expertise to provide a seamless experience of managing multi-tier workloads of both on-prem and cloud."
                ],
                item: [
                    "Amazon Web Services",
                    "Microsoft Azure",
                    "Microsoft Azure Stack (Hybrid Cloud)",
                    "Google Cloud Platform",
                ]
            },
            {
                id: 1,
                key: "B",
                title: "Microsoft Office Suite Implementation",
                descp: [
                    "Migration and integration related services are our key focus areas within the domain of Microsoft Office Suite."
                ],
                item: [
                    "Microsoft Office 365 (Teams deployment & Configuration)",
                    "Power BI",
                    "Power Platform (PowerApps, Power Automate)",
                    "Dynamics CRM implementation"
                ]
            },
            {
                id: 2,
                key: "C",
                title: "Data Migration & Consultancy",
                descp: [
                    "Seamless migration strategy in order to liberate any business downtimes by mitigating risks of losing data in their digital transformation journey."
                ],
                item: [
                    "ADB Migration",
                    "App Migration",
                    "Cloud Backup and DR",
                    "Pilot Deployments",
                    "Go-Live cutover support",
                ]
            }
        ]


    return (
        <Layout>
            <SEO title="CLOUD TECHNOLOGIES" />
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
                                help transform and empower our enterprise customers' Cloud Transformation Journey
                                with both solution advisory and technology expertise.
                            </p>
                                <p className="justified"> Our cloud professional services scope includes:</p>
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
                                        <Tabs defaultActiveKey={cloud[0].key}  className="nav-tabs">
                                            {cloud.map((cll, index) => (
                                                <Tab tabClassName="nav-tab" key={index} eventKey={cll.key} title={cll.title}>
                                                    <br />
                                                    <h3><strong>{cll.title}</strong></h3>
                                                    <p className="p1 text-justify">{cll.descp[0]}</p>
                                                    <ul>
                                                        {cll.item.map((cloud, i) => (
                                                            <li key={i}>{cloud}</li>
                                                        ))}
                                                    </ul>
                                                </Tab>
                                            ))}
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
}

export default cloud;