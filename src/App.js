import React from "react";
import { TransitionGroup } from "react-transition-group";
import "./App.css";
import Header from "./components/Pages/Header/Header";
import HomePage from "./components/Pages/HomePages/HomePage.pages";
import { Route, Switch } from "react-router-dom";
import Project from "./components/Pages/ProjectsPage/Project.page";
import Contact from "./components/Pages/ContactPage/contact.page";
import News from "./components/Pages/NewsPage/News.page";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <TransitionGroup>
            <Route exact path="/" component={HomePage} />
            <Route path="/projects" component={Project} />
            <Route path="/contact" component={Contact} />
            <Route path="/news" component={News} />
          </TransitionGroup>
        </Switch>
      </div>
    );
  }
}

export default App;
