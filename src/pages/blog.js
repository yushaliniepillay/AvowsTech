import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layouts/layout"
import SEO from "../components/seo"
import { Button, Card } from 'react-bootstrap';


const Blog = () => {

  const data =
    [
      {
        id: "0",
        title: "AVOWS wins Operational Excellence in IT - GBS Awards 2019",
        date: "THURSDAY, 03/10/2019",
        image: require('../images/management/Dato.jpg'),
        descp: "Big news from the Pikom Unicorn Awards 2019! Avows won a GBS Pikom award 2019 in Category of Operational Excellence in Information Technology (OPEIT). The event was graced by Dato Seri Anwar and esteemed members of Pikom and fellow IT colleagues. The awards was held for the first time in collaboration with APICTA (Asia Pacific ICT Awards) and the GBS (Global Business Services) Awards, saw more than 1,000 tech players celebrating each other at the most sought-after event of the country’s digital ecosystem.",
        link: "/blog_details/blog_00"
      },
      {
        id: "2",
        title: "AVOWS wins Operational Excellence in IT - GBS Awards 2019",
        date: "THURSDAY, 03/10/2019",
        image: require('../images/management/techconnect.png'),
        descp: "Big news from the Pikom Unicorn Awards 2019! Avows won a GBS Pikom award 2019 in Category of Operational Excellence in Information Technology (OPEIT). The event was graced by Dato Seri Anwar and esteemed members of Pikom and fellow IT colleagues. The awards was held for the first time in collaboration with APICTA (Asia Pacific ICT Awards) and the GBS (Global Business Services) Awards, saw more than 1,000 tech players celebrating each other at the most sought-after event of the country’s digital ecosystem.",
        link: "/blog_details/blog_00"
      }
    ]
  return (

    <Layout>
      <SEO title="Blog" />

      <div id="pageHeader1" >
        <div className="vc-parent">
          <div className="vc-child">
            <section className="page-title">
              <h2>BLOG</h2>
              <ul className="text-center">
                <li className="list-unstyled text-danger">
                  <Link className="text-white" href="/">Home /</Link> Blog</li>
                {/* <li className="list-unstyled active">Blog</li> */}
              </ul>
            </section>
          </div>
        </div>
      </div>

      <div id="blog">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <section>
                <h2 className="section-title"><span>LATEST POST</span>RECENT BLOG POST</h2>
              </section>
            </div>
          </div>

          {data.map(data => (
            <Card style={{ width: '18rem', flex: '2' }} >
              <Card.Img variant="top" src={data.image} />
              <Card.Body>
                <Card.Title>
                  <section className="post-title">
                    <h2><a href="/blog_details/blog_00">{data.title}</a></h2>
                  </section>
                </Card.Title>
                <Card.Text>
                  <p><i className="fa fa-calendar"></i>{data.date}</p>
                  <p>{data.descp}</p>
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <Button variant="primary" href={data.link} >READ MORE</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>

    </Layout>

  );

}

export default Blog
