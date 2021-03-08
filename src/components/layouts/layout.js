/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Header from "../header/header";
import Footer from "../footer/footer";
import ScrollArrow from "../scrollArrow";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../header/header.css';
import '../footer/footer.css';


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      </div>

      <div>
        <ScrollArrow />
        <main>{children}</main>
      </div>

      <div>
        <Footer />
      </div>

      {/* <footer style={{
          marginTop: `2rem`
        }}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer> */}

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
