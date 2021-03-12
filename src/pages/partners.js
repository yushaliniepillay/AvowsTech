import React from "react"
import Layout from "../components/layouts/layout"
import SEO from "../components/seo"
import { Breadcrumb, Row, Col, Container } from 'react-bootstrap';

const Partners = () => {

    const logo = [
        {
            id: 0,
            image: require('../components/images/logos/Picture1.jpg'),
        },
        {
            id: 1,
            image: require('../components/images/logos/Picture6.jpg'),
        },
        {
            id: 2,
            image: require('../components/images/logos/Picture12.jpg'),
        },
        {
            id: 3,
            image: require('../components/images/logos/Picture8.jpg'),
        },
        {
            id: 4,
            image: require('../components/images/logos/Picture9.jpg'),
        },
        {
            id: 5,
            image: require('../components/images/logos/Picture2.jpg'),
        },
        {
            id: 6,
            image: require('../components/images/logos/Picture13.jpg'),
        },
        {
            id: 7,
            image: require('../components/images/logos/Picture10.jpg'),
        },
        {
            id: 8,
            image: require('../components/images/logos/Picture4.jpg'),
        },
        {
            id: 9,
            image: require('../components/images/logos/Picture11.jpg'),
        },
        {
            id: 10,
            image: require('../components/images/logos/Picture5.jpg'),
        },
        {
            id: 11,
            image: require('../components/images/logos/Picture14.jpg'),
        },
        {
            id: 12,
            image: require('../components/images/logos/Picture3.jpg'),
        },
        {
            id: 13,
            image: require('../components/images/logos/Picture7.jpg'),
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
                    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                    {logo.map((logo, index) => (
                        <figure>
                            <img alt='logo1' src={logo.image} className="img-responsive1" style={{ paddingLeft: '2rem', paddingBottom: '2rem', width: "100%" }} />
                        </figure>
                        ))}
                    </div>
                </Container>
            </div>


        </Layout >

    )
}
export default Partners;