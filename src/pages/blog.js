import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layouts/layout"
import SEO from "../components/seo"
import { Button } from 'react-bootstrap';

// const blogImage = require('../images/blogPost/techconnect.png');

const Blog = () => (

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

        <div className="row">
          <div className="col-md-4 col-sm-6 post-item">
            <div className="mdl-card mdl-shadow--2dp">
              <div className="mdl-card__title">
                <div className="post-img">
                  <a className="blog-image" href="/blog_details/blog_00" >
                    {/* <img src={blogImage} alt="techImage" className="img-responsive" /> */}
                  </a>
                </div>
              </div>

              <div className="mdl-card__supporting-text">
                <section className="post-title">
                  <h2><a href="/blog_details/blog_00">AVOWS wins Operational Excellence in IT - GBS Awards 2019</a></h2>
                </section>
                <div className="post-metadata">
                  <p><i className="fa fa-calendar"></i>THURSDAY, 03/10/2019</p>
                </div>
                <div className="post-summary">
                  <p>Big news from the Pikom Unicorn Awards 2019! Avows won a GBS Pikom award 2019 in 
                    Category of Operational Excellence in Information Technology (OPEIT). The event was 
                    graced by Dato Seri Anwar and esteemed members of Pikom and fellow IT colleagues.
                    The awards was held for the first time in collaboration with APICTA (Asia Pacific ICT Awards) 
                    and the GBS (Global Business Services) Awards, saw more than 1,000 tech players celebrating each 
                    other at the most sought-after event of the country’s digital ecosystem.<br />
                  </p>
                </div>
              </div>
              <div className="mdl-card__actions mdl-card--border clearfix">
                {/* <a href="/blog_details/blog_00" className="read-more mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" data-upgraded=",MaterialButton,MaterialRipple">read more
                  <span className="mdl-button__ripple-container">
                    <span className="mdl-ripple"></span>
                  </span>
                </a> */}
                <Button className="m-3" variant="danger" size="md" type="submit" href="/blog_details/blog_00">READ MORE</Button>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />


      </div>
    </div>

  </Layout>
)

export default Blog
