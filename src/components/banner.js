import React from "react"
import { Container } from "react-bootstrap"

export default function Banner(props) {
  return (
    <div class="banner">
      <h2 class="banner-title">{props.name}</h2>
    </div>
  )
}
