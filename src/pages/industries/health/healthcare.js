import React from "react"
import Layout from "../../../components/layouts/layout"
import SEO from "../../../components/seo";
import { Card, Breadcrumb} from 'react-bootstrap';

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
                    "Sanitise and Integrate data from various Heterogeneous Systems into Large Volumes of Structured, Semi-Structured, Unstructured data stored in “NoSQL storage” like Graph DB, Columnar DB, Key-Value DB and Document DB",
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
            <SEO title="HEALTHCARE" />

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
                            Technology is changing the landscape of the world and leading us to a more sophisticated future technical world. The emerging role of ICT has had a huge impact on healthcare. It enhances the quality of care, increases patient security and data protection, and reduces operating and administrative expenses.
                            </p>
                            <p className="justified">
                            Telecommunication devices are more user-friendly and used by huge population across the world. Which have almost eliminated the communication gaps. Therefore, accessibility to information has become simple using ICT and people find themselves more relaxed while availing healthcare service.
                            </p>
                            <p className="justified">
                            There are various challenges faced by the Healthcare sectors such as storing medical records of the patients, maintaining Hospital Information System, maintenance of medical equipment, controlling errors in medication and a lot more. Now hospitals depend on ICT to revamp the whole process of the healthcare sector. Through ICT, the urban–rural disparities have been shortened, if not broken. If a doctor has the right communications channel it is easy to deliver treatment and the patient who can be located anywhere across the world. The system helps the doctor to continuously monitor the patient’s status, diagnostic, and their current health condition. The doctor can also interact with patients, make recommendations for medical examination, and prescribe medicine.
                            </p>
                            <p className="justified">
                            The use of ICT in healthcare can be categorised into 4 main areas namely;
                            </p>
                            <ul>
                                <li>Health and Education</li>
                                <li>Hospital Management System</li>
                                <li>Health Research</li>
                                <li>Health Data Management</li>
                            </ul>
                            <p className="justified">
                            In this digital era, people can easily seek, access, learn and communicate with others within a quick span of time. This makes education accessible, available and open to all. Health education creates awareness among the public about communicable diseases, health status, prevention measures and various current diagnostic and therapeutic procedures. This gives freedom to the people to choose the best hospitals and doctors to approach for treatment and live their life healthily.
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