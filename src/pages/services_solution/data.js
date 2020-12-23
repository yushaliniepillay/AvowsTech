import React from "react"
import Layout from "../../components/layouts/layout"
import SEO from "../../components/seo"
//import "../../components/header/header.css";
import { Tabs, Tab } from 'react-bootstrap';

// var imageName = require('../images/our_ceo.jpg')

const data = () => (
    <Layout>
        <SEO title="Data Analytics & AI" />
        <div id="pageHeader" >
            <div className="vc-parent">
                <div className="vc-child">
                    <section className="page-title">
                        <h2>DATA ANALYTICS AND AI</h2>
                        {/* <p className="breadcrumb text-centre">We provide enterprises with agility with our focus on customer centric journeys
                                to drive their digital transformation initiatives</p> */}
                        <ul className="text-center">
                            <li className="list-unstyled">
                                We are focused on combining human (AI Experts) a
                                technical strengths to deliver enhanced value by enabling companies to work on complex cognitive tasks.
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>

        <div id="blog" class="page blog-details-page">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 blog-page-content post-details">
                        <div class="post-img">
                            <img src="/imgages/app_development_banner.jpg" alt="" class="img-responsive" />
                        </div>
                        <div>
                            <p class="justified">Our digital offerings supports every phase of the digital journey,
                            with complete services that span customer experience, connected products and systems and
                            intelligent analytics, which provide the foundation to drive successful business outcomes
                            through our world-class industry expertise.
                            </p>
                            <p class="justified">Our strategic partnerships with few leading organisations help us
                            shape user experiences at the enterprise customer level and customer experiences at their
                            end consumer level, by aligning businesses with the latest in Information Technology and
                            deriving value from investments.
                            </p>
                            <p class="justified">We offer unparalleled industry insight,proven technology capabilities,
                            and the unmatched depth of our firm’s professional services. This allows us to strategize,
                            design, and implement customer solutions for our clients better than any of our competition.
                            </p>

                            <div class="vc_column-inner ">
                                <div class="wpb_wrapper">
                                    <div class="vc_empty_space" >
                                        <span class="vc_empty_space_inner"></span>
                                    </div>
                                    <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
                                        <Tab eventKey="ACP" title="All-in-One Chatbot Platform">
                                            <br />
                                            <strong>All-in-One Chatbot Platform</strong>
                                            <p class="p1 text-justify"><br />
                                                <span class="s1">Avows helps organisations to build a powerful AI-driven customer
                                                engagement channel to deliver a seamless customer experience, improve efficiencies
                                                and create a business impact using AI, ML, NLP and other cutting edge technologies</span>
                                            </p>
                                        </Tab>
                                        <Tab eventKey="AI" title="AI + Data Science">
                                            <br />
                                            <strong>AI + Data Science</strong>
                                            <p class="p1 text-justify"><br />
                                                <span class="s1">Our Artificial Intelligence/Machine Learning (AI/ML) service offering 
                                                goes through the process of procedural automation where it captures informative digital 
                                                assets in a machine-readable format before implementing automation for complex and 
                                                repetitive tasks.</span>
                                            </p>
                                            <p class="p1 text-justify"><br />
                                            <span class="s1">We are focused on the innovations of AI/ML and we work with the experts 
                                                together with the latest in data science models and solutions that can help organizations 
                                                to gather insights about their operations, performance, customers and competitors.</span>
                                            </p>
                                        </Tab>
                                        <Tab eventKey="BD" title="Big Data">
                                            <br />
                                            <strong>Big Data</strong>
                                            <p class="p1 text-justify"><br />
                                                <span class="s1">Our services and concepts cater to cloud-based big data to help our 
                                                customers to solve their data dilemmas, managing operational efficiency, cost optimization, 
                                                decision making to improve business, new revenue opportunities and applying insights from 
                                                this analysis in order to drive business growth.</span>
                                            </p>
                                            <p class="p1 text-justify"><br />
                                                <span class="s1">We help customers to uncover information such as hidden patterns, 
                                                unknown correlations, market trends and customer preferences that can enhance business 
                                                decision-making process.</span>
                                            </p>
                                            <ul><br />
                                                <li><strong>Data Ingestion</strong></li>
                                                <p class="p1 text-justify">
                                                    <span class="s1">Avows helps customers to establish a lake as a single source of
                                                    truth to make better business decisions based on trusted data for real-time insights</span>
                                                </p>
                                                <li><strong>Data Filtering</strong></li>
                                                <p class="p1 text-justify">
                                                    <span class="s1">Collect and manage data in a single, unified landscape to lower 
                                                    data sprawl, solve complex issues, and simplify application delivery.</span>
                                                </p>
                                                <li><strong>Data Modeling</strong></li>
                                                <p class="p1 text-justify">
                                                    <span class="s1">Discover, refine, enrich, and govern any type or volume of 
                                                    data across hybrid and distributed landscapes, while ensuring quality and availability.</span>
                                                </p>
                                                <li><strong>Data Visualization</strong></li>
                                                <p class="p1 text-justify">
                                                    <span class="s1">Consolidate, sanitize, and reconcile business data - 
                                                    learn how you can overcome data fragmentation and activate the power of your data by 
                                                    integrating disparate sources in the cloud, on premise, and across devices.</span>
                                                </p>
                                            </ul>
                                        </Tab>
                                        <Tab eventKey="ABP" title="Automating Business Process & Beyond">
                                            <br />
                                            <strong>Automating Business Process & Beyond</strong>
                                            <p class="p1 text-justify"><br />
                                                <span class="s1">We offer a range of solutions to automate your business processes by various 
                                                technologies such as robotic process automation with machine learning, blockchain and data analytics, 
                                                alongside traditional efficiency tools</span>
                                            </p>
                                            <p class="p1 text-justify"><br />
                                                <span class="s1">This results in reduced human error, manual work, process completion times and associated 
                                                costs which gives scalability to business growth with available resources.</span>
                                            </p>
                                            <p class="p1 text-justify"><br />
                                                <span class="s1">With our professional IT team at Avows, we design our state-of-the-art 
                                                Robotic Automation capabilities in line with your daily process to mitigate your business workforce from 
                                                mundane and repetitive tasks. We help to achieve maximum human and digital efficiency by automating critical 
                                                business processes. This will also help to improve the operational performance of our customers and provide 
                                                a faster and more accurate system which results in better customer satisfaction.</span>
                                            </p>
                                        </Tab>
                                    </Tabs>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    </Layout>
)

export default data;