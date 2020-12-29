import React from "react";
import Layout from "../../components/layouts/layout";
import SEO from "../../components/seo";
import { Figure } from 'react-bootstrap';

const Blog_03 = () => {

    const data =
        [
            {
                image: require('../blog_details/image/annualDinner/HWT_4544.jpg')
            },
            {
                image: require('../blog_details/image/annualDinner/HWT_4607.jpg')
            },
            {
                image: require('../blog_details/image/annualDinner/HWT_4631.jpg')
            },
            {
                image: require('../blog_details/image/annualDinner/HWT_4722.jpg')
            },
            {
                image: require('../blog_details/image/annualDinner/HWT_4732.jpg')
            },
            {
                image: require('../blog_details/image/annualDinner/HWT_4737.jpg')
            },
            {
                image: require('../blog_details/image/annualDinner/HWT_4762.jpg')
            },
            {
                image: require('../blog_details/image/annualDinner/HWT_4771.jpg')
            },
            {
                image: require('../blog_details/image/annualDinner/HWT_5003.jpg')
            },
            // {
            //     image: require('../blog_details/image/annualDinner/IMG_0058.jpg')
            // },
            // {
            //     image: require('../blog_details/image/annualDinner/IMG_0059.jpg')
            // },
            // {
            //     image: require('../blog_details/image/annualDinner/IMG_0079.jpg')
            // },
            // {
            //     image: require('../blog_details/image/annualDinner/IMG_0080.jpg')
            // },
            // {
            //     image: require('../blog_details/image/annualDinner/IMG_0087.jpg')
            // },
            // {
            //     image: require('../blog_details/image/annualDinner/IMG_0090.jpg')
            // },
            // {
            //     image: require('../blog_details/image/annualDinner/IMG_0094.jpg')
            // },
            // {
            //     image: require('../blog_details/image/annualDinner/IMG_0103.jpg')
            // },
            // {
            //     image: require('../blog_details/image/annualDinner/IMG_0104.jpg')
            // },
            // {
            //     image: require('../blog_details/image/annualDinner/IMG_0105.jpg')
            // },
            // {
            //     image: require('../blog_details/image/annualDinner/IMG_0109.jpg')
            // },
            {
                image: require('../blog_details/image/annualDinner/W1.jpeg')
            },
            {
                image: require('../blog_details/image/annualDinner/W2.jpeg')
            },
            {
                image: require('../blog_details/image/annualDinner/W3.jpeg')
            }
        ]


    return (
        <Layout>
            <SEO title="Blog" />

            <div id="pageHeader1" >
                <div className="vc-parent">
                    <div className="vc-child">
                        <section className="page-title">
                            <h2>EMPLOYEE ENGAGEMENT ACTIVITY</h2>
                        </section>
                    </div>
                </div>
            </div>

            <div id="blog">
                <div className="container">
                    <div className="row">
                        <div class="col-md-12 blog-page-content post-details">
                            <div class="post-img">
                                <img src="/img/blog-posts/blog00.jpg" alt="" class="img-responsive" />
                            </div>
                            <div className="wpb_wrapper">
                                <h4>Images from the Annual Dinner</h4>
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

export default Blog_03
