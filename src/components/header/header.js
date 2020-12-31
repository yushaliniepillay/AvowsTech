import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { PhoneOutlined, MailFilled, FacebookFilled, LinkedinFilled, TwitterCircleFilled } from '@ant-design/icons';
const cdc = require('../images/logo.png');


const Header = ({ siteTitle }) => (

  <header>
    {/* top navbar */}
    <div>
      <Navbar className="small-nav" bg="dark" variant="dark">
        <Navbar.Brand className="small-nav-num">
          <PhoneOutlined />(+603) 2712 3456</Navbar.Brand>
        <Navbar.Brand className="small-nav-num">
          <Link className="link" href="mailto:info@avowstech.com">
            <MailFilled /> info@avowstech.com
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive" >
          <Nav as="ul" className="ml-auto">
            <Nav.Item as="li" >
              <Link href="https://www.facebook.com/avowstechnologies/?fref=ts" title="Facebook" className="nav-link" activeClassName="active">
                <FacebookFilled />
              </Link>
            </Nav.Item>
            <Nav.Item as="li" >
              <Link href="https://www.linkedin.com/company/avows-technologies-sdn-bhd/" title="Linkedin" className="nav-link" activeClassName="active">
                <LinkedinFilled />
              </Link>
            </Nav.Item>
            <Nav.Item as="li" >
              <Link href="https://twitter.com/Avowstech" title="Twiter" className="nav-link" activeClassName="active">
                <TwitterCircleFilled />
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
    {/* second navbar */}
    <div >
      <Navbar expand="lg" bg="light" variant="light" sticky="top">
        <Navbar.Brand  href="/"><img id="avowsTitle" src={cdc}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive" >
          <Nav as="ul" className="ml-auto">
            <Nav.Item as="li" >
              <Link to="/" className="nav-link" activeClassName="active">
                HOME
            </Link>
            </Nav.Item>
            <Nav.Item as="li" >
              <Link to="/aboutUs" className="nav-link" activeClassName="active">
                ABOUT US
            </Link>
            </Nav.Item>
            <NavDropdown title="INDUSTRIES" href="#" activeClassName="active" id="basic-nav-dropdown">
              <NavDropdown.Item href="/industries/banking">BANKING</NavDropdown.Item>
              <NavDropdown.Item href="/industries/insurance">INSURANCE</NavDropdown.Item>
              <NavDropdown.Item href="/industries/telecommunication">TELECOMMUNICATION</NavDropdown.Item>
              <NavDropdown.Item href="/industries/healthcare">HEALTHCARE</NavDropdown.Item>
              <NavDropdown.Item disabled href="/industries/manufacturing">MANUFACTURING</NavDropdown.Item>
              <NavDropdown.Item href="/industries/energy">OIL AND GAS</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="SERVICE & SOLUTIONS" href="#" activeClassName="active" id="basic-nav-dropdown">
              <NavDropdown.Item href="/services_solution/technology">TECHNOLOGY SERVICE</NavDropdown.Item>
              <NavDropdown.Item href="/services_solution/testing">TESTING SERVICE</NavDropdown.Item>
              <NavDropdown.Item href="/services_solution/cloud">CLOUD TECHNOLOGIES</NavDropdown.Item>
              <NavDropdown.Item href="/services_solution/cyber">CYBER SECURITY</NavDropdown.Item>
              <NavDropdown.Item href="/services_solution/data">DATA ANALYTICS AND AI</NavDropdown.Item>
              <NavDropdown.Item href="/services_solution/ar_vr">AUGMENTED REALITY/VIRTUAL REALITY</NavDropdown.Item>
            </NavDropdown>
            <Nav.Item as="li" >
              <Link to="/blog" className="nav-link" activeClassName="active">
                BLOG
            </Link>
            </Nav.Item>
            <Nav.Item as="li" >
              <Link to="/event" className="nav-link" activeClassName="active">
                EVENTS
            </Link>
            </Nav.Item>
            <Nav.Item as="li" >
              <Link to="/career" className="nav-link" activeClassName="active">
                CAREER
            </Link>
            </Nav.Item>
            <Nav.Item as="li" >
              <Link to="/contactUs" className="nav-link" activeClassName="active">
                CONTACT US
            </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
