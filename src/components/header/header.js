import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { PhoneOutlined, MailFilled, FacebookFilled, LinkedinFilled, TwitterCircleFilled } from '@ant-design/icons';

const Header = ({ siteTitle }) => (

  <header>
    {/* top navbar */}
    <div>
      <Navbar className="small-nav" bg="dark" variant="dark">
        <Navbar.Brand className="small-nav-num">
          <PhoneOutlined />(+603) 2712 3456</Navbar.Brand>
        <Navbar.Brand className="small-nav-num">
          <Link href="mailto:info@avowstech.com">
            <MailFilled /> info@avowsteh.com
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
        <Navbar.Brand id="avowsTitle" href="/">{siteTitle}</Navbar.Brand>
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
            <NavDropdown title="SERVICE & SOLUTIONS" href="#" class="active" id="basic-nav-dropdown">
              <NavDropdown.Item href="/technology">TECHNOLOGY SERVICE</NavDropdown.Item>
              <NavDropdown.Item href="/testing">TESTING SERVICE</NavDropdown.Item>
              <NavDropdown.Item href="/cloud">CLOUD TECHNOLOGIES</NavDropdown.Item>
              <NavDropdown.Item href="/cyber">CYBER SECURITY</NavDropdown.Item>
              <NavDropdown.Item href="/data">DATA ANALYTICS AND AI</NavDropdown.Item>
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
