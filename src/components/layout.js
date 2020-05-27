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
        <Container>
          <footer>
            © {new Date().getFullYear()} Grace Tsui. All rights reserved.
          </footer>
        </Container>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
