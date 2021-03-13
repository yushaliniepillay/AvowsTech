import React from "react"
import Layout from "../components/layouts/layout"
import SEO from "../components/seo"
import { Breadcrumb, Row, Col, Container, Table } from 'react-bootstrap';

const Partners = () => {

    const modefin = require('../components/images/logos/modefin.png');
    const infrasoft = require('../components/images/logos/infrasoft.png');
    const ecouncil = require('../components/images/logos/ec-council.png');
    const haptik = require('../components/images/logos/haptik.png');
    const zoho = require('../components/images/logos/zoho.png');
    const cloud = require('../components/images/logos/g-cloud.png');
    const risk = require('../components/images/logos/risk-edge.png');
    const mambu = require('../components/images/logos/mambu.png');
    const wannatalk = require('../components/images/logos/wannatalk.png');
    const microsoft = require('../components/images/logos/microsoft.png');
    const tm = require('../components/images/logos/tm-one.png');
    const ibm = require('../components/images/logos/ibm.png');
    const brisk = require('../components/images/logos/brisk-infosec.png');
    const infotech = require('../components/images/logos/3i-infotech.png');

    const logo = [
        {
            id: 0,
            image: require('../components/images/logos/modefin.png'),
        },
        {
            id: 1,
            image: require('../components/images/logos/infrasoft.png'),
        },
        {
            id: 2,
            image: require('../components/images/logos/ec-council.png'),
        },
        {
            id: 3,
            image: require('../components/images/logos/haptik.png'),
        },
        {
            id: 4,
            image: require('../components/images/logos/zoho.png'),
        },
        {
            id: 5,
            image: require('../components/images/logos/g-cloud.png'),
        },
        {
            id: 6,
            image: require('../components/images/logos/risk-edge.png'),
        },
        {
            id: 7,
            image: require('../components/images/logos/mambu.png'),
        },
        {
            id: 8,
            image: require('../components/images/logos/wannatalk.png'),
        },
        {
            id: 9,
            image: require('../components/images/logos/microsoft.png'),
        },
        {
            id: 11,
            image: require('../components/images/logos/tm-one.png'),
        }
    ]
    const logo1 = [
        {
            id: 0,
            image: require('../components/images/logos/ibm.png'),
        },
        {
            id: 1,
            image: require('../components/images/logos/brisk-infosec.png'),
        },
        {
            id: 2,
            image: require('../components/images/logos/3i-infotech.png')
        }
    ]

    return (

        <Layout>
            <SEO title="PARTNERS" />

            <div id="pageHeader10" >
                <div className="vc-parent">
                    <div className="vc-child">
                        <Breadcrumb>
                            <Breadcrumb.Item href="/">HOME</Breadcrumb.Item>
                            <Breadcrumb.Item active>PARTNERS</Breadcrumb.Item>
                        </Breadcrumb>
                        <section className="page-title">
                            <Row>
                                <Col md={4}> </Col>
                                <Col md={4}>
                                    <h1>OUR PARTNERS</h1>
                                </Col>
                            </Row>
                        </section>
                    </div>
                </div>
            </div>
            <br /><br />

            <div id="blog">
                <Container className='ml-auto'>

                    {/* <Table className="text-center" bordered="sm" borderless size="md"> */}
                    <Row>
                        <Col>
                            <img alt='logo1' src={modefin} className="img-responsive1" style={{ paddingLeft: '0rem', paddingBottom: '2rem', width: "50%" }} />
                        </Col>
                        <Col>
                            <img alt='logo1' src={infrasoft} className="img-responsive1" style={{ paddingLeft: '0rem', paddingBottom: '2rem', width: "50%" }} />
                        </Col>
                        <Col>
                            <img alt='logo1' src={ecouncil} className="img-responsive1" style={{ paddingLeft: '0rem', paddingBottom: '2rem', width: "50%" }} />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <img alt='logo1' src={haptik} className="img-responsive1" style={{ paddingLeft: '0rem', paddingBottom: '2rem', width: "50%" }} />
                        </Col>
                        <Col>
                            <img alt='logo1' src={zoho} className="img-responsive1" style={{ paddingLeft: '0rem', paddingBottom: '2rem', width: "50%" }} />
                        </Col>
                        <Col>
                            <img alt='logo1' src={cloud} className="img-responsive1" style={{ paddingTop: '1rem', paddingLeft: '0rem', paddingBottom: '2rem', width: "60%" }} />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <img alt='logo1' src={risk} className="img-responsive1" style={{ paddingLeft: '0rem', paddingBottom: '2rem', width: "50%" }} />
                        </Col>
                        <Col>
                            <img alt='logo1' src={mambu} className="img-responsive1" style={{ paddingTop: '2rem', paddingLeft: '0rem', paddingBottom: '2rem', width: "50%" }} />
                        </Col>
                        <Col>
                            <img alt='logo1' src={wannatalk} className="img-responsive1" style={{ paddingLeft: '0rem', paddingBottom: '2rem', width: "50%" }} />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <img alt='logo1' src={microsoft} className="img-responsive1" style={{ paddingLeft: '0rem', paddingBottom: '2rem', width: "50%" }} />
                        </Col>
                        <Col>
                            <img alt='logo1' src={ibm} className="img-responsive1" style={{ paddingTop: '1rem', paddingLeft: '0rem', paddingBottom: '2rem', width: "50%" }} />

                        </Col>
                        <Col>
                            <img alt='logo1' src={tm} className="img-responsive1" style={{ marginLeft: '2rem', paddingLeft: '0rem', paddingBottom: '2rem', width: "40%" }} />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <img alt='logo1' src={brisk} className="img-responsive1" style={{ marginLeft: '15rem', paddingLeft: '0rem', paddingBottom: '2rem', width: "25%" }} />
                        </Col>
                        <Col>
                            <img alt='logo1' src={infotech} className="img-responsive1" style={{ marginLeft: '3rem', paddingLeft: '0rem', paddingBottom: '2rem', width: "25%" }} />
                        </Col>
                    </Row>

                    {/* </Table> */}
                    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                        {/* {logo.map((logo, index) => (
                            <figure>
                                <img alt='logo1' src={logo.image} className="img-responsive1" style={{ paddingLeft: '0rem', paddingBottom: '2rem', width: "50%" }} />
                            </figure>
                        ))} */}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                        {/* {logo1.map((logo1, index) => (
                            <figure>
                                <img alt='logo1' src={logo1.image} className="img-responsive1" style={{ paddingLeft: '0rem', paddingBottom: '2rem', width: "40%" }} />
                            </figure>
                        ))} */}
                    </div>
                </Container>
            </div>


        </Layout >

    )
}
export default Partners;