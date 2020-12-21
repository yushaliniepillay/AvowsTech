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
                    src={url}
                />
                <Carousel.Caption className="caption1">
                    <div className="row ml-auto">
                        <div className="container col-md-6">
                            <section className="page-title">
                                <h2>TECHNOLOGY SERVICES</h2>
                                <br />
                                <h5>Enhance customer experience with optimised
                                    software performance by aligning your IT
                                    deliverables with business goals.</h5>
                                <ul>
                                    <li>Mobile and Web Development</li>
                                    <li>Managed Services Technology Support</li>
                                    <li>Business Software and Application Development</li>
                                </ul>
                            </section>
                            <Button className="m-3" variant="danger" size="md" type="submit">VIEW DETAILS</Button>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={40000}>
                <img
                    className="d-block w-100"
                    src={url2}
                    alt="second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={url3}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>

    );
}

export default carousel;

