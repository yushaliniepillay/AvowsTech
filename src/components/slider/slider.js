import React from 'react';
import { Button } from 'react-bootstrap';
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "../slider/slider-animations.css";

className Slider extends React.Component {

    render() {
        return (
            <div>
                <Slider classNameName="slider-wrapper" autoplay={1000}>
                    <div
                        classNameName="slider-content"
                        style={{ background: { image } }} >
                        {/* <img  src= {`http://localhost:1337${image.url}`} /> */}
                        <div classNameName="inner">
                            <h1>Title</h1>
                            <p>Description</p>
                            <p>List</p>
                        </div>
                        <div classNameName="slider-button">
                            <section>
                                <Button className="active" variant="danger" size="lg" href=''>View Details</Button>
                            </section>
                        </div>
                    </div>
                </Slider>
            </div>

        )
    }

}

export default Slider;