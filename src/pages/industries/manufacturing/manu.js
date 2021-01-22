import React from "react"
import Layout from "../../../components/layouts/layout"
import SEO from "../../../components/seo";
import {Breadcrumb } from 'react-bootstrap';

const Manu = () => {



    return (
        <Layout>
            <SEO title="MANUFACTURING" />

            <div id="pageHeader" >
                <div className="vc-parent">
                    <div className="vc-child">
                        <Breadcrumb>
                            <Breadcrumb.Item href="/">HOME</Breadcrumb.Item>
                            <Breadcrumb.Item active>MANUFACTURING</Breadcrumb.Item>
                        </Breadcrumb>
                        <section className="page-title">
                            <h1>MANUFACTURING</h1>
                        </section>

                    </div>
                </div>
            </div>

            <div id="blog">
                <div className="container">
                    <div className="row">
                        {/* <div className="post-img">
                            <img src="/img/blog-posts/blog00.jpg" alt="" class="img-responsive" />
                        </div> */}
                        <br />
                        <div className="wpb_wrapper">
                            <p className="justified">
                                Manufacturing is the reason that you’re able to use many of the products as well as enjoy the services that you do today. However, the introduction of technology into the manufacturing industry has helped take it to an entirely new level. Not only has it made it more interesting in terms of innovation, but it has also enabled quicker and more efficient ways of operating which is key. Once seen as a blue-collar industry, things have quickly changed in manufacturing as a response to technological advancements.
                            </p>

                            <p className="justified">
                                <strong>Benefit of using IT In Manufacturing industry today: -</strong>
                            </p>

                            <section className="intro">
                                <i><h4>Maximizing Efficiency</h4></i>
                                <p className="justified">
                                    One of the first ways that technology can improve your manufacturing business is by maximizing efficiency. This means that technology is able to ensure time is used in the best manner possible by cutting down production times and automating tedious as well as time-consuming tasks. An example of technology that could improve your business is 3D printing. This technology is transforming the manufacturing industry as it can reduce design to production time, reduce manufacturing lead time, reduce waste, and ensure greater flexibility in production. In fact, 3D printing is becoming so effective, workers in the manufacturing industry are worried they’re going to be replaced.
                            </p>
                                <p className="justified">
                                    There are many areas of your manufacturing business you can make efficient. You can, for example, automate emails (as long as they’re personalized), and even invest in an HR system that allows employees to fill out their own personal data, apply for vacation time and work in real-time so that the HR department doesn’t have to deal with minuscule tasks. You may believe that the production line is the most crucial part of the business to maximize, however, you need to improve all areas of your business, from finance and HR to marketing, to even sales. If you’re unsure on what part of your business you need to focus on, audit your business as a whole.
                            </p>
                                <i><h4>Managing Data</h4></i>
                                <p className="justified">
                                    As a manufacturing company, it’s likely that you manage mass data. As with any data, it can become problematic if you don’t have adequate knowledge regarding how to manage it. Seeing as better data management is said to improve the profitability of a manufacturing business, it is in your best interest to find more effective ways of doing so which is where technology comes in. Organizations such as Bytes, for instance, specialize in helping to support your cloud management which could help ensure your mounds of data are all securely in one place. You should also think about finding effective data management software that’s capable of helping you both sort and make sense of the data that you’re collecting.
                            </p>
                                <p className="justified">
                                    However, with managing data comes great responsibility. Data is incredibly valuable, and so you need to ensure you’re taking appropriate measures when it comes storing the data of your clients and customers. You should encrypt your data, back it up in the case of cybercrime and ransomware, and have the proper anti-malware protection in place. Furthermore, you need to educate yourself and your employees on how to keep their computers safe through password protection and good judgment of links and untrustworthy emails. While you may not consider the manufacturing industry a hotbed for cybercrime, in actual fact, smaller businesses and those that are considered less at risk are, in fact, also threatened. Cybercriminals are looking for industries that may be more lax in their data protection, so you need to ensure you’re doing everything possible when it comes to keeping your data protected.
                            </p>
                                <i><h4>Increasing Productivity</h4></i>
                                <p className="justified">
                                    Productivity is key when running a manufacturing business as the greater the productivity, the more you can produce and the quicker you can produce it. Technology also plays a major role in productivity, so looking for software solutions may be ideal for your business. You could, for instance, make time to find software solutions that help with scheduling, inventory, and monitoring workflow. Considering automation is also a good idea as it can help reduce the risk of error which can also affect your productivity levels as it often creates setbacks. It has been forecasted that machine learning will reduce supply chain forecasting by 50% and reduce lost sales by 65%. This reflects how technology can help improve your bottom line when used in the right way.
                            </p>
                            </section>
                        </div>


                    </div>
                </div>
            </div>


        </Layout>


    )
}
export default Manu;