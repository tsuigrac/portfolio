import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Contact from "./contact"
import "bootstrap/dist/css/bootstrap.min.css"

import facebook from "../images/facebook.png"
import linkedin from "../images/linkedin.png"
import github from "../images/github.png"

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
        <hr></hr>
        <footer>
          <div>
            <a
              target="_blank"
              href="https://www.facebook.com/gtsui2"
              rel="noopener noreferrer"
            >
              <img
                src={facebook}
                alt={"Facebook Logo"}
                align={"right"}
                style={{ marginRight: "3%", marginBottom: "0.5%" }}
                className="logo"
              />{" "}
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/grace-tsui-5082b6168/"
              rel="noopener noreferrer"
            >
              <img
                src={linkedin}
                alt={"Linkedin Logo"}
                align={"right"}
                style={{ marginRight: "3%", marginBottom: "0.5%" }}
                className="logo"
              />{" "}
            </a>
            <a
              target="_blank"
              href="https://github.com/tsuigrac"
              rel="noopener noreferrer"
            >
              <img
                src={github}
                alt={"Github Logo"}
                align={"right"}
                style={{ marginRight: "3%", marginBottom: "0.5%" }}
                className="logo"
              />{" "}
            </a>
          </div>
          © {new Date().getFullYear()} Grace Tsui. All rights reserved.
          <p style={{ fontSize: "15px" }}>
            Icons by{" "}
            <a
              target="_blank"
              href="https://icons8.com"
              rel="noopener noreferrer"
            >
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
