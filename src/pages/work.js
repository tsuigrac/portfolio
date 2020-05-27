import React from "react"
import Layout from "../components/layout"
import Banner from "../components/banner"
import { Container } from "react-bootstrap"

export default function Work() {
  return (
    <Layout>
      <Banner name="Work" />
      <Container>
        <h1>This is my work page</h1>
      </Container>
    </Layout>
  )
}
