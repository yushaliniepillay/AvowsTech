import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import '../header/header.css';

function carousel() {

    const url = 'https://cdn.filestackcontent.com/XYrHCaFGRSaq0EPKY1S6';
    const url1 = require('../images/header-slider/application_development.jpg');
    const url2 = require('../images/header-slider/digital_solutions.jpg');
    const url3 = require('../images/header-slider/business_analytic.jpg');
    const slide1Icon = require('../images/header-slider-content/01.png');
    const slide2Icon = require('../images/header-slider-content/02.png');

    return (
        <Carousel className="carousel">
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    // src="holder.js/800x400?text=First slide&bg=373940"
                    src={url2} />
                <Carousel.Caption >
                    <div class="container" >
                        <div class="row">
                            <div class="col-md-6">
                                <div class="vc-parent">
                                    <div class="vc-child">
                                        <section class="header-content">
                                            <h2>TECHNOLOGY SERVICES</h2>
                                            <h5>Enhance customer experience with optimised
                                            software performance by aligning your IT
                                                deliverables with business goals.</h5>
                                            <ul>
                                                <li>Mobile and Web Development</li>
                                                <li>Managed Services Technology Support</li>
                                                <li>Business Software and Application Development</li>
                                            </ul>
                                        </section>
                                        <Button className="m-3" variant="danger" size="md" type="submit" href="/technology">VIEW DETAILS</Button>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6 header-img-holder hidden-sm hidden-xs">
                                <div class="vc-parent">
                                    <div class="vc-child-bottom">
                                        <figure class="header-img owl-fadeInUp">
                                            {/* <img src={slide1Icon} alt="" class="img-responsive1" /> */}
                                            {/* <figcaption>
                                                <div class="header--badge header--badge-1 octagon">
                                                    <p><img src="/img/service_icon.png" width="52%" /></p>
                                                </div>
                                                <div class="header--badge header--badge-2 octagon">
                                                    <p><img src="/img/service_icon1.png" width="42%" /></p>
                                                </div>
                                            </figcaption> */}
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={url2}
                    alt="second slide" />
                {/* style="width: 998px;" */}
                <Carousel.Caption>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="vc-parent">
                                    <div class="vc-child">
                                        <section class="header-content">
                                            <h2 class="owl-fadeInUp animate-2x">TESTING AND SECURITY</h2>
                                            <h5 class="owl-fadeInUp animate-2x">We aim to help organizations regardless
                                                of any sizes improve their security processes, achieve compliance and
                                                protect their data</h5>
                                            <ul>
                                                <li>Functional & Test Management</li>
                                                <li>Functional Automation</li>
                                                <li>Performance Testing</li>
                                                <li>Security Testing</li>
                                            </ul>
                                            <Button className="m-3" variant="danger" size="md" type="submit" href="/testing">VIEW DETAILS</Button>
                                        </section>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 header-img-holder hidden-sm hidden-xs">
                                <div class="vc-parent">
                                    <div class="vc-child-bottom">
                                        <figure class="header-img owl-fadeInUp">
                                            {/* <img src={slide2Icon} alt="" class="img-responsive1" /> */}
                                            {/* <figcaption>
                                                <div class="header--badge header--badge-1 octagon">
                                                    <p><img src="/img/service_icon.png" width="52%" /></p>
                                                </div>
                                                <div class="header--badge header--badge-2 octagon">
                                                    <p><img src="/img/service_icon1.png" width="42%" /></p>
                                                </div>
                                            </figcaption> */}
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={url2}
                    alt="Third slide" />
                <Carousel.Caption>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="vc-parent">
                                    <div class="vc-child">
                                        <section class="header-content">
                                            <h2 class="owl-fadeInUp animate-2x">CLOUD TECHNOLOGY</h2>
                                            <h5 class="owl-fadeInUp animate-2x">We leverage the power of 
                                            Cloud technologies to enable Enterprises to achieve desired 
                                            results</h5>
                                            <ul>
                                                <li>Assessment Framework</li>
                                                <li>Cloud Migration</li>
                                                <li>Cloud Managed Services</li>
                                            </ul>
                                            <Button className="m-3" variant="danger" size="md" type="submit" href="/cloud">VIEW DETAILS</Button>
                                        </section>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 header-img-holder hidden-sm hidden-xs">
                                <div class="vc-parent">
                                    <div class="vc-child-bottom">
                                        <figure class="header-img owl-fadeInUp">
                                            <img src="" alt="" class="img-responsive1" />
                                            {/* <figcaption>
                                                <div class="header--badge header--badge-1 octagon">
                                                    <p><img src="/img/service_icon.png" width="52%" /></p>
                                                </div>
                                                <div class="header--badge header--badge-2 octagon">
                                                    <p><img src="/img/service_icon1.png" width="42%" /></p>
                                                </div>
                                            </figcaption> */}
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={url2}
                    alt="Fourth slide" />
                <Carousel.Caption>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="vc-parent">
                                    <div class="vc-child">
                                        <section class="header-content">
                                            <h2 class="owl-fadeInUp animate-2x">DATA ANAYTICS & AI</h2>
                                            <h5 class="owl-fadeInUp animate-2x">We are focused on combining human (AI Experts) 
                                            and technical strengths to deliver enhanced value by enabling companies to work on 
                                            complex cognitive tasks.</h5>
                                            <ul>
                                                <li>All in One Chatbot Platform</li>
                                                <li>AI + Data Science</li>
                                                <li>Big Data</li>
                                                <li>Automating Business Process & Beyond</li>
                                            </ul>
                                            <Button className="m-3" variant="danger" size="md" type="submit" href="/data">VIEW DETAILS</Button>
                                        </section>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 header-img-holder hidden-sm hidden-xs">
                                <div class="vc-parent">
                                    <div class="vc-child-bottom">
                                        <figure class="header-img owl-fadeInUp">
                                            <img src="" alt="" class="img-responsive1" />
                                            {/* <figcaption>
                                                <div class="header--badge header--badge-1 octagon">
                                                    <p><img src="/img/service_icon.png" width="52%" /></p>
                                                </div>
                                                <div class="header--badge header--badge-2 octagon">
                                                    <p><img src="/img/service_icon1.png" width="42%" /></p>
                                                </div>
                                            </figcaption> */}
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    );
}

export default carousel;

