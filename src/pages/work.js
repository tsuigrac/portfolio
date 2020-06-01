import React from "react"
import Layout from "../components/layout"
import Banner from "../components/banner"
import { Container, Button } from "react-bootstrap"
import SEO from "../components/seo"

import me from "../images/home/me.png"
import frame from "../images/home/frame.png"

export default function Work() {
  return (
    <Layout>
      <Banner name="Work" />
      <Container>
        <SEO title="Work" />
        <Container style={{ maxWidth: "700px" }}>
          <div className="center">
            <h1>A collection of my work...</h1>
            <p>Here's what I've been up to.</p>
            <a
              target="_blank"
              href="https://github.com/tsuigrac"
              rel="noopener noreferrer"
            >
              <Button variant="primary" className="body-button">
                {"My Github"}
              </Button>
            </a>
            <a href="mailto:tsui.grace99@gmail.com">
              <Button variant="primary" className="body-button">
                {"My Resume"}
              </Button>
            </a>
          </div>
        </Container>
        <hr></hr>
        <Container className="project-description">
          <div>
            <h2>Projects</h2>
            <p>
              Some larger projects I've had the opportunity to be a part of.
            </p>
          </div>
        </Container>
        <Container>
          <div className="section row">
            <div className="col-sm-4 center my-auto order-sm-2">
              <hr className="picture-divide"></hr>
            </div>
            <div className="col-sm-4 center order-sm-1">
              <img src={me} className="circle-image"></img>
            </div>
            <div className="col-sm-4 center order-sm-3">
              <img src={me} className="circle-image"></img>
            </div>
          </div>
        </Container>

        <Container className="project-description">
          <div>
            <h3>Farmer</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </Container>

        <Container>
          <div className="section row">
            <div className="col-sm-4 center my-auto  order-sm-2">
              <hr className="picture-divide"></hr>
            </div>
            <div className="col-sm-4 center order-sm-1">
              <img src={me} className="circle-image"></img>
            </div>

            <div className="col-sm-4 center order-sm-3">
              <img src={me} className="circle-image"></img>
            </div>
          </div>
        </Container>
        <Container className="project-description">
          <div>
            <h3>CoSI</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </Container>

        <Container>
          <div className="section row">
            <div className="col-sm-4 center my-auto order-sm-2">
              <hr className="picture-divide"></hr>
            </div>
            <div className="col-sm-4 center order-sm-1">
              <img src={me} className="circle-image"></img>
            </div>

            <div className="col-sm-4 center order-sm-3">
              <img src={me} className="circle-image"></img>
            </div>
          </div>
        </Container>
        <Container className="project-description">
          <div>
            <h3>Events App</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </Container>

        <Container>
          <div className="section row">
            <div className="col-sm-4 center my-auto order-sm-2">
              <hr className="picture-divide"></hr>
            </div>
            <div className="col-sm-4 center order-sm-1">
              <img src={me} className="circle-image"></img>
            </div>
            <div className="col-sm-4 center order-sm-3">
              <img src={me} className="circle-image"></img>
            </div>
          </div>
        </Container>
        <Container className="project-description">
          <div>
            <h3>Portfolio Website</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </Container>

        <Container>
          <div className="section row">
            <div className="col-sm-4 center my-auto order-sm-2">
              <hr className="picture-divide"></hr>
            </div>
            <div className="col-sm-4 center order-sm-1">
              <img src={me} className="circle-image"></img>
            </div>

            <div className="col-sm-4 center order-sm-3">
              <img src={me} className="circle-image"></img>
            </div>
          </div>
        </Container>
        <Container className="project-description">
          <div>
            <h3>Diabetes Tracker</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </Container>

        <hr></hr>
      </Container>
    </Layout>
  )
}
