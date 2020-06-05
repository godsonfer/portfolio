import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import "./coding.styles.scss";

import { CardContent, CardHeader, Divider, CardMedia } from "@material-ui/core";

import { Grid, Typography } from "@material-ui/core";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: "10px 0 10px 0"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

function CodingC() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={4} className="paper">
          <Card className={classes.paper}>
            <CardHeader title="PHP" />
            <Divider />
            <CardMedia
              className="image"
              image="./../../dist/php.JPG"
              title="Paella dish"
            />
            <Divider />
            <CardContent>
              <Typography paragraph>
                Since 2016, I started leaning PHP. It is a urge and great
                backend framework to be learnt. The reason why I like PHP is its
                power and easy syntax. Any Beginner can learn it and understand
                it. I did not stopped there. I also started learning frameworks
                based on PHP and found Laravel and Synfony very interrest. I
                more Worked on Laravel than Symfony. :)
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} sm={4} className="paper">
          <Card className={classes.paper}>
            <CardHeader title="DATABASE MySQL" />
            <CardMedia
              className="image"
              image="./../../dist/mysql.png"
              title="Paella dish"
            />
            <CardContent>
              As a developper, there is no thing you could do without Databases.
              They help to make dynamics websites The most popualar and the most
              used in hosting is MySQL. Like PHP, it is simple of use and even
              beginner can start using it on their websites. :)
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} sm={4} className="paper">
          <Card className={classes.paper}>
            <CardHeader title="JAVASCRIPT" />
            <CardMedia
              className="image"
              image="./../../dist/javascript.JPG"
              title="Paella dish"
            />
            <CardContent>
              {" "}
             Javascript is the most popular language in the world. It is the second language world's most powerful and common.
              This page is developed by using a javascript library. i like it !
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Card className={classes.paper}>
            <CardHeader title="Adds" />
            <CardMedia
              className="image"
              image="./../../dist/frameworks.JPG"
              title="Paella dish"
            />
            <CardContent>

              {" "}
              <!--Begin: Star-Clicks.com HTML Code--><script type='text/javascript' src='https://www.star-clicks.com/secure/ads.php?pid=89999609650737179'></script><!-- End: Star-Clicks.com -->
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default CodingC;
