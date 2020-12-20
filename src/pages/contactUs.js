import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layouts/layout"
import SEO from "../components/seo"
import { Button } from 'react-bootstrap';

const ContactUs = () => (
    <Layout>
        <SEO title="Blog" />

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

        <div id="blog">
            <div className="container">
                <div className="row serviceList">
                    <div className="col-md-12">
                        <section>
                            <h2 className="section-title"><span></span>OUR OFFICES</h2>
                        </section>
                    </div>

                    <div class="col-md-6 col-sm-6 col-xs-12">
                        <div class="single-item">
                            <div class="fig_caption">
                                <div class="icon">
                                    <i class="fa fa-map-marker"></i>
                                </div>
                                <div class="details">
                                    <h3><a href="service-signle ">MALAYSIA - HQ</a></h3>
                                    <p> Avows Technologies SDN BHD,<br />
                                        Level 15-06, Tower A, The Vertical<br />
                                        Business Suite,Avenue 3, Bangsar South, No 8,<br />
                                        Jln Kerinchi, 59200	Kuala Lumpur, Malaysia.<br />
                                        Tel: +603 27123456</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-sm-6 col-xs-12">
                        <div class="single-item">
                            <div class="fig_caption">
                                <div class="icon"><i class="fa fa-map-marker"></i>
                                </div>
                                <div class="details">
                                    <h3><a href="service-signle ">SINGAPORE</a></h3>
                                    <p>Avows Technologies Pte. Ltd.,<br />
                                        3 Temasek Avenue, Levels 21 &amp; 34<br />
                                        Centennial Tower, Singapore 039190.<br />
                                        Tel : +65 6549 7000<br />
                                        Fax: +65 6549 7001</p>
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
                                <div class="details">
                                    <h3><a href="service-signle ">INDONESIA</a></h3>
                                    <p>PT Avows Technologies.<br />
                                        Office 8, Level 18A<br />
                                        Jl. Jendral Sudirman kav. 52-53<br />
                                        South Jakarta 12190 – Indonesia<br />
                                        Tel : +62 2129608177</p>
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
                                <div class="details">
                                    <h3><a href="service-signle ">USA</a></h3>
                                    <p>Avows Technologies Inc.<br />
                                        4512 Legacy Drive #100 Plano,<br />
                                        TX 75024<br />
                                        T: +1 201 604 3505
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </Layout>
)

export default ContactUs;
