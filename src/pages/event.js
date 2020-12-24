import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layouts/layout"
import SEO from "../components/seo"
import { Button } from 'react-bootstrap';

const Event = () => (
  <Layout>
    <SEO title="Event" />

    <div id="pageHeader1" >
      <div className="vc-parent">
        <div className="vc-child">
          <section className="page-title">
            <h2>EVENT</h2>
            <ul className="text-center">
              <li className="list-unstyled text-danger">
                <Link className="text-white" href="/">Home /</Link> Event</li>
              {/* <li className="list-unstyled active">Event</li> */}
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
              <h2 className="section-title"><span></span>UPCOMING EVENTS</h2>
            </section>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 col-sm-6 post-item">
            <div className="mdl-card mdl-shadow--2dp">
              <div className="mdl-card__title">
                <div className="post-img">
                  <a href="#">
                    <img src="images/blogPost/blog00_thumbnail.jpeg" alt="" className="img-responsive" />
                  </a>
                </div>
              </div>

              <div className="mdl-card__supporting-text">
                <section className="post-title">
                  <h2><a href="#">TECHCONNECT</a></h2>
                </section>
                <div className="post-metadata">
                  <p><i className="fa fa-calendar"></i>FRIDAY, 20/12/2019</p>
                </div>
                <div className="post-summary">
                  <p>A first of a series of CX events featureing prominent industry throught leaders and visionary experts<br />&nbsp;</p>
                </div>
              </div>
              <div className="mdl-card__actions mdl-card--border clearfix">
                {/* <a href="/blog_details/blog_00" className="read-more mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" data-upgraded=",MaterialButton,MaterialRipple">read more
                  <span className="mdl-button__ripple-container">
                    <span className="mdl-ripple"></span>
                  </span>
                </a> */}
                <Button className="m-3" variant="danger" size="md" type="submit">MORE</Button>
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

export default Event
