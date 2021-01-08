import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layouts/layout"
import SEO from "../components/seo"
import { Breadcrumb, Row, Col, Card } from 'react-bootstrap';

const Event = () => {

  const data =
    [
      {
        id: "0",
        title: "Techconnect 2021",
        date: "",
        image: require('../pages/blog_details/image/TechConnectDigitalBanking.png'),
        descp: "",
        link: "/blog_details/blog_01"
      }
    ]

  return (
    <Layout>
      <SEO title="EVENT" />

      <div id="pageHeader3" >
        <div className="vc-parent">
          <div className="vc-child">
          <Breadcrumb>
                <Breadcrumb.Item href="/">HOME</Breadcrumb.Item>
                <Breadcrumb.Item active>EVENT</Breadcrumb.Item>
              </Breadcrumb>
              <section className="page-title">
                <Row>
                  <Col md={4}> </Col>
                  <Col md={4}>
                    <h1>EVENT</h1>
                  </Col>
                </Row>
              </section>
          </div>
        </div>
      </div>

      <div id="blog">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <section>
                <h2 className="section-title"><span></span>UPCOMING EVENTS</h2>
              </section>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 col-sm-6 post-item">
              <div className="mdl-card mdl-shadow--2dp">

                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                  {data.map(data => (
                    <Card style={{ width: '20rem', margin: '10px' }} >
                      <Card.Img style={{ width: '20rem' }} variant="top" src={data.image} />
                      <Card.Body>
                        <Card.Title>
                          <section className="post-title">
                            <h2><a href={data.link}>{data.title}</a></h2>
                          </section>
                        </Card.Title>
                        <Card.Text>
                          <p>{data.date}</p>
                          <p>{data.descp}</p>
                        </Card.Text>
                        {/* <Button variant="primary" href={data.link} >MORE</Button> */}
                      </Card.Body>
                    </Card>
                  ))}
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

    </Layout>

  )
}
export default Event;
