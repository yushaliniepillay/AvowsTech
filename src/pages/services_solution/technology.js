import React from "react"
import Layout from "../../components/layouts/layout"
import SEO from "../../components/seo"
//import "../../components/header/header.css";
import { Tabs, Tab } from 'react-bootstrap';


const technology = () => {

    var imageName = require('../../components/images/background/mobile2.jpg')
    
    return (
        <Layout>
            <SEO title="Technology Service" />
            <div id="pageHeader4"  >
                <div className="vc-parent">
                    <div className="vc-child">
                        <section className="page-title">
                            <h2>TECHNOLOGY SERVICE</h2>
                            {/* <p className="breadcrumb text-centre">We provide enterprises with agility with our focus on customer centric journeys
                                to drive their digital transformation initiatives</p> */}
                            <ul className="text-center">
                                <li className="list-unstyled">
                                    We provide enterprises with agility with our focus on customer centric journeys
                                    to drive their digital transformation initiatives
                            </li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>

            <div id="blog" className="page blog-details-page">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 blog-page-content post-details">
                            <div className="post-img">
                                <img src={imageName} alt="" class="img-responsive" style={{height: '450px'}}/>
                            </div>
                            <div>
                                <p className="justified"> Enhance customer experience with optimised software performance by aligning your IT
                                deliverables with business goals. We have 11+ years’ experience in delivering next-generation services and
                                leverage the best of Agile, DevOps and Industryleading governance model, helping you to increase innovation and
                                business responsiveness.
                            </p>
                                <h4>Bringing Business and IT Closer</h4>
                                <p className="justified"> Our services span the end-to-end technology change process from inception to live,
                                so that you can deliver value continuously and meet your users’ needs,
                                while managing risk and maintaining quality control.
                            </p>
                                <ul>
                                    <li>Digital Experience Management</li>
                                    <li>Business Software and Application Development</li>
                                    <li>Managed Services and Technology Support</li>
                                    <li>Application Modernization</li>
                                </ul>
                                <p className="justified"> We offer a range of services from the development of initial application requirements to
                                the global management of the entire application portfolio. Throughout the project lifecycle, our focus is on the
                                organization and providing measurable results using next-gen approach like Agile and DevOps.
                            </p>

                                <div className="vc_column-inner ">
                                    <div className="wpb_wrapper">
                                        <div className="vc_empty_space" >
                                            <span className="vc_empty_space_inner"></span>
                                        </div>
                                        <Tabs defaultActiveKey="Business" transition={false} id="noanim-tab-example">
                                            <Tab eventKey="Business" title="Business Software and Application Development">
                                                <br />
                                                <strong>Business Software and Application Development</strong>
                                                <p className="p1 text-justify">
                                                    <span className="s1">Our customer application development support both legacy and modern
                                                    platforms with deep industry expertise. Modern application development platforms include .Net, Java,
                                                Web Services, SalesForce Automation, and many others.</span>
                                                </p>
                                                <ul>
                                                    <li>Implementation Services</li>
                                                    <li>Operation Services</li>
                                                    <li>Packaged Applications</li>
                                                    <li>Application Maintenance</li>
                                                    <li>Custom Development</li>
                                                </ul>
                                            </Tab>
                                            <Tab eventKey="Mobile" title="Mobile and Web Development">
                                                <br />
                                                <strong>Mobile and Web Development</strong>
                                                <p className="p1 text-justify">
                                                    <span className="s1">Create next-gen apps designed for iOS &amp; Android starting from our
                                                    high-performance boiler-plate that provides maximum compatibility across hardware &amp;
                                                    software which are accessible by most mobile platforms and devices through employing multi
                                                platform mobile development techniques.</span>
                                                </p>
                                                <ul>
                                                    <li>Design Thinking</li>
                                                    <li>Mobile Engineering</li>
                                                    <li>Personal Digital Assistant</li>
                                                    <li>Website Design</li>
                                                </ul>
                                                <p className="p1 text-justify">
                                                    <span className="s1">Our team of mobile web app developers includes qualified UX designers,
                                                    visual designers and software engineers with unparalleled knowledge and experience working
                                                    with JavaScript-based frameworks (like ReactJS, AngularJS, Ember.js, Backbone.js), CSS3,
                                                    HTML5, jQuery Mobile, jQTouch, Sencha, SproutCore, PhoneGap, Responsive Web and Mobile First
                                                design approaches as well as ASP.NET mobile web development.</span>
                                                </p>
                                            </Tab>
                                            <Tab eventKey="Managed" title="Managed Services Technology Support">
                                                <br />
                                                <strong>Managed Services Technology Support</strong>
                                                <p className="p1 text-justify">
                                                    <span className="s1">Avows Managed Services combine helpdesk, maintenance and enhancement
                                                services to help enterprises to improve operational continuity.</span>
                                                </p>
                                                <ul>
                                                    <li>Application Helpdesk Service</li>
                                                    <li>Support and Maintenance Services</li>
                                                    <li>Routine and Preventive Maintenance</li>
                                                    <li>Infrastructure Managed Services</li>
                                                    <li>Application Enhancement and Value Add Services</li>
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
}

export default technology;