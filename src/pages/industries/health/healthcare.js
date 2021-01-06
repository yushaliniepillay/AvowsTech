import React from "react"
import { Link } from "gatsby"
import Layout from "../../../components/layouts/layout"
import SEO from "../../../components/seo";
import { Card, Button, Breadcrumb, Container, Row, Col } from 'react-bootstrap';
import ReactPlayer from 'react-player/lazy'


const HealthCare = () => {


    const data =
        [
            {
                id: 0,
                link: "/industries/health/supplyChain",
                title: "Accelerating Supply Chain through Hospitals",
                about: "A Leading Healthcare Hospital Group targeted for better forecasting and managing the Supply Chain effectively. The client is the largest hospital chain in SEA with more than 5,000 employees.",
                challenge: [
                    "The hospital chain wanted to have a better view and understanding of their supply chain and inventory. Data regarding inventories was lying in disparate systems and was lacking a unified view for any management executive analysis and decision making."
                ],
                solution: [
                    "Through our supply chain visibility solution, Avows was able to bring data across together with a view of inventory available at each locations. The system was further equipped with AI ML techniques to forecast future inventories helping decision makers take inventory related decision such as placing an order at an appropriate time. The solution was aimed at solving ageing of inventory issues as well to eliminating wastages in perishable and manage by intelligent decision and usage of data.",
                    "Some Salient features of our Supply Chain Solution:",
                    "Data Science Models like Multi Variate Time Series (Vector Auto Regression), Deep Learning Techniques like LSTM (Recurrent Neural Networks) and Advanced AI Techniques of ARIMA",
                    "Sanitize and Integrate data from various Heterogeneous Systems into Large Volumes of Structured, Semi-Structured, Unstructured data stored in “NoSQL storage” like Graph DB, Columnar DB, Key-Value DB and Document DB",
                    "Effective Data Transformation using Python.",
                    "Develop tools in GBQ using SQ"
                ],
                benefit: [
                    "Situation of Overstocking was reduced and Days of Inventory were also reduced significantly."
                ],
                image: [
                    require('../../industries/InImage/medical1.jpg'),
                    require('../../industries/InImage/medical2.jpg'),
                    require('../../industries/InImage/medical4.jpg')
                ],
                video: [
                    //require('../industries/video/PublicBank.mp4'),
                    // "",
                    // "",
                    // ""
                ]

            }
        ]


    return (
        <Layout>
            <SEO title="AVOWS" />

            <div id="pageHeader" >
                <div className="vc-parent">
                    <div className="vc-child">
                        <Breadcrumb>
                            <Breadcrumb.Item href="/">HOME</Breadcrumb.Item>
                            <Breadcrumb.Item active>HEALTHCARE</Breadcrumb.Item>
                        </Breadcrumb>
                        <section className="page-title">
                            <h1>HEALTHCARE</h1>
                        </section>
                            
                    </div>
                </div>
            </div>

            <div id="blog">
                <div className="container">
                    <div className="row">
                        {/* <div className="post-img">
                            <img src="/img/blog-posts/blog00.jpg" alt="" class="img-responsive" />
                        </div> */}
                        <br />
                        <div className="wpb_wrapper">
                            <p className="justified">
                                The healthcare industry has proliferated on the global level, and is now going through an increased phase of consolidation. As this pace of consolidation gathers momentum, there is a pressing need for shared databases and records of medical histories of patients. This demand can only be addressed with the implementation of IT- and telecom-centric solutions. A number of technologies such as cloud computing, SaaS, and other software solutions developed specifically for the healthcare industry form an integral part of this trend. They are the key through which medical records and other applications can be effectively connected between healthcare facilities.
                            </p>
                            <h5>Professional Services</h5>
                            <p className="justified">
                                Avows provides you the opportunity to manage core responsibilities and collaborate with the augmented team the same way you do with your in-house developers.
                            </p>
                            <h5>Tech Services & Solution</h5>
                            <p className="justified">
                                Avows helps to design and build key platform components of the Customers’ Digital technology footprint with a  combination of our services & solutions knowledge of business processes and user-centered design principles.
                            </p>
                            <h5>Cloud Consulting</h5>
                            <p className="justified">
                                Avows offers Cloud technology expertise, resources, and tools — coupled with our extensive industry and business experience — to partner with you at every step of the journey to the Cloud.
                            </p>
                        </div>

                        <div>
                            <br />
                            <h2>Case Studies</h2>
                            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                                {data.map(data => (
                                    <Card className="card shadow" style={{ width: '20rem', margin: '10px' }} >
                                        <div className="inner">
                                            <Card.Img variant="top" src={data.image[0]} />
                                        </div>
                                        {/* style={{ width: '20rem', height: '14rem' }} */}
                                        <Card.Body>
                                            <Card.Title>
                                                <section className="post-title">
                                                    <h2><a href={data.link}>{data.title}</a></h2>
                                                </section>
                                            </Card.Title>

                                        </Card.Body>
                                    </Card>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </Layout>


    )
}
export default HealthCare;