import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layouts/layout"
import SEO from "../../components/seo";
import { Tabs, Tab } from 'react-bootstrap';

const HealthCare = () => {

    return (
        <Layout>
            <SEO title="AVOWS" />

            <div id="pageHeader" >
                <div className="vc-parent">
                    <div className="vc-child">
                        <section className="page-title">
                            <h2>HEALTH CARE</h2>
                            <ul className="text-center">
                                <li className="list-unstyled text-danger">
                                    <Link className="text-white" href="/">Home / </Link> Health Care</li>
                                {/* <li className="list-unstyled active">Blog</li> */}
                            </ul>
                        </section>
                    </div>
                </div>
            </div>

            <div id="blog">
                <div className="container">
                    <div className="row">
                        {/* <div class="post-img">
                            <img src="/img/blog-posts/blog00.jpg" alt="" class="img-responsive" />
                        </div> */}
                        <br />
                        <div className="wpb_wrapper">
                            <p class="justified">
                            </p>
  
                        </div>

                        <div>
                        <br />
                            <h2>Case Studies</h2>
                            <Tabs defaultActiveKey="Hospital" transition={false} id="noanim-tab-example">
                                <Tab eventKey="Hospital" title="Accelerating Supply Chain through Hospitals">
                                    <br />
                                    <h3><strong>Accelerating Supply Chain through Hospitals</strong></h3>
                                    <section>
                                        <h3 className="text-primary">About the Client</h3>
                                        <p class="p1 text-justify">A Leading Healthcare Hospital Group targeted for better forecasting
                                        and managing the Supply Chain effectively. The client is the largest hospital chain in SEA with
                                        more than 5,000 employees.
                                    </p>
                                    </section>
                                    <section>
                                        <h3 className="text-primary">Challenge</h3>
                                        <p class="p1 text-justify">
                                            The hospital chain wanted to have a better view and understanding of their supply chain and inventory.
                                            Data regarding inventories was lying in disparate systems and was lacking a unified view for any management
                                            executive analysis and decision making.
                                    </p>
                                    </section>
                                    <section>
                                        <h3 className="text-primary">Solution</h3>
                                        <p class="p1 text-justify">
                                            Through our supply chain visibility solution, Avows was able to bring data across together with a
                                            view of inventory available at each locations. The system was further equipped with AI ML techniques
                                            to forecast future inventories helping decision makers take inventory related decision such as placing
                                            an order at an appropriate time. The solution was aimed at solving ageing of inventory issues as well
                                            to eliminating wastages in perishable and manage by intelligent decision and usage of data.
                                    </p>
                                        <p class="p1 text-justify">
                                            Some Salient features of our Supply Chain Solution:
                                    </p>
                                        <ul>
                                            <li>Data Science Models like Multi Variate Time Series (Vector Auto Regression), Deep Learning Techniques
                                            like LSTM (Recurrent Neural Networks) and Advanced AI Techniques of ARIMA</li>
                                            <li>Drive KPI(s) and ROI via Forecast and Machine Learning Models</li>
                                            <li>Sanitize and Integrate data from various Heterogeneous Systems into Large Volumes of
                                            Structured, Semi-Structured, Unstructured data stored in “NoSQL storage” like Graph DB, Columnar DB,
                                            Key-Value DB and Document DB</li>
                                            <li>Effective Data Transformation using Python.</li>
                                            <li>Develop tools in GBQ using SQ</li>
                                        </ul>
                                    </section>
                                    <section>
                                        <image />
                                        <h3 className="text-primary">Benefits</h3>
                                        <p class="p1 text-justify">
                                            Situation of Overstocking was reduced and Days of Inventory were also reduced significantly.
                                    </p>
                                    </section>
                                    <section>
                                        {/* <h3 className="text-primary">Customer Testimonial</h3> */}
                                    </section>
                                </Tab>

                            </Tabs>
                        </div>


                    </div>
                </div>
            </div>


        </Layout>


    )
}
export default HealthCare;