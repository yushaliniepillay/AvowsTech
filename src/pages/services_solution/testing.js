import React from "react"
import Layout from "../../components/layouts/layout"
import SEO from "../../components/seo"
import { Tabs, Tab, Breadcrumb, Row, Col } from 'react-bootstrap';


var imageName = require('../../components/images/background/testing_sub.jpg')
var imageName1 = require('../../components/images/background/cs1.jpg')

const testing = () => {


    const test =
        [
            {
                id: 0,
                key: "A",
                title: "Functional & Test Management",
                item: [
                    "End-to-end test management with high degree of quality assurance",
                    "Optimal resource utilisation with various industry best test tools",
                    "Rapid QA cycles with reusable test artefacts"
                ]
            },
            {
                id: 1,
                key: "B",
                title: "Functional Automation",
                item: [
                    "Multiple proven functional automation frameworks for web, mobile and desktop applications",
                    "Best suited for applications with frequent changes",
                    "Faster time-to-market with quick ROI"
                ]
            },
            {
                id: 2,
                key: "C",
                title: "Performance Testing",
                item: [
                    "Performance bottleneck causal analysis to identify the specific latency",
                    "Analyse the Performance Vulnerabilities",
                    "Creating, managing and maintaining test scripts in a timely and cost-effective manner"
                ]
            }
        ]

    const security =
        [
            {
                id: 0,
                key: "A",
                title: "Security Operations Center",
                descp: [
                    "Security operations center is a centralised unit that provides real time monitoring of the entire enterprise to deal with security. In these centres, the enterprise’s information and other sensitive areas like websites, databases, servers, networks etc are monitored, assessed and defended. SOC apart from allowing monitoring and fixing of threats allows triggering of actions based on threat along with notification and escalations"
                ],
                item: []
            },
            {
                id: 1,
                key: "B",
                title: "Consulting – Enterprise Risk Management",
                descp: [
                    "Through our Risk Management consulting practice we offer rich domain expertise that our clients can leverage to help set up their risk practices, assess their enterprise risk at any given time, formulate risk strategies and implement risk solutions. We can assist our clients in a wide variety of services such as creating a foundational risk practice to selecting risk tools and many more."
                ],
                item: []
            },
            {
                id: 2,
                key: "C",
                title: "Identity and Access Management (IAM)",
                descp: [
                    "Our IAM consulting services are crafted to combine best-in-class technologies with proven industry processes. Through this, we deliver highly secure day-to-day operations while ensuring zero compromise on achieving maximum efficiency.",
                    "Our experts can:"
                ],
                item: [
                    "Conduct strategy planning sessions with the focus on IAM trends and vendors, customer business drivers and challenges",
                    "Assess your existing infrastructure and system architecture in order to establish a strategic technology roadmap",
                    "Implement the latest IAM technologies best suited to operational requirements by taking password and lifecycle management, identity governance and privilege access management into account be it through Single Sign-On (SSO) or Federated Identity Management (FIM)"
                ]
            },
            {
                id: 3,
                key: "D",
                title: "Managed Security Services",
                descp: [
                    "Our managed security services are designed to serve as a remote extension of your security staff. We provide turnkey solutions for your complex information security challenges. By combining and correlating log activity, our services help eliminate blind spots and provide visibility to what really matters.",
                    "Our experienced security professionals provide the essential expertise and infrastructure your organisation needs to:"
                ],
                item: [
                    "Effectively monitor the security of your environment",
                    "Improve your security posture efficiently and effectively",
                    "Achieve greater visibility and simplify reporting",
                    "Quickly identify, analyse and respond to potential security threats",
                    "Maximise your security technology investment",
                    "Focus existing staff on your core business needs"
                ]
            },
            {
                id: 4,
                key: "E",
                title: "Vulnerability Assessment and Management",
                descp: [
                    "Our team of professional information security researchers can provide in-depth remediation and solutions to any IT security threats within your company to protect your critical data assets. The team carries out a vulnerability analysis and implements a vulnerability management program to deal with various cyber security issues.",
                    "Our experts can:"
                ],
                item: [
                    "Discover vulnerabilities and weaknesses across all types of devices",
                    "Reduce security risk by providing a thorough assessment of hardware and software assets",
                    "Test elements from a single line of code to large distributed systems",
                    "Access custom code analysis and reverse software engineering",
                    "Determine the feasibility of potential attack vectors",
                    "Identify vulnerabilities that scanning software may miss",
                    "Provide evidence to support budget requests for security programs or investment",
                    "Assess the combination of system flaws and human factors to identify and quantify risk",
                    "Develop effective controls and solutions for security flaws",
                    "Create secure development lifecycle (SDLC) programs and processes",
                    "Communicate the risks of high-business impact vulnerabilities and high-likelihood threats",
                    "Uncover higher-risk vulnerabilities resulting from exploitation of lower-risk vulnerabilities exploited in a particular sequence",
                    "Quantify the operational impact and business risks resulting from successful attacks"
                ]
            },
            {
                id: 5,
                key: "F",
                title: "Risk Governance and Compliance",
                descp: [
                    "A business makes smarter decisions when keeping its risks in check. Once a business has visibility on the risk of potential threats, it can prioritise investments, optimise current technology consumption and transform its security programs to address risks more effectively.",
                    "Avows can help your business by providing remediation recommendations from a people, process and technology perspective to make informed decisions. We can help design, implement and assess risk management across a spectrum of strategic, operational, financial and compliance considerations.",
                    "We ensure that our risk evaluation approach is aligned in a way that supports the organisation’s business goals and culture. Security policies play a vital role in a business and we will also ensure that the data are used and secured properly."
                ],
                item: []
            }
        ]

    return (
        <Layout>
            <SEO title="TESTING & SECURITY SERVICE" />
            <div id="pageHeader3" >
                <div className="vc-parent">
                    <div className="vc-child">
                        <Breadcrumb>
                            <Breadcrumb.Item href="/">HOME</Breadcrumb.Item>
                            <Breadcrumb.Item active>TESTING & SECURITY SERVICES</Breadcrumb.Item>
                        </Breadcrumb>
                        <section className="page-title">
                            <Row>
                                <Col md={4}> </Col>
                                <Col md={5}>
                                    <h1 className="mb-5">TESTING & SECURITY SERVICES</h1>
                                    <p className="text-center text-white">We aim to help organisations regardless of any sizes improve
                                    their security processes, achieve compliance and protect your data</p>
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
                            <section className="services">
                                <h4>TESTING SERVICES</h4>
                            </section>
                            <div className="post-img">
                                <img src={imageName} alt="" class="img-responsive" />
                            </div>
                            <div className="vc_column-inner ">
                                <div className="wpb_wrapper">
                                    <div className="vc_empty_space" >
                                        <span className="vc_empty_space_inner"></span>
                                    </div>
                                    <Tabs defaultActiveKey={test[0].key} className="nav-tabs" >
                                        {test.map((test, index) => (
                                            <Tab tabClassName="nav-tab" key={index} eventKey={test.key} title={test.title}>
                                                <br />
                                                <h3><strong>{test.title}</strong></h3>
                                                <section>
                                                    <ul>
                                                        <li>{test.item[0]}</li>
                                                        <li>{test.item[1]}</li>
                                                        <li>{test.item[2]}</li>
                                                    </ul>
                                                </section>
                                            </Tab>
                                        ))}
                                    </Tabs>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="blog" className="page blog-details-page">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 blog-page-content post-details">
                            <section className="services">
                                <h4>SECURITY SERVICES</h4>
                            </section>
                            <div className="post-img">
                                <img src={imageName1} alt="" class="img-responsive" />
                            </div>
                            <div>
                                <p className="justified"><strong>Cyber Security</strong> - With evergrowing digital technologies and IT
                            systems come cyber risk. We help our clients protect their systems, data, devices, information
                            and most importantly their users from any other targeted attack, malware and any.
                            targeted attack. In today’s environment, organisations face tremendous risk and challenges when it
                            comes to protecting data and preventing fraud. Growing data protection needs and regulatory
                            concerns require fool-proof cyber security solutions.
                            </p>
                                <p className="justified"> With our security practitioners, we at Avows give our clients the required
                                support and guidance to prevent and adapt to new threats. Our end-to-end range of cyber security
                                solutions help cover all aspects of security right from your board-rooms to back offices.
                            </p>

                                <div className="vc_column-inner ">
                                    <div className="wpb_wrapper">
                                        <div className="vc_empty_space" >
                                            <span className="vc_empty_space_inner"></span>
                                        </div>
                                        <Tabs defaultActiveKey={security[0].key}  className="nav-tabs">
                                            {security.map((sec, index) => (
                                                <Tab tabClassName="nav-tab" key={index} eventKey={sec.key} title={sec.title}>
                                                    <br /><br />
                                                    <h3><strong>{sec.title}</strong></h3>
                                                    <section>
                                                        <p className="text-justify">{sec.descp[0]}</p>
                                                        <p className="text-justify">{sec.descp[1]}</p>
                                                        <p className="text-justify">{sec.descp[2]}</p>
                                                    </section>
                                                    <section>
                                                        <ul style={{ fontSize: '18pt' }}>
                                                            {sec.item.map((section, i) => (
                                                                <li key={i}>{section}</li>
                                                            ))}
                                                        </ul>

                                                    </section>
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
export default testing;