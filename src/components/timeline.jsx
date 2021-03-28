import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Experience</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">


                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Capstone Project at Startup Canada  <span> Jan 2021 - May 2021 </span></h2>
                        <p>Working on a project to develop a social networking application for female entrepreneurs to find assistance from mentors, so that they can set shop more successfully.
Tools : React Native, GraphQL, AWS Amplify (for CI/CD), AWS DynamoDB, AWS AppSync and AWS Cognito</p>
                      </div>
                    </div>
                  </article>


                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Graduate Services Assistant<span> January 2021 - May 2021 </span></h2>
                        <p>I am working parttime as a grader for the course "Software Enterprise I : Construction and transition" </p>
                      </div>
                    </div>
                  </article>

                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Graduate Services Assistant<span> August 2020 - December 2020 </span></h2>
                        <p>I am working parttime as a grader for the course "Software Enterprise I : Tools and Processes" </p>
                      </div>
                    </div>
                  </article>


                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2> Data Science Intern  <span> May 2020 - August 2020 </span></h2>
                        <p>I worked on building and deploying a Supervised Learning Model that predicted stress levels of users from calendar data. 
                          It would send them stress alleviating recommendations. </p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
