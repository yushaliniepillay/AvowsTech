import React from "react";
import Layout from "../../components/layouts/layout";
import SEO from "../../components/seo";
import { Figure } from 'react-bootstrap';

const Blog_01 = () => {

    const data =
        [
            {
                image: require('../blog_details/image/contest/HWT_4221.jpg')
            },
            {
                image: require('../blog_details/image/contest/HWT_4186.jpg')
            },
            {
                image: require('../blog_details/image/contest/2.jpg')
            },
            {
                image: require('../blog_details/image/contest/3.jpg')
            },
            {
                image: require('../blog_details/image/contest/1.jpg')
            },
            
        ]

    return (

        <Layout>
            <SEO title="Blog" />

            <div id="pageHeader1" >
                <div className="vc-parent">
                    <div className="vc-child">
                        <section className="page-title">
                            <h2>ALGO LEAGUE– THE NEXT GENERATION CODING CONTEST FOR UNIVERSITY STUDENTS IN MALAYSIA</h2>
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
                                <p>Algo League– The next generation Coding Contest for University Students in Malaysia
                            </p>

                                <p>July 2019 - Algo League is the next-generation Coding Contest organized by Avows Technologies in partnership with Digital Native Agenda (DNA23), designed especially to address the needs of a Digital Malaysia.
                            </p>

                                <p>Meant to enhance awareness of Emergent Tech in Malaysia, Algo League aims to provide a platform for college & university students to demonstrate their analytical and problem-solving skills. This contest also provides students with the opportunity to be recognized by potential employers.
                            </p>

                                <p>During the very first iteration of this annual contest, Algo League 1.0 was conducted in two phases on 22 July 2019 (Phase 1 – Multiple Choice Questions) and 25 July 2019 (Phase 2 – Coding). Nearly three hundred (300) students from seven (7) prominent Universities all over Malaysia have participated in this contest has presented a display of talent and innovative thinking.
                            </p>

                                <p>Phase 1, consisting of 50 multiple choice questions, tested the participants on their technical knowledge, while Phase 2 presented a set of problem statements to the participants, who had to analyse and use appropriate programming language to come up with solutions. The top winners were selected after tallying the combination of points from these two phases.
                            </p>

                                <p>We are proud and honoured to declare that three individuals stood out among the ranks of all the ingenious & enterprising young engineers who took part in Algo League 1.0. Low Sheng Rong from Multimedia University was the undisputed champion of Algo League 1.0, winning with a cash prize of RM1500. He was followed by Wong Kai Le from Sunway University and Chuah Seong Rong from Tunku Abdul Rahman University College.
                            </p>

                                <p>The prize-giving ceremony was held on 20 December 2019 during Avows Tech-Connect 2020 event, the flagship outreach program of Avows.
                            </p>

                                <p>Tech-Connect 2020 invited prominent speakers from Microsoft and Averis to share the latest developments in Emergent Technology and how our young people can position themselves to succeed in the arena.
                            </p>

                                <p>We wish them the best of luck for the peaks we are sure they will climb in the future.
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

export default Blog_01
