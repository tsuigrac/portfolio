import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Button } from "react-bootstrap"

//Images for about
import me from "../images/home/me.png"
import language from "../images/home/language.jpg"
import food from "../images/home/food.jpg"
import people from "../images/home/people.jpg"
import travel from "../images/home/travel.jpg"

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
          <img src={language} alt={"Korean"} className="section-pic" />
        </div>
        <div className="col-lg-5 order-lg-2 text-center text-lg-left p-2">
          <h3 className="image-header">Learning new languages</h3>
          <p className="image-desc">
            My favorite hobby is learning new ways to express myself. I enjoy
            learning about other cultures, and I have taught myself Korean from
            a complete beginner to an advanced level. The picture shown is an
            image I took while wearing a hanbok, a traditional Korean clothing
            style, while vising the Gyeongbokgung palace in Seoul during my time
            there studying abroad. I am currently studying Mandarin Chinese
            during my summer break. Aside from foreign languages, I also enjoy
            learning new programming languages in my spare time. This website
            was a side project I worked on during summer break that helped me
            get familiar with React and the Gatsby framework!
          </p>
        </div>
      </div>

      <div className="section row">
        <div className="col-lg-6 order-lg-2 center">
          <img src={people} alt={"Meeting People"} className="section-pic" />
        </div>
        <div className="col-lg-5 order-lg-1 text-center text-lg-left p-2">
          <h3 className="image-header">Meeting new people</h3>
          <p className="image-desc">
            I love getting to know new people and discovering new interests. A
            way I do this throug my position as a board member at the Grinnell
            College Wellness Lounge, where I plan campus-wide events with other
            student groups. I also just like attending campus events such as
            theater productions, Pub Quizzes, or even just study breaks to
            connect with different people!
          </p>
        </div>
      </div>
      <div className="section row">
        <div className="col-lg-6 order-lg-1 center">
          <img src={travel} alt={"Travel"} className="section-pic" />
        </div>
        <div className="col-lg-5 order-lg-2 text-center text-lg-left p-2">
          <h3 className="image-header">Traveling</h3>
          <p className="image-desc">
            I've traveled to many parts of Asia, some of Europe, and across the
            United States. I also recently studied abroad in South Korea and
            visited Japan in the process, where I had the opportunity to meet
            great friends, visit interesting cultural attractions, eat great
            food, and improve my language skills. Here's a picture of _________
            in Osaka! I would really, really like to explore other places and
            travel a lot more!
          </p>
        </div>
      </div>
      <div className="section row">
        <div className="col-lg-6 order-lg-2 center">
          <img src={food} alt={"Eating"} className="section-pic" />
        </div>
        <div className="col-lg-5 order-lg-1 text-center text-lg-left p-2">
          <h3 className="image-header">Eating</h3>
          <p className="image-desc">
            Pass the plate, please! When I visit somewhere new, I always try to
            eat as much of the local food as possible. Currently, Korean cuisine
            is my favorite - spicy rice cakes? Check! Beef tartre? Check!
            Silkworm pupae? ...It was an interesting experience!
          </p>
        </div>
      </div>
      <hr></hr>
    </Container>
  </Layout>
)

export default IndexPage
