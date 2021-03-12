import React from "react"
import Layout from "../../../components/layouts/layout"
import SEO from "../../../components/seo";
import { Breadcrumb } from 'react-bootstrap';

const Manu = () => {



    return (
        <Layout>
            <SEO title="MANUFACTURING" />

            <div id="pageHeader" >
                <div className="vc-parent">
                    <div className="vc-child">
                        <Breadcrumb>
                            <Breadcrumb.Item href="/">HOME</Breadcrumb.Item>
                            <Breadcrumb.Item active>MANUFACTURING</Breadcrumb.Item>
                        </Breadcrumb>
                        <section className="page-title">
                            <h1>MANUFACTURING</h1>
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
                                Avows is well-equipped to assist Clients by building innovative, integrated solutions and services that can help in planning, designing, production, and integration of SMART manufacturing systems. Avows uses the latest tools and technologies in line with the challenges and demands of Industrial Revolution 4.0.
                            </p>

                            <p className="justified">
                                Avows aims to enhance the foundations of clients’ manufacturing processes by the simple three-fold combination of data-driven analysis, excellence in Emergent technologies, and an integrated Delivery channel. This allows for integration of technological, operational, and risk-management protocols to aid in delivering value for the Client while reducing disruption to their ongoing processes and ensuring smooth Digital transformation.
                            </p>

                            {/* <section className="intro">
                                <strong><p>Maximizing Efficiency</p></strong>
                                <p className="justified">
                                    One of the first ways that technology can improve your manufacturing business is by maximizing efficiency. This means that technology is able to ensure time is used in the best manner possible by cutting down production times and automating tedious as well as time-consuming tasks. An example of technology that could improve your business is 3D printing. This technology is transforming the manufacturing industry as it can reduce design to production time, reduce manufacturing lead time, reduce waste, and ensure greater flexibility in production. In fact, 3D printing is becoming so effective, workers in the manufacturing industry are worried they’re going to be replaced.
                            </p>
                            </section> */}

                        </div>


                    </div>
                </div>
            </div>


        </Layout>


    )
}
export default Manu;