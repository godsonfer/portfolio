import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./Header.scss";

import { Link } from "@material-ui/core";
import {
  AppBar,
  Typography,
  makeStyles,
  Toolbar,
  Grid,
  Button
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },

  title: {
    flexGrow: 1
  }
}));

const Header = () => (
  <Grid sm={12}>
    <AppBar position="fixed">
      <Toolbar>
        <Grid item sm={7} spacing={2}>
          <Typography className={useStyles.title} variant="h6">
            <Link href="/" color="inherit" underline="none">
              KOUAGOU FERDINAND
            </Link>
          </Typography>
        </Grid>

        <Grid item sm spacing={4} className="">
          <Button color="inherit">
            <Link
              color="inherit"
              underline="none"
              href="/projects"
              className="option"
            >
              PROJETS
            </Link>
          </Button>

          <Button color="inherit">
            <Link
              color="inherit"
              underline="none"
              href="/contact"
              className="option"
            >
              ME CONTACTER
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              color="inherit"
              underline="none"
              href="/news"
              className="option"
            >
              NOUVELLES
            </Link>
          </Button>
        </Grid>
        <Grid item sm spacing={2}>
          <Button>
            <FacebookIcon color="inherit" />
          </Button>
          <Button>
            <InstagramIcon color="inherit" />
          </Button>
          <Button>
            <LinkedInIcon color="inherit" />
          </Button>

          <Button>
            <YouTubeIcon color="inherit" />
          </Button>
        </Grid>
      </Toolbar>
    </AppBar>
  </Grid>
);

export default Header;
