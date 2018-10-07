import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import './resume.scss';
import experience from './experience';
import ExperienceRow from './components/ExperienceRow';

class Resume extends React.PureComponent {
  render() {
    return (
      <ScrollableAnchor id={'resume'}>
        <section className="resume">
          <div className="container">
            <div className="row">
              <div className="col">
                <header className="section-header">
                  Experience
                </header>
                {experience.map((gig, index) => {
                  return <ExperienceRow key={index} gig={gig} />
                })}
              </div>
            </div>
            <div className="row">
              <div className="col">
                <header className="section-header">
                  Education
                </header>
                <div className="row stack-sm">
                  <div className="col">
                    <p>
                      <span className="highlight">Bachelor of Fine Arts: Graphic Design</span><br/>
                      <i>New York Institute of Technology</i>
                    </p>
                  </div>
                  <div className="col text-right text-left-sm dates">
                    <p>May 2014</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollableAnchor>
    )
  }
}

export default Resume;