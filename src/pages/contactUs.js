import React from "react"
//import { Link } from "gatsby"
import Layout from "../components/layouts/layout"
import SEO from "../components/seo"
import { Breadcrumb, Row, Col, Button, Form, Card } from 'react-bootstrap';
import { EnvironmentFilled, PhoneFilled, MailFilled } from '@ant-design/icons';

const ContactUs = () => {

    const data =
        [
            {
                id: "0",
                title: "MALAYSIA - HQ",
                company: "Avows Technologies SDN BHD",
                address: "Level 15-06, Tower A, The Vertical Business Suite,Avenue 3, Bangsar South, No 8, Jln Kerinchi, 59200	Kuala Lumpur, Malaysia.",
                number: "+603 27123456"
            },
            {
                id: "1",
                title: "SINGAPORE",
                company: "Avows Technologies Pte. Ltd.,",
                address: "3 Temasek Avenue, Levels 21 & 34 Centennial Tower, Singapore 039190.",
                number: "+65 6549 7000          Fax: +65 6549 7001"
            },
            {
                id: "2",
                title: "INDONESIA",
                company: "PT Avows Technologies",
                address: "Office 8, Level 18A, Jl. Jendral Sudirman kav. 52-53 South Jakarta 12190 – Indonesia",
                number: "+62 2129608177"
            },
            {
                id: "3",
                title: "USA",
                company: "Avows Technologies Inc.",
                address: "4512 Legacy Drive #100 Plano, TX 75024",
                number: "+1 201 604 3505"
            }
        ]

    return (
        <Layout>
            <SEO title="Contact Us" />

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
                    {data.map(data => (
                        <Card style={{ width: '23rem', textAlign: "center", margin: '10px'}} >
                            <i className="fa fa-map-marker"></i>
                            <Card.Body>
                                <Card.Title>
                                    <section className="post-title">
                                        <h2><a href="#">{data.title}</a></h2>
                                    </section>
                                </Card.Title>
                                <Card.Text>
                                    <p>{data.company},</p>
                                    <p>{data.address}</p>
                                    <p>Tel: {data.number}</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </div>
            <br/>

            {/* form */}
            <div id="contact" className="page contact_fields">
                <div className="container">
                    <br />
                    <Form>
                        <Form.Group controlId="formBasicNAme">
                            <Form.Control type="text" placeholder="Name" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="formBasicNumber">
                            <Form.Control type="text" placeholder="Phone No" />
                        </Form.Group>
                        <Form.Group controlId="formBasicText">
                            <Form.Control type="text" placeholder="Service" />
                        </Form.Group>
                        <Form.Group controlId="formBasicText">
                            <Form.Control as="textarea" rows={3} type="text" placeholder="Message" />
                        </Form.Group>
                        <div className="text-center">
                            <Button className="m-3" variant="danger" size="md" type="submit">SEND</Button>
                        </div>
                    </Form>
                </div>
            </div>

            {/* map */}
            <div className="container-fluid">
                <div className="row">
                    <iframe className="frame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.565025466968!2d101.73319691410663!3d3.2082799976640892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc3838cd5d77e5%3A0xd16ea55181170490!2sAvowstech!5e0!3m2!1sen!2s!4v1537269981617" width="100%" height="500" frameborder="0" allowfullscreen=""></iframe>
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


        </Layout>
    )
}
export default ContactUs;
