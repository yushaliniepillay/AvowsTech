import React from "react"
import Layout from "../components/layouts/layout"
import SEO from "../components/seo"
import { Breadcrumb, Row, Col, Container } from 'react-bootstrap';

const Partners = () => {

    const logo = [
        {
            id: 1,
            image: require('../components/images/header-slider-content/04.png'),
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
                                    <h1>PARTNERS</h1>
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
                            <img alt='logo1' src={logo.image} className="img-responsive1" style={{ width: "30%" }} />
                        </figure>
                        ))}
                    </div>
                </Container>
            </div>


        </Layout >

    )
}
export default Partners;