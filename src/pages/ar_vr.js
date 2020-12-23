import React from "react"
import Layout from "../components/layouts/layout"
import SEO from "../components/seo"
import "../components/header/header.css";
import { Tabs, Tab } from 'react-bootstrap';

// var imageName = require('../images/our_ceo.jpg')

const ar_vr = () => (
    <Layout>
        <SEO title="Data Analytics & AI" />
        <div id="pageHeader" >
            <div className="vc-parent">
                <div className="vc-child">
                    <section className="page-title">
                        <h2>AUGMENTED REALITY/ VIRTUAL REALITY (AR/VR)</h2>
                        {/* <p className="breadcrumb text-centre">We provide enterprises with agility with our focus on customer centric journeys
                                to drive their digital transformation initiatives</p> */}
                        <ul className="text-center">
                            <li className="list-unstyled">
                                
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
                            <img src="../imgages/ar_vr.png" alt="" class="img-responsive" />
                        </div>
                        <div>
                            <p class="justified">Augmented Reality (AR) and Virtual Reality (VR) 
                            are the new game changers in today’s digital and physical worlds. 
                            AR/VR gives us the immersive, interactive and imaginative experience 
                            which allows you to visualize your information and content.
                            </p>
                            <p class="justified">Paired with a device, AR is able to help a business 
                            to generate more interaction with their customers by creating personalized 
                            and memorable content for industries such as retail, manufacturing, healthcare, 
                            training and education industry. VR lets you experience what it’s like to be 
                            anywhere and anytime - immersing yourself into a game to a country in the world. 
                            Mixed Reality (MR) interacts with both the real world and the virtual environment - 
                            enabling real time immersive experience.
                            </p>

                            <div class="vc_column-inner ">
                                <div class="wpb_wrapper">
                                    <div class="vc_empty_space" >
                                        <span class="vc_empty_space_inner"></span>
                                    </div>
                                    <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
                                        <Tab eventKey="BD" title="AR/VR">
                                            <br />
                                            <strong>Augmented Reality/ Virtual Reality</strong>
                                            <ul><br />
                                                <li>3D AR/VR Model Creation Process</li>
                                                <li>Augmented Reality & IoT (inserts picture/video)</li>
                                                <li>AR/VR in shopping</li>
                                                <li>Virtual Reality for training and education (insert picture/video)</li>
                                                <li>Virtual Reality for Real Estate</li>
                                                <li>Use Cases for Mixed Reality (If any)</li>
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