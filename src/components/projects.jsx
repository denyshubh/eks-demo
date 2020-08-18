import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';
import Cards from './cards';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
      projectList: ["Web Apps", "Cloud Infrastructure", "Mobile Apps", "Data Science"],
      web: [
        {
          name: "Waves",
          description: "This is an E-Commerse Website for selling music items...",
          link: "https://hidden-basin-56596.herokuapp.com/",
        },
        {
          name: "Youtube Search",
          description: "This is a demo Youtube search website made using react...",
          link: "https://fathomless-sierra-95100.herokuapp.com/",
        },
        {
          name: "carssarskitchen ",
          description: "This is a Full Working Restaurant Website.This website uses Pug...",
          link: "https://carssarskitchen.herokuapp.com/",
        },
        {
          name: "Waves",
          description: "This is an E-Commerse Website for selling music items...",
          link: "https://hidden-basin-56596.herokuapp.com/",
        },
        {
          name: "Youtube Search",
          description: "This is a demo Youtube search website made using react...",
          link: "https://fathomless-sierra-95100.herokuapp.com/",
        },
        {
          name: "carssarskitchen ",
          description: "This is a Full Working Restaurant Website.This website uses Pug...",
          link: "https://carssarskitchen.herokuapp.com/",
        },
      ]
    };
  }


  toggleCategories() {

    if (this.state.activeTab === 0) {
      let webProjectList = this.state.web
      return (
        <div className="container">
          <div className="card-columns">
            {
              webProjectList.map((project, index) =>
                <Cards data={project} key={index} />
              )
            }
          </div>
        </div>
      )
    } else if (this.state.activeTab === 1) {
      let webProjectList = this.state.web
      return (
        <div className="container">
          <div className="card-columns">
            {
              webProjectList.map((project, index) =>
                <Cards data={project} key={index} />
              )
            }
          </div>
        </div>
      )
    } else if (this.state.activeTab === 2) {
      let webProjectList = this.state.web
      return (
        <div className="container">
          <div className="card-columns">
            {
              webProjectList.map((project, index) =>
                <Cards data={project} key={index} />
              )
            }
          </div>
        </div>
      )
    } else if (this.state.activeTab === 3) {
      let webProjectList = this.state.web
      return (
        <div className="container">
          <div className="card-columns">
            {
              webProjectList.map((project, index) =>
                <Cards data={project} key={index} />
              )
            }
          </div>
        </div>
      )
    }

  }

  tabs = (projectTitle = []) => {
    return (
      <Tabs className="tab" activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
        {
          projectTitle.map((title, index) => <Tab key={index}>{title}</Tab>)
        }
      </Tabs>
    )
  }


  render() {
    return (
      <main>
        {this.tabs(this.state.projectList)}
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>


      </main>
    )
  }
}

export default Projects;
