import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layouts/layout"
import SEO from "../components/seo"
import { Button, Card } from 'react-bootstrap';


const Blog = () => {
  //const img = require('../pages/blog_details/image/techconnect.png');

  const data =
    [
      {
        id: "0",
        title: "Algo League– The next generation Coding Contest for University Students in Malaysia",
        date: "JULY, 07/2019",
        image: require('../pages/blog_details/image/contest/3.jpg'),
        descp: "Algo League is the next-generation Coding Contest organized by Avows Technologies in partnership with Digital Native Agenda (DNA23), designed especially to address the needs of a Digital Malaysia.",
        link: "/blog_details/blog_01"
      },
      {
        id: "1",
        title: "AVOWS wins Operational Excellence in IT - GBS Awards 2019",
        date: "THURSDAY, 03/10/2019",
        image: require('../pages/blog_details/image/blog00_thumbnail.jpeg'),
        descp: "Big news from the Pikom Unicorn Awards 2019! Avows won a GBS Pikom award 2019 in Category of Operational Excellence in Information Technology (OPEIT). The event was graced by Dato Seri Anwar and esteemed members of Pikom and fellow IT colleagues. The awards was held for the first time in collaboration with APICTA (Asia Pacific ICT Awards) and the GBS (Global Business Services) Awards, saw more than 1,000 tech players celebrating each other at the most sought-after event of the country’s digital ecosystem.",
        link: "/blog_details/blog_00"
      },
      {
        id: "3",
        title: "TechConnect 2020: Business Simplified by Technology",
        date: "FRIDAY, 20/12/2019",
        image: require('../pages/blog_details/image/techconnect.png'),
        descp: "TechConnect 2020 is a conference conducted by Avows to shed light on future trends in the IT industry in Malaysia & to provide opportunities for exchanging ideas among leading CXOs and Industry Leaders.",
        link: "/blog_details/blog_02"
      },
      {
        id: "4",
        title: "Employees Engagement Activity",
        date: "2019",
        image: require('../pages/blog_details/image/annualDinner/HWT_4631.jpg'),
        descp: "",
        link: "/blog_details/blog_03"
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
                  <Link className="text-white" href="/">Home / </Link> Blog</li>
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
                <h2 className="section-title">RECENT BLOG POST</h2>
              </section>
            </div>
          </div>

          <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'}}>
            {data.map(data => (
              <Card style={{ width: '20rem', margin: '10px'}} >
                <Card.Img style={{ width: '20rem', height: '14rem'}} variant="top" src={data.image} />
                <Card.Body>
                  <Card.Title>
                    <section className="post-title">
                      <h2><a href={data.link}>{data.title}</a></h2>
                    </section>
                  </Card.Title>
                  <Card.Text>
                    <p><i className="fa fa-calendar"></i>{data.date}</p>
                    <p>{data.descp}</p>
                  </Card.Text>
                  <Button variant="primary" href={data.link} >READ MORE</Button>
                </Card.Body>
              </Card>
            ))}
          </div>


        </div>
      </div>

    </Layout>

  );

}

export default Blog
