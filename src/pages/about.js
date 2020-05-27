import React from "react"
import Layout from "../components/layout"
import Banner from "../components/banner"
import { Container } from "react-bootstrap"

export default function About() {
  return (
    <Layout>
      <Banner name="About" />
      <Container>
        <h1>This is my about page</h1>
      </Container>
    </Layout>
  )
}
