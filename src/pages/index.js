import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Button } from "react-bootstrap"
import iceCream from "../images/ice-cream.png"
import cone from "../images/cone.png"

const IndexPage = () => (
  <Layout>
    <div class="banner">
      <div class="fade-in">
        <h2 class="home-title">Hi, I'm Grace.</h2>
        <div>
          {" "}
          {/* <img
            src={iceCream}
            alt={"Message Icon"}
            className="banner-picture float-left"
          /> */}
        </div>
        <h3 class="home-body">I'm a student developer. Thanks for coming.</h3>
        <Link to="/work">
          <Button variant="primary" className="banner-button">
            {"Portfolio"}
          </Button>
        </Link>
        <a href="mailto:tsui.grace99@gmail.com">
          <Button variant="primary" className="banner-button">
            {"Contact"}
          </Button>
        </a>
      </div>
    </div>
    <Container>
      <SEO title="Home" />
      <h1>Hi people</h1>
    </Container>
  </Layout>
)

export default IndexPage
