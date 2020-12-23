import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../header/header.css';

function management() {

    const url = 'https://cdn.filestackcontent.com/XYrHCaFGRSaq0EPKY1S6';

    return (

        <Carousel className="carousel">
            <Carousel.Item >
                <img
                    className="d-block w-100"
                    // src="holder.js/800x400?text=First slide&bg=373940"
                    src={url} />
                <Carousel.Caption >
                    <h3>TECHNOLOGY SERVICES</h3>
                    <br />
                    <p>Enhance customer experience with optimised software performance by aligning your IT deliverables with business goals.</p>

                </Carousel.Caption>
            </Carousel.Item>
            {/* interval={4000} */}
            <Carousel.Item >
                <img
                    className="d-block w-100"
                    src={url}
                    alt="second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={url}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>

    );
}

export default management;

