import React from "react";
import HeaderTitle from "../HeaderTitle";
import ListProject from "./CardProject/ListProject";
import { getProjectData } from "../../utils/dataProject";

class MyProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: getProjectData(),
    }
  }
  render() {
    return (
      <div className="my-project d-flex flex-column justify-content-center align-items-center">
        <HeaderTitle
          header="My Project"
          title={
            <span>
              <span className="text-hijau">Design and Code </span>Project 
            </span>
          }
          desc="This project focuses on UI/UX Design and Front-end web development that I worked on during my college years. I achieved this project through bootcamps, competitions, and courses that I undertook."
        />
        <ListProject projects={this.state.projects}/>
      </div>
    );
  }
}

export default MyProject;
