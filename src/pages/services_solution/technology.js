import React from "react"
import Layout from "../../components/layouts/layout"
import SEO from "../../components/seo"
//import "../../components/header/header.css";
import { Tabs, Tab, Breadcrumb, Row, Col } from 'react-bootstrap';


const technology = () => {

    var imageName = require('../../components/images/background/mobile2.jpg')

    const tech =
        [
            {
                id: 0,
                key: "A",
                title: "Business Software and Application Development",
                descp: [
                    "Our customer application development supports both legacy and modern platforms with deep industry expertise. Modern application development platforms include .Net, Java, Web Services, SalesForce Automation, and many others."
                ],
                item: [
                    "Implementation Services",
                    "Operation Services",
                    "Packaged Applications",
                    "Application Maintenance",
                    "Custom Development",
                ]
            },
            {
                id: 1,
                key: "B",
                title: "Mobile and Web Development",
                descp: [
                    "Create next-gen apps designed for iOS & Android starting from our high-performance boiler-plate that provides maximum compatibility across hardware & software which are accessible by most mobile platforms and devices through employing multi-platform mobile development techniques.",
                    "Our team of mobile web app developers includes qualified UX designers, visual designers and software engineers with unparalleled knowledge and experience working with JavaScript-based frameworks (like ReactJS, AngularJS, Ember.js, Backbone.js), CSS3, HTML5, jQuery Mobile, jQTouch, Sencha, SproutCore, PhoneGap, Responsive Web and Mobile First design approaches as well as ASP.NET mobile web development."
                ],
                item: [
                    "Design Thinking",
                    "Mobile Engineering",
                    "Personal Digital Assistant",
                    "Website Design"
                ]
            },
            {
                id: 2,
                key: "C",
                title: "Managed Services Technology Support",
                descp: [
                    "Avows Managed Services combine helpdesk, maintenance and enhancement services to help enterprises improve operational efficiency."
                ],
                item: [
                    "Application Helpdesk Service",
                    "Support and Maintenance Services",
                    "Routine and Preventive Maintenance",
                    "Infrastructure Managed Services",
                    "Application Enhancement and Value-add Services",
                ]
            }
        ]


    return (
        <Layout>
            <SEO title="TECHNOLOGY SERVICE" />
            <div id="pageHeader4"  >
                <div className="vc-parent">
                    <div className="vc-child">
                        <Breadcrumb>
                            <Breadcrumb.Item href="/">HOME</Breadcrumb.Item>
                            <Breadcrumb.Item active>TECHNOLOGY SERVICE</Breadcrumb.Item>
                        </Breadcrumb>
                        <section className="page-title">
                            <Row>
                                <Col md={4}> </Col>
                                <Col md={5}>
                                    <h1 className="mb-5">TECHNOLOGY SERVICE</h1>
                                    <p className="text-center text-white">We provide enterprises with agility with our focus on customer centric journeys
                                    to drive their digital transformation initiatives</p>
                                </Col>
                            </Row>
                        </section>
                        {/* <section className="page-title">
                            <h2>TECHNOLOGY SERVICE</h2>
                             <p className="breadcrumb text-centre">We provide enterprises with agility with our focus on customer centric journeys
                                to drive their digital transformation initiatives</p>
                            <ul >
                                <li className="list-unstyled">
                                    We provide enterprises with agility with our focus on customer centric journeys
                                    to drive their digital transformation initiatives
                            </li>
                            </ul>
                        </section> */}
                    </div>
                </div>
            </div>

            <div id="blog" className="page blog-details-page">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 blog-page-content post-details">
                            <div className="post-img">
                                <img src={imageName} alt="" class="img-responsive" style={{ height: '550px' }} />
                            </div>
                            <div>
                                <p className="justified"> Enhance customer experience with optimised software performance by aligning IT
                                deliverables with business goals. We have more than 11 years experience in delivering next-generation services and
                                leveraging the best of Agile, DevOps and Industry leading governance models, helping you to increase innovation and
                                business responsiveness.
                            </p>
                                <h4>Bringing Business and IT Closer</h4>
                                <p className="justified"> Our services span the end-to-end technology change process from inception to live, 
                                so that you can deliver value continuously and meet your users’ expectation, while managing risk and maintaining quality.
                            </p>
                                <ul>
                                    <li>Digital Experience Management</li>
                                    <li>Business Software and Application Development</li>
                                    <li>Managed Services and Technology Support</li>
                                    <li>Application Modernization</li>
                                </ul>
                                <p className="justified"> We offer a range of services from idea conception, business requirements to
                                the global management of the entire application portfolio. Throughout the project lifecycle, our focus is on the
                                organization and providing measurable results using next-gen approach like Agile and DevOps.
                            </p>

                                <div className="vc_column-inner ">
                                    <div className="wpb_wrapper">
                                        <div className="vc_empty_space" >
                                            <span className="vc_empty_space_inner"></span>
                                        </div>
                                        <Tabs defaultActiveKey={tech[0].key} className="nav-tabs">
                                            {tech.map((tec, index) => (
                                                <Tab tabClassName="nav-tab" key={index} eventKey={tec.key} title={tec.title}>
                                                    <br />
                                                    <h3><strong>{tec.title}</strong></h3>
                                                    <p className="p1 text-justify">{tec.descp[0]}</p>
                                                    <ul>
                                                        {tec.item.map((tech, i) => (
                                                            <li key={i}>{tech}</li>
                                                        ))}
                                                    </ul>
                                                    <p className="p1 text-justify">{tec.descp[1]}</p>
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

export default technology;