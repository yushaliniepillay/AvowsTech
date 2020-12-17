import { Link } from "gatsby"
import React from "react"
import "../header/header.css"
import styled from "styled-components";
import { FacebookFilled, LinkedinFilled, TwitterCircleFilled } from '@ant-design/icons';
import { Button } from 'react-bootstrap';

const Footer = () => {

    return (

        <FooterContainer>
            <div className="footer">
                <div className="footer-middle">
                    <div className="container">
                        <div className="row">
                            {/* Column 0 */}
                            <div className="col-md-3 hidden-sm hidden-xs">
                                <h4>Image</h4>
                            </div>

                            {/* Column 1 */}
                            <div className="col-md-3 col-sm-4">
                                <h4>About US</h4>
                                <p className="justified">
                                    Avows Technologies founded in 2008 provides IT Consulting, Software Implementation, Development &amp;
                                    Support services to customers in Malaysia, Indonesia, Singapore, India and USA using a Global Delivery Model backed by High Class
                                    Talent and established best practices.
                            </p>
                                <Button>READ MORE</Button>
                                <br />
                            </div>

                            {/* Column 2 */}
                            <div className="col-md-3 col-sm-4">
                                <h4>Quick Links</h4>
                                <hr className="my-4" />
                                <ul className="list-unstyled">
                                    <li><a href="/services/technology_services">SERVICES & SOLUTIONS</a></li>
                                    <li><a href="/career">CAREER</a></li>
                                    <li><a href="/contactus">CONTACT</a></li>
                                </ul>
                            </div>

                            {/* Column 3 */}
                            <div className="col-md-3 col-sm-4">
                                <h4>Contact Us</h4>
                                <ul>
                                    <li>Level 15-06, Tower A, The Vertical Business Suite,
                                    Avenue 3, Bangsar South, No 8, Jln Kerinchi,
                                    59200 Kuala Lumpur, Malaysia.</li><br />
                                    <li>Phone: (+603) 2712 3456 </li>
                                    <li>Fax: (+603) 2712 3457</li>
                                    <li>Email: info@avowstech.com</li>
                                </ul>
                            </div>
                        </div>

                        {/* Footer Middle */}
                        <div className="footer-country">
                            <div className="container text-center">
                                <img src="/img/icon/may_icon.png" alt="" /><br />
                                <p>MALAYSIA(HQ)</p>
                                <img src="/img/icon/sg_icon.png" alt="" /><br />
                                <p>SINGAPORE</p>
                                <img src="/img/icon/indo_icon.png" alt="" /><br />
                                <p>INDONESIA</p>
                                <img src="/img/icon/usa_icon.png" alt="" /><br />
                                <p>USA</p>
                            </div>
                        </div>
                        {/* Footer Social */}
                        <div className="footer-sosial">
                            <div className="container text-center">
                                <div className="row">
                                    <div className="col-md-12">
                                        <Link href="https://www.facebook.com/avowstechnologies/?fref=ts" title="Facebook" >
                                            <FacebookFilled />
                                        </Link>
                                        <Link href="https://www.linkedin.com/company/avows-technologies-sdn-bhd/" title="Linkedin">
                                            <LinkedinFilled />
                                        </Link>
                                        <Link href="https://twitter.com/Avowstech" title="Twiter" >
                                            <TwitterCircleFilled />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer Bottom */}
                        <div className="footer-bottom text-center">
                            <p className="text-xs-center">
                                &copy; <a href="#">Avows</a> technologies Sdn Bhd | {new Date().getFullYear()}
                            </p>
                        </div>
                    </div>
                </div>
            </div >
        </FooterContainer >


    );
}
export default Footer;

const FooterContainer = styled.footer`
    .footer {
        background: var(--mainLightDark);
        padding-top: 1rem;
        color: var(--mainWhite);
        padding-top: 20px;
        padding-right: 0px;
        padding-bottom: 19px;
        padding-left: 0px
    }
    .footer-middle {
        background: var(--mainLightDark);
        padding-top: 1rem;
        color: var(--mainWhite);
    }
    .footer-country {
        background: var(--mainDark);
        padding-top: 1rem;
        padding-bottom: 2rem;
    }
    .footer-sosial {
        background: var(--mainWhite);
        padding-top: 1rem;
        padding-bottom: 3rem;
        font-size: 12pt;
    }
    .footer-bottom {
        background: var(--mainDark);
        padding-top: 2rem;
        padding-bottom: 1rem;
    }
`;