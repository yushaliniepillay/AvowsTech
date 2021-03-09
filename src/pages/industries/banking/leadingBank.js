import React from "react";
import Layout from "../../../components/layouts/layout";
import SEO from "../../../components/seo";
import { Breadcrumb, Container, Row, Col } from 'react-bootstrap';
import ReactPlayer from 'react-player'

const LeadingBank = () => {

    const data =
        [
            {
                id: 0,
                key: "A",
                link: "/industries/banking/leadingBank",
                title: "Leading Bank",
                about: "Client from one of the leading banks in Malaysia",
                image: [
                    require('../../industries/InImage/pb_image.jpg')
                ],
                video: [
                    require('../../industries/video/PublicBank.mp4'),
                    "name",
                    "speaking something"
                ]

            }
        ]
    return (
        <Layout>
            <SEO title="BANKING" />

            <div id="pageHeader8" >
                <div className="vc-parent">
                    <div className="vc-child">
                        <Breadcrumb>
                            <Breadcrumb.Item href="/">HOME</Breadcrumb.Item>
                            <Breadcrumb.Item href="/industries/banking/banking">BANKING</Breadcrumb.Item>
                            <Breadcrumb.Item active>LEADING BANK TESTIMONIAL</Breadcrumb.Item>
                        </Breadcrumb>
                        <section className="page-title">
                            <Row>
                                <Col md={4}> </Col>
                                <Col md={4}>
                                    <h1>LEADING BANK TESTIMONIAL</h1>
                                </Col>
                            </Row>
                        </section>
                    </div>
                </div>
            </div>

            <div id="blog">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 blog-page-content post-details">
                            <div className="post-img">
                                {/* <img src="/img/blog-posts/blog00.jpg" alt="" className="img-responsive" /> */}
                                <br />
                            </div>

                            {
                                data.map(data => (
                                    <div>
                                        <section className="cs_about">
                                            {/* <h4>About the Client</h4> */}
                                            <br/><br/>
                                            <p className="text-justify" >{data.about}</p>
                                        </section>
                                        
                                        <section className="cs_about">
                                            <h4>Customer Testimonial</h4>
                                            <br/>
                                            <Container>
                                                <Row>
                                                <Col md={3}></Col>
                                                    <Col md={6}>
                                                        <ReactPlayer 
                                                        controls={true}
                                                        // playing={true}
                                                        // loop={true}
                                                        url={data.video[0]}
                                                            width='100%'
                                                            height='100%' />
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </section>
                                    </div>
                                ))}

                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default LeadingBank;
