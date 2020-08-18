import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import ResumeLeft from './resumeLeft';


class Resume extends Component {

  constructor(props) {
    super(props);
    this.state = {
      left: {
        name: "Shubham kumar Singh",
        about_blockQuote: `Hi, I’m Shubham, an Undergraduate student at IIIT Ranchi, major in Computer Science and Engineering.
        I'm a highly motivated student with a goal-driven work ethic.
        I have a strong curiosity for Data Science and computer Vision Architect,
        Also I'm well versed in Cloud Computing, Networking,
        full-stack development using trending technologies (React js, Koa and express, ORM, Node js, etc).
        I have an ample amount of experience in Web Development, having Interned with GalaxyCard.
        I have received the Bertelsmann Challenge Cloud Scholarship and Intel Edge AI Scholarship.
        Something that I’d love to do is combine my passion for learning and teaching with my development skills and build people-centric products.`,
        about_bQ_footer: `Competencies: full-stack development, computer vision, cloud computing, Python/Java/C++/JavaScript, DevOps Tools.`,
        address: "IIIT Ranchi Campus, Kali Nagar, Namkum, Ranchi",
        phone: "(+91)9304225752",
        email: "denyshubham@gmail.com",
        web: "myportfolio.knsonline.tech",
      },
      education: [{
        "startYear": "2017",
        "endYear": "2021",
        "schoolName": "IIIT Ranchi",
        "grade": "7.9 CGPA",
        "achievements": `I'm pursuing Bachelors in Computer Science and Engineering at
                         Indian Institute of Information Technology Ranchi.
                         This institute is located in Ranchi and is AICTE Approved.`,
      }, {
        "startYear": "2014",
        "endYear": "2016",
        "schoolName": "Loyola High School",
        "grade": "88.4 %",
        "achievements": `I have completed my High School from Loyola Patna. This is a CBSE based school.`,
      }],
      experience: [{
        "startYear": "2017",
        "endYear": "2021",
        "company": "Galaxy Card",
        "title": "Web Developer",
        "jobDescription": `Tested app and performed troubleshooting prior to deployment.
        · Created app layout and user interface using REACT NATIVE libraries.
        · Optimized web app for speed and performance. feature.
        · Developed, coded and updated Gift card and recharge service for clients.
        · Used programming capabilities in React, PSQL, Node, Docker, AWS and JavaScript and other libraries
        as needed`,
      }],
      skills: [
        { name: "React", level: 100 },
        { name: "Redux", level: 50 },
        { name: "HTML/CSS", level: 90 },
        { name: "Python", level: 80 },
      ],
    };
  }

  education = (myEducations = []) => {
    return (
      <section>
        {myEducations.map((edu, index) =>
          <Education
            startYear={edu.startYear}
            endYear={edu.endYear}
            schoolName={edu.schoolName}
            schoolDescription={edu.achievements}
            grade={edu.grade}
            key={index} />
        )}
      </section>
    )
  }

  experience = (myExperience = []) => {
    return (
      <section>
        {myExperience.map((exp, index) =>
          <Experience
            startYear={exp.startYear}
            endYear={exp.endYear}
            jobName={exp.company}
            jobDescription={exp.jobDescription}
            title={exp.title}
            key={index} />
        )}
      </section>
    )
  }

  skills = (mySkills = []) => {
    return (
      <section>
        {mySkills.map((skill, index) =>
          <Skills
            skill={skill.name}
            progress={skill.level}
            key={index}
          />
        )}
      </section>
    )
  }
  hr = () => {
    return <hr style={{ borderTop: '3px solid #e22947' }} />
  }
  render() {
    return (
      <section>
        <Grid>
          <Cell col={4}>
            <ResumeLeft data={this.state.left} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            {this.education(this.state.education)}
            {this.hr()}
            <h2>Experience</h2>
            {this.experience(this.state.experience)}
            {this.hr()}
            <h2>Skills</h2>
            {this.skills(this.state.skills)}
          </Cell>
        </Grid>
      </section>
    )
  }
}

export default Resume;
