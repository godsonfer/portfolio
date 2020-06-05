import React, { Component } from "react";

import { CardContent, Card, Typography } from "@material-ui/core";
import "./About.style.scss";
class About extends Component {
  render() {
    return (
      <div>
        <Card style={{ backgroundColor: "#eefd" }}>
          <img src="" alt="img" height="200" />
          <CardContent>
            <Typography
              variant="body2"
              style={{
                lineHeight: 2.5,
                textAlign: "justify",
                fontFamily: "timeNewRoman",
                fontSize: "1.2rem"
              }}
            >
              {" "}
              I am a web and mobile developper as one of the fastest growing. My
              graduate have moved on to work for some of the biggest tech
              companies around the world like Apple, Google, Amazon, JP Morgan,
              IBM, UNIQLO etc... I have been working as a senior software
              developer in my own company called Code School for many years. I
              also integrate CERCO AI to become more and more greate in research
              for real life issues, and now i am taking all that i have learned,
              to teach programming skills and to help people discover the
              amazing career opportunities that being a developer allows in
              life. Having been a self taught programmer, i understand that
              there is an overwhelming number of online courses, tutorials and
              books that are overly verbose and inadequate at teaching proper
              skills. Most people feel paralyzed and don't know where to start
              when learning a complex subject matter, or even worse, most people
              don't have $20,000 to spend on a coding bootcamp. Programming
              skills should be affordable and open to all. An education material
              should teach real life skills that are current and they should not
              waste a student's valuable time. Having learned important lessons
              from working for Fortune 500 companies, tech startups, to even
              founding my own business, I am now dedicating 100% of my time to
              teaching others valuable software development skills in order to
              take control of their life and work in an exciting industry with
              infinite possibilities. I promises you that there are no other
              programmer out there as comprehensive and as well explained. I
              believe that in order to learn anything of value, you need to
              start with the foundation and develop the roots of the tree. Only
              from there will you be able to learn concepts and specific
              skills(leaves) that connect to the foundation. Learning becomes
              exponential when structured in this way. Taking my experience in
              educational psychology and coding, my programmer skills will take
              you on an understanding of complex subjects that you never thought
              would be possible.
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default About;
