import React from "react";
import Layout from "../../components/layouts/layout";
import SEO from "../../components/seo";
import { Figure } from 'react-bootstrap';

const blog_04 = () => {

    const data =
        [
            {
                image: require('../blog_details/image/avowsaward2021/AvowsAwardPicture.png')
            },
            // {
            //     image: require('../blog_details/image/annualDinner/HWT_4607.jpg')
            // }
        ]


    return (
        <Layout>
            <SEO title="Blog" />

            <div id="pageHeader1" >
                <div className="vc-parent">
                    <div className="vc-child">
                        <section className="page-title">
                            <h2>AVOWS RECOGNIZED FOR OPERATIONAL EXCELLENCE IN IT</h2>
                        </section>
                    </div>
                </div>
            </div>

            <div id="blog">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 blog-page-content post-details">
                            <div className="post-img">
                                <img src="/img/blog-posts/blog00.jpg" alt="" className="img-responsive" />
                            </div>
                            <div className="wpb_wrapper">
                                <br/>
                                <p>
                                    Friday, 10 December 2021 – Outsourcing Malaysia (OM) – A PIKOM Chapter had organized the 11th GBS Asia Awards 2021 on Friday, 10 December 2021 to recognize the achievements of top companies and individuals in the field of Information Technology.
                                </p>

                                <p>
                                    Avows received special recognition for constructing and launching a public sector project known as the ‘Road Asset Management and Maintenance System (RAMMS)’ to maintain infrastructure and assets for society with public participation.
                                </p>

                                <p>
                                    Avows’ Delivery Team leveraged on considerable experience in leading this digital transformation project. We not only created a completely digital and mobile platform, but also incorporated the long-term wish-list of the state in its design principles to manage and measure the operations delivered through the implementation and launching of an extendable product with continuous growth.
                                </p>
                                <br/>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                        {data.map(data => (
                            <Figure>
                                <Figure.Image
                                    key={data.image}
                                    width={600}
                                    height={900}
                                    alt="171x180"
                                    src={data.image}
                                />
                            </Figure>
                        ))}
                    </div>

                </div>
            </div>

        </Layout>

    )
}

export default blog_04;
