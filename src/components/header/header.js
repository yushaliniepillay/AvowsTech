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
      <Navbar className="small-nav " bg="dark" variant="dark">
        <Navbar.Brand className="small-nav-num">
          <PhoneOutlined />(+603) 2712 3456
        </Navbar.Brand>
        <Navbar.Brand className="small-nav-num">
          <Link className="link" href="mailto:info@avowstech.com">
            <MailFilled /> info@avowstech.com
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive" >
          <Nav as="ul" className="ml-auto">
            <Nav.Item as="li" >
              <Link href="https://www.facebook.com/avowstechnologies/?fref=ts" title="Facebook" className="nav-link" activeclassname="active">
                <FacebookFilled />
              </Link>
            </Nav.Item>
            <Nav.Item as="li" >
              <Link href="https://www.linkedin.com/company/avows-technologies-sdn-bhd/" title="Linkedin" className="nav-link" activeclassname="active">
                <LinkedinFilled />
              </Link>
            </Nav.Item>
            <Nav.Item as="li" >
              <Link href="https://twitter.com/Avowstech" title="Twiter" className="nav-link" activeclassname="active">
                <TwitterCircleFilled />
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    
    {/* second navbar */}
      <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg" >
        <Navbar.Brand className="nav" href="/" >
          <img id="avowsTitle" src={cdc} alt='title'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav as="ul" className="ml-auto">
            <Nav.Item as="li" >
              <Link to="/" className="nav-link" activeclassname="active">
                HOME
            </Link>
            </Nav.Item>
            <Nav.Item as="li" >
              <Link to="/aboutUs" className="nav-link" activeclassname="active">
                ABOUT US
            </Link>
            </Nav.Item>
            <NavDropdown title="INDUSTRIES" href="#" activeclassname="active" id="basic-nav-dropdown">
              <NavDropdown.Item href="/industries/banking/banking">BANKING</NavDropdown.Item>
              <NavDropdown.Item href="/industries/insurance/insurance">INSURANCE</NavDropdown.Item>
              <NavDropdown.Item href="/industries/tele/telecommunication">TELECOMMUNICATION</NavDropdown.Item>
              <NavDropdown.Item href="/industries/health/healthcare">HEALTHCARE</NavDropdown.Item>
              <NavDropdown.Item href="/industries/manufacturing/manu">MANUFACTURING</NavDropdown.Item>
              <NavDropdown.Item href="/industries/oilNgas/energy">OIL AND GAS</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="SERVICES & SOLUTIONS" href="#" activeclassname="active" id="basic-nav-dropdown">
              <NavDropdown.Item href="/services_solution/technology">TECHNOLOGY SERVICE</NavDropdown.Item>
              <NavDropdown.Item href="/services_solution/testing">TESTING & SECURITY SERVICE</NavDropdown.Item>
              <NavDropdown.Item href="/services_solution/cloud">CLOUD TECHNOLOGIES</NavDropdown.Item>
              {/* <NavDropdown.Item href="/services_solution/cyber">CYBER SECURITY</NavDropdown.Item> */}
              <NavDropdown.Item href="/services_solution/data">DATA ANALYTICS AND AI</NavDropdown.Item>
              <NavDropdown.Item href="/services_solution/ar_vr">AUGMENTED & VIRTUAL REALITY</NavDropdown.Item>
            </NavDropdown>
            <Nav.Item as="li" >
              <Link to="/blog" className="nav-link" activeclassname="active">
                BLOG
            </Link>
            </Nav.Item>
            <Nav.Item as="li" >
              <Link to="/event" className="nav-link" activeclassname="active">
                EVENTS
            </Link>
            </Nav.Item>
            <Nav.Item as="li" >
              <Link to="/career" className="nav-link" activeclassname="active">
                CAREER
            </Link>
            </Nav.Item>
            <Nav.Item as="li" >
              <Link to="/contactUs" className="nav-link" activeclassname="active">
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
