import React, { useState } from "react"
//import axios from 'axios';
import Layout from "../components/layouts/layout"
import SEO from "../components/seo"
import { Breadcrumb, Row, Col, Button, Form, Card } from 'react-bootstrap';
import { EnvironmentFilled, PhoneFilled, MailFilled } from '@ant-design/icons';

const ContactUs = () => {

    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        phoneNo: "",
        service: "",
        message: ""
    });
    const { name, email, phoneNo, service, message } = inputs;
    const handleChange = e => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });

        console.log("Message.handleChange e.target.text", e.target.type);
    }

    const resetForm = () => {
        setInputs({
            name: "",
            email: "",
            phoneNo: "",
            service: "",
            message: ""
        })
    }

    const onSubmitForm = async (e) => {
        e.preventDefault();

        const body = { name, email, phoneNo, service, message };
        console.log("Message.onSubmitForm")
        const requestURL = `https://avows-strapi.herokuapp.com/contacts`;
        console.log(JSON.stringify(body));

        // request(requestURL, { method: 'POST', body: this.state.value })
        fetch(requestURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }).then((response) => {
            if (response.status >= 400) {
                throw new Error("Bad Response From Server");
            }
            return response.json();
        })
        resetForm();
        alert('The message sent');

    }


    const data =
        [
            {
                id: "0",
                title: "MALAYSIA - HQ",
                company: "Avows Technologies SDN BHD",
                address: "Level 15-06, Tower A, The Vertical Business Suite, Avenue 3, Bangsar South, No 8, Jln Kerinchi, 59200	Kuala Lumpur, Malaysia.",
                number: "Tel: +603 27123456"
            },
           
            {
                id: "1",
                title: "SINGAPORE",
                company: "Avows Technologies Pte. Ltd.,",
                address: "3 Temasek Avenue, Levels 21 & 34 Centennial Tower, Singapore 039190.",
                number: "Tel: +65 6549 7000          Fax: +65 6549 7001"
            },
            {
                id: "2",
                title: "INDONESIA",
                company: "PT Avows Technologies",
                address: "Office 8, Level 18A, Jl. Jendral Sudirman kav. 52-53 South Jakarta 12190 – Indonesia",
                number: "Tel: +62 2129608177"
            },
            {
                id: "3",
                title: "USA",
                company: "Avows Technologies Inc.",
                address: "4512 Legacy Drive #100 Plano, TX 75024",
                number: "Tel: +1 201 604 3505"
            },
            {
                id: "4",
                title: "INDIA",
                company: "Avows IT Solutions Private Limited",
                address: "Regus Business Center, Level 2, Oval Building, Plot No. 18, iLabs Hyderabad Technology Park, Inorbit Mall Rd, Hyderabad - 500081",
                number: "Tel: 040 44334230"
            },
            {
                id: "5",
                title: "UAE",
                company: "Avows Technologies DMCC",
                address: "Unit No 1291, DMCC Business Centre, Level No. 1, Jewellery & Gemplex 3 UAE, United Arab Emirates",
                number: "Tel: +5864 80920"
            }
        ]

    return (
        <Layout>
            <SEO title="CONTACT US" />

            <div id="pageHeader3" >
                <div className="vc-parent">
                    <div className="vc-child">
                        <Breadcrumb>
                            <Breadcrumb.Item href="/">HOME</Breadcrumb.Item>
                            <Breadcrumb.Item active>CONTACT US</Breadcrumb.Item>
                        </Breadcrumb>
                        <section className="page-title">
                            <Row>
                                <Col md={4}> </Col>
                                <Col md={4}>
                                    <h1>CONTACTS</h1>
                                </Col>
                            </Row>
                        </section>
                    </div>
                </div>
            </div>

            {/* locations */}

            <div className="container">
                <h2 className="black-color section-title">OUR OFFICES</h2>

                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                    {data.map((data, index) => (
                        <Card key={index} style={{ width: '23rem', textAlign: "center", margin: '10px' }} >
                            <i className="fa fa-map-marker"></i>
                            <Card.Body>
                                <Card.Title>
                                    <section className="post-title">
                                        <h2>{data.title}</h2>
                                        {/* <h2><a href="#">{data.title}</a></h2> */}
                                    </section>
                                </Card.Title>
                                <Card.Text>
                                    <p>{data.company},</p>
                                    <p>{data.address}</p>
                                    <p>{data.number}</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </div>
            <br />

            {/* form */}
            <div id="contact" className="page contact_fields">
                <div className="container">
                    <br />
                    <Form onSubmit={onSubmitForm} method="post" onReset={resetForm}>
                        <Form.Group controlId="formBasicNAme">
                            <Form.Control name="name" value={name} required onChange={e => handleChange(e)} type="text" placeholder="Name" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control name="email" value={email} required onChange={e => handleChange(e)} type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="formBasicNumber">
                            <Form.Control name="phoneNo" value={phoneNo} required onChange={e => handleChange(e)} type="number" placeholder="Phone No" />
                        </Form.Group>
                        <Form.Group controlId="formBasicText">
                             <Form.Control name="service" required 
                            onChange={e => handleChange(e)} 
                            type="text" 
                            placeholder="Service" />
                            {/* <Form.Control as="select" required
                                value={service}
                                onChange={e => handleChange(e)}
                                option={option}
                                type="text"
                                placeholder="Service" >
                                <option readOnly>Service</option>
                                <option value='request a proposal'>Request a proposal</option>
                                <option value='job applicant'>Job applicant</option>
                                <option value='partnership opportunity'>Partnership opportunity</option>
                                <option value='learn more about Avows Technologies services'>Learn more about Avows Technologies services</option>
                                <option value='others'>Others</option>
                            </Form.Control> */}
                        </Form.Group>
                        <Form.Group controlId="formBasicText">
                            <Form.Control name="message" value={message} required onChange={e => handleChange(e)} as="textarea" rows={3} type="text" placeholder="Message" />
                        </Form.Group>
                        <div className="text-center">
                            <Button className="m-3" variant="danger" size="md" type="submit" >SEND</Button>
                        </div>
                    </Form>
                </div>
            </div>

            {/* map */}
            <div className="container-fluid">
                <div className="row">
                    <iframe className="frame" title="Map of Avows Technologies" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.565025466968!2d101.73319691410663!3d3.2082799976640892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc3838cd5d77e5%3A0xd16ea55181170490!2sAvowstech!5e0!3m2!1sen!2s!4v1537269981617" width="100%" height="500" frameBorder="0" allowFullScreen></iframe>
                </div>
            </div>

            {/* contact address */}
            <div className="contact-address">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-4">
                            <i className="fa fa-map-marker"><EnvironmentFilled /></i>
                            <address>
                                <p>Avows Technologies SDN BHD</p>
                            </address>
                        </div>
                        <div className="col-md-4">
                            <i className="fa fa-phone"><PhoneFilled /></i>
                            <address>
                                <p>(+603) 2712 3456</p>
                            </address>
                        </div>
                        <div className="col-md-4">
                            <i className="fa fa-envelope"><MailFilled /></i>
                            <address>
                                <p> info@avowstech.com</p>
                            </address>
                        </div>
                    </div>
                </div>
            </div>


        </Layout >
    )
}
export default ContactUs;
