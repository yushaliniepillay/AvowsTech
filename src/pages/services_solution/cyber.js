import React from "react"
import Layout from "../../components/layouts/layout"
import SEO from "../../components/seo"
//import "../../components/header/header.css";
import { Tabs, Tab } from 'react-bootstrap';

// var imageName = require('../images/our_ceo.jpg')

const cyber = () => (
    <Layout>
        <SEO title="Cyber Security" />
        <div id="pageHeader" >
            <div className="vc-parent">
                <div className="vc-child">
                    <section className="page-title">
                        <h2>CYBER SECURITY</h2>
                        {/* <p className="breadcrumb text-centre">We provide enterprises with agility with our focus on customer centric journeys
                                to drive their digital transformation initiatives</p> */}
                        <ul className="text-center">
                            <li className="list-unstyled">
                                We partner with our clients to provide complete end to end
                                enterprise risk management and secure business environment
                                via our solutions and advisory services
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
                            <p class="justified"><strong>Cyber Security</strong> - With ever growing digital technologies and IT
                            systems comes cyber risk. We help our clients protect their systems, data, devices, information
                            and most importantly their consumers from all kinds of attacks from intruders, malware or any
                            targeted attack. In today’s environment, organizations face tremendous risk and challenges when it
                            comes to protecting data and preventing fraud. Growing data protection needs and regulatory
                            concerns require fool proof cyber security solutions.
                            </p>
                            <p class="justified"> With our security practitioners we at Avows give our clients the required
                            support and guidance to prevent and adapt to new threats. Our end to end range of cyber-security
                            solutions help cover all aspects of security right from your board rooms to back offices.
                            </p>

                            <div class="vc_column-inner ">
                                <div class="wpb_wrapper">
                                    <div class="vc_empty_space" >
                                        <span class="vc_empty_space_inner"></span>
                                    </div>
                                    <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
                                        <Tab eventKey="SOC" title="Security Operations Center">
                                            <br />
                                            <strong>Security Operations Center</strong>
                                            <p class="p1 text-justify"><br />
                                                <span class="s1">Security operations center is a centralized unit that provides
                                                real time monitoring of entire enterprise to deal with security.
                                                In these centres, the enterprise’s information and other sensitive areas like websites,
                                                databases, servers, networks etc are monitored, assessed and defended. SOC apart from allowing
                                                monitoring and fixing of threats allows triggering of actions based on threat along with
                                                notification and escalations</span>
                                            </p>
                                        </Tab>
                                        <Tab eventKey="CE" title="Consulting – Enterprise Risk Management">
                                            <br />
                                            <strong>Consulting – Enterprise Risk Management</strong>
                                            <p class="p1 text-justify"><br />
                                                <span class="s1">Through our Risk Management consulting practice we offer rich domain expertise
                                                that our clients can leverage to help set up their risk practices, assess their enterprise risk
                                                at any given time, formulate risk strategies and implement risk solutions. We can assist our clients
                                                in wide variety of services creating a foundational risk practice to selecting risk tools and
                                                many more</span>
                                            </p>
                                        </Tab>
                                        <Tab eventKey="IAM" title="Identity and Access Management">
                                            <br />
                                            <strong>Identity and Access Management (IAM)</strong>
                                            <p class="p1 text-justify"><br />
                                                <span class="s1">Our IAM consulting services are crafted to combine best-in-class technologies with proven 
                                                industry processes. Through this, we deliver highly secure day-to-day operations while ensuring zero 
                                                compromise on achieving maximum efficiency. Our experts can:</span>
                                            </p>
                                            <ul><br />
                                                <li>Conduct strategy planning session with the focus on IAM trends and vendors, customer business drivers and challenges</li>
                                                <li>Assessing your existing infrastructure and system architecture and establish a strategic technology roadmap</li>
                                                <li>Implement the latest IAM technologies best suited to operational requirements by taking password and lifecycle management, 
                                                    identity governance and privileged access management into account be it through Single Sign-On (SSO) or Federated 
                                                    Identity Management (FIM).</li>
                                            </ul>
                                        </Tab>
                                        <Tab eventKey="MSS" title="Managed Security Services">
                                            <br />
                                            <strong>Managed Security Services</strong>
                                            <p class="p1 text-justify"><br />
                                                <span class="s1">Our managed security services are designed to serve as a remote extension of your security staff.
                                                We provide turnkey solutions for your complex information security challenges. By combining and correlating log
                                                activity, our services help eliminate blind spots and provide visibility to what really matters. Our experienced
                                                security professionals provide the essential expertise and infrastructure your organization needs to:</span>
                                            </p>
                                            <ul><br />
                                                <li>Effectively monitor the security of your environment</li>
                                                <li>Improve your security posture efficiently and effectively</li>
                                                <li>Achieve greater visibility and simplify reporting</li>
                                                <li>Quickly identify, analyse and respond to potential security threats</li>
                                                <li>Maximize your security technology investment</li>
                                                <li>Focus existing staff on your core business needs</li>
                                            </ul>
                                        </Tab>
                                        <Tab eventKey="VAM" title="Vulnerability Assessment and Management">
                                            <br />
                                            <strong>Vulnerability Assessment and Management</strong>
                                            <p class="p1 text-justify"><br />
                                                <span class="s1">Our team of professional information security researchers and scientists 
                                                can provide in-depth remediation and solutions to any IT security threats within your company 
                                                to protect your critical data assets. The team carries out a vulnerability analysis and implements a 
                                                vulnerability management program to deal with various cybersecurity issues. Our experts can:</span>
                                            </p>
                                            <ul><br />
                                                <li>Discover vulnerabilities and weaknesses across all types of devices</li>
                                                <li>Reduce security risk by providing a thorough assessment of hardware and software assets</li>
                                                <li>Test elements from a single line of code to large distributed systems</li>
                                                <li>Access custom code analysis and reverse software engineering</li>
                                                <li>Determine the feasibility of potential attack vectors</li>
                                                <li>Identify vulnerabilities that scanning software may miss</li>
                                                <li>Provide evidence to support budget requests for security programs or investment</li>
                                                <li>Assess the combination of system flaws and human factors to identify and quantify risk</li>
                                                <li>Develop effective controls and solutions for security flaws</li>
                                                <li>Create secure development lifecycle (SDLC) programs and processes</li>
                                                <li>Communicate the risks of high-business impact vulnerabilities and high-likelihood threats</li>
                                                <li>Uncover higher-risk vulnerabilities resulting from exploitation of lower-risk vulnerabilities exploited in a particular sequence</li>
                                                <li>Quantify the operational impact and business risks resulting from successful attacks</li>
                                            </ul>
                                        </Tab>
                                        <Tab eventKey="RGC" title="Risk Governance and Compliance">
                                            <br />
                                            <strong>Risk Governance and Compliance</strong>
                                            <p class="p1 text-justify"><br />
                                                <span class="s1">A business makes smarter decisions when keeping its risks in check. Once a business has visibility on 
                                                the risk of potential threats, it can prioritise investments, optimise current technology consumption and transform its 
                                                security programs to address risks more effectively.</span>
                                            </p>
                                            <p class="p1 text-justify"><br />
                                                <span class="s1">Avows can help your business by providing remediation recommendations from a people, process and technology 
                                                perspective to make informed decisions. We can help design, implement and assess risk management across a spectrum of strategic, 
                                                operational, financial and compliance considerations.</span>
                                            </p>
                                            <p class="p1 text-justify"><br />
                                                <span class="s1">We ensure that our risk evaluation approach is aligned in a way that supports the organization’s business goals 
                                                and culture. Security policies play a vital role in a business and we will also ensure that the data are used and 
                                                secured properly.</span>
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

export default cyber;