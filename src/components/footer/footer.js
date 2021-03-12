
import React from 'react'
import { Button } from 'react-bootstrap';
import "../footer/footer.css";
import { Row, Col } from 'react-bootstrap';
import { FacebookFilled, LinkedinFilled, TwitterCircleFilled } from '@ant-design/icons';

function footer() {
    var icon = require('../images/logo.png');
    var icon1 = require('../images//logos/Avows.png')
    var imageName = require('../images/header-slider-content/02.png')
    var imageMalay = require('../images/icon/may_icon.png');
    var imageSg = require('../images/icon/sg_icon.png');
    var imageIndo = require('../images/icon/indo_icon.png');
    var imageUSA = require('../images/icon/usa_icon.png');
    var imageIndia = require('../images/icon/taj-mahal_icon.png');
    var imageDubai = require('../images/icon/burj-khalifa.png')

    return (
        <footer>
            <div className="main-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 hidden-md hidden-sm hidden-xs" >
                            <div className="footer-img">
                                {/* <img src=".\images\header-slider\04.png" alt="" className="img-responsive" /> */}
                                <img src={imageName} alt="" className="img-responsive" />
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-4 footer-widget">
                            <div className="footer-about">
                                <h4 className="footer-title">ABOUT US
                                <hr /></h4>
                                <p style={{ color: 'white' }}className="justified" >Avows Technologies founded in 2008 provides IT Consulting, Software Implementation, Development & Support services to customers in Malaysia, Indonesia, Singapore, India, USA and Dubai using a Global Delivery Model backed by High Quality Talent and established best practices.</p>
                                {/* <a href="/aboutus" className="read-more mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--raised mdl-button--accent">Read More</a> */}
                                <Button className="m-3" variant="danger" size="md" type="submit" href="/aboutUs">READ MORE</Button>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-4">
                            <section className="links-widget">
                                <h4 className="footer-title">QUICK LINKS
                                <hr /></h4>
                                <ul className="list-unstyled">
                                    <li><a href="/">SERVICES & SOLUTIONS</a></li>
                                    <li><a href="/career">CAREER</a></li>
                                    <li><a href="/contactUs">CONTACT</a></li>
                                </ul>
                            </section>
                        </div>
                        <div className="col-md-3 col-sm-4">
                            <section className="latest-tweets-widget">
                                <h4 className="footer-title">CONTACT US
                                <hr /></h4>
                                <ul className="footer_contact">
                                    <li>Level 15-06, Tower A, The Vertical Business Suite,
                                    Avenue 3, Bangsar South, No 8, Jln Kerinchi,
                                        59200 Kuala Lumpur, Malaysia.</li><br />
                                    <li>Phone: (+603) 2712 3456 </li>
                                    <li>Fax: (+603) 2712 3457</li>
                                    <li>Email: info@avowstech.com</li>
                                </ul>
                            </section>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-landmarks">
                {/* <div className="col-sm-20 col-md-20 footer3">
                    <div className="col-xs-20 col-sm-20 col-md-20"> */}
                        <div className="footer-landmarks">
                            <Row>
                                <Col sm md={3}></Col>
                                <Col sm md={1}>
                                    <img src={imageIndo} alt="" />
                                    <p>INDONESIA</p>
                                </Col>
                                <Col sm md={1}>
                                    <img src={imageIndia} alt="" />
                                    <p>INDIA</p>
                                </Col>
                                <Col sm md={1}>
                                    <img src={imageMalay} alt="" />
                                    <p>MALAYSIA(HQ)</p>
                                </Col>
                                <Col sm md={1}>
                                    <img src={imageSg} alt="" />
                                    <p>SINGAPORE</p>
                                </Col>
                                <Col sm md={1}>
                                    <img src={imageUSA} alt="" />
                                    <p>USA</p>
                                </Col>
                                <Col sm md={1}>
                                    <img src={imageDubai} alt="" />
                                    <p>DUBAI</p>
                                </Col>
                            </Row>
                        {/* </div>
                    </div> */}
                </div>
            </div>

            <div>
                <div id="footer2" className="Site-footer Site-footer--layout-2 Site-footer--gray" role="contentinfo">
                    <div className="Site-footer__primary text-center">
                        <div className="Footer-logo Footer-logo--normal">
                            <a href="/" className="Footer-logo__link" title="Avows">
                                <img className="avowsLogo" src={icon} alt="Avows" />
                            </a>
                        </div>
                    </div>
                    <div className="Site-footer__secondary">
                        <div className="container text-center p-3">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="Social-link Social-link--circle Social-link--dark Social-link--medium">
                                        <a href="https://www.facebook.com/avowstechnologies/?fref=ts" className="Social-link m-3" >
                                            <FacebookFilled className="fa-3x" />
                                        </a>
                                        <a href="https://www.linkedin.com/company/3651016?trk=prof-0-ovw-curr_pos" className="Social-link m-3" >
                                            <LinkedinFilled className="fa-3x" />
                                        </a>
                                        <a href="https://twitter.com/Avowstech" className="Social-link m-3">
                                            <TwitterCircleFilled className="fa-3x" /></a>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-copyright text-center">
                <div id="copyright" className="text-center">
                    <p>&copy; <a href="/">Avows</a> Technologies Sdn Bhd | 2021</p>
                </div>
            </div>

        </footer>

    );
}

export default footer;
