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
            <h2 className="center">Dev Projects</h2>
            <p>
              These are some development projects I have worked on, either
              individually or in a small team. Please contact me if you have any
              questions!
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
            <h3 className="center">Farmer</h3>
            <p>
              Farmer is an online game, created on Unity in C#, aimed at
              teaching statistics concepts to undergraduate students. I had the
              opportunity to work on this game with a small group of student
              developers under the guidance of Professor Shonda Kuiper at
              Grinnell College. We first developed the concept of this game from
              the beginning, researched farming models across the United States
              for different crops and amounts of water. Then we hunted for
              packages on the Unity Store and coded most of the gameplay
              (outside of the basic features included in the package we found).
              I worked on this game in the Spring semester and the entire summer
              of 2019.
            </p>
            <p>
              In this game, players can experiment with differing amounts of
              rainfall for different types of crops. There are also natural
              disasters that can occur like droughts and pests, and students can
              also choose to change nitrate levels in the soil for better crop
              use. The game is still undergoing development by Grinnell College
              students and is funded by an NSF grant.
            </p>
            <p>
              Please click the right circle above for a demo of the game, and
              the left circle for the code that my team worked on in 2019,
              posted on my Github account.
            </p>
          </div>
          {/* TODO:: Dropdown with more information */}
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
            <h3 className="center">CoSI Website</h3>
            <p>
              Last year, I developed this website in a small group of student
              developers in an AGILE environment. We partnered with a community
              organization called CoSI, or the Community Support for Immigrants.
              CoSI is based in Grinnell, Iowa, and is a nonprofit organization
              run by volunteers. Therefore, the team I worked in offered to
              develop the website for free so they could help more immigrants in
              central Iowa gain access to important resources such as
              information about where to take language courses, ICE raid
              preparation packets, and immigration lawyers in the area.
            </p>
            <p>
              Because our team was so small, I had the opportunity to work on
              every single part. We learned how to communicate with clients from
              a non-technical background, make skeleton frames of the website to
              show to them, and present our progress every week. I was in charge
              of creating and seeding the database of resources, which was built
              using SQLLite. I also created the contact form, which allows users
              to send emails to the CoSI Gmail account from the website itself.
              In addition, I had a part in designing the website and using HTML
              and CSS to create the UI.
            </p>
            <p>
              The website is nearing completion but is not yet launched. Our
              mentors were Professor Barbara Johnson, who works in the Computer
              Science department at Grinnell College, and a Grinnell College
              alumni who now works in the computer science field. Please click
              the left circle to see the website as it is right now, and the
              right circle to access the code.
            </p>
          </div>
          {/* TODO:: Dropdown with more information */}
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
            <h3 className="center">Events App</h3>
            <p>
              I am currently a member of the Apple/iPhone team on Grinnell
              College App Development. The specific project I am working on is
              called Events, which displays all on-campus events for the
              semester in an app. I work in a group of 4-5 other student
              developers using XCode and Objective-C.
            </p>
            <p>
              For this project, I was in charge of parsing the data in the
              backend from an XML file and displaying it on the UI. This
              included storing the dates, times, event names, and descriptions.
              Although this app has not yet been launched onto the Apple App
              Store, it will be completed very soon. Please click on the left
              circle for a short video demo of the app, and the right circle to
              see the code.
            </p>
            <p style={{ fontStyle: "italic" }}>
              P.S. Grinnell AppDev has just launched another app! It displays
              the menus and nutritional info of the meals offered each day at
              Grinnell College. Please click here to download the app on the app
              store.
              {/* TODO: add link */}
            </p>
          </div>
          {/* TODO: dropdown of more info */}
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
            <h3 className="center">Personal Website</h3>
            <p>
              Yep...this very website! I created this personal website in my
              free time during the summer, since my internship was canceled due
              to COVID-19. This site was created in React Native using Gatsby.
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
            <h3 className="center">Smaller Projects</h3>
            <p>
              Aside from the larger projects listed above, I've worked on
              smaller projects in various languages. Some of my favorites are
              the tic-tac-toe game I made when I was learning React, which I
              created by following this tutorial.
              {/* TODO: add link */} When I was learning Ruby on Rails in
              preparation for my project with CoSI, I created this website to
              promote healthy habits (inspired by the COVID-19 pandemic!) and
              learn some basic HTML and CSS {/*TODO: add link*/}. There are also
              multiple small projects I worked on in Java, C, and Scheme, which
              were assignments from class. You can access them on my Github page
              here, if you'd like! {/*TODO: add link*/}
            </p>
          </div>
        </Container>

        <hr></hr>
      </Container>
    </Layout>
  )
}
