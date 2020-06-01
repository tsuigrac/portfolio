import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Button } from "react-bootstrap"
// import iceCream from "../images/ice-cream.png"
// import cone from "../images/cone.png"

//Images for about
import me from "../images/home/me.png"
import frame from "../images/home/frame.png"

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
      <Container className="pic-container center">
        <img src={me} alt={"Picture of me"} className="circle-image" />
        <h3 className="image-header">Grace Tsui</h3>
        <p className="image-desc">
          I'm a 4th year student at Grinnell College pursuing a BA in computer
          science. I love problem solving and am passionate about programming
          and software development.
        </p>
        <hr style={{ marginBottom: "40%" }}></hr>
      </Container>
      <div className="center">
        <h1>What do I like to do?</h1>
        <p>Computer science, of course, but also...</p>
      </div>
      <div className="section row">
        <div className="col-lg-6 order-lg-1 center">
          <img src={frame} alt={"Language"} className="section-pic" />
        </div>
        <div className="col-lg-5 order-lg-2 text-center text-lg-left p-2">
          <h3 className="image-header">Learn new languages</h3>
          <p className="image-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>

      <div className="section row">
        <div className="col-lg-6 order-lg-2 center">
          <img src={frame} alt={"Meeting People"} className="section-pic" />
        </div>
        <div className="col-lg-5 order-lg-1 text-center text-lg-left p-2">
          <h3 className="image-header">Meet new people</h3>
          <p className="image-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div className="section row">
        <div className="col-lg-6 order-lg-1 center">
          <img src={frame} alt={"Travel"} className="section-pic" />
        </div>
        <div className="col-lg-5 order-lg-2 text-center text-lg-left p-2">
          <h3 className="image-header">Travel</h3>
          <p className="image-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div className="section row">
        <div className="col-lg-6 order-lg-2 center">
          <img src={frame} alt={"Eating"} className="section-pic" />
        </div>
        <div className="col-lg-5 order-lg-1 text-center text-lg-left p-2">
          <h3 className="image-header">Eat</h3>
          <p className="image-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <hr></hr>
    </Container>
  </Layout>
)

export default IndexPage
