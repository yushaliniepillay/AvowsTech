import React from "react";
import Layout from "../../components/layouts/layout";
import SEO from "../../components/seo";
import { Figure } from 'react-bootstrap';

const Blog_02 = () => {

    const data =
        [
            {
                image: require('../blog_details/image/tech2020/HWT_3656.jpg')

            },
            {
                image: require('../blog_details/image/tech2020/HWT_3667.jpg')

            },
            {
                image: require('../blog_details/image/tech2020/HWT_3749.jpg')

            },
            {
                image: require('../blog_details/image/tech2020/HWT_3787.jpg')

            },
            {
                image: require('../blog_details/image/tech2020/HWT_3789.jpg')

            },
            {
                image: require('../blog_details/image/tech2020/HWT_3795.jpg')

            },
            {
                image: require('../blog_details/image/tech2020/HWT_3846.jpg')

            },
            {
                image: require('../blog_details/image/tech2020/HWT_3857.jpg')

            },
            {
                image: require('../blog_details/image/tech2020/HWT_3898.jpg')

            },
            {
                image: require('../blog_details/image/tech2020/HWT_3987.jpg')

            },
            {
                image: require('../blog_details/image/tech2020/HWT_4010.jpg')

            },
            {
                image: require('../blog_details/image/tech2020/HWT_4166.jpg')

            },
            {
                image: require('../blog_details/image/tech2020/HWT_4186.jpg')

            },
            {
                image: require('../blog_details/image/tech2020/HWT_4189.jpg')

            },
            {
                image: require('../blog_details/image/tech2020/HWT_4206.jpg')

            },
            {
                image: require('../blog_details/image/tech2020/HWT_4209.jpg')

            }
        ]

    return (
        <Layout>
            <SEO title="Blog" />

            <div id="pageHeader1" >
                <div className="vc-parent">
                    <div className="vc-child">
                        <section className="page-title">
                            <h2>TECHCONNECT 2020: BUSINESS SIMPLIFIED BY TECHNOLOGY</h2>
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
                                <p>Friday, 20 December 2019 – TechConnect 2020 is a conference conducted by Avows to shed light on future trends in the IT industry in Malaysia and to provide opportunities for exchanging ideas among leading CXOs and Industry Leaders. The event started with IDC contributing on the topic of “IT Services Market Landscape and Opportunities in Malaysia”, was followed with a presentation by Dr. Dzahar Mansor, Chief Technology Officer of Microsoft on Cloud Technology in the Malaysian Market.
                            </p>

                                <p>Moderated by Mr. Stan Singh, a Panel Discussion with noted industry experts in the IT Services industry in Malaysia focussed on the challenges and Strategies in Newer Technologies for the Enterprise-Skills Gap
                            </p>

                                <p>The event concluded with an award session where the winners of the university-level coding contest, conducted by Avows in support of DNA23 initiative of future proofing as part of AVOWS- Corporate Digital Responsibility (CDR).
                            </p>

                                <p>Overall, the event was a success and we would like to thank everyone who had joined us for the event.
                            </p>
                            </div>

                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                        {data.map(data => (
                            <Figure>
                                <Figure.Image
                                    key={data.image}
                                    width={300}
                                    height={500}
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

export default Blog_02
