import React from "react";

import { Grid, Container } from "@material-ui/core";

import "./animations.css";
import CodingC from "../../Cards/CodingC.component";
import About from "../../About/About.component";

class HomePage extends React.Component {
  _opacity() {
    return "AnimationOfOpacity";
  }

  _opacityFinished() {
    return "OpacityFinished";
  }

  render() {
    return (
      <div>
        <Container
          style={{
            marginTop: "7%",
            textAlign: "center"
          }}
        >
          <Grid sm={12}>
            {/* <SwipeableTextMobileStepper /> */}
            <Grid sm={12}>
              <About />
            </Grid>
            <Grid>
              <CodingC />
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default HomePage;
