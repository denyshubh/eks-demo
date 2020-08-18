import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import ProfileImage from './profileImage';

class Landing extends Component {

  skills = (skillList = []) => {
    return (
      <div className="row justify-content-center m-2">
        <div className="col-10">
          {
            skillList.map((skill, index) => <p className="card-text badge badge-primary text-wrap m-2 p-2" key={index}>{skill}</p>)
          }
        </div>
      </div>
    )
  }

  socialLinks = (urls = []) => {
    return (
      <div className="social-links">
        {
          Object.keys(urls).map((url, index) =>
            <a href={url} rel="noopener noreferrer" target="_blank" key={index}>
              <i className={urls[url]} aria-hidden="true" />
            </a>
          )
        }
      </div>
    )
  }

  details = () => {
    return (
      <section>
        <div className="card text-center">
          <div className="card-header">
            <h1 className="text-center text-capitalize font-weight-bold title text-primary">Full Stack Web Developer</h1>
          </div>
          <div className="card-body">
            <h3 className="card-title font-weight-bold">My Skills</h3>
            {this.skills(["React", "Redux", "System Admin", "Cloud Computing", "Bootstrap", "Python"])}
          </div>
          <div className="card-footer text-muted">
            {this.socialLinks({
              "https://www.linkedin.com/in/denyshubham/": "fa fa-linkedin-square",
              "https://www.github.com/denyshubh": "fa fa-github-square",
              "https://medium.com/@shubham.singh98": "fa fa-free-code-camp",
              "http://google.com": "fa fa-youtube-square"
            })}
          </div>
        </div>
      </section>
    );
  }

  render() {
    return (
      <main className="container-fluid bg">
        <section className="container">
          <Grid>
            <Cell col={12}>
              <ProfileImage />
              {this.details()}
            </Cell>
          </Grid>
        </section>
      </main>
    )
  }
}

export default Landing;
