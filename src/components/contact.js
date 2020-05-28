import React from "react"
import { Button, Container } from "react-bootstrap"
import icon from "../images/message-icon.png"

export default function Contact() {
  return (
    <Container>
      <div className="center contact">
        <h2 style={{ fontSize: "2.5em" }}>Reach out to me.</h2>
        <h3 style={{ fontSize: "1.5em" }}>I'd love to get in touch!</h3>
        <p>
          If you are interested in my work, know of any interesting software
          development opportunities, or simply would like to discuss the merits
          of pineapples on pizza, then shoot me an email.
        </p>
        <a href="mailto:tsui.grace99@gmail.com">
          <Button variant="primary">
            <img
              src={icon}
              style={{ marginRight: "3%", marginBottom: "0.5%" }}
            />
            {"Email Me"}
          </Button>
        </a>
      </div>
    </Container>
  )
}
