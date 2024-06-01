import React from "react";
import Navbar from "./Navbar";
import Container from "./Container";
import Footer from "./Footer";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.aboutMeRef = React.createRef();
    this.projectRef = React.createRef();
    this.explorationRef = React.createRef();
    this.experienceRef = React.createRef();
    this.connectRef = React.createRef();
  }

  handleScrollToAboutMe = () => {
    this.aboutMeRef.current.scrollIntoView({ behavior: "smooth" });
  };
  handleScrollToProject = () => {
    this.projectRef.current.scrollIntoView({ behavior: "smooth" });
  };
  handleScrollToExploration = () => {
    this.projectRef.current.scrollIntoView({ behavior: "smooth" });
  };
  handleScrollToExperience = () => {
    this.experienceRef.current.scrollIntoView({ behavior: "smooth" });
  };
  handleScrollToConnect = () => {
    this.connectRef.current.scrollIntoView({ behavior: "smooth" });
  };

  render() {
    return (
      <div className="container-fluid d-flex flex-column px-0">
        <Navbar
          handleScrollToAboutMe={this.handleScrollToAboutMe}
          handleScrollToProject={this.handleScrollToProject}
          handleScrollToExploration={this.handleScrollToExploration}
          handleScrollToExperience={this.handleScrollToExperience}
          handleScrollToConnect={this.handleScrollToConnect}
        />
        <Container
          handleScrollToAboutMe={this.handleScrollToAboutMe}
          handleScrollToProject={this.handleScrollToProject}
          handleScrollToExploration={this.handleScrollToExploration}
          handleScrollToExperience={this.handleScrollToExperience}
          handleScrollToConnect={this.handleScrollToConnect}
          aboutMeRef={this.aboutMeRef}
          projectRef={this.projectRef}
          explorationRef={this.explorationRef}
          experienceRef={this.experienceRef}
          connectRef={this.connectRef}
        />
        <Footer />
      </div>
    );
  }
}
export default LandingPage;
