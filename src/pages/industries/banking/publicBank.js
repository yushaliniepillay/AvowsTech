import React from "react";
import Layout from "../../../components/layouts/layout";
import SEO from "../../../components/seo";
import { Breadcrumb, Container, Row, Col } from 'react-bootstrap';
import ReactPlayer from 'react-player/lazy'

const PublicBank = () => {

    const data =
        [
            {
                id: 0,
                key: "A",
                link: "/industries/banking/publicBank",
                title: "Public Bank",
                image: [
                    require('../../industries/InImage/pb_image.jpg')
                ],
                video: [
                    require('../../industries/video/PublicBank.mp4'),
                    "name",
                    "position",
                    "speaking something"
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
                            <Breadcrumb.Item href="/industries/banking/banking">BANKING</Breadcrumb.Item>
                            <Breadcrumb.Item active>PUBLIC BANK TESTIMONIAL</Breadcrumb.Item>
                        </Breadcrumb>
                        <section className="page-title">
                            <Row>
                                <Col md={4}> </Col>
                                <Col md={4}>
                                    <h1>PUBLIC BANK TESTIMONIAL</h1>
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
                                            <h4>About the Client</h4>
                                            <p className="text-justify" >{data.about}</p>
                                        </section>
                                        
                                        <section className="cs_about">
                                            <h4>Customer Testimonial</h4>
                                            <Container>
                                                <Row>
                                                    <Col md={6}>
                                                        <ReactPlayer url={data.video[0]}
                                                            width='100%'
                                                            height='100%' />
                                                    </Col>
                                                    <Col md={{ span: 3, offset: 1 }}>
                                                        <p>{data.video[3]}</p>
                                                    </Col>
                                                </Row>
                                            </Container>
                                            <p>{data.video[1]}</p>
                                            <p>{data.video[2]}</p>
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

export default PublicBank;
