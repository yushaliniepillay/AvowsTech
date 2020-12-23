import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layouts/layout"
import SEO from "../components/seo"
import { Button } from 'react-bootstrap';

const ContactUs = () => (
    <Layout>
        <SEO title="Contact Us" />

        <div id="pageHeader" >
            <div className="vc-parent">
                <div className="vc-child">
                    <section className="page-title">
                        <h2>CONTACT US</h2>
                        <ul className="text-center">
                            <li className="list-unstyled">
                                <Link href="/">Home</Link> /</li>
                            <li className="list-unstyled active">Contact</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>

        {/* locations */}

        <div class="container">
            <h2 class="black-color section-title">OUR OFFICES</h2>
            <div class="row serviceList">
                <div class="col-md-6 col-sm-6 col-xs-12">
                    <div class="single-item">
                        <div class="fig_caption">
                            <div class="icon">
                                <i class="fa fa-map-marker"></i>
                            </div>
                            <div class="details text-center">
                                <h3><a href="service-signle">MALAYSIA - HQ</a></h3>
                                <p>Avows Technologies SDN BHD,<br />
                                    Level 15-06, Tower A, The Vertical
                                    Business Suite,Avenue 3, Bangsar South, No 8,
                                    Jln Kerinchi, 59200	Kuala Lumpur, Malaysia.<br />
                                    Tel: +603 27123456
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-sm-6 col-xs-12">
                    <div class="single-item">
                        <div class="fig_caption">
                            <div class="icon">
                                <i class="fa fa-map-marker"></i>
                            </div>
                            <div class="details text-center">
                                <h3><a href="service-signle ">SINGAPORE</a></h3>
                                <p>Avows Technologies Pte. Ltd.,<br />
                                    3 Temasek Avenue, Levels 21 &amp; 34
                                    Centennial Tower, Singapore 039190.<br />
                                    Tel : +65 6549 7000<br />
                                    Fax: +65 6549 7001
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-sm-6 col-xs-12">
                    <div class="single-item">
                        <div class="fig_caption">
                            <div class="icon">
                                <i class="fa fa-map-marker"></i>
                            </div>
                            <div class="details text-center">
                                <h3><a href="service-signle ">INDONESIA</a></h3>
                                <p>PT Avows Technologies.<br />
                                    Office 8, Level 18A
                                    Jl. Jendral Sudirman kav. 52-53
                                    South Jakarta 12190 – Indonesia<br />
                                    Tel : +62 2129608177
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-sm-6 col-xs-12">
                    <div class="single-item">
                        <div class="fig_caption">
                            <div class="icon">
                                <i class="fa fa-map-marker"></i>
                            </div>
                            <div class="details text-center">
                                <h3><a href="service-signle ">USA</a></h3>
                                <p>Avows Technologies Inc.<br />
                                    4512 Legacy Drive #100 Plano,
                                    TX 75024<br />
                                    Tel: +1 201 604 3505
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* form */}
        <div id="contact" className="page contact_fields">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="contact-form">
                            <div className="contact-form-status">
                            </div>
                            <form id="contactForm">
                                <br />
                                <div class="form-group">
                                    <input type="name" class="form-control" id="InputName" placeholder="Name" />
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control" id="InputEmail" placeholder="Email" />
                                </div>
                                <div class="form-group">
                                    <input type="number" class="form-control" id="InputNumber" placeholder="Phone Number" />
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" id="InputService" placeholder="Services" />
                                </div>
                                <div class="form-group">
                                    <textarea type="text-" class="form-control" id="InputMessage" placeholder="Message" />
                                </div>
                                <div className="row">
                                    <div className="col-md-12 text-center">
                                        <Button className="m-3" variant="danger" size="md" type="submit">SEND</Button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* map */}
        <div class="container-fluid">
            <div class="row">
                <iframe classname="frame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.565025466968!2d101.73319691410663!3d3.2082799976640892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc3838cd5d77e5%3A0xd16ea55181170490!2sAvowstech!5e0!3m2!1sen!2s!4v1537269981617" width="100%" height="500" frameborder="0" allowfullscreen=""></iframe>
            </div>
        </div>

        {/* contact address */}
        <div class="contact-address">
            <div class="container">
                <div class="row text-center">
                    <div class="col-md-4">
                        <i class="fa fa-map-marker"></i>
                        <address>
                            <p>Avows Technologies SDN BHD</p>
                        </address>
                    </div>
                    <div class="col-md-4">
                        <i class="fa fa-phone"></i>
                        <address>
                            <p>(+603) 2712 3456</p>
                        </address>
                    </div>
                    <div class="col-md-4">
                        <i class="fa fa-envelope"></i>
                        <address>
                            <p> info@avowstech.com</p>
                        </address>
                    </div>
                </div>
            </div>
        </div>



    </Layout>
)

export default ContactUs;
