import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../header/header.css';

function carousel() {
    
    const url = 'https://cdn.filestackcontent.com/XYrHCaFGRSaq0EPKY1S6';
    
    return (

            <Carousel className="carousel">
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        // src="holder.js/800x400?text=First slide&bg=373940"
                        src={url}

                    />
                    <Carousel.Caption className="caption1">
                        <div>Hi all</div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
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

export default carousel;

