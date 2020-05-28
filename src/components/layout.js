import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Contact from "./contact"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"

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
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
        <Contact />
        <footer>
          © {new Date().getFullYear()} Grace Tsui. All rights reserved.
          <p>
            <a
              target="_blank"
              href="https://icons8.com/icons/set/filled-message--v1"
            >
              Envelope icon
            </a>{" "}
            icon by{" "}
            <a target="_blank" href="https://icons8.com">
              Icons8
            </a>
          </p>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
