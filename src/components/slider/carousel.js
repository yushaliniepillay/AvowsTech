import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import '../header/header.css';
import { Fade } from "react-awesome-reveal";

function carousel() {
    // const url1 = require('../images/header-slider/application_development.jpg');
    // const url2 = require('../images/header-slider/digital_solutions.jpg');
    // const url3 = require('../images/header-slider/business_analytic.jpg');
    const slide1Icon = require('../images/header-slider-content/01.png');
    const slide2Icon = require('../images/header-slider-content/02.png');
    const slide3Icon = require('../images/header-slider-content/03.png');
    const slide4Icon = require('../images/header-slider-content/04.png');
    // const slide5Icon = require('../images/header-slider-content/05.png');
    
    // const data =
    //     [
    //         {
    //             id: "0",
    //             title: "TECHNOLOGY SERVICES",
    //             subTitle: "Enhance customer experience with optimised software performance by aligning your IT deliverables with business goals.",
    //             image: require('../images/header-slider/application_development.jpg'),
    //             list: [
    //                 "Mobile and Web Development", "Managed Services Technology Support", "Software and Application Services"
    //             ],
    //             link: "/services_solution/technology",
    //             bImage: 'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(../images/header-slider/application_development.jpg)'
    //         },
    //         {
    //             id: "1",
    //             title: "TESTING AND SECURITY",
    //             subTitle: "We aim to help organisations regardless of any sizes improve their security processes, achieve compliance and protect their data.",
    //             image: require('../images/header-slider/managed_services.jpg'),
    //             list: [
    //                 "Functional & Test Management", "Functional Automation", "Performance Testing", "Security Testing"
    //             ],
    //             link: "../services_solution/testing"
    //         },
    //         {
    //             id: "2",
    //             title: "CLOUD TECHNOLOGY",
    //             subTitle: "We leverage the power of Cloud technologies to enable Enterprises to achieve desired results",
    //             image: require('../images/header-slider/business_analytic.jpg'),
    //             list: [
    //                 "Assessment Framework", "Cloud Migration", "Cloud Managed Services"
    //             ],
    //             link: "/services_solution/cloud"
    //         },
    //         {
    //             id: "3",
    //             title: "DATA ANAYTICS & AI",
    //             subTitle: "We are focused on combining human (AI Experts) and technical strengths to deliver enhanced value by enabling companies to work on complex cognitive tasks.",
    //             image: require('../images/header-slider/digital_solutions.jpg'),
    //             list: [
    //                 "All in One Chatbot Platform", "AI + Data Science", "Big Data", "Automating Business Process & Beyond"
    //             ],
    //             link: "/services_solution/data"
    //         },
    //         {
    //             id: "4",
    //             title: "AUGMENTED & VIRTUAL REALITY",
    //             subTitle: "We aim to provide business solutions by integrating the virtual and the real world tailored to your needs and industry.",
    //             subT: "Solutions with immersive experience",
    //             image: require('../images/header-slider/ar_face.jpg'),
    //             list: [
    //                 "3D AR/VR Model Creation", "Augmented Reality and Internet of Things", "Virtual Reality", "Mixed Reality"
    //             ],
    //             link: "/services_solution/ar_vr"
    //         }

    //     ]

    return (
        <Carousel className="carousel">
            <Carousel.Item className="img1" interval={3000}>
                {/* <img className="img1 d-block w-100"
                    src={url2} /> */}
                <Carousel.Caption className="carousel-caption">
                    <div className="container" >
                        <div className="row">
                            <div className="col-md-8">
                                <div className="vc-parent">
                                    <div className="vc-child">
                                        <section className="header-content">
                                            <Fade direction='left' delay={100}>
                                                <h1>TECHNOLOGY SERVICES</h1>
                                            </Fade>
                                            <br />
                                            <Fade direction='right' delay={100}>
                                                <h5>Enhance customer experience with optimised
                                                software performance by aligning your IT
                                                deliverables with business goals.</h5>
                                            </Fade>
                                            <br />
                                            <ul>
                                                <Fade direction='top-right' delay={100}>
                                                    <li>Mobile and Web Development</li>
                                                    <li>Managed Services Technology Support</li>
                                                    <li>Software and Application Services</li>
                                                </Fade>
                                            </ul>
                                            <br />
                                            <Fade direction='bottom-left' delay={100}>
                                                <Button className="m-3" variant="danger" size="md" type="submit" href="/services_solution/technology">READ MORE</Button>
                                            </Fade>
                                        </section>

                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 header-img-holder hidden-sm hidden-xs">
                                <Fade direction='bottom-left' delay={600}>
                                    <figure>
                                        <img alt='slide1' src={slide1Icon} className="img-responsive1" style={{ width: "170%" }} />
                                    </figure>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="img2" interval={3000}>
                {/* <img
                    className="d-block w-100"
                    src={url2}
                    alt="second slide" /> */}
                {/* style="width: 998px;" */}
                <Carousel.Caption>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="vc-parent">
                                    <div className="vc-child">
                                        <section className="header-content">
                                            <Fade direction='left' delay={100}>
                                                <h1>TESTING AND SECURITY</h1>
                                            </Fade>
                                            <br />
                                            <Fade direction='right' delay={100}>
                                                <h5>We aim to help organisations regardless
                                                of any sizes improve their security processes, achieve compliance and
                                                protect their data.</h5>
                                            </Fade>
                                            <br />
                                            <ul>
                                                <Fade direction='top-right' delay={100}>
                                                    <li>Functional & Test Management</li>
                                                    <li>Functional Automation</li>
                                                    <li>Performance Testing</li>
                                                    <li>Security Testing</li>
                                                </Fade>
                                            </ul>
                                            <br />
                                            <Fade direction='bottom-left' delay={100}>
                                                <Button className="m-3" variant="danger" size="md" type="submit" href="/services_solution/testing">READ MORE</Button>
                                            </Fade>
                                        </section>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 header-img-holder hidden-sm hidden-xs">
                                <Fade direction='bottom-left' delay={600}>
                                    <figure>
                                        <img alt='slide2' src={slide2Icon} className="img-responsive1" style={{ width: "170%" }} />
                                    </figure>
                                </Fade>
                            </div>

                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="img3" interval={3000}>
                {/* <img
                    className="d-block w-100"
                    src={url2}
                    alt="Third slide" /> */}
                <Carousel.Caption>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="vc-parent">
                                    <div className="vc-child">
                                        <section className="header-content">
                                            <Fade direction='left' delay={100}>
                                                <h1>CLOUD TECHNOLOGY</h1>
                                            </Fade>
                                            <br />
                                            <Fade direction='right' delay={100}>
                                                <h5>We leverage the power of Cloud 
                                                    technologies to enable Enterprises to achieve desired results.</h5>
                                            </Fade>
                                            <br />
                                            <ul>
                                                <Fade direction='top-right' delay={100}>
                                                    <li>Assessment Framework</li>
                                                    <li>Cloud Migration</li>
                                                    <li>Cloud Managed Services</li>
                                                </Fade>
                                            </ul>
                                            <br />
                                            <Fade direction='bottom-left' delay={100}>
                                                <Button className="m-3" variant="danger" size="md" type="submit" href="/services_solution/cloud">READ MORE</Button>
                                            </Fade>
                                        </section>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 header-img-holder hidden-sm hidden-xs">
                                <Fade direction='bottom-left' delay={600}>
                                    <figure>
                                        <img alt='slide3' src={slide3Icon} className="img-responsive1" style={{ width: "190%" }} />
                                    </figure>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="img4" interval={3000}>
                {/* <img
                    className="d-block w-100"
                    src={url2}
                    alt="Fourth slide" /> */}
                <Carousel.Caption>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="vc-parent">
                                    <div className="vc-child">
                                        <section className="header-content">
                                            <Fade direction='left' delay={100}>
                                                <h1>DATA ANAYTICS & AI</h1>
                                            </Fade>
                                            <br />
                                            <Fade direction='right' delay={100}>
                                                <h5>We are focused on combining human (AI Experts)
                                                and technical strengths to deliver enhanced value by enabling companies to work on
                                                complex cognitive tasks.</h5>
                                            </Fade>
                                            <br />
                                            <ul>
                                                <Fade direction='top-right' delay={100}>
                                                    <li>All in One Chatbot Platform</li>
                                                    <li>AI + Data Science</li>
                                                    <li>Big Data</li>
                                                    <li>Automating Business Process & Beyond</li>
                                                </Fade>
                                            </ul>
                                            <br />
                                            <Fade direction='bottom-left' delay={100}>
                                                <Button className="m-3" variant="danger" size="md" type="submit" href="/services_solution/data">READ MORE</Button>
                                            </Fade>
                                        </section>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 header-img-holder hidden-sm hidden-xs">
                                <Fade direction='bottom-left' delay={600}>
                                    <figure>
                                        <img alt='slide4' src={slide4Icon} className="img-responsive1" style={{ width: "230%" }} />
                                    </figure>
                                </Fade>
                            </div>

                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="img5" interval={3000}>
                {/* <img
                    className="d-block w-100"
                    src={url2}
                    alt="Fourth slide" /> */}
                <Carousel.Caption>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="vc-parent">
                                    <div className="vc-child">
                                        <section className="header-content">
                                            <br/>
                                            <Fade direction='left' delay={100}>
                                                <h1>AUGMENTED & VIRTUAL REALITY</h1>
                                            </Fade>
                                            <br />
                                            <Fade direction='right' delay={100}>
                                                <h5>Solutions with immersive experience.</h5>
                                                <h5>We aim to provide business solutions by integrating the virtual and
                                                the real world tailored to your needs and industry.</h5>
                                            </Fade>
                                            <br />
                                            <ul>
                                                <Fade direction='top-right' delay={100}>
                                                    <li>3D AR/VR Model Creation</li>
                                                    <li>Augmented Reality and Internet of Things</li>
                                                    <li>Virtual Reality</li>
                                                    <li>Mixed Reality</li>
                                                </Fade>
                                            </ul>
                                            <br />
                                            <Fade direction='bottom-left' delay={100}>
                                                <Button className="m-3" variant="danger" size="md" type="submit" href="/services_solution/ar_vr">READ MORE</Button>
                                            </Fade>
                                        </section>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 header-img-holder hidden-sm hidden-xs">
                                {/* <Fade direction='bottom-left' delay={600}>
                                    <figure>
                                        <img alt='slide4' src={slide5Icon} className="img-responsive1" style={{ width: "170%" }} />
                                    </figure>
                                </Fade> */}
                            </div>

                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

        // <div>
        //     <Carousel className="carousel">
        //         {data.map((data, index) => (
        //             <Carousel.Item key={index}  interval={4000}>
        //                 <img className="img1" src={data.image} /> 
        //                 <Carousel.Caption>
        //                     <section className="header-content" >
        //                         <h2>{data.title}</h2>
        //                         <h5>{data.subtitle}</h5>
        //                         <ul>
        //                             <li>{data.list[0]}</li>
        //                             <li>{data.list[1]}</li>
        //                             <li>{data.list[2]}</li>
        //                             <li>{data.list[3]}</li>
        //                         </ul>
        //                         <Button key={data.id} className="m-3" variant="danger" size="md" type="submit" href={data.link}>READ MORE</Button>
        //                     </section>
        //                 </Carousel.Caption>
        //             </Carousel.Item>
        //         ))}
        //     </Carousel>
        // </div>
    );
}

export default carousel;

