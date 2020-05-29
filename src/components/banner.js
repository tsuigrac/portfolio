import React from "react"

export default function Banner(props) {
  return (
    <div class="banner">
      <div class="fade-in">
        <h2 class="banner-title">{props.name}</h2>
      </div>
    </div>
  )
}
