import { Link } from "gatsby"
import React from "react"
import styled from "styled-components";
import { Button } from 'react-bootstrap';

function Footer() {

    return (

        <FooterContainer className="main-footer">
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        {/* Column 0 */}
                        <div className="col-md-3 hidden-sm hidden-xs">
                            <h2>Image</h2>
                        </div>
                        {/* Column 1 */}
                        <div className="col-md-3 col-sm-4 footer-widget">
                            <h2>About US</h2>
                            <p className="justified">
                                Avows Technologies founded in 2008 provides IT Consulting, Software Implementation, Development &amp;
                                Support services to customers in Malaysia, Indonesia, Singapore, India and USA using a Global Delivery Model backed by High Class
                                Talent and established best practices.
                            </p>
                            <Button>READ MORE</Button>
                           
                        </div>
                        {/* Column 2 */}
                        <div className="col-md-3 col-sm-4">
                            <h2>Quick Links</h2>
                            <ul className="list-unstyled">
                                <li><a href="/services/technology_services">SERVICES & SOLUTIONS</a></li>
                                <li><a href="/career">CAREER</a></li>
                                <li><a href="/contactus">CONTACT</a></li>
                            </ul>
                        </div>
                        {/* Column 3 */}
                        <div className="col-md-3 col-sm-4">
                            <h2>Contact Us</h2>
                            <ul className="list-unstyled">
                                <li>Level 15-06, Tower A, The Vertical Business Suite,
                                Avenue 3, Bangsar South, No 8, Jln Kerinchi,
                                59200 Kuala Lumpur, Malaysia.</li><br />
                                <li>Phone: (+603) 2712 3456 </li>
                                <li>Fax: (+603) 2712 3457</li>
                                <li>Email: info@avowstech.com</li>
                            </ul>
                        </div>
                    </div>
                    {/* Footer Bottom */}
                    <div className="footer-bottom">
                        <p className="text-xs-center">
                            &copy; <a href="#">Avows</a> technologies Sdn Bhd | {new Date().getFullYear()}
                        </p>
                    </div>
                </div>
            </div>
        </FooterContainer>

        // <div>
        //         <img src="/img/icon/may_icon.png" alt="" /><br />
        //         <p>MALAYSIA(HQ)</p>
        //         <img src="/img/icon/sg_icon.png" alt="" /><br />
        //         <p>SINGAPORE</p>
        //         <img src="/img/icon/indo_icon.png" alt="" /><br />
        //         <p>INDONESIA</p>
        //         <img src="/img/icon/usa_icon.png" alt="" /><br />
        //         <p>USA</p>
        //     </div>
        //     <div>
        //         <a href="https://www.facebook.com/avowstechnologies/?fref=ts" class="Social-link__item" target="_blank"><i class="fa fa-facebook"></i></a>
        //         <a href="https://www.linkedin.com/company/3651016?trk=prof-0-ovw-curr_pos" class="Social-link__item" target="_blank"><i class="fa fa-linkedin"></i></a>
        //         <a href="https://twitter.com/Avowstech" class="Social-link__item" target="_blank"><i class="fa fa-twitter"></i></a>
        //  </div> 


    );
}
export default Footer;

const FooterContainer = styled.footer`
    .footer-middle {
        background: var(--mainDark);
        padding-top: 1rem;
        color: var(--mainWhite);
    }
    .footer-bottom {
        padding-top: 2rem;
        padding-bottom: 1rem;
    }
`;