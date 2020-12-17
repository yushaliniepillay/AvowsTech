import React from 'react';
import { Carousel } from 'react-bootstrap';


function carousel() {
    
    const url = 'https://cdn.filestackcontent.com/XYrHCaFGRSaq0EPKY1S6';
    
    return (
        <div>
            <Carousel classNameName="carousel">
                <Carousel.Item interval={1000}>
                    <img
                        classNameName="d-block w-100"
                        // src="holder.js/800x400?text=First slide&bg=373940"
                        src={url}

                    />
                    <Carousel.Caption><div>Hi all</div></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        classNameName="d-block w-100"
                        src={url}
                        alt="second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        classNameName="d-block w-100"
                        src={url}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default carousel;

