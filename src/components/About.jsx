import { Box, HStack } from "@chakra-ui/react";
import React, { Fragment } from "react";
// import myImage from "../img/myImage.png";
class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        {
          id: "HTML5_skill",
          content: "HTML5",
          percentage: "80%",
          value: "80%",
        },
        {
          id: "CSS_skill",
          content: "CSS3",
          percentage: "75%",
          value: "75",
        },
        {
          id: "JavaScript",
          content: "JavaScript",
          percentage: "75%",
          value: "75",
        },
        {
          id: "ReactJs",
          content: "ReactJS",
          percentage: "80%",
          value: "80",
        },
      ],
      about_me: [
        {
          id: "aboutMe",
          content:
            "Hello guys, My name is Sompal, I am React JS UI Developer. I am working as a React JS Associate Developer at Qwerty Thoughts.",
        },
        {
          id: "myProjects",
          content:
            "I have worked on more than 4 projects in my career. I have worked more than 10 React Projects using Chakra UI and Material UI. These are greate UI library when you are building React Projects.",
        },
        {
          id: "myVision",
          content:
            "I am mastering my JavaScript skills. I am aspiring to be a fullstack developer. I always learn new thing daily on website updates.",
        },
      ],
    };
  }
  render() {
    return (
      <>
        <section id="about" className="about-mf sect-pt4 route">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="row">
                        <div
                          className="col-sm-6 col-md-5"
                          style={{ margin: "0 auto" }}
                        >
                          <div
                            className="about-img"
                            style={{ textAlign: "center" }}
                          >
                            <img
                              src="https://images.pexels.com/photos/14615903/pexels-photo-14615903.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                              className="img-fluid rounded b-shadow-a"
                              alt="this is another image"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="skill-mf">
                        {this.state.skills.map((skill, index) => {
                          return (
                            <Fragment key={skill.id}>
                              <span>{skill.content}</span>{" "}
                              <span className="pull-right">
                                {skill.percentage}
                              </span>
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{ width: skill.percentage }}
                                  aria-valuenow={skill.value}
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </Fragment>
                          );
                        })}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="about-me pt-4 pt-md-0">
                        <div className="title-box-2">
                          <h5 className="title-left">About Me</h5>
                        </div>
                        {this.state.about_me.map((content) => {
                          return (
                            <p
                              className="lead title"
                              style={{ textAlign: "left" }}
                              key={content.id}
                            >
                              {content.content}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default About;
