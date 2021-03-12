import React from "react"
import Layout from "../components/layouts/layout"
import SEO from "../components/seo"
import { Breadcrumb, Row, Col, Container } from 'react-bootstrap';

const Partners = () => {

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
            id: 10,
            image: require('../components/images/logos/ibm.png'),
        },
        {
            id: 11,
            image: require('../components/images/logos/tm-one.png'),
        },
        {
            id: 12,
            image: require('../components/images/logos/brisk-infosec.png'),
        },
        {
            id: 13,
            image: require('../components/images/logos/3i-infotech.png'),
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
                            <img alt='logo1' src={logo.image} className="img-responsive1" style={{ paddingLeft: '0rem', paddingBottom: '2rem', width: "70%" }} />
                        </figure>
                        ))}
                    </div>
                </Container>
            </div>


        </Layout >

    )
}
export default Partners;