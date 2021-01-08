import React from "react"
import Layout from "../../components/layouts/layout"
import SEO from "../../components/seo"
import { Tabs, Tab, Breadcrumb, Row, Col } from 'react-bootstrap';

var imageName = require('../../components/images/background/ar_vr1.jpg')

const ar_vr = () => (
    
    <Layout>
        <SEO title="Data Analytics & AI" />
        <div id="pageHeader" >
            <div className="vc-parent">
                <div className="vc-child">
                <Breadcrumb>
                        <Breadcrumb.Item href="/">HOME</Breadcrumb.Item>
                        <Breadcrumb.Item active>AR/VR</Breadcrumb.Item>
                    </Breadcrumb>
                    <section className="page-title">
                        <Row>
                            <Col md={4}> </Col>
                            <Col md={4}>
                                <h1 className="mb-5">AUGMENTED & VIRTUAL REALITY (AR/VR)</h1>
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
                            <p className="justified">Augmented Reality (AR) and Virtual Reality (VR) 
                            are the new game changers in today’s digital and physical worlds. 
                            AR/VR gives us the immersive, interactive and imaginative experience 
                            which allows you to visualize your information and content.
                            </p>
                            <p className="justified">Paired with a device, AR is able to help a business 
                            to generate more interaction with their customers by creating personalized 
                            and memorable content for industries such as retail, manufacturing, healthcare, 
                            training and education industry. VR lets you experience what it’s like to be 
                            anywhere and anytime - immersing yourself into a game to a country in the world. 
                            Mixed Reality (MR) interacts with both the real world and the virtual environment - 
                            enabling real time immersive experience.
                            </p>

                            <div className="vc_column-inner ">
                                <div className="wpb_wrapper">
                                    <div className="vc_empty_space" >
                                        <span className="vc_empty_space_inner"></span>
                                    </div>
                                    <Tabs defaultActiveKey="BD" transition={false} id="noanim-tab-example">
                                        <Tab eventKey="BD" title="AR/VR">
                                            <br />
                                            <strong>Augmented Reality/ Virtual Reality</strong>
                                            <ul><br />
                                                <li>3D AR/VR Model Creation Process</li>
                                                <li>Augmented Reality & IoT</li>
                                                <li>AR/VR in Retail</li>
                                                <li>Virtual Reality for training and education</li>
                                                <li>Virtual Reality for Real Estate</li>
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

export default ar_vr;