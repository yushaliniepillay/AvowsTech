import React from "react"
import Layout from "../../components/layouts/layout"
import SEO from "../../components/seo"
import { Tabs, Tab, Breadcrumb, Row, Col } from 'react-bootstrap';

var imageName = require('../../components/images/background/dataAi.jpg')

const data = () => {

    const science =
        [
            {
                id: 0,
                key: "A",
                title: "All-in-One Chatbot Platform",
                descp: [
                    "Avows helps organizations to build a powerful AI-driven customer engagement channel to deliver a seamless customer experience, improve efficiencies and create business impact using AI, ML, NLP and other cutting-edge technologies"
                ],
                item: []
            },
            {
                id: 1,
                key: "B",
                title: "AI + Data Science",
                descp: [
                    "Our Artificial Intelligence/Machine Learning (AI/ML) service offering goes through the process of procedural automation where it captures informative digital assets in a machine-readable format before implementing automation for complex and repetitive tasks.",
                    "We are focused on AI/ML innovations and work with experts utilizing the latest in data science models and solutions that can help organizations gather insight into their operations, performance, customers and competitors."
                ],
                item: []
            },
            {
                id: 2,
                key: "C",
                title: "Big Data",
                descp: [
                    "Our services and concepts cater to cloud-based big data to assist our customers in solving their data conundrums, analysis, storage and in applying analytical insights to drive business growth. We help reveal hidden patterns, correlations, market trends and customer preferences that inform smart business decisions.",
                    "We help customers to uncover information such as hidden patterns, unknown correlations, market trends and customer preferences that can enhance business decision-making process."
                ],
                item: [
                    {
                        name: "Data Ingestion",
                        sub: "Avows helps customers to establish a lake as a single source of truth to make better business decisions based on trusted data for real-time insights",
                    },
                    {
                        name: "Data Filtering",
                        sub: "Collect and manage data in a single, unified landscape to lower data sprawl, solve complex issues, and simplify application delivery."
                    },
                    {
                        name: "Data Modeling",
                        sub: "Discover, refine, enrich, and govern any type or volume of data across hybrid and distributed landscapes, while ensuring quality and availability."
                    },
                    {
                        name: "Data Visualization",
                        sub: "Consolidate, sanitize, and reconcile business data - learn how you can overcome data fragmentation and activate the power of your data by integrating disparate sources in the cloud, on premise, and across devices."
                    }
                ]
            },
            {
                id: 3,
                key: "D",
                title: "Automating Business Process & Beyond",
                descp: [
                    "We offer a range of solutions to automate your business processes by various technologies such as robotic process automation with machine learning, blockchain and data analytics, alongside traditional efficiency tools.",
                    "This results in reduced human error, manual work, process completion times and associated costs which gives scalability to business growth with available resources.",
                    "With our professional IT team at Avows, we design our state-of-the-art Robotic Automation capabilities in line with your daily process to mitigate your business workforce from mundane and repetitive tasks. We help to achieve maximum human and digital efficiency by automating critical business processes. This will also help to improve the operational performance of your customers and to provide a faster and more accurate system which results in better customer satisfaction."
                ],
                item: []
            }
        ]

    return (
        <Layout>
            <SEO title="DATA ANALYTICS & AI" />
            <div id="pageHeader" >
                <div className="vc-parent">
                    <div className="vc-child">
                        <Breadcrumb>
                            <Breadcrumb.Item href="/">HOME</Breadcrumb.Item>
                            <Breadcrumb.Item active>DATA ANALYTICS AND AI</Breadcrumb.Item>
                        </Breadcrumb>
                        <section className="page-title">
                            <Row>
                                <Col md={4}> </Col>
                                <Col md={4}>
                                    <h1 className="mb-5">DATA ANALYTICS AND AI</h1>
                                    <p className="text-center text-white">We are focused on combining human (AI Experts) and
                                technical strengths to deliver enhanced value by enabling companies to work on complex cognitive tasks.</p>
                                </Col>
                            </Row>
                        </section>
                    </div>
                </div>
            </div>

            <div id="blog" className="page blog-details-page">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 blog-page-content post-details">
                            <div className="post-img">
                                <img src={imageName} alt="" class="img-responsive" />
                            </div>
                            <div>
                                <p className="justified">Our digital offerings support every phase of the digital journey. We provide
                                complete services that span customer experience, connected products and systems,
                                intelligent analytics which provide the foundation to drive successful business outcomes
                                through our world-class industry expertise.
                            </p>
                                <p className="justified">Our strategic partnerships with few leading organisations help them shape 
                                user experiences at the enterprise as well as at end consumer level, by aligning businesses with 
                                the latest in Information Technology and deriving value from investments.
                            </p>
                                <p className="justified">We offer unparalleled industry insight, proven technology capabilities,
                                and the unmatched depth of our firm’s professional services. This allows us to strategize,
                                design, and implement customer solutions for our clients better than any of our competition.
                            </p>

                                <div className="vc_column-inner ">
                                    <div className="wpb_wrapper">
                                        <div className="vc_empty_space" >
                                            <span className="vc_empty_space_inner"></span>
                                        </div>
                                        <Tabs defaultActiveKey={science[0].key}  className="nav-tabs">
                                            {science.map((sc, index) => (
                                                <Tab tabClassName="nav-tab" key={index} eventKey={sc.key} title={sc.title}>
                                                    <br />
                                                    <h3><strong>{sc.title}</strong></h3>
                                                    <p className="p1 text-justify">{sc.descp[0]}</p>
                                                    <p className="p1 text-justify">{sc.descp[1]}</p>
                                                    <p className="p1 text-justify">{sc.descp[2]}</p>
                                                    <ul>
                                                        {sc.item.map((science, i) => (
                                                            <li style={{ fontSize: '15pt', color: 'black' }} key={i}>
                                                                <strong>{science.name}</strong>
                                                                <p>{science.sub}</p>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </Tab>
                                            ))}
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
}

export default data;