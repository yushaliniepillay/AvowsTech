import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import '../header/header.css';

function carousel() {

    const url = 'https://cdn.filestackcontent.com/XYrHCaFGRSaq0EPKY1S6';
    const url1 = require('../images/header-slider/application_development.jpg');
    const url2 = require('../images/header-slider/digital_solutions.jpg');
    const url3 = require('../images/header-slider/business_analytic.jpg');
    return (

        <Carousel className="carousel">
            <Carousel.Item interval={40000}>
                <img
                    className="d-block w-100"
                    // src="holder.js/800x400?text=First slide&bg=373940"
                    src={url2} />
                <Carousel.Caption >
                    <div class="container">
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
                                            <img src="/img/header-slider-content/02.png" alt="" class="img-responsive" />
                                            <figcaption>
                                                <div class="header--badge header--badge-1 octagon">
                                                    <p><img src="/img/service_icon.png" width="52%" /></p>
                                                </div>
                                                <div class="header--badge header--badge-2 octagon">
                                                    <p><img src="/img/service_icon1.png" width="42%" /></p>
                                                </div>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={40000}>
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
                                            <img src="/img/header-slider-content/02.png" alt="" class="img-responsive" />
                                            <figcaption>
                                                <div class="header--badge header--badge-1 octagon">
                                                    <p><img src="/img/service_icon.png" width="52%" /></p>
                                                </div>
                                                <div class="header--badge header--badge-2 octagon">
                                                    <p><img src="/img/service_icon1.png" width="42%" /></p>
                                                </div>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={url2}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>

    );
}

export default carousel;

